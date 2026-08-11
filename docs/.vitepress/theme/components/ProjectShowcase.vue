<template>
  <section class="audience-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          适合<span class="highlight">哪些人</span>学习？
        </h2>
        <p class="section-subtitle">
          只要你想更清楚地理解自己每天使用的互联网，这门课程就适合你。
        </p>
      </div>

      <div class="audience-grid" ref="gridRef">
        <div
          v-for="(item, i) in audience"
          :key="i"
          class="audience-card"
          :style="{ transitionDelay: `${i * 0.06}s` }"
        >
          <div class="audience-icon">{{ item.icon }}</div>
          <p class="audience-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const audience = [
  { icon: '👤', text: '普通互联网用户' },
  { icon: '🧭', text: '希望提升网络认知的人' },
  { icon: '🔐', text: '关注个人数据安全的人' },
  { icon: '🖥️', text: '想理解服务器 / NAS 的人' },
  { icon: '🤖', text: '希望进入 AI 时代的人' },
  { icon: '🌱', text: '希望建立长期数字能力的人' }
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
.audience-section {
  padding: 100px 24px;
  background: var(--home-section-even);
  transition: background 0.3s ease;
}

.section-container {
  max-width: 1100px;
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
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.audience-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.audience-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 28px 24px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.audience-card:hover {
  background: var(--home-card-bg-hover);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px var(--home-shadow);
}

.audience-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.audience-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--home-text-primary);
  margin: 0;
  line-height: 1.5;
}

/* ===== 响应式 ===== */
@media (max-width: 900px) {
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .audience-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 28px;
  }
}

@media (max-width: 560px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
