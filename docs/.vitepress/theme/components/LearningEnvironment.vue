<template>
  <section class="capabilities-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          完成学习后，<span class="highlight">你能够：</span>
        </h2>
        <p class="section-subtitle">
          这不是一套考证课程，而是一组可以长期使用的数字时代基础能力。
        </p>
      </div>

      <div class="capabilities-grid" ref="gridRef">
        <div
          v-for="(item, i) in capabilities"
          :key="i"
          class="capability-item"
          :style="{ transitionDelay: `${i * 0.06}s` }"
        >
          <span class="cap-icon">✓</span>
          <span class="cap-text">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const capabilities = [
  '看懂互联网的整体架构',
  '理解网站访问的全过程',
  '理解 VPN、代理与安全边界',
  '理解服务器和 NAS 的作用',
  '理解个人数据资产的价值',
  '设计自己的数字基础设施',
  '面向 AI 时代管理自己的数字空间'
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
.capabilities-section {
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

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.capabilities-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.capability-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 24px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 14px;
  transition: all 0.3s ease;
}

.capability-item:hover {
  background: var(--home-card-bg-hover);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
}

.cap-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 50%;
  font-size: 16px;
  font-weight: 700;
}

.cap-text {
  font-size: 17px;
  color: var(--home-text-secondary);
  font-weight: 500;
  line-height: 1.5;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .capabilities-section {
    padding: 60px 20px;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 28px;
  }

  .cap-text {
    font-size: 15px;
  }
}
</style>
