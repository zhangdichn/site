module.exports = {
    title: 'beyondstorage',
    logo: {
        alt: 'Beyond Storage',
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
        {
            to: 'docs',
            label: 'Documentation',
            position: 'left',
            items: [
                {label: 'General', to: '/docs/general/index'},
                {label: 'go-storage', to: '/docs/go-storage/index'},
                {label: 'BeyondCTL', to: '/docs/beyond-ctl/index'},
                {label: 'BeyondTP', to: '/docs/beyond-tp/index'},
                {label: 'BeyondFS', to: '/docs/beyond-fs/index'},
                {label: 'BeyondFTP', to: '/docs/beyond-ftp/index'},
            ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar__item--language',
            dropdownItemsAfter: [
                {
                    to: 'https://crowdin.beyondstorage.io/site',
                    label: 'Help Us Translate',
                },
            ],
        },
        {
            href: 'https://matrix.to/#/#beyondstorage@campfire:matrix.org',
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
