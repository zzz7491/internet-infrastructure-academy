<script setup>
const props = defineProps({
  steps: { type: Array, default: () => [] }
})
// Each step: { title, description, screenshot, code }
</script>

<template>
  <section class="step-guide">
    <h3 class="step-section-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
      实战操作
    </h3>

    <div class="step-list">
      <div v-for="(step, i) in steps" :key="i" class="step-item">
        <div class="step-number">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>
        </div>
        <div class="step-body">
          <h4 class="step-title">{{ step.title }}</h4>
          <p v-if="step.description" class="step-desc">{{ step.description }}</p>
          <div v-if="step.code" class="step-code">
            <pre><code>{{ step.code }}</code></pre>
          </div>
          <div v-if="step.screenshot" class="step-screenshot">
            <img :src="step.screenshot" :alt="step.title" loading="lazy" class="step-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.step-guide {
  margin: 36px 0;
}

.step-section-title {
  display: flex !important;
  align-items: center;
  gap: 8px;
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #fff !important;
  margin-bottom: 24px !important;
  border: none !important;
  padding: 0 !important;
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-item {
  display: flex;
  gap: 18px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px 22px;
  transition: border-color 0.3s ease;
}

.step-item:hover {
  border-color: rgba(246, 130, 31, 0.15);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(246, 130, 31, 0.1);
  flex-shrink: 0;
}

.step-number span {
  font-size: 14px;
  font-weight: 700;
  color: #f6821f;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.step-body {
  flex: 1;
  min-width: 0;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 6px 0;
}

.step-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  margin: 0 0 10px 0;
}

.step-code {
  margin-top: 12px;
}

.step-code pre {
  background: #0e0e18;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 14px 16px;
  overflow-x: auto;
  margin: 0;
}

.step-code code {
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 13px;
  color: #e2e8f0;
  line-height: 1.7;
}

.step-screenshot {
  margin-top: 12px;
}

.step-img {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: block;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
}
</style>
