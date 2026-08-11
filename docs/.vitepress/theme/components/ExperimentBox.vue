<script setup>
const props = defineProps({
  title: { type: String, default: '实验任务' },
  goal: { type: String, default: '' },
  preparation: { type: String, default: '' },
  steps: { type: Array, default: () => [] },
  expectedResult: { type: String, default: '' }
})
</script>

<template>
  <section class="experiment-box">
    <div class="exp-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 14l2 2 4-4"/>
      </svg>
      实验任务
    </div>

    <h4 class="exp-name" v-if="title">{{ title }}</h4>

    <div class="exp-meta" v-if="goal">
      <span class="exp-meta-label">目标</span>
      <span class="exp-meta-value">{{ goal }}</span>
    </div>

    <div class="exp-meta" v-if="preparation">
      <span class="exp-meta-label">准备</span>
      <span class="exp-meta-value">{{ preparation }}</span>
    </div>

    <div class="exp-steps" v-if="steps.length">
      <h5 class="exp-steps-title">实验步骤</h5>
      <ol class="exp-step-list">
        <li v-for="(step, i) in steps" :key="i">{{ step }}</li>
      </ol>
    </div>

    <div class="exp-result" v-if="expectedResult">
      <div class="exp-result-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        预期结果
      </div>
      <p>{{ expectedResult }}</p>
    </div>
  </section>
</template>

<style scoped>
.experiment-box {
  background: linear-gradient(135deg, rgba(246, 130, 31, 0.06), rgba(246, 130, 31, 0.02));
  border: 1px solid rgba(246, 130, 31, 0.15);
  border-radius: 14px;
  padding: 24px 28px;
  margin: 32px 0;
}

.exp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(246, 130, 31, 0.12);
  color: #f6821f;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.exp-name {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px 0;
}

.exp-meta {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 8px 0;
}

.exp-meta-label {
  font-size: 13px;
  font-weight: 600;
  color: #f6821f;
  min-width: 48px;
  flex-shrink: 0;
}

.exp-meta-value {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.exp-steps {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(246, 130, 31, 0.1);
}

.exp-steps-title {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 12px 0;
}

.exp-step-list {
  margin: 0;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  line-height: 2;
}

.exp-step-list li {
  padding-left: 4px;
}

.exp-result {
  margin-top: 20px;
  padding: 16px 18px;
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.12);
  border-radius: 10px;
}

.exp-result-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 6px;
}

.exp-result p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .experiment-box {
    padding: 18px;
  }
}
</style>
