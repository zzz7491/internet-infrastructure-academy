<template>
  <section class="projects-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          学完可以<span class="highlight">做什么？</span>
        </h2>
        <p class="section-subtitle">
          将知识转化为真实的项目，每个项目都是一次完整的实践
        </p>
      </div>

      <div class="projects-grid" ref="gridRef">
        <div
          v-for="(proj, i) in projects"
          :key="i"
          class="project-card"
        >
          <div class="project-badge">{{ proj.badge }}</div>
          <h3 class="project-title">{{ proj.title }}</h3>
          <p class="project-desc">{{ proj.desc }}</p>

          <!-- 架构链 -->
          <div class="arch-chain">
            <div
              v-for="(node, ni) in proj.arch"
              :key="ni"
              class="arch-node"
            >
              <div class="arch-node-icon">{{ node.icon }}</div>
              <span>{{ node.label }}</span>
            </div>
            <div
              v-for="ni in proj.arch.length - 1"
              :key="'arrow-' + ni"
              class="arch-arrow"
            >↓</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const projects = [
  {
    badge: '项目一',
    title: '个人网站系统',
    desc: '从购买域名到部署上线，使用Cloudflare CDN加速和安全防护，搭建一个全球可达的个人网站。',
    arch: [
      { icon: '🌐', label: '域名' },
      { icon: '🛡️', label: 'Cloudflare' },
      { icon: '🖥️', label: 'VPS' },
      { icon: '🚀', label: '网站' }
    ]
  },
  {
    badge: '项目二',
    title: '家庭私有云',
    desc: '搭建NAS存储中心，通过Cloudflare Tunnel实现安全远程访问，构建家庭媒体服务器和文件共享。',
    arch: [
      { icon: '📱', label: '手机/PC' },
      { icon: '🔒', label: 'Tunnel' },
      { icon: '🏠', label: 'NAS' }
    ]
  },
  {
    badge: '项目三',
    title: '企业安全架构',
    desc: '基于Cloudflare Zero Trust构建企业级安全网络，实现身份认证、应用访问控制和威胁防护。',
    arch: [
      { icon: '👤', label: '用户' },
      { icon: '🛡️', label: 'Cloudflare' },
      { icon: '🔐', label: 'Zero Trust' },
      { icon: '💼', label: '业务系统' }
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
  if (gridRef.value) observer.observe(gridRef.value)

  return () => observer.disconnect()
})
</script>

<style scoped>
.projects-section {
  padding: 100px 24px;
  background: var(--home-section-odd);
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.projects-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  padding: 36px 28px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  transition: all 0.4s ease;
}

.project-card:hover {
  background: var(--home-card-bg-hover);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 16px 40px var(--home-shadow);
  transform: translateY(-4px);
}

.project-badge {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 18px;
}

.project-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0 0 12px;
}

.project-desc {
  font-size: 14px;
  color: var(--home-text-secondary);
  line-height: 1.7;
  margin: 0 0 28px;
}

/* 架构链 */
.arch-chain {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
}

.arch-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px;
  min-width: 56px;
}

.arch-node-icon {
  font-size: 22px;
}

.arch-node span {
  font-size: 11px;
  color: var(--home-text-muted);
  white-space: nowrap;
}

.arch-arrow {
  font-size: 14px;
  color: rgba(246, 130, 31, 0.5);
  padding: 0 2px;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .projects-section {
    padding: 60px 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 28px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
