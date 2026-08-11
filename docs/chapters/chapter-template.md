---
# 章节 SEO 配置
title: 第X章 章节标题 - 人人都能学会的互联网基础设施
description: 本章节描述，用于 SEO 和搜索结果展示。
keywords:
  - 关键词1
  - 关键词2
  - 关键词3
---

<!--
  ============================================
  章节模板 —— 统一技术教材页面结构
  适用于 17 章课程内容的创建

  使用方法：
  1. 复制此文件到 docs/chapters/chapterXX/index.md
  2. 替换所有占位内容
  3. 根据实际需要增删组件
  ============================================
-->

<script setup>
// 章节页面数据 —— 在这里定义本章所有结构化数据
// 所有数据通过 props 传递给组件，实现内容与样式分离

const chapterData = {
  // 章节编号（两位数字字符串）
  chapterNum: 'XX',

  // 章节标题
  title: '章节标题',

  // 副标题
  subtitle: '章节副标题，说明本章核心内容',

  // 元信息
  readingTime: '30分钟',
  difficulty: '基础',   // 基础 | 进阶 | 高级 | 专家
  experiments: '1个',
  tags: ['Cloudflare', 'DNS', 'CDN'],

  // 导读问题
  introQuestions: [
    '为什么XXX是这样工作的？',
    'YYY和ZZZ有什么区别？'
  ],
  introAnswer: '本章将帮助你理解这些问题，并通过实际操作掌握核心概念。',

  // 学习目标
  goals: [
    '理解XXX的核心概念',
    '掌握YYY的配置方法',
    '能够独立完成ZZZ操作',
    '了解最佳实践和常见问题'
  ],

  // 架构图节点（文字模式）
  archNodes: ['用户', '域名', 'DNS', 'Cloudflare', '源服务器'],

  // 操作步骤
  steps: [
    {
      title: '第一步：登录控制台',
      description: '打开浏览器，访问 Cloudflare 控制台并登录你的账号。',
      screenshot: '',
      code: ''
    },
    {
      title: '第二步：添加站点',
      description: '点击"添加站点"，输入你的域名。',
      screenshot: '',
      code: 'https://dash.cloudflare.com/'
    },
    {
      title: '第三步：验证配置',
      description: '确认 DNS 记录正确，SSL/TLS 设置生效。',
      screenshot: '',
      code: ''
    }
  ],

  // 截图集
  screenshots: [
    { src: '/images/screenshots/example-01.png', alt: '控制台首页', caption: 'Cloudflare 控制台首页' },
    { src: '/images/screenshots/example-02.png', alt: 'DNS设置页面', caption: 'DNS 记录管理界面' }
  ],

  // 实验任务
  experiment: {
    title: '实验：完成第一个域名接入',
    goal: '将一个域名成功接入 Cloudflare 并验证 DNS 解析',
    preparation: '一个已注册的域名 + Cloudflare 账号',
    steps: [
      '登录 Cloudflare 控制台',
      '点击「添加站点」输入域名',
      '根据提示修改域名 DNS 服务器',
      '等待 DNS 生效，验证状态变为 Active',
      '在 DNS 页面添加一条 A 记录'
    ],
    expectedResult: '域名状态显示为 Active，DNS 解析正常工作。'
  },

  // 常见问题
  faqs: [
    {
      q: '为什么 DNS 修改后没有立即生效？',
      a: 'DNS 记录存在全球缓存传播时间（TTL），通常需要几分钟到 48 小时才能在全球范围内生效。你可以使用 dnschecker.org 查看全球解析状态。'
    },
    {
      q: 'Cloudflare 免费套餐够用吗？',
      a: '对于个人网站和小型项目，Cloudflare 免费套餐提供了充足的 CDN、DDoS 防护和 SSL 功能，足够满足大多数场景。'
    }
  ],

  // 本章总结
  summaryItems: [
    '理解了XXX的工作原理',
    '掌握了YYY的配置流程',
    '完成了ZZZ的实际操作',
    '学习了常见问题的排查方法'
  ],

  // 章节导航
  prevChapter: { title: '上一章标题', link: '/chapters/chapter00/' },
  nextChapter: { title: '下一章标题', link: '/chapters/chapter02/' }
}
</script>

