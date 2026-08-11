# 第14章 Cloudflare + NAS

## 本章介绍

NAS（网络附加存储）是构建家庭私有云的核心设备。本章将学习如何将 NAS 与 Cloudflare 结合，实现安全、便捷的远程访问和数据管理。

## 学习目标

- 了解 NAS 的基本概念和选型
- 掌握 NAS + Cloudflare Tunnel 远程访问方案
- 学会搭建家庭媒体中心
- 实现家庭数据安全备份

## 核心知识

### NAS 选型

- **成品 NAS**：群晖、威联通等，上手简单
- **DIY NAS**：旧电脑 + TrueNAS/Unraid，性价比高
- **入门推荐**：群晖 DS220+ / DS224+

### 远程访问方案

使用 Cloudflare Tunnel 是 NAS 远程访问的最佳方案：
- 无需公网 IP
- 无需端口转发
- SSL 加密
- Access 权限控制

### 家庭媒体中心

- Plex / Jellyfin 媒体服务器
- PhotoPrism 照片管理
- Home Assistant 智能家居

## 架构图

> 此处将放置 NAS + Cloudflare 家庭网络架构图。

## 实战操作

### NAS 上安装 cloudflared

1. 通过 Docker 或包管理器安装 cloudflared
2. 创建 Tunnel 并认证
3. 配置本地服务路由
4. 设置 Access 访问策略

## 实验任务

- [ ] 选型并购买一台 NAS（或使用旧电脑 DIY）
- [ ] 安装 cloudflared 并创建 Tunnel
- [ ] 配置 Jellyfin 媒体服务器
- [ ] 通过 Cloudflare Access 实现安全远程访问

## 常见问题

**Q: 必须买 NAS 吗？**
A: 不是必须的。可以用旧电脑装 TrueNAS 或直接用 VPS 替代。NAS 更适合长期使用场景。

**Q: Tunnel 速度够用吗？**
A: 观看 4K 视频可能需要直接连接，常规文件访问和 1080p 视频完全够用。

## 本章总结

NAS + Cloudflare 让你拥有了真正的家庭私有云。下一章将学习企业级安全实践。
