import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import Community from '@theme/Community';

import styles from './styles.module.css';


const Introduction = ({
    className, iconUrl, title, description
}) => (
    <div className={className}>
        <img src={useBaseUrl(iconUrl)} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const Project = ({
    logo, url, title, description, articles = []
}) => (
    <div className={styles.project}>
        <img src={useBaseUrl(logo)} />
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
            {
                articles.map((article, index) => (
                    <li key={index}>{article}</li>
                ))
            }
        </ul>
        <a href={url} target="__blank">
            <Translate>Learn More</Translate>
            <img src={useBaseUrl('/img/arrow.svg')} />
        </a>
    </div>
);

function Home() {
    const context = useDocusaurusContext();
    const { title, customFields = {} } = context.siteConfig || {};

    return (
        <Layout
            title={title}
            description={customFields.description}
        >
            <div className={styles.banner}>
                <img src={useBaseUrl('/img/main_banner.svg')} />
                <p><Translate>BeyondStorage Open source community</Translate></p>
                <h1 className={styles.projectName}>
                    <Translate>The BeyondStorage</Translate>
                </h1>
                <h1>
                    <Translate>Focus On Provide Cross-Cloud Data Services</Translate>
                </h1>
            </div>
            <div className={styles.introduction}>
                <h3><Translate>Why BeyondStorage?</Translate></h3>
                <div className={styles.introductionContent}>
                    <Introduction
                        title={<Translate>Open</Translate>}
                        iconUrl="/img/open.svg"
                        className={styles.introductionOpen}
                        description={<Translate>Open source, open discussion, open governance, built and improved by the community</Translate>}
                    />
                    <Introduction
                        title={<Translate>Neutral</Translate>}
                        iconUrl="/img/neutral.svg"
                        className={styles.introductionNeutral}
                        description={<Translate>Completely vendor-neutral, avoiding vendor lock-in</Translate>}
                    />
                    <Introduction
                        title={<Translate>User Centrality</Translate>}
                        iconUrl="/img/user_centrality.svg"
                        className={styles.introductionUserCentrality}
                        description={<Translate>Always user-centered, designing and optimizing services from the user's perspective</Translate>}
                    />
                </div>
            </div>
            <div className={styles.architecture}>
                <img src={useBaseUrl('/img/architecture.svg')} />
            </div>
            <div className={styles.projects}>
                <h1><Translate>Current Working On</Translate></h1>
                <div className={styles.projectsContent}>
                    <Project
                        title="go-storage"
                        logo="/img/go_storage.svg"
                        url="https://github.com/beyondstorage/go-storage"
                        description={<Translate>go storage description</Translate>}
                        articles={[
                            <Translate>go storage article one</Translate>,
                            <Translate>go storage article two</Translate>,
                            <Translate>go storage article three</Translate>,
                        ]}
                    />
                    <Project
                        title="BeyondTP"
                        logo="/img/dm.svg"
                        url="https://github.com/beyondstorage/beyond-tp"
                        description={<Translate>dm description</Translate>}
                        articles={[
                            <Translate>dm article one</Translate>,
                            <Translate>dm article two</Translate>,
                            <Translate>dm article three</Translate>,
                        ]}
                    />
                </div>
            </div>
            <Community />
            <Link className={styles.architecture} to="community/#discussions">
                <img src={useBaseUrl('/img/join_us.svg')} />
            </Link>
        </Layout>
    );
}

export default Home;