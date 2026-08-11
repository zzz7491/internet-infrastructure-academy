<template>
  <section class="hero-section">
    <!-- 动态网络节点背景 -->
    <div class="hero-bg">
      <canvas ref="networkCanvas" class="network-canvas"></canvas>
      <div class="bg-gradient"></div>
      <div class="bg-grid"></div>
      <div class="hero-overlay"></div>
    </div>

    <!-- 内容层 -->
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Internet Infrastructure Academy
      </div>

      <h1 class="hero-title">
        人人都能学会的<br/>
        <span class="hero-highlight">互联网基础设施</span>
      </h1>

      <p class="hero-subtitle">
        从理解互联网，到建立自己的数字空间。<br/>
        一套面向普通人的网络、安全、服务器、数据与 AI 基础课程。
      </p>

      <p class="hero-desc">
        帮助每一个普通人看懂互联网如何运行、自己的数据在哪里、如何拥有属于自己的数字空间。
      </p>

      <div class="hero-actions">
        <a href="/chapters/chapter00/" class="btn-primary">
          开始学习
          <span class="btn-arrow">→</span>
        </a>
        <a href="/guide/" class="btn-secondary">
          学习路线指南
        </a>
      </div>

      <!-- 底部连接示意（统一比喻体系，不使用具体产品名称） -->
      <div class="hero-chain">
        <div class="chain-node">
          <div class="chain-icon">📱</div>
          <span>用户设备</span>
        </div>
        <div class="chain-line"></div>
        <div class="chain-node">
          <div class="chain-icon">🏷️</div>
          <span>域名导航</span>
        </div>
        <div class="chain-line"></div>
        <div class="chain-node">
          <div class="chain-icon">🏢</div>
          <span>物业管理中心</span>
        </div>
        <div class="chain-line"></div>
        <div class="chain-node">
          <div class="chain-icon">🏠</div>
          <span>服务器</span>
        </div>
        <div class="chain-line"></div>
        <div class="chain-node">
          <div class="chain-icon">📦</div>
          <span>个人仓库</span>
        </div>
        <div class="chain-line"></div>
        <div class="chain-node">
          <div class="chain-icon">🤖</div>
          <span>AI 助手</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const networkCanvas = ref(null)
let animationId = null

onMounted(() => {
  initNetworkCanvas()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})

function initNetworkCanvas() {
  const canvas = networkCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // 创建节点
  const nodes = []
  const nodeCount = 40
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 绘制连线
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.12
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(246, 130, 31, ${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // 绘制节点
    for (const node of nodes) {
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(246, 130, 31, ${node.opacity})`
      ctx.fill()
    }

    // 更新位置
    for (const node of nodes) {
      node.x += node.vx
      node.y += node.vy

      if (node.x < 0 || node.x > canvas.width) node.vx *= -1
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1
    }

    animationId = requestAnimationFrame(draw)
  }

  draw()
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--home-hero-bg);
  margin-top: -64px;
  padding-top: 64px;
  transition: background 0.3s ease;
}

/* ===== 背景层 ===== */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.network-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(246, 130, 31, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 60% 60% at 80% 50%, rgba(246, 130, 31, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 50% 40% at 20% 80%, rgba(246, 130, 31, 0.04) 0%, transparent 50%);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--home-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--home-grid-line) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: var(--home-hero-overlay);
  pointer-events: none;
  transition: background 0.3s ease;
}

/* ===== 内容层 ===== */
.hero-content {
  position: relative;
  z-index: 4;
  text-align: center;
  padding: 90px 24px 70px;
  max-width: 900px;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 50px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 32px;
  animation: fadeInDown 0.8s ease-out;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #f6821f;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--home-text-primary);
  margin: 0 0 20px;
  letter-spacing: -1px;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.hero-highlight {
  background: linear-gradient(135deg, #f6821f 0%, #ff9a3c 50%, #f6821f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.7;
  color: var(--home-text-secondary);
  margin: 0 0 12px;
  font-weight: 400;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-desc {
  font-size: 15px;
  color: var(--home-text-muted);
  margin: 0 0 40px;
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

/* ===== 按钮 ===== */
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #f6821f, #e8731a);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(246, 130, 31, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(246, 130, 31, 0.45);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(4px);
}

.btn-secondary {
  padding: 14px 32px;
  border: 1px solid var(--home-border);
  background: var(--home-card-bg);
  color: var(--home-text-secondary);
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--home-card-bg-hover);
  border-color: var(--vp-c-brand-1);
  color: var(--home-text-primary);
  transform: translateY(-2px);
}

/* ===== 底部连接链 ===== */
.hero-chain {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.chain-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  transition: all 0.3s ease;
  min-width: 70px;
}

.chain-node:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
}

.chain-icon {
  font-size: 24px;
}

.chain-node span {
  font-size: 11px;
  color: var(--home-text-muted);
  white-space: nowrap;
}

.chain-line {
  width: 30px;
  height: 1px;
  background: linear-gradient(90deg, rgba(246, 130, 31, 0.4), rgba(246, 130, 31, 0.1));
  margin: 0 4px;
}

/* ===== 动画 ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .hero-section {
    min-height: 620px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-desc {
    font-size: 13px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .hero-chain {
    gap: 4px;
  }

  .chain-line {
    width: 16px;
  }

  .chain-node {
    padding: 6px 8px;
    min-width: 50px;
  }

  .chain-icon {
    font-size: 18px;
  }

  .chain-node span {
    font-size: 9px;
  }
}
</style>
