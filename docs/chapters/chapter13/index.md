# 第13章 Cloudflare + VPS

## 本章介绍

VPS（虚拟专用服务器）是个人搭建网络服务的重要工具。本章将学习如何将 Cloudflare 与 VPS 结合，构建安全、高性能的个人服务器方案。

## 学习目标

- 了解主流 VPS 服务商
- 学会 VPS 基础运维
- 掌握 Cloudflare + VPS 组合方案
- 搭建个人 Web 服务

## 核心知识

### VPS 选择

常见选择：Vultr、DigitalOcean、Linode、腾讯云轻量等。入门推荐 $5-6/月的方案。

### 安全最佳实践

- 使用 Cloudflare Tunnel 替代开放端口
- SSH 密钥登录（禁用密码）
- 配置防火墙规则
- 定期更新系统

### 常见服务搭建

- Nginx/Caddy Web 服务器
- Docker 容器化部署
- 个人博客/网站
- 开发环境

## 架构图

> 此处将放置 Cloudflare + VPS 组合架构图。

## 实战操作

### VPS 初始化

```bash
# 更新系统
apt update && apt upgrade -y

# 安装基础工具
apt install curl wget git vim -y

# 安装 cloudflared
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
chmod +x cloudflared
```

## 实验任务

- [ ] 购买一台 VPS（推荐 $5/月入门方案）
- [ ] 完成 VPS 基础安全配置
- [ ] 安装 Docker 或 Nginx
- [ ] 通过 Cloudflare Tunnel 暴露服务

## 常见问题

**Q: 需要买多贵的 VPS？**
A: 学习和个人项目 $5-6/月完全足够，后期可按需升级。

**Q: VPS 需要装宝塔面板吗？**
A: 可选。命令行操作是本课程推荐方式，能学到更多。

## 本章总结

VPS + Cloudflare 的组合为你提供了无限可能。下一章将学习 NAS 家庭私有云。
