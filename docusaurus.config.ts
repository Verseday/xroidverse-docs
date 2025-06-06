import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'XroidVerse 開発者ドキュメント',
  tagline: 'Unreal Engine 5 ゲーム開発ガイド',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true, // 新しいCSSミニファイヤーを使用してCSS警告を回避
  },

  // Set the production url of your site here
  url: 'https://verseday.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/xroidverse-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Verseday', // Usually your GitHub org/user name.
  projectName: 'xroidverse-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub Pages will deploy from
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Verseday/xroidverse-docs/tree/main/',
        },
        blog: false,
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'XroidVerse',
      logo: {
        alt: 'XroidVerse Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: '開発者ガイド',
        },
        {
          href: 'https://github.com/Verseday/xroidverse-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'アーキテクチャガイド',
              to: '/docs/architecture',
            },
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/Verseday/xroidverse-docs/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/Verseday/xroidverse-docs/discussions',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Verseday/xroidverse-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Verseday XroidVerse Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp', 'csharp', 'json', 'bash', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
