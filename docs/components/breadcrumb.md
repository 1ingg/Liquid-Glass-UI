# 面包屑 Breadcrumb

面包屑是显示用户当前页面位置的导航组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础面包屑

```html
<nav class="glass-breadcrumb">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/products" class="breadcrumb-item">产品</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">详情</span>
</nav>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <nav class="glass-breadcrumb">
    <a href="/#" class="breadcrumb-item">首页</a>
    <span class="breadcrumb-separator">/</span>
    <a href="/#" class="breadcrumb-item">产品</a>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item current">详情</span>
  </nav>
</div>

### 带图标的面包屑

```html
<nav class="glass-breadcrumb">
  <a href="/" class="breadcrumb-item">
    <span class="breadcrumb-icon">🏠</span>
    首页
  </a>
  <span class="breadcrumb-separator">/</span>
  <a href="/category" class="breadcrumb-item">
    <span class="breadcrumb-icon">📁</span>
    分类
  </a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">
    <span class="breadcrumb-icon">📄</span>
    详情页
  </span>
</nav>
```

## 面包屑样式

### 箭头分隔符

```html
<nav class="glass-breadcrumb arrow">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">→</span>
  <a href="/docs" class="breadcrumb-item">文档</a>
  <span class="breadcrumb-separator">→</span>
  <span class="breadcrumb-item current">组件</span>
</nav>
```

### 点分隔符

```html
<nav class="glass-breadcrumb dot">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">•</span>
  <a href="/blog" class="breadcrumb-item">博客</a>
  <span class="breadcrumb-separator">•</span>
  <span class="breadcrumb-item current">文章标题</span>
</nav>
```

## 面包屑尺寸

```html
<!-- 小尺寸 -->
<nav class="glass-breadcrumb small">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">当前页</span>
</nav>

<!-- 默认尺寸 -->
<nav class="glass-breadcrumb">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">当前页</span>
</nav>

<!-- 大尺寸 -->
<nav class="glass-breadcrumb large">
  <a href="/" class="breadcrumb-item">首页</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">当前页</span>
</nav>
```

## CSS 类名

### 基础类名

- `.glass-breadcrumb` - 面包屑容器
- `.breadcrumb-item` - 面包屑项目
- `.breadcrumb-separator` - 分隔符
- `.breadcrumb-icon` - 面包屑图标

### 修饰类名

**样式修饰符**
- `.arrow` - 箭头分隔符
- `.dot` - 点分隔符

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `.current` - 当前页面

## JavaScript 增强

### 动态面包屑

```javascript
function createBreadcrumb(pathArray) {
  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'glass-breadcrumb';
  
  pathArray.forEach((item, index) => {
    // 创建面包屑项
    const breadcrumbItem = document.createElement(
      index === pathArray.length - 1 ? 'span' : 'a'
    );
    
    breadcrumbItem.className = 'breadcrumb-item';
    if (index === pathArray.length - 1) {
      breadcrumbItem.classList.add('current');
    } else {
      breadcrumbItem.href = item.url;
    }
    
    breadcrumbItem.textContent = item.text;
    breadcrumb.appendChild(breadcrumbItem);
    
    // 添加分隔符（除了最后一项）
    if (index < pathArray.length - 1) {
      const separator = document.createElement('span');
      separator.className = 'breadcrumb-separator';
      separator.textContent = '/';
      breadcrumb.appendChild(separator);
    }
  });
  
  return breadcrumb;
}

// 使用示例
const path = [
  { text: '首页', url: '/' },
  { text: '产品', url: '/products' },
  { text: '详情', url: null }
];

const breadcrumbElement = createBreadcrumb(path);
document.body.appendChild(breadcrumbElement);
```

### 自动生成面包屑

```javascript
function generateBreadcrumbFromURL() {
  const path = window.location.pathname;
  const segments = path.split('/').filter(segment => segment !== '');
  
  const breadcrumbData = [{ text: '首页', url: '/' }];
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += '/' + segment;
    const text = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbData.push({
      text: text,
      url: index === segments.length - 1 ? null : currentPath
    });
  });
  
  return createBreadcrumb(breadcrumbData);
}
```

## 应用场景

### 电商网站

```html
<nav class="glass-breadcrumb">
  <a href="/" class="breadcrumb-item">
    <span class="breadcrumb-icon">🏠</span>
    首页
  </a>
  <span class="breadcrumb-separator">/</span>
  <a href="/electronics" class="breadcrumb-item">数码电子</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/electronics/phones" class="breadcrumb-item">手机</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">iPhone 15 Pro</span>
</nav>
```

### 文档网站

```html
<nav class="glass-breadcrumb">
  <a href="/" class="breadcrumb-item">文档首页</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/guide" class="breadcrumb-item">使用指南</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/guide/components" class="breadcrumb-item">组件</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">面包屑</span>
</nav>
```

### 管理后台

```html
<nav class="glass-breadcrumb">
  <a href="/admin" class="breadcrumb-item">
    <span class="breadcrumb-icon">⚙️</span>
    控制台
  </a>
  <span class="breadcrumb-separator">/</span>
  <a href="/admin/users" class="breadcrumb-item">用户管理</a>
  <span class="breadcrumb-separator">/</span>
  <a href="/admin/users/list" class="breadcrumb-item">用户列表</a>
  <span class="breadcrumb-separator">/</span>
  <span class="breadcrumb-item current">用户详情</span>
</nav>
```