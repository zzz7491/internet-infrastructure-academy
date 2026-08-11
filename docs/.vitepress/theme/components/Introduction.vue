<script setup>
const props = defineProps({
  questions: { type: Array, default: () => [] },
  answer: { type: String, default: '' }
})
</script>

<template>
  <section class="introduction-block">
    <div class="intro-label">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      本章导读
    </div>

    <p class="intro-prompt">在学习本章之前，你可能会问：</p>
    <ul class="intro-questions">
      <li v-for="(q, i) in questions" :key="i" class="intro-question">
        <span class="q-mark">?</span>
        {{ q }}
      </li>
    </ul>

    <p v-if="answer" class="intro-answer">{{ answer }}</p>

    <div class="intro-divider"></div>
  </section>
</template>

<style scoped>
.introduction-block {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.04), rgba(246, 130, 31, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 28px 32px;
  margin-bottom: 36px;
}

.intro-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.intro-prompt {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 14px 0;
}

.intro-questions {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.intro-question {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  padding: 6px 0;
}

.q-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

.intro-answer {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.8;
  margin: 0;
}

.intro-divider {
  margin-top: 20px;
  height: 1px;
  background: linear-gradient(to right, rgba(59,130,246,0.15), transparent);
}

@media (max-width: 768px) {
  .introduction-block {
    padding: 20px;
  }
  .intro-question {
    font-size: 14px;
  }
}
</style>
