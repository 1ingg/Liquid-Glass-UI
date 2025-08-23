---
layout: home

hero:
  name: "Liquid Glass UI"
  text: "现代液态玻璃UI组件库"
  tagline: 轻量级、现代化、无依赖的CSS组件库
  image:
    src: /favicon.ico
    alt: Liquid Glass UI
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看组件
      link: /components/
    - theme: alt
      text: GitHub
      link: https://github.com/1ingg/Liquid-Glass-UI

features:
  - icon: 🎨
    title: 现代设计
    details: 采用最新的玻璃态设计风格，具有毛玻璃效果和现代化的视觉体验
  - icon: ⚡
    title: 轻量级
    details: 纯CSS实现，无JavaScript依赖，体积小巧，性能优异
  - icon: 📱
    title: 响应式
    details: 完全响应式设计，在各种设备和屏幕尺寸上都能完美展示
  - icon: 🔧
    title: 易于使用
    details: 只需引入CSS文件，即可开始使用所有组件，无需复杂配置
  - icon: 🎯
    title: 高度可定制
    details: 提供CSS变量和主题系统，轻松定制符合品牌的设计风格
  - icon: 🚀
    title: 开箱即用
    details: 包含丰富的组件库，覆盖大部分常见的UI需求场景
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --vp-home-hero-image-background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style> 