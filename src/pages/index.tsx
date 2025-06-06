import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const introUrl = `${siteConfig.baseUrl}docs/intro`;
  return <Redirect to={introUrl} />;
}
