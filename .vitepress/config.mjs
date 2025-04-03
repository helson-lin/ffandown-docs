import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFandown docs",
  description: "FFandown usage doc",
  srcDir: './docs',
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en', 
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en' },
          { text: 'Fast Start', link: '/en/start' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'common problem', link: '/en/qa' },
            ]
          }
        ],
      }
      // other locale specific properties...
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/start' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Docker部署', link: '/start.html#docker-安装' },
          { text: 'API 文档', link: '/start.html#api使用' },
          { text: '常见问题', link: '/qa' },
          { text: '插件开发', link: '/plugin' },
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/helson-lin/ffandown' }
    ]
  }
})

