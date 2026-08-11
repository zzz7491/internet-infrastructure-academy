<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] }
  // Each image: { src, alt, caption }
})

const activeIndex = ref(0)
const lightboxOpen = ref(false)

function openLightbox(index) {
  activeIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : props.images.length - 1
}

function nextImage() {
  activeIndex.value = activeIndex.value < props.images.length - 1 ? activeIndex.value + 1 : 0
}

function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}
</script>

<template>
  <section class="screenshot-gallery" v-if="images.length">
    <h3 class="gallery-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      操作截图
    </h3>

    <div class="gallery-grid">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="gallery-item"
        @click="openLightbox(i)"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" class="gallery-thumb" />
        <span v-if="img.caption" class="gallery-caption">{{ img.caption }}</span>
      </div>
    </div>

    <!-- 灯箱 -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox" @keydown="onKeydown" tabindex="0">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button class="lightbox-nav lightbox-prev" @click="prevImage" v-if="images.length > 1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <img :src="images[activeIndex].src" :alt="images[activeIndex].alt" class="lightbox-image" />

          <button class="lightbox-nav lightbox-next" @click="nextImage" v-if="images.length > 1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          <p class="lightbox-caption">{{ images[activeIndex].caption || images[activeIndex].alt }}</p>
          <p class="lightbox-counter" v-if="images.length > 1">{{ activeIndex + 1 }} / {{ images.length }}</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.screenshot-gallery {
  margin: 36px 0;
}

.gallery-title {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}

.gallery-item {
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-2px);
  border-color: rgba(246, 130, 31, 0.25);
}

.gallery-thumb {
  width: 100%;
  display: block;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.gallery-caption {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  padding: 8px 12px;
  background: rgba(0,0,0,0.2);
}

/* 灯箱 */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  position: relative;
  max-width: 92vw;
  max-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255,255,255,0.1);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.08);
  border: none;
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.lightbox-nav:hover {
  background: rgba(255,255,255,0.18);
}

.lightbox-prev { left: -60px; }
.lightbox-next { right: -60px; }

.lightbox-caption {
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.lightbox-counter {
  position: absolute;
  top: -40px;
  left: 0;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .lightbox-prev { left: -36px; }
  .lightbox-next { right: -36px; }
  .lightbox-nav { width: 36px; height: 36px; }
}
</style>
