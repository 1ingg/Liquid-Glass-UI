# 自定义主题

Liquid Glass UI 提供了强大的主题定制系统，您可以通过CSS变量轻松自定义组件的外观，创建符合品牌风格的独特设计。

## CSS 变量系统

Liquid Glass UI 使用CSS自定义属性（CSS变量）来管理主题样式，所有变量都定义在 `:root` 选择器中。

### 主要主题变量

```css
:root {
  /* 主色调 */
  --glass-primary: rgba(74, 144, 226, 0.8);
  --glass-primary-light: rgba(74, 144, 226, 0.3);
  
  /* 状态颜色 */
  --glass-success: rgba(34, 197, 94, 0.8);
  --glass-warning: rgba(251, 191, 36, 0.8);
  --glass-error: rgba(239, 68, 68, 0.8);
  
  /* 背景和边框 */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-hover: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-border-hover: rgba(255, 255, 255, 0.3);
  
  /* 文本颜色 */
  --glass-text: rgba(255, 255, 255, 0.9);
  --glass-text-muted: rgba(255, 255, 255, 0.6);
  
  /* 阴影和模糊 */
  --glass-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  --glass-blur: blur(15px);
}
```

## 预设主题

### 默认主题（蓝色）

```css
:root {
  --glass-primary: rgba(74, 144, 226, 0.8);
  --glass-primary-light: rgba(74, 144, 226, 0.3);
}
```

<div class="theme-preview" data-theme="default">
  <button class="glass-button primary">主要按钮</button>
  <input type="text" class="glass-input" placeholder="输入框示例">
  <span class="glass-badge primary">徽章示例</span>
</div>

### 紫色主题

```css
:root {
  --glass-primary: rgba(147, 51, 234, 0.8);
  --glass-primary-light: rgba(147, 51, 234, 0.3);
}
```

<div class="theme-preview" data-theme="purple">
  <button class="glass-button primary">主要按钮</button>
  <input type="text" class="glass-input" placeholder="输入框示例">
  <span class="glass-badge primary">徽章示例</span>
</div>

### 绿色主题

```css
:root {
  --glass-primary: rgba(34, 197, 94, 0.8);
  --glass-primary-light: rgba(34, 197, 94, 0.3);
}
```

<div class="theme-preview" data-theme="green">
  <button class="glass-button primary">主要按钮</button>
  <input type="text" class="glass-input" placeholder="输入框示例">
  <span class="glass-badge primary">徽章示例</span>
</div>

### 橙色主题

```css
:root {
  --glass-primary: rgba(249, 115, 22, 0.8);
  --glass-primary-light: rgba(249, 115, 22, 0.3);
}
```

<div class="theme-preview" data-theme="orange">
  <button class="glass-button primary">主要按钮</button>
  <input type="text" class="glass-input" placeholder="输入框示例">
  <span class="glass-badge primary">徽章示例</span>
</div>

### 粉色主题

```css
:root {
  --glass-primary: rgba(236, 72, 153, 0.8);
  --glass-primary-light: rgba(236, 72, 153, 0.3);
}
```

<div class="theme-preview" data-theme="pink">
  <button class="glass-button primary">主要按钮</button>
  <input type="text" class="glass-input" placeholder="输入框示例">
  <span class="glass-badge primary">徽章示例</span>
</div>

## 创建自定义主题

### 步骤1：定义颜色方案

首先确定您的品牌色彩：

```css
/* 自定义主题示例 */
:root {
  /* 主色调 - 使用品牌色 */
  --glass-primary: rgba(255, 100, 150, 0.8);
  --glass-primary-light: rgba(255, 100, 150, 0.3);
  
  /* 可选：调整其他颜色 */
  --glass-success: rgba(46, 204, 113, 0.8);
  --glass-warning: rgba(255, 193, 7, 0.8);
  --glass-error: rgba(231, 76, 60, 0.8);
}
```

### 步骤2：调整透明度

根据背景调整组件透明度：

```css
/* 深色背景 - 增加透明度 */
:root {
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-bg-hover: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.15);
}

/* 浅色背景 - 减少透明度或使用深色 */
:root {
  --glass-bg: rgba(0, 0, 0, 0.1);
  --glass-bg-hover: rgba(0, 0, 0, 0.15);
  --glass-border: rgba(0, 0, 0, 0.2);
  --glass-text: rgba(0, 0, 0, 0.8);
  --glass-text-muted: rgba(0, 0, 0, 0.5);
}
```

### 步骤3：调整模糊效果

根据设计需求调整模糊强度：

```css
:root {
  /* 轻微模糊 */
  --glass-blur: blur(8px);
  
  /* 标准模糊 */
  --glass-blur: blur(15px);
  
  /* 强烈模糊 */
  --glass-blur: blur(25px);
}
```

## 动态主题切换

使用JavaScript实现主题切换功能：

