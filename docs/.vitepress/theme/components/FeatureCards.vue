<template>
  <section class="features-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">这门课程<span class="highlight">学习什么？</span></h2>
        <p class="section-subtitle">
          四个模块，带你建立完整的互联网基础设施认知，从理解网络到拥有自己的数字空间。
        </p>
      </div>

      <div class="features-grid" ref="gridRef">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="feature-card"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="card-phase">模块 {{ i + 1 }}</div>
          <div class="card-icon-wrap">
            <span class="card-icon">{{ card.icon }}</span>
          </div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc">{{ card.desc }}</p>
          <div class="card-range">{{ card.range }}</div>
          <ul class="card-tags">
            <li v-for="tag in card.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const cards = [
  {
    icon: '🌐',
    title: '理解互联网',
    desc: '从家庭网络、DNS、IP、TCP/IP 开始，理解互联网如何把世界连接在一起。',
    range: '对应 第00–06章',
    tags: ['网络', '地址', '连接', '协议']
  },
  {
    icon: '🛡️',
    title: '理解安全',
    desc: '理解加密、HTTPS、身份认证与安全体系，保护自己的数字生活。',
    range: '对应 第07–09章',
    tags: ['加密', 'HTTPS', '身份', '安全体系']
  },
  {
    icon: '🏠',
    title: '建立个人基础设施',
    desc: '理解服务器、NAS、Docker 与远程连接，构建属于自己的数字空间。',
    range: '对应 第10–13章',
    tags: ['服务器', 'NAS', 'Docker', '远程连接']
  },
  {
    icon: '🤖',
    title: '面向 AI 时代',
    desc: '理解 AI 基础设施、知识库、数字助手与个人数字主权。',
    range: '对应 第14–17章',
    tags: ['知识库', 'AI', '数字助手', '数字主权']
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (gridRef.value) observer.observe(gridRef.value)

  return () => observer.disconnect()
})
</script>

<style scoped>
.features-section {
  padding: 100px 24px;
  background: var(--home-section-even);
  position: relative;
  transition: background 0.3s ease;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--home-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.highlight {
  background: linear-gradient(135deg, #f6821f, #ff9a3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 17px;
  color: var(--home-text-muted);
  margin: 0;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.features-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card {
  padding: 32px 24px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(246, 130, 31, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  background: var(--home-card-bg-hover);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 20px 50px var(--home-shadow),
              0 0 30px rgba(246, 130, 31, 0.05);
}

.feature-card:hover::before {
  opacity: 1;
}

.card-phase {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 3px 12px;
  border-radius: 20px;
  margin-bottom: 18px;
}

.card-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--home-card-bg-hover);
  border-radius: 14px;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 28px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0 0 12px;
}

.card-desc {
  font-size: 14px;
  color: var(--home-text-secondary);
  line-height: 1.6;
  margin: 0 0 16px;
}

.card-range {
  display: inline-block;
  font-size: 12px;
  color: var(--home-text-muted);
  margin-bottom: 16px;
}

.card-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 12px;
  padding: 4px 10px;
  background: var(--home-card-bg-hover);
  color: var(--home-text-muted);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.feature-card:hover .tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

/* ===== 响应式 ===== */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-section {
    padding: 60px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
