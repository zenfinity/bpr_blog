import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "See Newly--A Blog",
  description: "Things shared with the world by Ian Mac Moore to inspire discovery of connections",
  head: [['link', { rel: 'icon', href: '/bluepredvesica_v5.4_icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    logo: "/bluepredvesica_v5.4_icon.png",
    siteTitle: false,

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Hello World', link: '/posts/hello-world' },
          { text: 'US Indigenous Wars Viz Revisited', link: '/posts/us-indigenous-wars-revisited' },
          { text: 'The Data Detective brief reivew', link: '/posts/data-detectives' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zenfinity/bpr_blog' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/imacmoore/' }
    ]
  }
})
