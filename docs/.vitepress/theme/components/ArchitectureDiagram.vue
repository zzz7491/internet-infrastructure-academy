<script setup>
const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '架构图' },
  caption: { type: String, default: '' },
  nodes: { type: Array, default: () => [] }
})

const hasNodes = props.nodes.length > 0
</script>

<template>
  <figure class="arch-diagram">
    <!-- 文字链路模式 -->
    <div v-if="hasNodes" class="arch-chain">
      <template v-for="(node, i) in nodes" :key="i">
        <div class="arch-node">
          <div class="node-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <span class="node-label">{{ node }}</span>
        </div>
        <div v-if="i < nodes.length - 1" class="arch-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </template>
    </div>

    <!-- 图片模式 -->
    <div v-if="src" class="arch-image-wrap">
      <img :src="src" :alt="alt" class="arch-image" loading="lazy" />
    </div>

    <figcaption v-if="caption" class="arch-caption">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
.arch-diagram {
  margin: 28px 0;
  text-align: center;
}

.arch-chain {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 28px 20px;
}

.arch-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.node-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(246, 130, 31, 0.08);
  border: 1px solid rgba(246, 130, 31, 0.15);
  border-radius: 12px;
  color: #f6821f;
  transition: all 0.3s ease;
}

.node-icon:hover {
  background: rgba(246, 130, 31, 0.15);
  border-color: rgba(246, 130, 31, 0.3);
  transform: translateY(-2px);
}

.node-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.arch-arrow {
  color: rgba(255, 255, 255, 0.15);
  margin: 0 4px;
  display: flex;
  align-items: center;
}

.arch-image-wrap {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.arch-image {
  width: 100%;
  max-width: 100%;
  display: block;
}

.arch-caption {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 12px;
}

@media (max-width: 768px) {
  .arch-chain {
    padding: 20px 12px;
    gap: 4px;
  }
  .node-icon {
    width: 44px;
    height: 44px;
  }
  .node-label {
    font-size: 11px;
  }
  .arch-arrow {
    margin: 0 1px;
  }
  .arch-arrow svg {
    width: 12px;
    height: 12px;
  }
}
</style>
