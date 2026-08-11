<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const codeBlocks = ref([])

onMounted(() => {
  // Inject copy buttons into code blocks
  setTimeout(() => {
    injectCopyButtons()
  }, 500)
  // Also observe for dynamic content
  const observer = new MutationObserver(() => {
    injectCopyButtons()
  })
  observer.observe(document.body, { childList: true, subtree: true })
  onUnmounted(() => observer.disconnect())
})

function injectCopyButtons() {
  const pres = document.querySelectorAll('.vp-doc div[class*="language-"] pre, .vp-doc pre:not(.step-code pre)')
  pres.forEach(pre => {
    if (pre.parentElement?.querySelector('.copy-code-btn')) return
    const wrapper = pre.parentElement || pre
    if (getComputedStyle(wrapper).position === 'static') {
      wrapper.style.position = 'relative'
    }
    const btn = document.createElement('button')
    btn.className = 'copy-code-btn'
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
    btn.title = '复制代码'
    btn.onclick = async () => {
      const code = pre.querySelector('code') || pre
      try {
        await navigator.clipboard.writeText(code.innerText)
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
        btn.classList.add('copied')
        setTimeout(() => {
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
          btn.classList.remove('copied')
        }, 2000)
      } catch {
        btn.textContent = '❌'
      }
    }
    wrapper.appendChild(btn)
  })
}
</script>

<template>
  <div style="display:none"></div>
</template>

<style>
.copy-code-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease;
}

div[class*="language-"]:hover .copy-code-btn,
pre:hover + .copy-code-btn {
  opacity: 1;
}

.copy-code-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
}

.copy-code-btn.copied {
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.1);
}
</style>
