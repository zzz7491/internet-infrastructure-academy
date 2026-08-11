# 第8章 Cloudflare Zero Trust

## 本章介绍

Zero Trust（零信任）是现代安全架构的核心理念 —— "永不信任，始终验证"。Cloudflare Zero Trust 提供了无需 VPN 的安全访问方案。

## 学习目标

- 理解 Zero Trust 核心理念
- 掌握 Cloudflare Access 配置
- 了解 Tunnel 隧道技术
- 学会搭建安全的应用访问

## 核心知识

### 什么是 Zero Trust

传统安全模型假设内网可信，Zero Trust 则默认不信任任何设备和用户，每次访问都需要验证。

### Cloudflare Zero Trust 组件

- **Access**：应用访问控制
- **Tunnel**：安全隧道，无需开放端口
- **Gateway**：DNS/HTTP 过滤
- **Browser Isolation**：浏览器隔离

## 架构图

> 此处将放置 Zero Trust 架构图和 Tunnel 工作原理图。

## 实战操作

### 安装 Cloudflare Tunnel

1. 安装 cloudflared 客户端
2. 创建 Tunnel
3. 配置路由
4. 验证连接

## 实验任务

- [ ] 安装 cloudflared
- [ ] 创建一个 Tunnel 连接到本地服务
- [ ] 配置 Access 策略
- [ ] 测试通过 Tunnel 访问应用

## 常见问题

**Q: Tunnel 和 VPN 有什么区别？**
A: Tunnel 不需要开放端口，更安全；VPN 需要暴露端口，且内网权限过大。

**Q: Zero Trust 免费吗？**
A: Cloudflare Zero Trust 提供免费套餐，支持 50 用户。

## 本章总结

Zero Trust 为你的基础设施提供了现代化的安全访问方案。下一章将学习 Workers 和 Pages 的边缘计算能力。
