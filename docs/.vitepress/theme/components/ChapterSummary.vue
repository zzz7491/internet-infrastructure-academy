<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="chapter-summary" v-if="items.length">
    <div class="summary-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      本章总结
    </div>
    <p class="summary-leading">本章学习了以下核心知识：</p>
    <ul class="summary-list">
      <li v-for="(item, i) in items" :key="i" class="summary-item">
        <span class="summary-check">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.chapter-summary {
  margin: 40px 0 36px 0;
  padding: 28px 32px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.04), rgba(34, 197, 94, 0.01));
  border: 1px solid rgba(34, 197, 94, 0.1);
  border-radius: 14px;
}

.summary-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(34, 197, 94, 0.12);
  color: #22c55e;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.summary-leading {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 14px 0;
}

.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
}

.summary-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .chapter-summary {
    padding: 20px;
  }
  .summary-item {
    font-size: 14px;
  }
}
</style>
