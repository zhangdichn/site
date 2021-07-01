module.exports = {
    title: 'beyondstorage',
    logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
    },
    items: [
        {
            label: 'Projects',
            position: 'left',
            items: [
                {label: 'Data migration', href: 'https://github.com/beyondstorage/dm'},
            ],
        },
        {
            label: 'Community',
            position: 'left',
            items: [
                {label: 'Activity', to: 'community'},
                {label: 'Forum', href: 'https://forum.beyondstorage.io'},
            ],
        },
        {to: 'docs', label: 'Documentation', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar__item--language',
            dropdownItemsAfter: [
                {
                    to: 'https://aos-dev.crowdin.com/site',
                    label: 'Help Us Translate',
                },
            ],
        },
        {
            to: 'community/#discussions',
            position: 'right',
            className: 'navbar__link--matrix',
            'aria-label': 'Matrix',
        },
        {
            href: 'https://join.slack.com/t/aos-wg/shared_invite/zt-pf4yk96u-7znnJVYpQvY57C3rRrbDPg',
            position: 'right',
            className: 'navbar__link--slack',
            'aria-label': 'GitHub repository',
        },
        {
            href: 'https://github.com/beyondstorage',
            position: 'right',
            className: 'navbar__link--github',
            'aria-label': 'GitHub repository',
        },
    ],
};
