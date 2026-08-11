<template>
  <section class="roadmap-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          18章课程 · <span class="highlight">系统学习路线</span>
        </h2>
        <p class="section-subtitle">从零基础到企业级实战，五个阶段循序渐进</p>
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
            </div>
          </div>

          <!-- 章节列表 -->
          <div class="phase-chapters">
            <a
              v-for="(ch, ci) in phase.chapters"
              :key="ci"
              :href="ch.link"
              class="chapter-item"
            >
              <span class="ch-num">{{ ch.num }}</span>
              <span class="ch-name">{{ ch.name }}</span>
              <span class="ch-arrow">→</span>
            </a>
          </div>
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
    title: '互联网基础',
    chapters: [
      { num: '第0章', name: '学习路线与课程介绍', link: '/chapters/chapter00/' },
      { num: '第1章', name: '认识Cloudflare', link: '/chapters/chapter01/' },
      { num: '第2章', name: '互联网基础知识', link: '/chapters/chapter02/' }
    ]
  },
  {
    label: '第二阶段',
    title: 'Cloudflare 核心',
    chapters: [
      { num: '第3章', name: '注册Cloudflare并接入域名', link: '/chapters/chapter03/' },
      { num: '第4章', name: 'Cloudflare DNS教程', link: '/chapters/chapter04/' },
      { num: '第5章', name: 'Cloudflare SSL/TLS教程', link: '/chapters/chapter05/' },
      { num: '第6章', name: 'Cloudflare CDN教程', link: '/chapters/chapter06/' },
      { num: '第7章', name: '网站安全防护', link: '/chapters/chapter07/' }
    ]
  },
  {
    label: '第三阶段',
    title: '云服务与边缘计算',
    chapters: [
      { num: '第8章', name: 'Cloudflare Zero Trust', link: '/chapters/chapter08/' },
      { num: '第9章', name: 'Workers与Pages', link: '/chapters/chapter09/' },
      { num: '第10章', name: 'R2、D1与个人云', link: '/chapters/chapter10/' }
    ]
  },
  {
    label: '第四阶段',
    title: '高级实战',
    chapters: [
      { num: '第11章', name: '综合实战', link: '/chapters/chapter11/' },
      { num: '第12章', name: '运维维护', link: '/chapters/chapter12/' },
      { num: '第13章', name: 'Cloudflare + VPS', link: '/chapters/chapter13/' },
      { num: '第14章', name: 'Cloudflare + NAS', link: '/chapters/chapter14/' }
    ]
  },
  {
    label: '第五阶段',
    title: '企业与自动化',
    chapters: [
      { num: '第15章', name: '企业级安全实践', link: '/chapters/chapter15/' },
      { num: '第16章', name: 'API自动化运维', link: '/chapters/chapter16/' },
      { num: '第17章', name: '综合项目实战', link: '/chapters/chapter17/' }
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
  background: var(--home-section-even);
  position: relative;
  transition: background 0.3s ease;
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
    rgba(59, 130, 246, 0.4),
    rgba(59, 130, 246, 0.2) 30%,
    rgba(246, 130, 31, 0.3) 60%,
    rgba(34, 197, 94, 0.3) 100%
  );
}

.phase-block {
  position: relative;
  padding-left: 64px;
  margin-bottom: 48px;
  animation: fadeSlideIn 0.6s ease-out both;
}

.phase-block:nth-child(2)  { animation-delay: 0.1s; }
.phase-block:nth-child(3)  { animation-delay: 0.2s; }
.phase-block:nth-child(4)  { animation-delay: 0.3s; }
.phase-block:nth-child(5)  { animation-delay: 0.4s; }
.phase-block:nth-child(6)  { animation-delay: 0.5s; }

/* 阶段头部 */
.phase-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
}

.phase-dot {
  position: absolute;
  left: 11px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
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
  gap: 2px;
}

.phase-label {
  font-size: 12px;
  color: rgba(59, 130, 246, 0.7);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.phase-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0;
}

/* 章节列表 */
.phase-chapters {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 12px;
}

.chapter-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.chapter-item:hover {
  background: var(--home-card-bg);
  border-color: var(--home-border);
}

.ch-num {
  font-size: 13px;
  font-weight: 600;
  color: rgba(246, 130, 31, 0.7);
  min-width: 42px;
}

.ch-name {
  flex: 1;
  font-size: 15px;
  color: var(--home-text-secondary);
  transition: color 0.25s ease;
}

.chapter-item:hover .ch-name {
  color: var(--home-text-primary);
}

.ch-arrow {
  font-size: 14px;
  color: var(--home-text-muted);
  transition: all 0.25s ease;
}

.chapter-item:hover .ch-arrow {
  color: var(--vp-c-brand-1);
  transform: translateX(4px);
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
