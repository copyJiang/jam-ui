module.exports = {
    //这里面路径最开始的/是指向.vuepress/public/的
    base: '/',//部署站点的基础路径,默认/
    lang: 'zh-CN',//语言设置
    title: '你好， jam-ui ！',//所有页面标题的后缀，并且在默认主题的导航栏中显示
    description: '这是我的第一个组件库',//站点描述，它会被每个页面的 Frontmatter 中的 description 字段覆盖
    head: [['link', { rel: 'icon', href: '/images/logo.PNG' }]],//站点头部的icon
    theme: 'vdoing',
    chainWebpack(config) {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features');
    },
    plugins: ['demo-container'], // 配置插件
    themeConfig: {
        repo: 'https://github.com/jiang-cj/jam-ui',
        repoLabel: 'Github',
        lastUpdated: false,
        logo: '/images/logo.PNG',
        nav: [
            { text: "首页", link: "/" },
            {
                text: '组件',
                link: '/组件库文档/'
            }
        ],
        sidebar: { // 配置侧边栏部分
            '/组件库文档/': ['/组件库文档/', '/组件库文档/icon.md', '/组件库文档/button.md',]
        }
    }
}
