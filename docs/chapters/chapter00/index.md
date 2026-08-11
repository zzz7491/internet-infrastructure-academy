---
title: 第0章 学习路线与课程介绍 - 人人都能学会的互联网基础设施
description: 了解《人人都能学会的互联网基础设施》完整课程体系、学习路线图和所需工具环境。从零基础到企业级实践，18章系统化学习路径。
keywords:
  - 互联网基础设施
  - Cloudflare教程
  - 学习路线
  - 课程介绍
  - 在线教材
---

<script setup>
const chapterData = {
  chapterNum: '00',
  title: '学习路线与课程介绍',
  subtitle: '了解完整的课程体系、学习路线图和所需工具环境',
  readingTime: '15分钟',
  difficulty: '基础',
  experiments: '0个',
  tags: ['学习路线', '课程介绍', '环境准备'],

  introQuestions: [
    '这门前端开发者也看得懂的互联网基础设施课程，到底学什么？',
    '我没有计算机专业背景，能跟得上吗？',
    '学完这门课，我能做出什么东西？'
  ],
  introAnswer: '本章将为你梳理完整的课程地图，让你对学习路径一目了然。无论你的起点在哪里，都能找到适合自己的学习节奏。',

  goals: [
    '了解课程整体结构和 18 章的学习路径',
    '明确五个学习阶段的目标和核心内容',
    '掌握高效的学习方法',
    '了解所需工具和软件环境',
    '对完成课程后的能力有清晰预期'
  ],

  archNodes: ['浏览器', '域名', 'Cloudflare', 'VPS', 'NAS', '你的应用'],

  steps: [
    {
      title: '第一步：准备浏览器',
      description: '推荐使用 Chrome 或 Edge 浏览器，确保版本为最新。几乎所有操作都在浏览器中完成。',
      code: ''
    },
    {
      title: '第二步：注册学习邮箱',
      description: '建议注册一个专门用于学习的邮箱账号，方便后续注册各种云服务。',
      code: '推荐：Gmail / Outlook / QQ邮箱'
    },
    {
      title: '第三步：准备笔记工具',
      description: '推荐使用 Notion 或 Obsidian 来记录学习笔记和实验过程。',
      code: ''
    }
  ],

  screenshots: [],

  experiment: {
    title: '实验：配置你的学习环境',
    goal: '完成学习环境的初始化，做好学习准备',
    preparation: '电脑 + 浏览器 + 网络连接',
    steps: [
      '更新浏览器到最新版本',
      '注册一个专用的学习邮箱',
      '安装笔记工具（Notion 或 Obsidian）',
      '浏览课程目录，标记你最感兴趣的章节',
      '在笔记中创建课程学习计划'
    ],
    expectedResult: '学习环境准备完毕，可以开始第1章的学习。'
  },

  faqs: [
    {
      q: '我没有技术背景，能学会吗？',
      a: '完全可以。本课程从最基础的概念讲起，每一步都有详细说明和截图引导。互联网基础设施不是程序员的专利 —— 就像开车不需要懂发动机原理一样，本课程教你的是"驾驶技能"。'
    },
    {
      q: '学完需要多长时间？',
      a: '建议每天投入 1-2 小时，约 8-12 周完成全部 18 章课程。每章分为教材阅读（30分钟）和实验操作（30-60分钟）两部分。'
    },
    {
      q: '需要花钱购买云服务吗？',
      a: '大部分内容使用 Cloudflare 免费套餐即可完成。部分章节（如 VPS、NAS）涉及付费服务，但我们会标注清楚，你可以选择跳过或使用免费替代方案。'
    },
    {
      q: '这门课和网上的零散教程有什么不同？',
      a: '这是一套系统化的教材，不是博文合集。从互联网基础到企业级实践，知识层层递进，每一步都有实验验证。学完之后你拥有的是成体系的能力，而非零散的操作技巧。'
    }
  ],

  summaryItems: [
    '了解了课程的整体结构和五个学习阶段',
    '明确了入门→核心→进阶→实战→企业 的学习路径',
    '掌握了学习方法和工具准备要求',
    '对学完课程后的能力水平有了清晰预期'
  ],

  prevChapter: null,
  nextChapter: { title: '第1章 认识Cloudflare', link: '/chapters/chapter01/' }
}
</script>

<ChapterHeader
  :chapterNum="chapterData.chapterNum"
  :title="chapterData.title"
  :subtitle="chapterData.subtitle"
  :readingTime="chapterData.readingTime"
  :difficulty="chapterData.difficulty"
  :experiments="chapterData.experiments"
  :tags="chapterData.tags"
