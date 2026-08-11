# 第3章 注册Cloudflare并接入域名

## 本章介绍

终于到了动手操作的环节！本章将引导你注册 Cloudflare 账号，购买或接入你的第一个域名，完成基础配置。

## 学习目标

- 完成 Cloudflare 账号注册
- 了解域名的购买和接入流程
- 配置 Cloudflare 基础站点
- 理解名称服务器的工作原理

## 核心知识

### 注册 Cloudflare

访问 cloudflare.com，使用邮箱注册免费账号。建议使用一个专门的学习邮箱。

### 域名选择

可以选择：
- 在 Cloudflare Registrar 购买域名
- 在其他注册商购买后接入 Cloudflare
- 使用免费域名（如 Freenom 提供的 .tk 等）

### 名称服务器

接入 Cloudflare 的本质是将域名的名称服务器（Nameserver）改为 Cloudflare 提供的地址。

## 架构图

> 此处将放置域名接入 Cloudflare 的完整流程图。

## 实战操作

### 步骤一：注册 Cloudflare

1. 访问 https://dash.cloudflare.com/sign-up
2. 填写邮箱和密码
3. 验证邮箱
4. 完成注册

### 步骤二：添加站点

1. 登录 Cloudflare 控制台
2. 点击「添加站点」
3. 输入你的域名
4. 选择 Free 套餐

### 步骤三：修改名称服务器

1. Cloudflare 会提供两个名称服务器地址
2. 登录你的域名注册商
3. 将名称服务器改为 Cloudflare 提供的地址
4. 等待 DNS 生效（通常几分钟到 48 小时）

## 实验任务

- [ ] 注册 Cloudflare 账号
- [ ] 准备一个域名（购买或使用已有）
- [ ] 将域名接入 Cloudflare
- [ ] 确认域名状态为「Active」

## 常见问题

**Q: 没有域名怎么办？**
A: 可以在 Cloudflare Registrar 直接购买，价格透明无加价，.com 域名约 $10/年。

**Q: DNS 更改后网站会中断吗？**
A: Cloudflare 会自动扫描并导入现有 DNS 记录，理论上不会中断服务。

## 本章总结

恭喜！你已成功将域名接入 Cloudflare。下一章我们将深入探索 Cloudflare DNS 的强大功能。
