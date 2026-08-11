<script setup>
const props = defineProps({
  goals: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="goals-block">
    <h2 class="goals-title">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      学习目标
    </h2>
    <p class="goals-intro">完成本章后，你将能够：</p>
    <ul class="goals-list">
      <li v-for="(goal, i) in goals" :key="i" class="goal-item">
        <span class="goal-check">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        {{ goal }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.goals-block {
  background: rgba(34, 197, 94, 0.04);
  border: 1px solid rgba(34, 197, 94, 0.1);
  border-radius: 14px;
  padding: 28px 32px;
  margin-bottom: 36px;
}

.goals-title {
  display: flex !important;
  align-items: center;
  gap: 10px;
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #22c55e !important;
  margin: 0 0 8px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.goals-intro {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 16px 0;
}

.goals-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.goal-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  padding: 8px 0;
}

.goal-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.12);
  color: #22c55e;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .goals-block {
    padding: 20px;
  }
  .goal-item {
    font-size: 14px;
  }
}
</style>
