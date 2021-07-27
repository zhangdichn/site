import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import Community from '@theme/Community';

import styles from './styles.module.css';

const ProjectCard = (props) => {
    const {
        name,
        url,
    } = props;

    return (
        <h2>
            <a href={`${url}`}>{name}</a>
        </h2>
    );
};

function Home() {
    const context = useDocusaurusContext();
    const {title, customFields = {}} = context.siteConfig || {};

    if (!(context.siteConfig.customFields.docs || []).length) {
        return null;
    }
    const projects = context.siteConfig.customFields.docs.map((project) => {
        return <ProjectCard key={project.name} {...project} />;
    });

    return (
        <Layout
            title={title}
            description={customFields.description}
        >
            <h1>Documents (Under Development)</h1>
            {projects}
        </Layout>
    );
}

export default Home;
