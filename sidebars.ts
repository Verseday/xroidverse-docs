import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // XroidVerse開発者ドキュメントのサイドバー
  developerSidebar: [
    'intro',
    {
      type: 'category',
      label: '🏗️ アーキテクチャ',
      collapsed: false,
      items: [
        'architecture',
      ],
    },
    {
      type: 'category',
      label: '📚 チュートリアル',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '👤 キャラクター設定',
          collapsed: false,
          items: [
            'tutorials/character-setup/character-addition-guide',
          ],
        },
        {
          type: 'category',
          label: '😊 表情設定',
          collapsed: false,
          items: [
            'tutorials/expression-setup/facial-expression-guide',
          ],
        },
        {
          type: 'category',
          label: '🎭 モーション設定',
          collapsed: false,
          items: [
            'tutorials/motion-setup/animation-guide',
          ],
        },
        {
          type: 'category',
          label: '🖼️ 画像ディスプレイ設定',
          collapsed: false,
          items: [
            'tutorials/image-display-setup/image-display-setup-guide',
          ],
        },
        {
          type: 'category',
          label: '📺 動画ディスプレイ設定',
          collapsed: false,
          items: [
            'tutorials/video-display-setup/video-display-setup-guide',
          ],
        },
        {
          type: 'category',
          label: '📷 カメラ設定',
          collapsed: false,
          items: [
            'tutorials/camera-setup/camera-setup-guide',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
