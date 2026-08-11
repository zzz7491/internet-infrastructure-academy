<template>
  <section class="course-entrance-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">
          课程介绍 · <span class="highlight">从零搭建你的互联网基础设施</span>
        </h2>
        <p class="section-subtitle">
          《人人都能学会的互联网基础设施》是一套面向普通用户与技术爱好者的系统课程。带你从浏览器打开网页的全过程，一路学到能自己搭建并运维安全、稳定的个人与团队基础设施。
        </p>
      </div>

      <!-- 学习路线 -->
      <div class="route-steps">
        <div class="route-step" v-for="(r, i) in route" :key="i">
          <span class="route-num">{{ i + 1 }}</span>
          <span class="route-text">{{ r }}</span>
        </div>
      </div>

      <!-- 五个学习阶段 -->
      <div class="phase-grid">
        <div class="phase-card" v-for="phase in phases" :key="phase.id">
          <div class="phase-icon">{{ phase.icon }}</div>
          <h3 class="phase-name">{{ phase.name }}</h3>
          <p class="phase-desc">{{ phase.desc }}</p>
          <span class="phase-range">{{ phase.range }}</span>
        </div>
      </div>

      <!-- 开始学习按钮 -->
      <div class="entrance-cta">
        <a href="/chapters/chapter00/" class="start-btn">开始学习 →</a>
        <a href="/chapters/" class="ghost-btn">查看完整课程路线</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = ['认识互联网', '基础设施核心', '服务器与云', '个人数字设施', '高级应用']

const phases = [
  { id: 1, icon: '🚀', name: '认识互联网', range: '第0–3章', desc: '互联网原理、家庭网络与域名 / DNS 基础。' },
  { id: 2, icon: '⚡', name: '基础设施核心', range: '第4–7章', desc: 'Cloudflare、SSL/TLS、CDN 与网站安全防护。' },
  { id: 3, icon: '☁️', name: '服务器与云计算', range: '第8–10章', desc: 'VPS、Linux 基础与 Docker 容器技术。' },
  { id: 4, icon: '🛠️', name: '个人数字基础设施', range: '第11–14章', desc: 'Cloudflare + VPS、Tunnel、NAS 与家庭服务器。' },
  { id: 5, icon: '🏆', name: '高级应用', range: '第15–17章', desc: 'Zero Trust、API 自动化与综合项目实战。' }
]
</script>

<style scoped>
.course-entrance-section {
  padding: 100px 24px;
  background: var(--home-section-even);
  position: relative;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  color: var(--home-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.5px;
}

.highlight {
  color: var(--vp-c-brand-1);
}

.section-subtitle {
  font-size: 17px;
  color: var(--home-text-secondary);
  line-height: 1.8;
  max-width: 760px;
  margin: 0 auto;
}

/* 学习路线 */
.route-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 56px;
}

.route-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 12px;
}

.route-num {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
}

.route-text {
  font-size: 15px;
  color: var(--home-text-primary);
  font-weight: 600;
  white-space: nowrap;
}

/* 五个学习阶段 */
.phase-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}

.phase-card {
  padding: 28px 20px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.phase-card:hover {
  background: var(--home-card-bg-hover);
  border-color: rgba(246, 130, 31, 0.3);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px var(--home-shadow);
}

.phase-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.phase-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0 0 10px;
}

.phase-desc {
  font-size: 13px;
  color: var(--home-text-secondary);
  line-height: 1.6;
  margin: 0 0 14px;
}

.phase-range {
  display: inline-block;
  font-size: 12px;
  padding: 4px 10px;
  background: var(--home-card-bg-hover);
  color: var(--vp-c-brand-1);
  border-radius: 6px;
}

/* CTA */
.entrance-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.start-btn {
  padding: 14px 36px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(246, 130, 31, 0.3);
}

.ghost-btn {
  padding: 14px 28px;
  border: 1px solid var(--home-border);
  color: var(--home-text-secondary);
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.ghost-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

@media (max-width: 900px) {
  .phase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .section-title {
    font-size: 28px;
  }
}

@media (max-width: 560px) {
  .phase-grid {
    grid-template-columns: 1fr;
  }
  .route-text {
    font-size: 13px;
  }
}
</style>
