import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItVideo from "@vrcd-community/markdown-it-video";

export const head: HeadConfig[] = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'sooloe' }],
    ['meta', { name: 'keywords', content: 'Sooloe, Go, Java, Python' }],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'referer', content: 'no-referrer' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: 'Solo Time' }],
    ['meta', { property: 'og:description', content: 'Solo Time, 个人知识管理，Go, Java, Python，C语言等学习笔记，读书笔记，生活随笔。' }],
    ['meta', { property: 'og:site', content: 'https://sooloe.com' }],
    ['meta', { property: 'og:site_name', content: 'Solo Time' }],
    ['meta', { property: 'og:image', content: 'Solo Time' }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ['script', {src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6765261154701378", async: "true", crossOrigin: "anonymous"}],
    ['script', {src: "https://www.googletagmanager.com/gtag/js?id=G-KPJ96R9DFB", async: "true", crossOrigin: "anonymous"}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-KPJ96R9DFB');`],
];

export default withMermaid({
    lang: 'zh',
    title: 'Solo Time',
    description: 'Solo Time.',

    head,
    buildEnd,
    ignoreDeadLinks: true,
    lastUpdated: false,
    cleanUrls: 'without-subfolders',

    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        },
        config: (md) => {
            // 使用更多的 Markdown-it 插件！
            md.use(withMermaid);
            md.use(markdownItVideo, {
                youtube: {width: '100%', height: '387px'}
            });
        },
    },

    mermaid: {
    },

    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container
    },

    sitemap: {
        hostname: 'https://sooloe.com'
    },

    themeConfig: {
        logo: {src: '/favicon.ico', alt: 'logo'},
        outlineTitle: '目录',
        lastUpdatedText: '最后更新时间',
        outline: [2, 4],
        nav: nav(),

        sidebar: {
            '/ads.txt/': '/ads',
            '/go/': sidebarGo(),
            '/python/': sidebarPython(),
            '/whisper/': sidebarWhisper(),
            '/photo/': sidebarPhoto(),
            '/java/': sidebarJava(),
            '/c/': sidebarC(),
            '/vientiane/': sidebarVientiane(),
            '/reading/': sidebarReading(),
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
            copyright: 'Copyright © 2022-present Scopor'
        },

        algolia: {
            appId: '8E4PMBTOUL',
            apiKey: 'a71375df28fa95ecc7eab8e99233a595',
            indexName: 'sooloe1',
            placeholder: '请输入关键字',
            buttonText: '搜索'
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
                { text: 'Java 学习笔记', link: '/java/观察者模式' },
                { text: 'C 学习笔记', link: '/c/index' },
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
            collapsed: false,
            items: [
                { text: 'Linux 快捷键', link: '/vientiane/Linux快捷键' },
                { text: 'Shell 脚本异常退出命令', link: '/vientiane/Shell脚本异常退出命令'},
                { text: 'Linux sed 命令', link: '/vientiane/Linux sed' },
                { text: 'Linux tcpdump 命令', link: '/vientiane/tcpdump' },
                { text: 'Linux scp 命令', link: '/vientiane/scp' },
                { text: 'Linux crontab 命令', link: '/vientiane/crontab' },
                { text: 'Mac sips 命令', link: '/vientiane/sips' },
                { text: '查询进程启动时间', link: '/vientiane/查询进程启动时间' },
                { text: '查找最新修改的文件', link: '/vientiane/查找最新修改的文件' },
                { text: '删除 MacOS 残留的图标', link: '/vientiane/删除MacOS残留的图标' },
                { text: '信号', link: '/vientiane/信号量' }
            ]
        },
        {
            text: 'Java',
            collapsed: false,
            items: [
                { text: 'Jar 本地存在 Maven 编译失败', link: '/vientiane/jar-exist' },
                { text: 'Spring 事务详解', link: '/vientiane/Spring 事务详解' },
                { text: 'IDEA 加载大文件', link: '/vientiane/IDEA 加载大文件' },
                { text: 'Files.readAllBytes 使用隐患', link: '/vientiane/Java读取大文件' },
            ]
        },
        {
            text: 'Git',
            collapsed: false,
            items: [
                { text: 'Git 常用命令', link: '/vientiane/Git常用命令' },
            ]
        },
        {
            text: 'Web',
            collapsed: false,
            items: [
                { text: 'NVM 管理 NODE', link: '/vientiane/nvm' },
                { text: 'TS2307', link: '/vientiane/TS2307' },
            ]
        },
        {
            text: 'Other',
            collapsed: false,
            items: [
                { text: 'Windows CPU 高', link: '/vientiane/kill%20svchost' },
                { text: 'VitePress 集成 Algolia', link: '/vientiane/VitePress集成Algolia.md' },
            ]
        }
    ]
}

function sidebarGo() {
    return [
        {
            text: '基础知识',
            collapsible: false,
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
            collapsed: false,
            items: [
                { text: '结构体', link: '/go/进阶部分/结构体' },
                { text: '接口', link: '/go/进阶部分/接口' },
                { text: '协程', link: '/go/进阶部分/协程' },
            ]
        }
    ]
}

function sidebarC() {
    return [
        {
            text: '基础知识',
            collapsible: false,
            items: [
                { text: '环境搭建', link: '/c/index' },
                { text: '数据类型', link: '/c/数据类型' },
                { text: '运算符', link: '/c/运算符' },
                { text: '流程控制语句', link: '/c/流程控制语句' },
                { text: '数组', link: '/c/数组' },
                { text: '字符串', link: '/c/字符串' },
            ]
        },
        {
            text: '进阶部分',
            collapsed: false,
            items: [
                { text: '函数', link: '/c/函数' },
                { text: '指针', link: '/c/指针' },
                { text: '结构体', link: '/c/结构体' },
                { text: '联合体', link: '/c/联合体' },
                { text: 'typedef', link: '/c/typedef' },
                { text: '枚举', link: '/c/枚举' },
                { text: '文件', link: '/c/文件' },
                { text: '预处理', link: '/c/预处理' },
                { text: '编译', link: '/c/编译' },
                { text: '调试', link: '/c/调试' },
            ]
        }
    ]
}

function sidebarPython() {
    return [
        {
            text: 'Python',
            collapsed: false,
            items: [
                { text: 'Introduction', link: '/python/index' },
            ]
        }
    ]
}

function sidebarJava() {
    return [
        {
            text: '设计原则',
            collapsed: false,
            items: [
                { text: 'SOLID 原则', link: '/java/SOLID原则' },
            ]
        },
        {
            text: '设计模式',
            collapsed: false,
            items: [
                { text: '单例模式', link: '/java/单例模式' },
                { text: '观察者模式', link: '/java/观察者模式' },
            ]
        }
    ]
}

function sidebarReading() {
    return [
        {
            text: '技术书籍',
            collapsed: false,
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
            collapsed: false,
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
            collapsed: false,
            items: [
                { text: '秦岭东坪沟草甸', link: '/whisper/秦岭东坪沟草甸' },
            ]
        },
        {
            text: '旅行足迹',
            collapsed: false,
            items: [
                { text: '青海之行', link: '/whisper/青海之行' },
            ]
        }
    ]
}
