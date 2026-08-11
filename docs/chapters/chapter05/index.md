# 第5章 Cloudflare SSL/TLS教程

## 本章介绍

HTTPS 已经成为互联网的标配。Cloudflare 提供免费、灵活、强大的 SSL/TLS 加密方案。本章将教你如何为网站配置 HTTPS，并理解背后的加密原理。

## 学习目标

- 理解 SSL/TLS 的工作原理
- 掌握 Cloudflare 的四种加密模式
- 学会配置边缘证书
- 了解 Origin CA 证书

## 核心知识

### 加密模式

- **Off**：不加密（不推荐）
- **Flexible**：浏览器到 Cloudflare 加密，Cloudflare 到源站不加密
- **Full**：端到端加密（可使用自签名证书）
- **Full (Strict)**：端到端加密（需要有效证书）

### 证书类型

Cloudflare 自动颁发通用 SSL 证书，也支持上传自定义证书。

## 架构图

> 此处将放置 SSL/TLS 握手流程图和四种加密模式对比图。

## 实战操作

### 配置加密模式

1. 进入域名的 SSL/TLS 设置
2. 选择合适的加密模式
3. 测试 HTTPS 访问
4. 配置自动 HTTPS 重写

## 实验任务

- [ ] 为你的网站启用 Full 加密模式
- [ ] 配置「始终使用 HTTPS」
- [ ] 使用浏览器开发者工具查看证书信息
- [ ] 测试 HSTS 配置

## 常见问题

**Q: 推荐哪种加密模式？**
A: Full (Strict) 是最安全的选择，如果有源站证书的话。

**Q: 为什么看到"Your connection is not private"？**
A: 可能是加密模式配置问题，检查是否开启了正确的模式。

## 本章总结

SSL/TLS 配置完成后，你的网站已经具备了安全的 HTTPS 加密。下一章将学习 CDN 加速。
