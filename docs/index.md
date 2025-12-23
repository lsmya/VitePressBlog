---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ViteBlog"
  text: "现代化的技术博客平台"
  tagline: 简洁、快速、优雅的内容创作与分享
  actions:
    - theme: brand
      text: 开始阅读
      link: /markdown-examples
    - theme: alt
      text: 了解更多
      link: /api-examples
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress
      icon: ":github:"

features:
  - icon: 🚀
    title: 极速加载
    details: 基于 Vite 构建，享受闪电般的开发体验和生产构建速度
    link: /api-examples
  - icon: 🎨
    title: 优雅设计
    details: 精心设计的默认主题，支持丰富的自定义选项，打造独特风格
    link: /markdown-examples
  - icon: ✨
    title: Markdown 增强
    details: 支持表格、代码高亮、数学公式、流程图等丰富的 Markdown 扩展
    link: /markdown-examples
  - icon: 📱
    title: 响应式布局
    details: 完美适配桌面端、平板和手机，提供一致的阅读体验
    link: /api-examples
  - icon: 🔧
    title: 易于配置
    details: 简洁的配置文件，快速搭建属于自己的博客站点
    link: /api-examples
  - icon: 🤝
    title: 社区支持
    details: 基于 Vue 生态系统，拥有活跃的社区和丰富的插件支持
    link: https://github.com/vuejs/vitepress

---

## 最新文章

<div class="card-container">
  <div class="card">
    <div class="card-header">
      <h3>Vue 3 新特性深度解析</h3>
      <span class="date">2024-01-15</span>
    </div>
    <div class="card-content">
      探索 Vue 3 中的 Composition API、Teleport、Suspense 等核心特性，提升开发效率和代码质量。
    </div>
    <div class="card-footer">
      <a href="#" class="read-more">阅读更多 →</a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3>Vite 性能优化实战</h3>
      <span class="date">2024-01-10</span>
    </div>
    <div class="card-content">
      从构建配置、依赖管理、代码分割等方面入手，全面优化 Vite 项目的性能表现。
    </div>
    <div class="card-footer">
      <a href="#" class="read-more">阅读更多 →</a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header">
      <h3>TypeScript 最佳实践</h3>
      <span class="date">2024-01-05</span>
    </div>
    <div class="card-content">
      掌握 TypeScript 的高级特性，编写类型安全、可维护的代码，提升团队协作效率。
    </div>
    <div class="card-footer">
      <a href="#" class="read-more">阅读更多 →</a>
    </div>
  </div>
</div>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
}

.card-header h3 {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
  color: #333;
}

.card-header .date {
  font-size: 0.875rem;
  color: #666;
}

.card-content {
  padding: 20px;
  color: #555;
  line-height: 1.6;
}

.card-footer {
  padding: 0 20px 20px;
}

.card-footer .read-more {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.card-footer .read-more:hover {
  color: #2980b9;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>

## 关于本站

欢迎来到 ViteBlog！这是一个基于 VitePress 构建的现代化技术博客平台，致力于分享前端开发、后端技术、DevOps 等领域的知识和经验。

我们的目标是提供高质量、易理解的技术文章，帮助开发者提升技能，探索技术前沿。

## 联系方式

- GitHub: [https://github.com/vuejs/vitepress](https://github.com/vuejs/vitepress)
- 邮箱: example@example.com
- Twitter: [@vite_js](https://twitter.com/vite_js)

