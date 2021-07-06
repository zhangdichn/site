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
                {label: 'go-storage', href: 'https://github.com/beyondstorage/go-storage'},
                {label: 'BeyondTP', href: 'https://github.com/beyondstorage/beyond-tp'},
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
            href: 'https://matrix.to/#/#campfire:aos.dev',
            position: 'right',
            className: 'navbar__link--matrix',
            'aria-label': 'Matrix',
        },
        {
            href: 'https://twitter.com/beyond_storage',
            position: 'right',
            className: 'navbar__link--twitter',
            'aria-label': 'Twitter',
        },
        {
            href: 'https://github.com/beyondstorage',
            position: 'right',
            className: 'navbar__link--github',
            'aria-label': 'GitHub repository',
        },
    ],
};
