import { test, expect } from '@playwright/test';

const BASE_PATH = '/xroidverse-docs';
const THEMES: Array<'light' | 'dark'> = ['light', 'dark'];
const MAX_ROUTES = 24;

const normalizeRoute = (pathname: string) => {
  if (!pathname.startsWith(BASE_PATH)) {
    return null;
  }
  const stripped = pathname.slice(BASE_PATH.length) || '/';
  if (!stripped.startsWith('/')) {
    return `/${stripped}`;
  }
  if (stripped.length > 1 && stripped.endsWith('/')) {
    return stripped.slice(0, -1);
  }
  return stripped;
};

test('all discovered routes satisfy contrast and boundary visibility', async ({ browser }) => {
  const issues: string[] = [];

  for (const theme of THEMES) {
    const context = await browser.newContext({
      baseURL: `http://127.0.0.1:3100${BASE_PATH}`,
      colorScheme: theme,
    });

    await context.addInitScript((value) => {
      try {
        window.localStorage.setItem('theme', value);
      } catch {
        // Ignore localStorage failures in restricted environments.
      }
    }, theme);

    const page = await context.newPage();
    const queue: string[] = ['/'];
    const visited = new Set<string>();

    while (queue.length > 0 && visited.size < MAX_ROUTES) {
      const route = queue.shift();
      if (!route || visited.has(route)) {
        continue;
      }
      visited.add(route);

      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(200);

      const pageIssues = await page.evaluate(() => {
        const toLinear = (value: number) => {
          const normalized = value / 255;
          return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
        };

        const parseColor = (text: string) => {
          const match = text.match(/rgba?\(([^)]+)\)/);
          if (!match) {
            return null;
          }
          const parts = match[1].split(',').map((part) => Number(part.trim()));
          if (parts.length < 3 || parts.some(Number.isNaN)) {
            return null;
          }
          return {
            red: parts[0],
            green: parts[1],
            blue: parts[2],
            alpha: parts.length >= 4 && !Number.isNaN(parts[3]) ? parts[3] : 1,
          };
        };

        const blend = (
          fg: { red: number; green: number; blue: number; alpha: number },
          bg: { red: number; green: number; blue: number; alpha: number }
        ) => {
          const alpha = fg.alpha + bg.alpha * (1 - fg.alpha);
          if (alpha <= 0) {
            return { red: 0, green: 0, blue: 0, alpha: 0 };
          }
          return {
            red: (fg.red * fg.alpha + bg.red * bg.alpha * (1 - fg.alpha)) / alpha,
            green: (fg.green * fg.alpha + bg.green * bg.alpha * (1 - fg.alpha)) / alpha,
            blue: (fg.blue * fg.alpha + bg.blue * bg.alpha * (1 - fg.alpha)) / alpha,
            alpha,
          };
        };

        const luminance = (color: { red: number; green: number; blue: number }) =>
          0.2126 * toLinear(color.red) + 0.7152 * toLinear(color.green) + 0.0722 * toLinear(color.blue);

        const contrast = (
          first: { red: number; green: number; blue: number },
          second: { red: number; green: number; blue: number }
        ) => {
          const l1 = luminance(first);
          const l2 = luminance(second);
          const [bright, dark] = l1 >= l2 ? [l1, l2] : [l2, l1];
          return (bright + 0.05) / (dark + 0.05);
        };

        const rootBackground = (() => {
          const root = parseColor(window.getComputedStyle(document.documentElement).backgroundColor);
          if (root && root.alpha > 0) {
            return root;
          }
          const body = parseColor(window.getComputedStyle(document.body).backgroundColor);
          if (body && body.alpha > 0) {
            return body;
          }
          return { red: 255, green: 255, blue: 255, alpha: 1 };
        })();

        const resolveBackground = (node: HTMLElement) => {
          let current: HTMLElement | null = node;
          let out = rootBackground;
          const chain: HTMLElement[] = [];
          while (current) {
            chain.unshift(current);
            current = current.parentElement;
          }
          for (const element of chain) {
            const bg = parseColor(window.getComputedStyle(element).backgroundColor);
            if (bg) {
              out = blend(bg, out);
            }
          }
          return out;
        };

        const ownText = (element: HTMLElement) => {
          const directText = Array.from(element.childNodes)
            .filter((node) => node.nodeType === Node.TEXT_NODE)
            .map((node) => node.textContent ?? '')
            .join(' ')
            .trim();
          if (directText.length > 0) {
            return directText;
          }
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            return `${element.value}${element.placeholder}`.trim();
          }
          return '';
        };

        const textIssues: string[] = [];
        const boundaryIssues: string[] = [];
        const elements = Array.from(document.querySelectorAll<HTMLElement>('body *'));

        for (const element of elements) {
          const style = window.getComputedStyle(element);
          if (
            style.display === 'none' ||
            style.visibility !== 'visible' ||
            Number.parseFloat(style.opacity || '1') < 0.05
          ) {
            continue;
          }

          const rect = element.getBoundingClientRect();
          if (rect.width < 2 || rect.height < 2) {
            continue;
          }

          const text = ownText(element);
          if (text.length > 0) {
            const fg = parseColor(style.color);
            if (fg) {
              const bg = resolveBackground(element);
              const fgBlended = blend(fg, bg);
              const ratio = contrast(fgBlended, bg);
              const fontSize = Number.parseFloat(style.fontSize || '16');
              const fontWeight = Number.parseInt(style.fontWeight || '400', 10);
              const largeText = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
              const minRatio = largeText ? 3 : 4.5;
              if (ratio < minRatio) {
                textIssues.push(`text ratio=${ratio.toFixed(2)} class=${String(element.className || '')}`);
              }
            }
          }

          const borderWidth = Math.max(
            Number.parseFloat(style.borderTopWidth || '0'),
            Number.parseFloat(style.borderRightWidth || '0'),
            Number.parseFloat(style.borderBottomWidth || '0'),
            Number.parseFloat(style.borderLeftWidth || '0')
          );
          if (borderWidth > 0 && rect.width * rect.height >= 300) {
            const borderColor = parseColor(style.borderTopColor);
            if (borderColor) {
              const parentBg = resolveBackground(element.parentElement ?? element);
              const blended = blend(borderColor, parentBg);
              const ratio = contrast(blended, parentBg);
              if (ratio < 3) {
                boundaryIssues.push(`boundary ratio=${ratio.toFixed(2)} class=${String(element.className || '')}`);
              }
            }
          }
        }

        return [...textIssues.slice(0, 30), ...boundaryIssues.slice(0, 30)];
      });

      for (const issue of pageIssues) {
        issues.push(`${theme} ${route}: ${issue}`);
      }

      const discovered = await page.evaluate((basePath) => {
        const skipExt = /\.(png|jpe?g|gif|svg|ico|json|txt|xml|pdf|zip)$/i;
        const next = new Set<string>();
        for (const anchor of Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))) {
          const href = anchor.getAttribute('href');
          if (!href) {
            continue;
          }
          if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            continue;
          }
          let url: URL;
          try {
            url = new URL(href, window.location.origin);
          } catch {
            continue;
          }
          if (url.origin !== window.location.origin || skipExt.test(url.pathname)) {
            continue;
          }
          if (!url.pathname.startsWith(basePath)) {
            continue;
          }
          const stripped = url.pathname.slice(basePath.length) || '/';
          if (!stripped.startsWith('/')) {
            next.add(`/${stripped}`);
            continue;
          }
          next.add(stripped.length > 1 && stripped.endsWith('/') ? stripped.slice(0, -1) : stripped);
        }
        return [...next];
      }, BASE_PATH);

      for (const discoveredRoute of discovered) {
        const normalized = normalizeRoute(`${BASE_PATH}${discoveredRoute}`);
        if (normalized && !visited.has(normalized) && !queue.includes(normalized)) {
          queue.push(normalized);
        }
      }
    }

    await context.close();
  }

  expect(issues.join('\n')).toBe('');
});
