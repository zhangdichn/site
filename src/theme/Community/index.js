import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");


const Community = () => {
    const { items = [] } = recentPosts || {};
    const lastItem = items[0];

    return (
        <div className={styles.communities}>
            <div className={styles.communitiesContent}>
                <ul className={styles.communityNews}>
                    {
                        items.slice(0, 3).map((item) => (
                            <li key={item.permalink}>
                                <Link to={item.permalink}>
                                    <h3>{item.title}</h3>
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <Link to="blog">
                            <Translate>Read More</Translate>
                            <img src={useBaseUrl('/img/arrow.svg')} />
                        </Link>
                    </li>
                </ul>
                <div className={styles.communitiesContext}>
                    <div>
                        <h1><Translate>Community News</Translate></h1>
                    </div>
                    {
                        lastItem ? (
                            <div>
                                <Link to={lastItem.permalink}>{lastItem.title}</Link>
                            </div>
                        ) : null
                    }
                    <div>
                        <Link to="blog">
                            <Translate>Read More</Translate>
                            <img src={useBaseUrl('/img/arrow_rotate.svg')} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