```html
<!-- 主题切换器 -->
<div class="theme-switcher">
  <button class="theme-btn" data-theme="default">默认</button>
  <button class="theme-btn" data-theme="purple">紫色</button>
  <button class="theme-btn" data-theme="green">绿色</button>
  <button class="theme-btn" data-theme="orange">橙色</button>
  <button class="theme-btn" data-theme="pink">粉色</button>
</div>

<script>
// 主题配置
const themes = {
  default: {
    '--glass-primary': 'rgba(74, 144, 226, 0.8)',
    '--glass-primary-light': 'rgba(74, 144, 226, 0.3)',
  },
  purple: {
    '--glass-primary': 'rgba(147, 51, 234, 0.8)',
    '--glass-primary-light': 'rgba(147, 51, 234, 0.3)',
  },
  green: {
    '--glass-primary': 'rgba(34, 197, 94, 0.8)',
    '--glass-primary-light': 'rgba(34, 197, 94, 0.3)',
  },
  orange: {
    '--glass-primary': 'rgba(249, 115, 22, 0.8)',
    '--glass-primary-light': 'rgba(249, 115, 22, 0.3)',
  },
  pink: {
    '--glass-primary': 'rgba(236, 72, 153, 0.8)',
    '--glass-primary-light': 'rgba(236, 72, 153, 0.3)',
  }
};

// 应用主题
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (theme) {
    Object.keys(theme).forEach(property => {
      document.documentElement.style.setProperty(property, theme[property]);
    });
    
    // 保存到本地存储
    localStorage.setItem('liquid-glass-theme', themeName);
    
    // 更新按钮状态
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${themeName}"]`).classList.add('active');
  }
}

// 初始化主题
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('liquid-glass-theme') || 'default';
  applyTheme(savedTheme);
  
  // 绑定主题切换事件
  document.querySelectorAll('.theme-btn').forEach(button => {
    button.addEventListener('click', function() {
      const theme = this.dataset.theme;
      applyTheme(theme);
    });
  });
});
</script>
```

## 高级定制

### 自定义动画

```css
:root {
  /* 动画持续时间 */
  --glass-transition: 0.3s ease;
  --glass-transition-fast: 0.15s ease;
  --glass-transition-slow: 0.5s ease;
}

/* 自定义悬停效果 */
.glass-button:hover {
  transform: translateY(-3px) scale(1.02);
  transition: all var(--glass-transition);
}

/* 自定义聚焦效果 */
.glass-input:focus {
  transform: translateY(-2px);
  box-shadow: 
    0 0 0 3px var(--glass-primary-light),
    0 8px 25px rgba(0, 0, 0, 0.2);
}
```

### 自定义圆角

```css
:root {
  /* 圆角尺寸 */
  --glass-radius-sm: 8px;
  --glass-radius: 12px;
  --glass-radius-lg: 16px;
  --glass-radius-xl: 20px;
}

/* 应用到组件 */
.glass-button {
  border-radius: var(--glass-radius);
}

.glass-card {
  border-radius: var(--glass-radius-lg);
}

.glass-modal .modal-content {
  border-radius: var(--glass-radius-xl);
}
```

### 响应式主题

```css
/* 移动设备上的调整 */
@media (max-width: 768px) {
  :root {
    --glass-blur: blur(10px); /* 减少模糊以提高性能 */
    --glass-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 减少阴影 */
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.25);
  }
}
```

## 性能优化

### 减少重绘

使用CSS变量时，避免在动画中改变会导致重排的属性：

```css
/* 好的做法 - 只改变transform和opacity */
.glass-button {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.glass-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* 避免 - 改变尺寸会导致重排 */
.glass-button:hover {
  padding: 14px 26px; /* 不推荐 */
  width: calc(100% + 4px); /* 不推荐 */
}
```

### 条件加载

根据设备性能条件性地应用效果：

```css
/* 默认无模糊版本 */
.glass-container {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 支持backdrop-filter的设备 */
@supports (backdrop-filter: blur(10px)) {
  .glass-container {
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
  }
}
```

## 主题模板

### 企业级主题

```css
/* 专业商务风格 */
:root {
  --glass-primary: rgba(51, 65, 85, 0.9);
  --glass-primary-light: rgba(51, 65, 85, 0.3);
  --glass-bg: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.25);
  --glass-blur: blur(20px);
  --glass-radius: 8px;
}
```

### 活力青春主题

```css
/* 年轻活力风格 */
:root {
  --glass-primary: rgba(255, 61, 113, 0.8);
  --glass-primary-light: rgba(255, 61, 113, 0.25);
  --glass-success: rgba(45, 212, 191, 0.8);
  --glass-warning: rgba(251, 191, 36, 0.8);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-blur: blur(25px);
  --glass-radius: 16px;
}
```

### 简约风格主题

```css
/* 极简设计风格 */
:root {
  --glass-primary: rgba(55, 65, 81, 0.8);
  --glass-primary-light: rgba(55, 65, 81, 0.2);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-blur: blur(12px);
  --glass-radius: 6px;
  --glass-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## 最佳实践

1. **一致性**：在整个应用中保持主题的一致性
2. **可访问性**：确保颜色对比度符合无障碍标准
3. **性能**：在低性能设备上考虑禁用复杂效果
4. **测试**：在不同设备和浏览器上测试主题效果
5. **文档**：为自定义主题编写清晰的文档

通过这些定制选项，您可以创建独特且符合品牌的用户界面，同时保持Liquid Glass UI的核心设计原则。

<style scoped>
.theme-preview {
  padding: 24px;
  margin: 16px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.theme-preview[data-theme="purple"] {
  --glass-primary: rgba(147, 51, 234, 0.8);
  --glass-primary-light: rgba(147, 51, 234, 0.3);
}

.theme-preview[data-theme="green"] {
  --glass-primary: rgba(34, 197, 94, 0.8);
  --glass-primary-light: rgba(34, 197, 94, 0.3);
}

.theme-preview[data-theme="orange"] {
  --glass-primary: rgba(249, 115, 22, 0.8);
  --glass-primary-light: rgba(249, 115, 22, 0.3);
}

.theme-preview[data-theme="pink"] {
  --glass-primary: rgba(236, 72, 153, 0.8);
  --glass-primary-light: rgba(236, 72, 153, 0.3);
}
</style> 