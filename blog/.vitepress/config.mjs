import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "See Newly--A Blog",
  description: "Things shared with the world by Ian Mac Moore to inspire discovery of connections",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blue Plus Red Home', link: 'www.blueplusred.com' },
      { text: 'Blog Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zenfinity/bpr_blog' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/imacmoore/' }
    ]
  }
})
