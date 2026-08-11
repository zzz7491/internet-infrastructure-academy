<template>
  <section class="knowledge-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          <span class="highlight">六大知识体系</span>
        </h2>
        <p class="section-subtitle">
          系统化的知识结构，覆盖从入门到精通的全路径
        </p>
      </div>

      <div class="knowledge-grid" ref="gridRef">
        <div
          v-for="(item, i) in systems"
          :key="i"
          class="knowledge-card"
          :style="{ transitionDelay: `${i * 0.06}s` }"
        >
          <div class="k-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="k-icon">{{ item.icon }}</div>
          <h3 class="k-title">{{ item.title }}</h3>
          <p class="k-desc">{{ item.desc }}</p>
          <div class="k-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const systems = [
  {
    icon: '🌐',
    title: '网络基础',
    desc: 'IP地址、DNS解析、HTTP协议、域名体系等互联网底层原理'
  },
  {
    icon: '☁️',
    title: 'Cloudflare核心技术',
    desc: 'DNS管理、CDN加速、SSL/TLS加密、WAF安全防护完整掌握'
  },
  {
    icon: '🖥️',
    title: '云服务器实践',
    desc: 'VPS选购配置、Linux基础运维、Docker容器化、Nginx部署'
  },
  {
    icon: '🏠',
    title: '家庭私有云',
    desc: 'NAS搭建、数据备份、媒体中心、Tunnel远程安全访问'
  },
  {
    icon: '🔐',
    title: '网络安全',
    desc: 'DDoS防护、Zero Trust架构、访问控制、安全策略与实践'
  },
  {
    icon: '⚙️',
    title: '自动化运维',
    desc: 'Terraform基础设施即代码、CI/CD流水线、API自动化管理'
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
.knowledge-section {
  padding: 100px 24px;
  background: var(--home-section-odd);
  position: relative;
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

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.knowledge-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.knowledge-card {
  position: relative;
  padding: 36px 28px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.knowledge-card:hover {
  transform: translateY(-4px);
  background: var(--home-card-bg-hover);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 16px 40px var(--home-shadow);
}

.k-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.knowledge-card:hover .k-glow {
  opacity: 1;
}

.k-number {
  font-size: 13px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.6);
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.k-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.k-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0 0 10px;
}

.k-desc {
  font-size: 14px;
  color: var(--home-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .knowledge-section {
    padding: 60px 20px;
  }

  .knowledge-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 28px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .knowledge-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
