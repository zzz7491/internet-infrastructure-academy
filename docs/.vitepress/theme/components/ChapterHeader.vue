<script setup>
const props = defineProps({
  chapterNum: { type: String, default: '01' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  readingTime: { type: String, default: '30分钟' },
  difficulty: { type: String, default: '基础' },
  experiments: { type: String, default: '1个' },
  tags: { type: Array, default: () => [] }
})

const difficultyColors = {
  '基础': { bg: 'rgba(34,197,94,0.12)', text: '#22c55e' },
  '进阶': { bg: 'rgba(59,130,246,0.12)', text: '#3b82f6' },
  '高级': { bg: 'rgba(246,130,31,0.12)', text: '#f6821f' },
  '专家': { bg: 'rgba(239,68,68,0.12)', text: '#ef4444' }
}

const diffStyle = difficultyColors[props.difficulty] || difficultyColors['基础']
</script>

<template>
  <header class="chapter-header">
    <div class="chapter-meta-bar">
      <span class="chapter-num">第{{ chapterNum }}章</span>
      <div class="chapter-stats">
        <span class="stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          {{ readingTime }}
        </span>
        <span class="stat" :style="{ color: diffStyle.text }">
          <span class="stat-dot" :style="{ background: diffStyle.text }"></span>
          {{ difficulty }}
        </span>
        <span class="stat">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
          {{ experiments }}实验
        </span>
      </div>
    </div>

    <h1 class="chapter-title">{{ title }}</h1>
    <p v-if="subtitle" class="chapter-subtitle">{{ subtitle }}</p>

    <div v-if="tags.length" class="chapter-tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </header>
</template>

<style scoped>
.chapter-header {
  padding: 0 0 40px 0;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.chapter-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.chapter-num {
  font-size: 13px;
  font-weight: 600;
  color: #f6821f;
  background: rgba(246, 130, 31, 0.1);
  padding: 4px 14px;
  border-radius: 20px;
  letter-spacing: 1px;
}

.chapter-stats {
  display: flex;
  align-items: center;
  gap: 18px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
}

.stat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.chapter-title {
  font-size: 40px !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
  color: #fff !important;
  letter-spacing: -1px !important;
  margin: 0 0 14px 0 !important;
  border: none !important;
  padding: 0 !important;
}

.chapter-subtitle {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 16px 0;
}

.chapter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 768px) {
  .chapter-meta-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  .chapter-title {
    font-size: 28px !important;
  }
  .chapter-subtitle {
    font-size: 16px;
  }
}
</style>
