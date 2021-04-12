module.exports = {
    title: 'AOS',
    tagline: 'The Application Oriented Storage ',
    url: 'https://aos.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'aos-dev',
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
            indexName: 'aos',
            contextualSearch: true,
            searchParameters: {},
        },
        gtag: {
            trackingID: 'G-EKQWL4FN09',
        },
        navbar: {
            title: 'aos',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {to: 'docs', label: 'Docs', position: 'left'},
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
                    href: 'https://github.com/aos-dev',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} aos-dev. Built with Docusaurus. Powered by <a href="https://vercel.com/?utm_source=aos-dev&utm_campaign=oss"><img height="14px" src="/img/vercel_logo.svg"></a>`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/aos-dev/site/edit/master/',
                },
                blog: {
                    path: 'blog',
                    editUrl:
                        'https://github.com/aos-dev/site/edit/master/',
                    routeBasePath: 'blog',
                    include: ['*.md', '*.mdx'],
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} aos-dev.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