/>

<ChapterIntroduction
  :questions="chapterData.introQuestions"
  :answer="chapterData.introAnswer"
/>

<LearningGoals :goals="chapterData.goals" />

## 第一节 欢迎来到互联网基础设施的世界

互联网已经成为和水、电一样的基础设施。我们每天都在使用它，但大多数人并不了解它如何运作。

**这门课的目标不是把你培养成网络工程师**，而是让你拥有以下能力：

- **理解互联网如何运作** —— 当你在浏览器输入网址、按下回车，背后发生了什么？
- **掌握 Cloudflare 这个超级平台** —— 它是全球最大的互联网基础设施平台之一，而且有慷慨的免费套餐
- **构建属于自己的数字世界** —— 从个人网站、家庭私有云到企业级安全架构
- **拥有独立解决问题的能力** —— 遇到网络问题时，不再只是"重启路由器"

<TipBox type="info">
**互联网基础设施**是指支撑互联网运行的基础服务和设施，包括域名系统（DNS）、内容分发网络（CDN）、网络安全、服务器、存储等。你可以把它理解为互联网的"水电网"。
</TipBox>

## 第二节 课程结构总览

本课程共 **18 章**（第0章至第17章），按学习难度和知识领域分为五个阶段：

### 🚀 阶段一：入门（第0-3章）

建立对互联网基础设施的整体认知，注册第一个 Cloudflare 账号，理解域名和 DNS 的基本概念。

| 章节 | 内容 | 实验 |
|------|------|------|
| 第0章 | 学习路线与课程介绍 | 环境配置 |
| 第1章 | 认识Cloudflare | 控制台探索 |
| 第2章 | 互联网基础知识 | 网络诊断 |
| 第3章 | 注册并接入域名 | 域名接入 |

### ⚡ 阶段二：Cloudflare 核心（第4-7章）

深入学习 Cloudflare 四大核心能力：DNS、SSL/TLS、CDN、安全防护。

| 章节 | 内容 | 实验 |
|------|------|------|
| 第4章 | DNS 教程 | DNS记录配置 |
| 第5章 | SSL/TLS 教程 | HTTPS配置 |
| 第6章 | CDN 教程 | 缓存规则设置 |
| 第7章 | 网站安全防护 | WAF规则创建 |

### ☁️ 阶段三：云服务与存储（第8-10章）

进入 Cloudflare 高级功能：Zero Trust 零信任网络、Workers 边缘计算、R2/D1 存储。

| 章节 | 内容 | 实验 |
|------|------|------|
| 第8章 | Zero Trust | 零信任网络搭建 |
| 第9章 | Workers与Pages | 边缘函数部署 |
| 第10章 | R2、D1与个人云 | 对象存储配置 |

<TipBox type="tip">
如果你时间有限，前三个阶段（第0-10章）是最核心的内容。学完这些，你就已经具备了互联网基础设施的主力技能。
</TipBox>

### 🛠️ 阶段四：实战进阶（第11-14章）

将所学知识应用到实际场景：综合实战、运维维护、Cloudflare + VPS、Cloudflare + NAS。

### 🏢 阶段五：企业与自动化（第15-17章）

面向企业级需求：企业安全实践、API 自动化运维、综合项目实战。

## 第三节 学习方法建议

<TipBox type="warning">
这是一门**动手实践型**课程。光看教材学不会互联网基础设施 —— 每个实验都必须亲手做一遍。
</TipBox>

### 推荐的学习节奏

1. **先通读教材**（15-30分钟）—— 理解本章要解决什么问题
2. **跟着操作做实验**（30-60分钟）—— 打开 Cloudflare 控制台，跟着步骤操作
3. **记录学习笔记**（10分钟）—— 用自己的话总结核心知识点
4. **完成实验任务**（15-30分钟）—— 验证你真的会了

### 遇到问题怎么办？

1. 先回看本章的「常见问题」部分
2. 使用课程内搜索功能查找相关内容
3. Cloudflare 官方文档是非常好的参考资料

<ArchitectureDiagram
  :nodes="chapterData.archNodes"
  caption="学完课程后你将能够搭建的技术架构：从浏览器到应用的完整链路"
/>

## 环境准备

<StepGuide :steps="chapterData.steps" />

## 实验任务

<ExperimentBox v-bind="chapterData.experiment" />

## 常见问题

<FAQBox :questions="chapterData.faqs" />

## 本章总结

<ChapterSummary :items="chapterData.summaryItems" />

---

<ChapterNavigation
  :prev="chapterData.prevChapter"
  :next="chapterData.nextChapter"
/>
