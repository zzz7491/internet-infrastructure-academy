<template>
  <section class="why-learn-section">
    <div class="section-container">
      <div class="why-learn-grid">
        <!-- 左侧文字 -->
        <div class="why-learn-text" ref="textRef">
          <h2 class="section-title">
            互联网已经成为<br/>
            <span class="highlight">现代生活基础设施</span>
          </h2>

          <p class="section-intro">我们每天都在使用互联网：</p>
          <ul class="daily-list">
            <li v-for="(item, i) in daily" :key="'d' + i">
              <span class="d-icon">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </li>
          </ul>

          <p class="section-intro question-lead">但很多人并不清楚：</p>
          <ul class="question-list">
            <li v-for="(q, i) in questions" :key="'q' + i" :style="{ animationDelay: `${0.2 + i * 0.1}s` }">
              <span class="q-icon">?</span>
              <span>{{ q }}</span>
            </li>
          </ul>

          <p class="section-conclusion">
            理解互联网基础设施，不是为了成为工程师。<br/>
            而是为了成为<span class="em">自己数字生活的管理者</span>。
          </p>
        </div>

        <!-- 右侧插图：互联网在你背后运转着 -->
        <div class="why-learn-visual" ref="visualRef">
          <div class="visual-card">
            <div class="visual-layer layer-app">📱 应用与服务</div>
            <div class="visual-arrow">↑↓</div>
            <div class="visual-layer layer-cf">🛡️ 安全与身份</div>
            <div class="visual-arrow">↑↓</div>
            <div class="visual-layer layer-net">🌐 网络与传输</div>
            <div class="visual-arrow">↑↓</div>
            <div class="visual-layer layer-infra">🏠 基础设施</div>
          </div>
          <p class="visual-caption">你在前台使用，它在后台运转</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const textRef = ref(null)
const visualRef = ref(null)

const daily = [
  { icon: '💬', text: '聊天沟通' },
  { icon: '💳', text: '支付转账' },
  { icon: '🛒', text: '网上购物' },
  { icon: '🖼️', text: '存储照片' },
  { icon: '🤖', text: '使用 AI' },
  { icon: '🗂️', text: '管理工作' }
]

const questions = [
  '数据在传输过程中经过了哪里？',
  '我的账号到底由谁在控制？',
  '信息是如何在网络中传输的？',
  '我自己的数字资产究竟在哪里？'
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
    { threshold: 0.15 }
  )

  if (textRef.value) observer.observe(textRef.value)
  if (visualRef.value) observer.observe(visualRef.value)

  return () => observer.disconnect()
})
</script>

<style scoped>
.why-learn-section {
  padding: 100px 24px;
  background: var(--home-section-odd);
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.why-learn-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(246, 130, 31, 0.3), transparent);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.why-learn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--home-text-primary);
  line-height: 1.3;
  margin: 0 0 28px;
  letter-spacing: -0.5px;
}

.highlight {
  background: linear-gradient(135deg, #f6821f, #ff9a3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-intro {
  font-size: 17px;
  color: var(--home-text-secondary);
  line-height: 1.7;
  margin: 0 0 16px;
  font-weight: 600;
}

.question-lead {
  margin-top: 28px;
}

.daily-list,
.question-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.daily-list li,
.question-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 18px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 10px;
  color: var(--home-text-secondary);
  font-size: 15px;
}

.daily-list li {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
}

.question-list li {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
}

.d-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.q-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
}

.section-conclusion {
  font-size: 16px;
  color: var(--home-text-secondary);
  line-height: 1.7;
  margin: 8px 0 0;
}

.em {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* ===== 右侧插图 ===== */
.why-learn-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.visual-card {
  width: 280px;
  padding: 32px 24px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  box-shadow: 0 20px 60px var(--home-shadow);
}

.visual-layer {
  width: 100%;
  padding: 18px 16px;
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.visual-layer:hover {
  transform: scale(1.05);
}

.layer-app {
  background: linear-gradient(135deg, rgba(246, 130, 31, 0.2), rgba(251, 146, 60, 0.1));
  color: #f6821f;
  border: 1px solid rgba(246, 130, 31, 0.3);
}

.layer-cf {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.1));
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.layer-net {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.1));
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.layer-infra {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(74, 222, 128, 0.1));
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.visual-arrow {
  color: var(--home-text-muted);
  font-size: 18px;
  padding: 4px 0;
}

.visual-caption {
  font-size: 13px;
  color: var(--home-text-muted);
  margin: 0;
}

/* ===== 动画 ===== */
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.why-learn-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.why-learn-text.visible {
  opacity: 1;
  transform: translateY(0);
}

.why-learn-visual {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.why-learn-visual.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .why-learn-section {
    padding: 60px 20px;
  }

  .why-learn-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-title {
    font-size: 28px;
  }

  .visual-card {
    width: 100%;
    max-width: 280px;
  }
}
</style>
