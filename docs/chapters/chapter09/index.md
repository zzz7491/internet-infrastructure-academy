# 第9章 Workers与Pages

## 本章介绍

Cloudflare Workers 是无服务器边缘计算平台，Pages 是静态网站托管和 Jamstack 平台。本章将学习如何在边缘运行代码，部署现代化网站。

## 学习目标

- 理解边缘计算概念
- 掌握 Workers 基础开发
- 学会使用 Pages 部署网站
- 了解 Wrangler CLI 工具

## 核心知识

### Workers 基础

Workers 在 Cloudflare 全球网络边缘运行 JavaScript/TypeScript 代码，延迟极低。

### Pages 平台

Pages 提供自动构建和部署，支持 Git 集成，非常适合静态网站和 Jamstack 应用。

### Wrangler CLI

Wrangler 是 Cloudflare 的命令行工具，用于开发、测试和部署 Workers/Pages。

## 架构图

> 此处将放置 Workers 架构图和 Pages 部署流程图。

## 实战操作

### 创建第一个 Worker

```javascript
export default {
  async fetch(request) {
    return new Response('Hello from Cloudflare Workers!')
  }
}
```

### 部署 Pages 项目

1. 连接 Git 仓库
2. 配置构建设置
3. 自动部署

## 实验任务

- [ ] 安装 Wrangler CLI
- [ ] 创建并部署一个 Hello World Worker
- [ ] 使用 Pages 部署一个静态网站
- [ ] 配置自定义域名

## 常见问题

**Q: Workers 免费额度是多少？**
A: 每天 10 万次请求，对学习和中小项目完全够用。

**Q: Workers 和 Pages 怎么选？**
A: 静态网站用 Pages，需要后端逻辑用 Workers，两者可以结合使用。

## 本章总结

掌握了 Workers 和 Pages，你可以在边缘运行动态代码和部署静态网站。下一章将学习 R2 和 D1 存储服务。
