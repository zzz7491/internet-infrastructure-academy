<template>
  <section class="knowledge-section">
    <div class="section-container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title">
          互联网<span class="highlight">基础设施全景</span>
        </h2>
        <p class="section-subtitle">
          从入口到安全，从计算到智能——整套课程最终会拼成下面这一座完整的数字城市。
        </p>
      </div>

      <div class="ascii-wrap" ref="gridRef">
        <pre class="ascii-diagram">{{ overview }}</pre>
        <p class="ascii-caption">
          这不是一堆孤立的技术，而是一套完整的个人数字基础设施。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const gridRef = ref(null)

const overview = `                 AI 智能层
              AI 助手 / Agent
                    │
                    ▼

              数据资产层
             NAS / 知识库
                    │
                    ▼

              计算服务层
          VPS / Linux / Docker
                    │
                    ▼

              入口管理层
        域名 / DNS / Cloudflare
                    │
                    ▼

              网络连接层
          IP / IPv6 / TCP/IP
                    │
                    ▼

              安全保护层
       HTTPS / 加密 / 身份体系`

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
  margin-bottom: 56px;
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

.ascii-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.ascii-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}

.ascii-diagram {
  margin: 0 auto;
  max-width: 100%;
  overflow-x: auto;
  padding: 40px 28px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 18px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 15px;
  line-height: 1.7;
  color: var(--home-text-primary);
  text-align: center;
  white-space: pre;
  box-shadow: 0 16px 40px var(--home-shadow);
}

.ascii-caption {
  text-align: center;
  margin: 24px 0 0;
  font-size: 15px;
  color: var(--home-text-secondary);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .knowledge-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .ascii-diagram {
    font-size: 12px;
    padding: 28px 14px;
  }

  .ascii-caption {
    font-size: 14px;
  }
}
</style>
