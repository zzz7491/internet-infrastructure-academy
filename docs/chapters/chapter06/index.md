# 第6章 Cloudflare CDN教程

## 本章介绍

Cloudflare 拥有全球最大的 CDN 网络之一。本章将学习 CDN 的缓存策略、规则配置、性能优化，让你的网站快如闪电。

## 学习目标

- 理解 CDN 缓存原理
- 掌握缓存规则配置
- 学会使用 Page Rules 和 Cache Rules
- 了解 Argo Smart Routing

## 核心知识

### 缓存机制

Cloudflare 默认缓存静态资源（CSS、JS、图片等），不缓存 HTML。可通过规则自定义缓存行为。

### 缓存级别

- **No Query String**：忽略查询参数
- **Ignore Query String**：忽略所有查询参数
- **Standard**：标准缓存
- **Cache Everything**：缓存所有内容

## 架构图

> 此处将放置 CDN 缓存流程图和全球节点分布图。

## 实战操作

### 配置缓存规则

1. 进入 Caching 设置页面
2. 配置缓存级别
3. 设置浏览器缓存 TTL
4. 创建自定义缓存规则

## 实验任务

- [ ] 使用浏览器开发者工具观察缓存状态（CF-Cache-Status）
- [ ] 配置一条自定义缓存规则
- [ ] 测试清除缓存功能
- [ ] 对比缓存前后的加载速度

## 常见问题

**Q: 如何强制刷新缓存？**
A: 在 Caching > Configuration 中使用 Purge Cache 功能。

**Q: CDN 会影响动态内容吗？**
A: 默认不会。Cloudflare 只缓存静态资源。

## 本章总结

CDN 配置完成后，你的网站全球访问速度将大幅提升。下一章将学习网站安全防护。
