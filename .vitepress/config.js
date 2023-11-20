import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ffandown docs",
  description: "ffandown usage doc",
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
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/start' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '常见问题', link: '/qa' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/helson-lin/ffandown' }
    ]
  }
})

