import { defineConfig, HeadConfig } from 'vitepress';
import {transformHtml, buildEnd} from "./config/sitemap";
import customAttrs  from 'markdown-it-custom-attrs';

export const head: HeadConfig[] = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'sanoon' }],
    ['meta', { name: 'keywords', content: '鱼野, Go, Java, Python' }],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '鱼野的数字花园' }],
    ['meta', { property: 'og:description', content: '鱼野的数字花园, 个人知识管理，Go, Java, Python学习笔记，读书笔记，生活随笔。' }],
    ['meta', { property: 'og:site', content: 'https://wiki.sanoon.me' }],
    ['meta', { property: 'og:site_name', content: '鱼野的数字花园' }],
    ['meta', { property: 'og:image', content: '鱼野的数字花园' }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ['script', {src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6765261154701378", async: "true", crossOrigin: "anonymous"}],
    ['script', {src: "https://www.googletagmanager.com/gtag/js?id=G-91MY43NGWN", async: "true", crossOrigin: "anonymous"}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-91MY43NGWN');`]
];

export default defineConfig({
    lang: 'zh',
    title: '鱼野的数字花园',
    description: '鱼野的数字花园.',

    head,
    transformHtml,
    buildEnd,
    ignoreDeadLinks: true,
    lastUpdated: false,
    cleanUrls: 'without-subfolders',

    markdown: {
        config: (md) => {
            const width = '100%';
            md.use(require('markdown-it-block-embed'), {
                youtube: {width: '100%', height: '387px'}
            });

            md.use(customAttrs, 'image', {
                'data-fancybox': "gallery"
            });
            
            md.use(require('@nekohack/markdown-it-link-preview'));

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
        logo: {src: '/favicon.ico', alt: 'logo'},
        outlineTitle: '目录',
        lastUpdatedText: '最后更新时间',
        outline: [2, 4],
        nav: nav(),

        sidebar: {
            '/go/': sidebarGo(),
            '/python/': sidebarPython(),
            '/whisper/': sidebarWhisper(),
            '/photo/': sidebarPhoto(),
            '/java': sidebarJava(),
            '/vientiane': sidebarVientiane(),
            '/reading': sidebarReading(),
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/scopor' }
        ],

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },

        editLink: {
            pattern: 'https://github.com/scopor/wiki/edit/main/docs/:path',
            text: '完善此页'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present 鱼野'
        },

        algolia: {
            appId: 'IWDH4QV6TT',
            // apiKey: '1055507df36613992a79998675cee0cf',
            apiKey: "68162896965f1d5662e3220275d06726",
            indexName: 'sanoon'
        },
    }
})

function nav() {
    return [
        { text: '捉虫万象', link: '/vientiane/Linux快捷键', activeMatch: '/vientiane/' },
        {
            text: '笔记系列',
            items: [
                { text: 'Go 学习笔记', link: '/go/index' },
                { text: 'Python 学习笔记', link: '/python/index' },
                { text: 'Java 学习笔记', link: '/java/观察者模式' }
            ]
        },
        { text: '读书笔记', link: '/reading/重构', activeMatch: '/reading/' },
        { text: '鱼踪野趣', link: '/whisper/秦岭东坪沟草甸', activeMatch: '/whisper/' }
    ]
}

function sidebarVientiane() {
    return [
        {
            text: 'Linux',
            collapsible: true,
            items: [
                { text: 'Linux 快捷键', link: '/vientiane/Linux快捷键' },
                { text: 'Shell 脚本异常退出命令', link: '/vientiane/Shell脚本异常退出命令'},
                { text: 'Linux sed 命令', link: '/vientiane/Linux sed' },
            ]
        },
        {
            text: 'Java',
            collapsible: true,
            items: [
                { text: 'Jar 本地存在 Maven 编译失败', link: '/vientiane/jar-exist' },
            ]
        },
        {
            text: 'Git',
            collapsible: true,
            items: [
                { text: 'Git 常用命令', link: '/vientiane/Git常用命令' },
            ]
        }
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
                { text: '协程', link: '/go/进阶部分/协程' },
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

function sidebarJava() {
    return [
        {
            text: '设计模式',
            collapsible: true,
            items: [
                { text: '观察者模式', link: '/java/观察者模式' },
            ]
        }
    ]
}

function sidebarReading() {
    return [
        {
            text: '技术书籍',
            collapsible: true,
            items: [
                { text: '重构：改善既有代码设计', link: '/reading/重构' },
                { text: 'CSS: 引入方式和选择器', link: '/reading/css' },
                { text: 'CSS: 布局', link: '/reading/布局' },
                { text: '代码整洁之道', link: '/reading/代码整洁之道' },
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
                { text: '朱雀森林公园', link: '/photo/index' },
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
        },
        {
            text: '旅行足迹',
            collapsible: true,
            items: [
                { text: '青海之行', link: '/whisper/青海之行' },
            ]
        }
    ]
}
