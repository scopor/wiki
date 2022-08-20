import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: '燕不移',
    description: '燕不移的数字花园.',

    base: '/wiki/',
    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/go/': sidebarGo(),
            '/python/': sidebarPython(),
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/scopor' }
        ],

        editLink: {
            pattern: 'https://github.com/scopor/wiki/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present 燕不移'
        },

        algolia: {
            appId: '',
            apiKey: '',
            indexName: '燕不移'
        },

        carbonAds: {
            code: '',
            placement: '燕不移'
        }
    }
})

function nav() {
    return [
        {
            text: '学习笔记',
            items: [
                { text: 'Go 学习笔记', link: '/go/index' },
                { text: 'Python 学习笔记', link: '/python/index' },
                { text: 'Java 学习笔记', link: '/java/index' }
            ]
        },
        { text: '读书笔记', link: '/python/index', activeMatch: '/python/' },
        { text: '碎碎念', link: '/python/index', activeMatch: '/python/' },
        { text: '图说生活', link: '/python/index', activeMatch: '/python/' }
    ]
}

function sidebarGo() {
    return [
        {
            text: 'Go',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/go/index' },
            ]
        },
        {
            text: 'go2',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/go/index' },
            ]
        }
    ]
}

function sidebarPython() {
    return [
        {
            text: 'Python',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/python/index' },
            ]
        }
    ]
}