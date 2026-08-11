<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- 品牌 -->
        <div class="footer-brand">
          <h3 class="brand-name">互联网基础设施学院</h3>
          <p class="brand-tagline">
            从域名、DNS、Cloudflare开始，<br/>
            构建属于自己的数字世界。
          </p>
        </div>

        <!-- 课程导航 -->
        <div class="footer-col">
          <h4 class="footer-title">课程导航</h4>
          <ul class="footer-links">
            <li><a href="/chapters/chapter00/">课程介绍</a></li>
            <li><a href="/chapters/chapter02/">互联网基础</a></li>
            <li><a href="/chapters/chapter01/">Cloudflare入门</a></li>
            <li><a href="/chapters/chapter08/">Zero Trust</a></li>
            <li><a href="/chapters/">查看全部课程 →</a></li>
          </ul>
        </div>

        <!-- 实验中心 -->
        <div class="footer-col">
          <h4 class="footer-title">实验中心</h4>
          <ul class="footer-links">
            <li><a href="/experiments/">全部实验</a></li>
            <li><a href="/chapters/chapter04/">DNS实验</a></li>
            <li><a href="/chapters/chapter06/">CDN实验</a></li>
            <li><a href="/chapters/chapter09/">Workers实验</a></li>
            <li><a href="/chapters/chapter17/">综合项目</a></li>
          </ul>
        </div>

        <!-- 项目案例 -->
        <div class="footer-col">
          <h4 class="footer-title">项目案例</h4>
          <ul class="footer-links">
            <li><a href="/projects/">全部项目</a></li>
            <li><a href="/resources/">学习资源</a></li>
            <li><a href="/chapters/chapter11/">综合实战</a></li>
            <li><a href="/chapters/chapter17/">最终项目</a></li>
          </ul>
        </div>
      </div>

      <!-- 版权 -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <span>© 2026 Internet Infrastructure Academy</span>
          <span class="footer-dot">·</span>
          <span>人人都能学会的互联网基础设施</span>
        </div>
        <div class="footer-built">
          基于 VitePress 构建 · 部署于 Cloudflare Pages
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: var(--home-footer-bg);
  border-top: 1px solid var(--home-border);
  padding: 72px 24px 36px;
  transition: background 0.3s ease;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand {
  padding-right: 24px;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--home-text-primary);
  margin: 0 0 14px;
}

.brand-tagline {
  font-size: 14px;
  color: var(--home-text-muted);
  line-height: 1.7;
  margin: 0;
}

.footer-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--home-text-secondary);
  margin: 0 0 18px;
  letter-spacing: 0.5px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 14px;
  color: var(--home-text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--vp-c-brand-1);
}

.footer-bottom {
  padding-top: 28px;
  border-top: 1px solid var(--home-border);
  text-align: center;
}

.footer-copyright {
  font-size: 13px;
  color: var(--home-text-muted);
  margin-bottom: 6px;
}

.footer-dot {
  margin: 0 8px;
}

.footer-built {
  font-size: 12px;
  color: var(--home-text-muted);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .footer-section {
    padding: 48px 20px 28px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
