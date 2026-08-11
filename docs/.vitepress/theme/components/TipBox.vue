<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'tip',
    validator: (v) => ['tip', 'info', 'warning', 'danger'].includes(v)
  }
})

const config = {
  info: {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    label: '知识',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    accent: '#3b82f6',
    text: 'rgba(255,255,255,0.8)'
  },
  warning: {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    label: '注意',
    bg: 'rgba(250,204,21,0.08)',
    border: 'rgba(250,204,21,0.2)',
    accent: '#facc15',
    text: 'rgba(255,255,255,0.8)'
  },
  danger: {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    label: '错误',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.2)',
    accent: '#ef4444',
    text: 'rgba(255,255,255,0.8)'
  },
  tip: {
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    label: '经验',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
    accent: '#22c55e',
    text: 'rgba(255,255,255,0.8)'
  }
}
</script>

<template>
  <aside
    class="tip-box"
    :style="{
      background: config[type].bg,
      borderColor: config[type].border
    }"
  >
    <div class="tip-header" :style="{ color: config[type].accent }">
      <span class="tip-icon" v-html="config[type].icon"></span>
      <span class="tip-label">{{ config[type].label }}</span>
      <span class="tip-label-zh">{{ {info:'知识点',warning:'注意事项',danger:'常见错误',tip:'经验分享'}[type] }}</span>
    </div>
    <div class="tip-content" :style="{ color: config[type].text }">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.tip-box {
  border: 1px solid;
  border-left-width: 4px;
  border-radius: 0 10px 10px 0;
  padding: 18px 22px;
  margin: 20px 0;
}

.tip-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 13px;
}

.tip-icon {
  display: flex;
  align-items: center;
}

.tip-label-zh {
  font-size: 11px;
  opacity: 0.6;
  font-weight: 400;
}

.tip-content {
  font-size: 14px;
  line-height: 1.8;
}

.tip-content :deep(p) {
  margin: 0;
}
</style>
