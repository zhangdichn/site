module.exports = {
    title: 'BeyondStorage',
    tagline: 'Beyond Storage ',
    url: 'https://beyondstorage.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'BeyondStorage',
    projectName: 'site',
    i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US', 'zh-CN'],
        localeConfigs: {
            'en-US': {
                label: 'English',
            },
            'zh-CN': {
                label: '简体中文',
            },
        },
    },
    onBrokenLinks: 'warn',
    themeConfig: {
        algolia: {
            apiKey: 'f4ddbe3ff0762522d5a9a6a75fe0c00c',
            indexName: 'beyondstorage',
            contextualSearch: true,
            searchParameters: {},
        },
        gtag: {
            trackingID: 'G-EKQWL4FN09',
        },
        prism: {
            additionalLanguages: ['toml'],
        },
        navbar: {
            title: 'beyondstorage',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {to: 'docs', label: 'Docs', position: 'left'},
                {to: 'community', label: 'Community', position: 'left'},
                {to: 'blog', label: 'Blog', position: 'left'},
                {
                    type: 'localeDropdown',
                    position: 'right',
                    dropdownItemsAfter: [
                        {
                            to: 'https://aos-dev.crowdin.com/site',
                            label: 'Help Us Translate',
                        },
                    ],
                },
                {
                    href: 'https://github.com/beyondstorage',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Beyond Storage. Built with Docusaurus. Powered by <a href="https://vercel.com/?utm_source=beyondstorage&utm_campaign=oss"><img height="14px" src="/img/vercel_logo.svg"></a>`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./docs_sidebars.js'),
                    path: 'docs',
                    routeBasePath: 'docs',
                    editUrl:
                        'https://github.com/beyondstorage/site/edit/master/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    path: 'blog',
                    editUrl:
                        'https://github.com/beyondstorage/site/edit/master/',
                    routeBasePath: 'blog',
                    include: ['*.md', '*.mdx'],
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} BeyondStorage.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                sidebarPath: require.resolve('./community_sidebars.js'),
                path: 'community',
                routeBasePath: 'community',
                editUrl:
                    'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            }
        ]
    ]
};
