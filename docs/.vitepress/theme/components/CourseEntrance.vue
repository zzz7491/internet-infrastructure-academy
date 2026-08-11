<template>
  <section class="course-entrance-section">
    <div class="section-container">
      <div class="entrance-card">
        <div class="entrance-badge">课程入口</div>
        <h2 class="entrance-title">
          开始你的<span class="highlight">互联网基础设施</span>学习之旅
        </h2>
        <p class="entrance-subtitle">
          从第一章开始，循序渐进。不用一次学会所有内容，只要一步步建立属于自己的数字空间认知。
        </p>
        <div class="entrance-cta">
          <a href="/chapters/chapter00/" class="start-btn">
            从第 00 章开始
            <span class="btn-arrow">→</span>
          </a>
          <a href="/chapters/" class="ghost-btn">查看全部课程</a>
        </div>
        <p class="entrance-note">共 18 章 · 零基础友好 · 长期可复用</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.course-entrance-section {
  padding: 100px 24px;
  background: var(--home-section-odd);
  position: relative;
  transition: background 0.3s ease;
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.entrance-card {
  text-align: center;
  padding: 64px 40px;
  background: var(--home-card-bg);
  border: 1px solid var(--home-border);
  border-radius: 24px;
  box-shadow: 0 20px 60px var(--home-shadow);
}

.entrance-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 5px 16px;
  border-radius: 20px;
  margin-bottom: 24px;
}

.entrance-title {
  font-size: 36px;
  font-weight: 800;
  color: var(--home-text-primary);
  margin: 0 0 18px;
  letter-spacing: -0.5px;
  line-height: 1.3;
}

.highlight {
  background: linear-gradient(135deg, #f6821f, #ff9a3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.entrance-subtitle {
  font-size: 17px;
  color: var(--home-text-secondary);
  line-height: 1.8;
  max-width: 640px;
  margin: 0 auto 40px;
}

.entrance-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.start-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 40px;
  background: linear-gradient(135deg, #f6821f, #e8731a);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(246, 130, 31, 0.3);
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 34px rgba(246, 130, 31, 0.45);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.start-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.ghost-btn {
  padding: 15px 30px;
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

.entrance-note {
  font-size: 13px;
  color: var(--home-text-muted);
  margin: 0;
}

@media (max-width: 768px) {
  .course-entrance-section {
    padding: 60px 20px;
  }

  .entrance-card {
    padding: 48px 24px;
  }

  .entrance-title {
    font-size: 26px;
  }

  .entrance-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .start-btn,
  .ghost-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
