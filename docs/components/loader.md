# 加载器 Loader

加载器是显示内容正在加载的反馈组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础加载器

```html
<div class="glass-loader spinner-headless medium">
  <div class="spinner-ring"></div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-loader spinner-headless medium">
    <div class="spinner-ring"></div>
  </div>
</div>

### 加载器尺寸

```html
<!-- 小尺寸 -->
<div class="glass-loader spinner-headless small">
  <div class="spinner-ring"></div>
</div>

<!-- 中等尺寸 -->
<div class="glass-loader spinner-headless medium">
  <div class="spinner-ring"></div>
</div>

<!-- 大尺寸 -->
<div class="glass-loader spinner-headless large">
  <div class="spinner-ring"></div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; display: flex; align-items: center; gap: 24px;">
  <div class="glass-loader spinner-headless small">
    <div class="spinner-ring"></div>
  </div>
  <div class="glass-loader spinner-headless medium">
    <div class="spinner-ring"></div>
  </div>
  <div class="glass-loader spinner-headless large">
    <div class="spinner-ring"></div>
  </div>
</div>

### 带文字的加载器

```html
<div class="glass-loader">
  <div class="loader-spinner"></div>
  <div class="loader-text">加载中...</div>
</div>
```

### 内联加载器

```html
<button class="glass-button">
  <div class="glass-loader inline">
    <div class="loader-spinner"></div>
  </div>
  处理中
</button>
```

## 加载器类型

### 圆形加载器

```html
<div class="glass-loader">
  <div class="loader-spinner circle"></div>
</div>
```

### 点状加载器

```html
<div class="glass-loader">
  <div class="loader-dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>
```

### 进度条加载器

```html
<div class="glass-loader">
  <div class="loader-progress">
    <div class="progress-bar"></div>
  </div>
  <div class="loader-text">加载中 60%</div>
</div>
```

## 加载器尺寸

```html
<!-- 小尺寸 -->
<div class="glass-loader small">
  <div class="loader-spinner"></div>
</div>

<!-- 默认尺寸 -->
<div class="glass-loader">
  <div class="loader-spinner"></div>
</div>

<!-- 大尺寸 -->
<div class="glass-loader large">
  <div class="loader-spinner"></div>
</div>
```

## CSS 类名

### 基础类名

- `.glass-loader` - 加载器容器
- `.loader-spinner` - 旋转加载器
- `.loader-dots` - 点状加载器
- `.loader-progress` - 进度条加载器
- `.loader-text` - 加载文字
- `.dot` - 加载点
- `.progress-bar` - 进度条

### 修饰类名

**类型修饰符**
- `.circle` - 圆形样式
- `.inline` - 内联样式

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

## JavaScript 增强

### 显示和隐藏加载器

```javascript
class LoaderManager {
  constructor() {
    this.activeLoaders = new Set();
  }
  
  show(target, options = {}) {
    const {
      text = '加载中...',
      type = 'spinner',
      overlay = true
    } = options;
    
    const loader = this.createLoader(text, type, overlay);
    
    if (typeof target === 'string') {
      target = document.querySelector(target);
    }
    
    target.appendChild(loader);
    this.activeLoaders.add(loader);
    
    return loader;
  }
  
  hide(loader) {
    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
      this.activeLoaders.delete(loader);
    }
  }
  
  hideAll() {
    this.activeLoaders.forEach(loader => {
      this.hide(loader);
    });
  }
  
  createLoader(text, type, overlay) {
    const loader = document.createElement('div');
    loader.className = `glass-loader${overlay ? ' overlay' : ''}`;
    
    let content = '';
    
    switch (type) {
      case 'dots':
        content = `
          <div class="loader-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        `;
        break;
      case 'progress':
        content = `
          <div class="loader-progress">
            <div class="progress-bar"></div>
          </div>
        `;
        break;
      default:
        content = '<div class="loader-spinner"></div>';
    }
    
    if (text) {
      content += `<div class="loader-text">${text}</div>`;
    }
    
    loader.innerHTML = content;
    return loader;
  }
}

// 使用示例
const loaderManager = new LoaderManager();

// 显示加载器
const loader = loaderManager.show('#content', {
  text: '数据加载中...',
  type: 'spinner'
});

// 3秒后隐藏
setTimeout(() => {
  loaderManager.hide(loader);
}, 3000);
```

### 按钮加载状态

```javascript
function setButtonLoading(button, loading = true) {
  if (loading) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    
    const loader = document.createElement('div');
    loader.className = 'glass-loader inline small';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    
    button.insertBefore(loader, button.firstChild);
    button.classList.add('loading');
  } else {
    button.disabled = false;
    const loader = button.querySelector('.glass-loader');
    if (loader) {
      loader.remove();
    }
    button.classList.remove('loading');
    
    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }
  }
}

// 使用示例
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', async () => {
  setButtonLoading(submitButton, true);
  
  try {
    await submitForm();
  } finally {
    setButtonLoading(submitButton, false);
  }
});
```

## 应用场景

### 页面加载

```html
<div id="page-loader" class="glass-loader overlay">
  <div class="loader-spinner large"></div>
  <div class="loader-text">页面加载中...</div>
</div>

<style>
.glass-loader.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
```

### 数据加载

```html
<div class="data-container">
  <div class="glass-loader" id="data-loader">
    <div class="loader-spinner"></div>
    <div class="loader-text">正在获取数据...</div>
  </div>
  
  <div class="data-content" style="display: none;">
    <!-- 数据内容 -->
  </div>
</div>
```

### 表单提交

```html
<form class="glass-form">
  <div class="form-group">
    <input type="text" class="glass-input" placeholder="用户名">
  </div>
  
  <div class="form-group">
    <input type="password" class="glass-input" placeholder="密码">
  </div>
  
  <button type="submit" class="glass-button primary large" id="login-btn">
    登录
  </button>
</form>

<script>
document.querySelector('#login-btn').addEventListener('click', (e) => {
  e.preventDefault();
  
  // 显示加载状态
  setButtonLoading(e.target, true);
  e.target.textContent = '登录中...';
  
  // 模拟登录请求
  setTimeout(() => {
    setButtonLoading(e.target, false);
    e.target.textContent = '登录';
  }, 2000);
});
</script>
```

### 图片懒加载

```html
<div class="image-container">
  <div class="glass-loader" id="image-loader">
    <div class="loader-spinner"></div>
    <div class="loader-text">图片加载中...</div>
  </div>
  
  <img src="large-image.jpg" onload="hideImageLoader()" style="display: none;">
</div>

<script>
function hideImageLoader() {
  document.querySelector('#image-loader').style.display = 'none';
  document.querySelector('img').style.display = 'block';
}
</script>
```