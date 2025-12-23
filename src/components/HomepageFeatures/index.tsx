import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🎭 MetaHuman統合',
    description: (
      <>
        MetaHuman Creatorで作成したリアルなキャラクターを
        簡単にプロジェクトに統合できます。
      </>
    ),
  },
  {
    title: '🎨 表情・モーション制御',
    description: (
      <>
        豊富な表情とアニメーションライブラリで、
        キャラクターに生命を吹き込むことができます。
      </>
    ),
  },
  {
    title: '🤖 AI駆動システム',
    description: (
      <>
        最新のAI技術を活用した自然な会話と
        インタラクションシステムを提供します。
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
