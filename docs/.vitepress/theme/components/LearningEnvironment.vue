<template>
  <section class="env-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          你需要<span class="highlight">什么？</span>
        </h2>
        <p class="section-subtitle">
          循序渐进，从一台电脑开始，逐步扩展你的学习环境
        </p>
      </div>

      <div class="env-levels" ref="levelsRef">
        <div
          v-for="(level, i) in levels"
          :key="i"
          class="env-level"
        >
          <div class="level-header">
            <div class="level-badge" :class="`badge-${level.theme}`">
              {{ level.label }}
            </div>
            <h3 class="level-title">{{ level.title }}</h3>
          </div>
          <ul class="level-items">
            <li v-for="(item, ji) in level.items" :key="ji" class="level-item">
              <span class="item-icon">{{ item.icon }}</span>
              <span class="item-name">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const levelsRef = ref(null)

const levels = [
  {
    label: '基础',
    title: '入门装备',
    theme: 'blue',
    items: [
      { icon: '💻', name: '电脑（Windows/Mac/Linux均可）' },
      { icon: '🌐', name: '浏览器（推荐Chrome或Edge）' },
      { icon: '📡', name: '互联网连接' }
    ]
  },
  {
    label: '进阶',
    title: '实践装备',
    theme: 'orange',
    items: [
      { icon: '🔗', name: '一个域名（约¥70/年）' },
      { icon: '🛡️', name: 'Cloudflare账号（免费）' },
      { icon: '🖥️', name: '一台VPS（约¥35/月起）' }
    ]
  },
  {
    label: '高级',
    title: '专家装备',
    theme: 'green',
    items: [
      { icon: '🏠', name: 'NAS设备（约¥1500起）' },
      { icon: '🐳', name: 'Docker环境' },
      { icon: '📝', name: 'GitHub账号（免费）' }
    ]
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
  if (levelsRef.value) observer.observe(levelsRef.value)

  return () => observer.disconnect()
})
</script>

<style scoped>
.env-section {
  padding: 100px 24px;
  background: var(--home-section-even);
  transition: background 0.3s ease;
}

.section-container {
  max-width: 1000px;
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

.env-levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.env-levels.visible {
  opacity: 1;
  transform: translateY(0);
}

.env-level {
  padding: 36px 28px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  transition: all 0.4s ease;
}

.env-level:hover {
  background: var(--home-card-bg-hover);
  transform: translateY(-4px);
}

.level-header {
  margin-bottom: 24px;
}

.level-badge {
  display: inline-block;
  padding: 5px 14px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 12px;
}

.badge-blue {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.badge-orange {
  background: rgba(246, 130, 31, 0.15);
  color: #f6821f;
}

.badge-green {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}

.level-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0;
}

.level-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.level-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: var(--home-card-bg-hover);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.level-item:hover {
  background: var(--home-card-bg);
}

.item-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.item-name {
  font-size: 14px;
  color: var(--home-text-secondary);
  line-height: 1.4;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .env-section {
    padding: 60px 20px;
  }

  .env-levels {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 28px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .env-levels {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .env-level {
    padding: 24px 18px;
  }
}
</style>
