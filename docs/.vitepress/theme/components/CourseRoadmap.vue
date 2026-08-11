<template>
  <section class="roadmap-section" id="roadmap">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          18 章完整<span class="highlight">学习路线</span>
        </h2>
        <p class="section-subtitle">从认识互联网，到掌握个人数字主权，四个阶段循序渐进</p>
      </div>

      <div class="roadmap-timeline" ref="timelineRef">
        <div class="timeline-line"></div>

        <div
          v-for="(phase, pi) in phases"
          :key="pi"
          class="phase-block"
        >
          <!-- 阶段标题 -->
          <div class="phase-header">
            <div class="phase-dot">
              <span>{{ pi + 1 }}</span>
            </div>
            <div class="phase-info">
              <span class="phase-label">{{ phase.label }}</span>
              <h3 class="phase-title">{{ phase.title }}</h3>
              <span class="phase-range">{{ phase.range }}</span>
            </div>
          </div>

          <!-- 阶段说明 -->
          <p class="phase-desc">{{ phase.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const timelineRef = ref(null)

const phases = [
  {
    label: '第一阶段',
    title: '理解互联网基础',
    range: '第00章 – 第06章',
    desc: '认识互联网结构、通信原理、TCP/IP、安全基础。'
  },
  {
    label: '第二阶段',
    title: '理解网络安全',
    range: '第07章 – 第09章',
    desc: '理解加密、安全通信、互联网入口和安全架构。'
  },
  {
    label: '第三阶段',
    title: '建立个人数字基础设施',
    range: '第10章 – 第13章',
    desc: '理解计算、数据、连接、安全体系。'
  },
  {
    label: '第四阶段',
    title: '面向 AI 时代',
    range: '第14章 – 第17章',
    desc: '理解 AI、个人数字空间和未来数字主权。'
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
    { threshold: 0.05 }
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (timelineRef.value) observer.observe(timelineRef.value)

  return () => observer.disconnect()
})
</script>

<style scoped>
.roadmap-section {
  padding: 100px 24px;
  background: var(--home-section-odd);
  position: relative;
  transition: background 0.3s ease;
  scroll-margin-top: 80px;
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
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

/* ===== 时间轴 ===== */
.roadmap-timeline {
  position: relative;
  padding-left: 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.roadmap-timeline.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-line {
  position: absolute;
  left: 23px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(246, 130, 31, 0.4),
    rgba(246, 130, 31, 0.2) 50%,
    rgba(34, 197, 94, 0.3) 100%
  );
}

.phase-block {
  position: relative;
  padding-left: 64px;
  margin-bottom: 48px;
  animation: fadeSlideIn 0.6s ease-out both;
}

.phase-block:last-child {
  margin-bottom: 0;
}

.phase-block:nth-child(2)  { animation-delay: 0.1s; }
.phase-block:nth-child(3)  { animation-delay: 0.2s; }
.phase-block:nth-child(4)  { animation-delay: 0.3s; }
.phase-block:nth-child(5)  { animation-delay: 0.4s; }

/* 阶段头部 */
.phase-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
}

.phase-dot {
  position: absolute;
  left: 11px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f6821f, #fb923c);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(246, 130, 31, 0.3);
  z-index: 1;
}

.phase-dot span {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.phase-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.phase-label {
  font-size: 12px;
  color: rgba(246, 130, 31, 0.75);
  font-weight: 600;
  letter-spacing: 1px;
}

.phase-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0;
}

.phase-range {
  font-size: 13px;
  color: var(--home-text-muted);
}

.phase-desc {
  font-size: 15px;
  color: var(--home-text-secondary);
  line-height: 1.7;
  margin: 0;
  padding-left: 0;
}

/* ===== 动画 ===== */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .roadmap-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .phase-block {
    padding-left: 48px;
  }

  .timeline-line {
    left: 17px;
  }

  .phase-dot {
    left: 5px;
    width: 22px;
    height: 22px;
  }

  .phase-title {
    font-size: 18px;
  }
}
</style>
