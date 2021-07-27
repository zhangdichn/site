const navbar = require('./docusaurus.navbar.config');
const footer = require('./docusaurus.footer.config');

module.exports = {
    title: 'BeyondStorage',
    tagline: 'Beyond Storage ',
    url: 'https://beyondstorage.io',
    baseUrl: '/',
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
        colorMode: {
            disableSwitch: true,
        },
        navbar,
        footer,
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./docs/general/sidebars.js'),
                    path: 'docs/general',
                    routeBasePath: 'docs/general',
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
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
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
                sidebarPath: require.resolve('./community/sidebars.js'),
                path: 'community',
                routeBasePath: 'community',
                editUrl: 'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'go-storage',
                sidebarPath: require.resolve('./docs/go-storage/sidebars.js'),
                path: 'docs/go-storage',
                routeBasePath: 'docs/go-storage',
                editUrl: 'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'beyond-tp',
                sidebarPath: require.resolve('./docs/beyond-tp/sidebars.js'),
                path: 'docs/beyond-tp',
                routeBasePath: 'docs/beyond-tp',
                editUrl: 'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'beyond-fs',
                sidebarPath: require.resolve('./docs/beyond-fs/sidebars.js'),
                path: 'docs/beyond-fs',
                routeBasePath: 'docs/beyond-fs',
                editUrl: 'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'beyond-ftp',
                sidebarPath: require.resolve('./docs/beyond-ftp/sidebars.js'),
                path: 'docs/beyond-ftp',
                routeBasePath: 'docs/beyond-ftp',
                editUrl: 'https://github.com/beyondstorage/site/edit/master/',
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ]
    ]
};
