import { defineConfig } from 'vitepress'

// 课程侧边栏配置 —— 分组折叠式
const chaptersSidebar = [
  {
    text: '🚀 认识互联网',
    collapsed: false,
    items: [
      { text: '第0章 学习路线与课程介绍', link: '/chapters/chapter00/' },
      { text: '第1章 互联网到底是什么？', link: '/chapters/chapter01/' },
      { text: '第2章 家庭网络基础', link: '/chapters/chapter02/' },
      { text: '第3章 域名与DNS', link: '/chapters/chapter03/' }
    ]
  },
  {
    text: '⚡ 互联网基础设施核心',
    collapsed: false,
    items: [
      { text: '第4章 Cloudflare基础', link: '/chapters/chapter04/' },
      { text: '第5章 SSL/TLS安全通信', link: '/chapters/chapter05/' },
      { text: '第6章 CDN全球加速', link: '/chapters/chapter06/' },
      { text: '第7章 网站安全防护', link: '/chapters/chapter07/' }
    ]
  },
  {
    text: '☁️ 服务器与云计算',
    collapsed: false,
    items: [
      { text: '第8章 VPS服务器入门', link: '/chapters/chapter08/' },
      { text: '第9章 Linux服务器基础', link: '/chapters/chapter09/' },
      { text: '第10章 Docker容器技术', link: '/chapters/chapter10/' }
    ]
  },
  {
    text: '🛠️ 个人数字基础设施',
    collapsed: false,
    items: [
      { text: '第11章 Cloudflare + VPS 实战', link: '/chapters/chapter11/' },
      { text: '第12章 Cloudflare Tunnel', link: '/chapters/chapter12/' },
      { text: '第13章 NAS个人云', link: '/chapters/chapter13/' },
      { text: '第14章 家庭服务器', link: '/chapters/chapter14/' }
    ]
  },
  {
    text: '🏆 高级应用',
    collapsed: false,
    items: [
      { text: '第15章 Zero Trust安全体系', link: '/chapters/chapter15/' },
      { text: '第16章 API自动化运维', link: '/chapters/chapter16/' },
      { text: '第17章 综合项目实战', link: '/chapters/chapter17/' }
    ]
  }
]

export default defineConfig({
  // SEO 配置
  title: '人人都能学会的互联网基础设施 - Internet Infrastructure Academy',
  description: '从域名、DNS、Cloudflare到VPS、NAS、网络安全和自动化运维的完整学习平台。面向普通用户、技术爱好者和小型企业的互联网基础设施学习体系。',
  lang: 'zh-CN',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: '互联网基础设施,Cloudflare教程,DNS,VPS,NAS,网络安全,Zero Trust,个人云,CDN,自动化运维,Terraform,Cloudflare Workers,边缘计算,SSL/TLS,Docker'
      }
    ],
    ['meta', { name: 'author', content: 'Internet Infrastructure Academy' }],
    ['meta', { name: 'theme-color', content: '#f6821f' }],
    ['meta', { property: 'og:title', content: '人人都能学会的互联网基础设施' }],
    ['meta', { property: 'og:description', content: '从域名、DNS、Cloudflare到VPS、NAS、网络安全和自动化运维的完整学习平台。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // Vite 构建配置 —— 禁用 emptyOutDir 避免 WorkBuddy safe-delete 拦截冲突
  vite: {
    build: {
      emptyOutDir: false
    }
  },

  // Markdown 扩展配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  // 主题配置
  themeConfig: {
    // 网站导航
    nav: [
      { text: '首页', link: '/' },
      { text: '课程路线', link: '/chapters/' },
      { text: '章节目录', link: '/chapters/chapter00/' },
      { text: '实验环境', link: '/experiments/' },
      { text: '工具箱', link: '/resources/' },
      { text: '关于课程', link: '/about/' }
    ],

    // 侧边栏
    sidebar: {
      '/chapters/': [
        {
          text: '课程目录',
          items: chaptersSidebar
        }
      ]
    },

    // 社交链接（预留）
    socialLinks: [],

    // 页脚（已由 FooterSection 组件替代，此处关闭）
    footer: false,

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 编辑链接（预留）
    editLink: {
      pattern: '',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    },

    // 大纲标题深度
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 文档页脚
    docFooter: {
      prev: '上一章',
      next: '下一章'
    }
  }
})
