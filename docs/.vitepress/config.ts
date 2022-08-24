import { defineConfig } from 'vitepress';
import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
    ['link', { rel: 'icon', href: '/' }],
    ['meta', { name: 'author', content: 'sanoon' }],
    ['meta', { name: 'keywords', content: '鱼野的数字花园, 个人知识管理，学习笔记，读书笔记，生活随笔, sanoon' }],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '鱼野的数字花园' }],
    ['meta', { property: 'og:description', content: '鱼野的数字花园, 个人知识管理，学习笔记，读书笔记，生活随笔。' }],
    ['meta', { property: 'og:site', content: 'https://wiki.sanoon.me' }],
    ['meta', { property: 'og:site_name', content: '鱼野的数字花园' }],
    ['meta', { property: 'og:image', content: '鱼野的数字花园' }]
]

export default defineConfig({
    lang: 'zh_CN',
    title: '鱼野的数字花园',
    description: '鱼野的数字花园.',

    head,
    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    markdown: {
        config: (md) => {
            const width = '100%';
            md.use(require('markdown-it-block-embed'), {
                youtube: {width: '100%', height: '387px'}
            });

            md.use(require('markdown-it-container'), 'netease', {
                validate: function(params) {
                    return params.trim().match(/^netease\s+(.*)$/);
                },

                render: function (tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^netease\s+(.*)$/);

                    if (tokens[idx].nesting === 1) {
                        return `<div id="music"><iframe style="border: 0; margin-left: -10px; width: 298px; height: 52px" src="//music.163.com/outchain/player?type=2&id=` + md.utils.escapeHtml(m[1]) + `&auto=1&height=32"></iframe></div>`;
                    } else {
                        return "";
                    }
                }
            });

            md.use(require('markdown-it-container'), 'bilibili', {
                validate: function(params) {
                    return params.trim().match(/^bilibili\s+(.*)$/);
                },

                render: function (tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^bilibili\s+(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        const videoId = md.utils.escapeHtml(m[1]);
                        return `<div id="video"><iframe style="width: 100%; height: 387px" type="text/html" src="//player.bilibili.com/player.html?bvid=` + videoId +`"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy"></iframe></div>`;
                    } else {
                        return "";
                    }
                }
            });
        },
    },

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/go/': sidebarGo(),
            '/python/': sidebarPython(),
            '/whisper/': sidebarWhisper(),
            '/photo/': sidebarPhoto(),
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
            copyright: 'Copyright © 2022-present 鱼野'
        },

        algolia: {
            appId: '9OQ78ZRX8Q',
            apiKey: 'ffc69de67dfcb8e5f31bc5bdf142a3ed',
            indexName: '鱼野'
        },

        carbonAds: {
            code: '',
            placement: '鱼野'
        },
    }
})

function nav() {
    return [
        { text: '鱼踪野趣', link: '/whisper/秦岭东坪沟草甸', activeMatch: '/whisper/' },
        {
            text: '学习笔记',
            items: [
                { text: 'Go 学习笔记', link: '/go/index' },
                { text: 'Python 学习笔记', link: '/python/index' },
                { text: 'Java 学习笔记', link: '/java/index' }
            ]
        },
        { text: '读书笔记', link: '/reading/index', activeMatch: '/python/' },
        { text: '图说生活', link: '/photo/index', activeMatch: '/photo/' }
    ]
}

function sidebarGo() {
    return [
        {
            text: '基础知识',
            collapsible: true,
            items: [
                { text: '变量', link: '/go/基础知识/变量' },
                { text: '常量', link: '/go/基础知识/常量' },
                { text: '函数', link: '/go/基础知识/函数' },
                { text: '包和文件', link: '/go/基础知识/包和文件' },

                { text: '基础数据类型', link: '/go/基础知识/基础数据类型' },
                { text: '字符串', link: '/go/基础知识/字符串' },
                { text: '指针', link: '/go/基础知识/指针' },
                { text: '数组', link: '/go/基础知识/数组' },
                { text: '切片', link: '/go/基础知识/切片' },
                { text: 'Map', link: '/go/基础知识/Map' },
                { text: 'defer', link: '/go/基础知识/defer' },
                { text: '条件语句', link: '/go/基础知识/条件语句' },
                { text: '选择语句', link: '/go/基础知识/选择语句' },
                { text: '循环语句', link: '/go/基础知识/循环语句' },
                { text: '跳转语句', link: '/go/基础知识/跳转语句' },
            ]
        },
        {
            text: '进阶部分',
            collapsible: true,
            items: [
                { text: '结构体', link: '/go/进阶部分/结构体' },
                { text: '接口', link: '/go/进阶部分/接口' },
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

function sidebarPhoto() {
    return [
        {
            text: 'Photo',
            collapsible: true,
            items: [
                { text: '天桥湖', link: '/photo/index' },
            ]
        }
    ]
}

function sidebarWhisper() {
    return [
        {
            text: '秦岭足迹',
            collapsible: true,
            items: [
                { text: '秦岭东坪沟草甸', link: '/whisper/秦岭东坪沟草甸' },
            ]
        }
    ]
}
