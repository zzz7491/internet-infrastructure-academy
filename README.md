# Internet Infrastructure Academy

> 人人都能学会的互联网基础设施

## 项目简介

《人人都能学会的互联网基础设施》是一套完整的在线技术教程，旨在帮助任何人——无论技术背景如何——从零开始学习互联网基础设施的核心知识。

本课程以 [Cloudflare](https://www.cloudflare.com/) 为主要实践平台，涵盖域名、DNS、CDN、SSL/TLS、网络安全、VPS、NAS 等主题，共 18 章系统化教材。

## 技术栈

- **框架**：[VitePress](https://vitepress.dev/) (Vue 3 + Vite)
- **内容**：Markdown
- **部署**：Cloudflare Pages

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态站点
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
internet-infrastructure-academy/
├── docs/
│   ├── .vitepress/          # VitePress 配置和主题
│   │   ├── config.js        # 站点配置
│   │   └── theme/           # 主题扩展
│   ├── index.md             # 首页
│   ├── chapters/            # 课程章节 (0-17)
│   ├── experiments/         # 实验任务
│   ├── projects/            # 综合项目
│   ├── resources/           # 学习资源
│   └── public/              # 静态资源
│       └── images/          # 图片资源
└── package.json
```

## 课程章节

| 章节 | 标题 | 阶段 |
|------|------|------|
| 第0章 | 学习路线与课程介绍 | 入门 |
| 第1章 | 认识Cloudflare | 入门 |
| 第2章 | 互联网基础知识 | 入门 |
| 第3章 | 注册Cloudflare并接入域名 | 入门 |
| 第4章 | Cloudflare DNS教程 | 核心 |
| 第5章 | Cloudflare SSL/TLS教程 | 核心 |
| 第6章 | Cloudflare CDN教程 | 核心 |
| 第7章 | 网站安全防护 | 核心 |
| 第8章 | Cloudflare Zero Trust | 进阶 |
| 第9章 | Workers与Pages | 进阶 |
| 第10章 | R2、D1与个人云 | 进阶 |
| 第11章 | 综合实战 | 实战 |
| 第12章 | 运维维护 | 实战 |
| 第13章 | Cloudflare + VPS | 实战 |
| 第14章 | Cloudflare + NAS | 实战 |
| 第15章 | 企业级安全实践 | 实战 |
| 第16章 | API自动化运维 | 实战 |
| 第17章 | 综合项目实战 | 实战 |

## 添加新章节

1. 在 `docs/chapters/` 下创建新目录，如 `chapter18/`
2. 创建 `index.md` 并按照章节模板编写内容
3. 在 `docs/.vitepress/config.js` 的 `chaptersSidebar` 数组中添加新条目
4. 如需在课程目录页显示，更新 `docs/chapters/index.md`

## 部署到 Cloudflare Pages

1. 将项目推送到 GitHub 仓库
2. 在 Cloudflare Pages 中连接仓库
3. 构建设置：
   - 框架预设：VitePress
   - 构建命令：`npm run docs:build`
   - 输出目录：`docs/.vitepress/dist`

## License

MIT
