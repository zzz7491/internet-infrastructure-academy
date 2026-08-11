<template>
  <section class="features-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">掌握<span class="highlight">四大核心能力</span></h2>
        <p class="section-subtitle">
          从基础概念到动手实践，逐步构建你的互联网知识体系
        </p>
      </div>

      <div class="features-grid" ref="gridRef">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="feature-card"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="card-icon-wrap">
            <span class="card-icon">{{ card.icon }}</span>
          </div>
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc">{{ card.desc }}</p>
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
    desc: '从IP地址到域名系统，从HTTP到HTTPS，掌握互联网通信的基本原理。',
    tags: ['IP', 'DNS', '域名', 'HTTP']
  },
  {
    icon: '🛡️',
    title: '掌握Cloudflare',
    desc: '全面学习Cloudflare核心产品，成为网络性能和安全专家。',
    tags: ['DNS', 'CDN', 'SSL', 'WAF', 'Zero Trust']
  },
  {
    icon: '☁️',
    title: '构建自己的服务',
    desc: '从VPS到容器化部署，学会搭建和运维自己的网络服务。',
    tags: ['VPS', 'Linux', 'Docker', 'Nginx']
  },
  {
    icon: '🏠',
    title: '打造个人云',
    desc: '搭建家庭NAS、配置远程访问、构建AI知识库，拥有自己的数据主权。',
    tags: ['NAS', 'Tunnel', 'R2', 'AI知识库']
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
  background: #0c0c14;
  position: relative;
}

.features-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59, 130, 246, 0.04), transparent),
    radial-gradient(ellipse 50% 40% at 20% 100%, rgba(246, 130, 31, 0.03), transparent);
  pointer-events: none;
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
  color: #fff;
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
  color: rgba(255, 255, 255, 0.45);
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(246, 130, 31, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
              0 0 30px rgba(246, 130, 31, 0.05);
}

.feature-card:hover::before {
  opacity: 1;
}

.card-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 28px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}

.card-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin: 0 0 20px;
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
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.feature-card:hover .tag {
  background: rgba(246, 130, 31, 0.1);
  color: #f6821f;
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
