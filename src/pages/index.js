import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig: {customFields = {}, tagline} = {}} = context;
    return (
        <Layout title={tagline} description={customFields.description}>
        </Layout>
    );
}

export default Home;