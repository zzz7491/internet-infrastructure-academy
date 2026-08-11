<script setup>
import { ref } from 'vue'

const props = defineProps({
  questions: { type: Array, default: () => [] }
  // Each question: { q, a }
})

const expandedIndex = ref(null)

function toggle(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq-box" v-if="questions.length">
    <h3 class="faq-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      常见问题
    </h3>

    <div class="faq-list">
      <div
        v-for="(item, i) in questions"
        :key="i"
        class="faq-item"
        :class="{ expanded: expandedIndex === i }"
      >
        <button class="faq-question" @click="toggle(i)">
          <span class="faq-q-mark">Q</span>
          <span class="faq-q-text">{{ item.q }}</span>
          <svg class="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="faq-answer" v-show="expandedIndex === i">
          <div class="faq-answer-inner">
            <span class="faq-a-mark">A</span>
            <span class="faq-a-text">{{ item.a }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-box {
  margin: 36px 0;
}

.faq-title {
  display: flex !important;
  align-items: center;
  gap: 8px;
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #fff !important;
  margin-bottom: 20px !important;
  border: none !important;
  padding: 0 !important;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.faq-item.expanded {
  border-color: rgba(246, 130, 31, 0.15);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.015);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.03);
}

.faq-q-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.faq-q-text {
  flex: 1;
  line-height: 1.5;
}

.faq-chevron {
  color: rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-item.expanded .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  overflow: hidden;
}

.faq-answer-inner {
  display: flex;
  gap: 12px;
  padding: 0 20px 18px 20px;
  font-size: 14px;
  line-height: 1.8;
}

.faq-a-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(246, 130, 31, 0.12);
  color: #f6821f;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.faq-a-text {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .faq-question {
    padding: 14px 16px;
    font-size: 14px;
  }
  .faq-answer-inner {
    padding: 0 16px 16px 16px;
  }
}
</style>