<!-- ===== 章节标题区 ===== -->
<ChapterHeader
  :chapterNum="chapterData.chapterNum"
  :title="chapterData.title"
  :subtitle="chapterData.subtitle"
  :readingTime="chapterData.readingTime"
  :difficulty="chapterData.difficulty"
  :experiments="chapterData.experiments"
  :tags="chapterData.tags"
/>

<!-- ===== 章节导读 ===== -->
<ChapterIntroduction
  :questions="chapterData.introQuestions"
  :answer="chapterData.introAnswer"
/>

<!-- ===== 学习目标 ===== -->
<LearningGoals :goals="chapterData.goals" />

<!-- ============================================
     正文内容区域 —— 使用 Markdown 编写

     可用组件：
     - <TipBox type="info|warning|danger|tip">内容</TipBox>
     - <ArchitectureDiagram :nodes="[...]" src="..." caption="..." />
     - <StepGuide :steps="chapterData.steps" />
     - <ScreenshotGallery :images="chapterData.screenshots" />
     - <ExperimentBox v-bind="chapterData.experiment" />
     - <FAQBox :questions="chapterData.faqs" />
     - <ChapterSummary :items="chapterData.summaryItems" />
     - <ChapterNavigation :prev="chapterData.prevChapter" :next="chapterData.nextChapter" />
     ============================================ -->

## 第一节 核心概念

这里是正文内容。讲解本章的核心知识。

::: tip 知识提示框
也可以使用 VitePress 原生的 `::: tip` 等容器语法。
:::

<TipBox type="info">
这是自定义知识组件。支持 info / warning / danger / tip 四种类型，样式与整体设计统一。
</TipBox>

<TipBox type="warning">
注意：请勿将 API Token 提交到公开代码仓库中。
</TipBox>

<TipBox type="danger">
错误：SSL/TLS 模式选择错误可能导致网站无法访问。
</TipBox>

<TipBox type="tip">
经验：个人用户推荐使用 Full 模式，既能兼容原有证书，又能提升安全性。
</TipBox>

## 第二节 深入理解

继续讲解更深入的内容。包含代码示例：

```bash
# 检查 DNS 解析
nslookup example.com

# 使用 curl 查看 HTTP 响应头
curl -I https://example.com
```

```javascript
// Cloudflare Workers 示例
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello from Cloudflare!')
  }
}
```

## 架构设计

<!-- ===== 架构图（文字链路模式） ===== -->
<ArchitectureDiagram
  :nodes="chapterData.archNodes"
  caption="请求处理流程：从用户到源服务器的完整链路"
/>

<!-- 图片模式 -->
<!-- <ArchitectureDiagram src="/images/architecture.png" alt="架构图" caption="系统架构总览" /> -->

## 实战操作

<!-- ===== 操作步骤 ===== -->
<StepGuide :steps="chapterData.steps" />

## 操作截图

<!-- ===== 截图展示 ===== -->
<ScreenshotGallery :images="chapterData.screenshots" />

## 实验任务

<!-- ===== 实验任务 ===== -->
<ExperimentBox v-bind="chapterData.experiment" />

## 常见问题

<!-- ===== 常见问题 ===== -->
<FAQBox :questions="chapterData.faqs" />

## 本章总结

<!-- ===== 章节总结 ===== -->
<ChapterSummary :items="chapterData.summaryItems" />

---

<!-- ===== 章节导航 ===== -->
<ChapterNavigation
  :prev="chapterData.prevChapter"
  :next="chapterData.nextChapter"
/>
