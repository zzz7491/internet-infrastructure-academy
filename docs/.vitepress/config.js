import { defineConfig } from 'vitepress'

// 课程侧边栏配置 —— 分组折叠式
// 注意：sidebar 标题必须与各章节 H1 完全一致（章节编号两位数字）
const chaptersSidebar = [
  {
    text: '🚀 认识互联网',
    collapsed: false,
    items: [
      { text: '第00章 学习路线与课程介绍', link: '/chapters/chapter00/' },
      { text: '第01章 互联网基础设施全景认识', link: '/chapters/chapter01/' },
      { text: '第02章 家庭网络基础', link: '/chapters/chapter02/' },
      { text: '第03章 域名与DNS', link: '/chapters/chapter03/' }
    ]
  },
  {
    text: '⚡ 互联网基础设施核心',
    collapsed: false,
    items: [
      { text: '第04章 Cloudflare DNS 实战', link: '/chapters/chapter04/' },
      { text: '第05章 服务器与云计算基础', link: '/chapters/chapter05/' },
      { text: '第06章 TCP/IP 与互联网通信原理', link: '/chapters/chapter06/' },
      { text: '第07章 网络安全基础与加密原理', link: '/chapters/chapter07/' }
    ]
  },
  {
    text: '☁️ 服务器与云计算',
    collapsed: false,
    items: [
      { text: '第08章 VPN、代理与互联网访问原理', link: '/chapters/chapter08/' },
      { text: '第09章 Cloudflare 深入理解：CDN、安全与全球网络入口', link: '/chapters/chapter09/' },
      { text: '第10章 VPS、Linux 与现代互联网服务架构', link: '/chapters/chapter10/' }
    ]
  },
  {
    text: '🛠️ 个人数字基础设施',
    collapsed: false,
    items: [
      { text: '第11章 家庭服务器、NAS 与个人数字基础设施', link: '/chapters/chapter11/' },
      { text: '第12章 IPv6、公网访问与现代网络连接', link: '/chapters/chapter12/' },
      { text: '第13章 网络安全基础与个人安全体系', link: '/chapters/chapter13/' },
      { text: '第14章 AI时代的个人数字基础设施', link: '/chapters/chapter14/' }
    ]
  },
  {
    text: '🏆 高级应用',
    collapsed: false,
    items: [
      { text: '第15章 综合实践：构建个人互联网基础设施', link: '/chapters/chapter15/' },
      { text: '第16章 个人数字基础设施实战部署', link: '/chapters/chapter16/' },
      { text: '第17章 未来互联网与个人数字主权', link: '/chapters/chapter17/' }
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
