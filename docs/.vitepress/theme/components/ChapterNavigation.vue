<script setup>
const props = defineProps({
  prev: { type: Object, default: null },
  // { title: '互联网基础', link: '/chapters/chapter02/' }
  next: { type: Object, default: null },
  // { title: 'Cloudflare DNS', link: '/chapters/chapter04/' }
})
</script>

<template>
  <nav class="chapter-nav">
    <div class="nav-inner">
      <!-- 上一章 -->
      <a v-if="prev" :href="prev.link" class="nav-link nav-prev">
        <span class="nav-direction">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          上一章
        </span>
        <span class="nav-title">{{ prev.title }}</span>
      </a>
      <div v-else class="nav-link nav-placeholder"></div>

      <!-- 返回目录 -->
      <a href="/chapters/" class="nav-toc">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
        课程目录
      </a>

      <!-- 下一章 -->
      <a v-if="next" :href="next.link" class="nav-link nav-next">
        <span class="nav-direction">
          下一章
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
        <span class="nav-title">{{ next.title }}</span>
      </a>
      <div v-else class="nav-link nav-placeholder"></div>
    </div>
  </nav>
</template>

<style scoped>
.chapter-nav {
  margin: 56px 0 24px 0;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.nav-link {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 320px;
}

.nav-link:hover {
  border-color: rgba(246, 130, 31, 0.2);
  background: rgba(246, 130, 31, 0.04);
}

.nav-prev {
  text-align: left;
}

.nav-next {
  text-align: right;
}

.nav-placeholder {
  visibility: hidden;
  pointer-events: none;
}

.nav-direction {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-next .nav-direction {
  justify-content: flex-end;
}

.nav-title {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover .nav-title {
  color: #f6821f;
}

.nav-toc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-toc:hover {
  border-color: rgba(246, 130, 31, 0.2);
  color: #f6821f;
  background: rgba(246, 130, 31, 0.04);
}

@media (max-width: 768px) {
  .nav-inner {
    flex-direction: column;
  }
  .nav-link {
    max-width: none;
  }
  .nav-toc {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 6px;
  }
}
</style>
