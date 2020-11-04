module.exports = {
    title: 'AOS',
    tagline: 'The Application Oriented Storage ',
    url: 'https://aos.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'aos-dev',
    projectName: 'site',
    themeConfig: {
        algolia: {
            apiKey: 'f4ddbe3ff0762522d5a9a6a75fe0c00c',
            indexName: 'aos',
            contextualSearch: true,
            searchParameters: {},
        },
        navbar: {
            title: 'aos',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    href: 'https://github.com/aos-dev',
                    label: 'GitHub',
                    position: 'right',
                }
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
                    routeBasePath: '/',
                    editUrl:
                        'https://github.com/aos-dev/site/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
