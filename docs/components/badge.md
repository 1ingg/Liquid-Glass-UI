# 徽章 Badge

徽章是用于显示数字、状态或标签的小型信息指示器。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 数字徽章

```html
<span class="glass-badge">5</span>
<span class="glass-badge">99</span>
<span class="glass-badge">99+</span>
```

### 文字徽章

```html
<span class="glass-badge">新</span>
<span class="glass-badge">热门</span>
<span class="glass-badge">推荐</span>
```

### 基础徽章

```html
<span class="glass-badge">默认</span>
<span class="glass-badge verified">已认证</span>
<span class="glass-badge premium">高级</span>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <span class="glass-badge">默认</span>
  <span class="glass-badge verified" style="margin-left: 8px;">已认证</span>
  <span class="glass-badge premium" style="margin-left: 8px;">高级</span>
</div>

## 徽章类型

### 状态徽章

```html
<span class="glass-badge primary">主要</span>
<span class="glass-badge success">成功</span>
<span class="glass-badge warning">警告</span>
<span class="glass-badge danger">错误</span>
<span class="glass-badge info">信息</span>
```

### 点状徽章

```html
<span class="glass-badge dot"></span>
<span class="glass-badge dot success"></span>
<span class="glass-badge dot warning"></span>
<span class="glass-badge dot danger"></span>
```

## 与元素组合

### 按钮徽章

```html
<button class="glass-button">
  消息
  <span class="glass-badge">5</span>
</button>

<button class="glass-button primary">
  通知
  <span class="glass-badge danger">!</span>
</button>
```

### 头像徽章

```html
<div class="avatar-with-badge">
  <div class="glass-avatar">👤</div>
  <span class="glass-badge dot success"></span>
</div>
```

### 标签页徽章

```html
<div class="tab-with-badge">
  <span class="tab-text">未读消息</span>
  <span class="glass-badge">12</span>
</div>
```

## CSS 类名

### 基础类名

- `.glass-badge` - 基础徽章样式

### 修饰类名

**类型修饰符**
- `.primary` - 主要类型
- `.success` - 成功类型
- `.warning` - 警告类型
- `.danger` - 危险类型
- `.info` - 信息类型
- `.dot` - 点状徽章

## JavaScript 增强

### 动态更新徽章

```javascript
function updateBadge(badgeElement, value) {
  if (value === 0) {
    badgeElement.style.display = 'none';
  } else {
    badgeElement.style.display = '';
    badgeElement.textContent = value > 99 ? '99+' : value;
  }
}

// 使用示例
const badge = document.querySelector('.message-badge');
updateBadge(badge, 15);
```

### 徽章动画

```javascript
function animateBadge(badgeElement) {
  badgeElement.classList.add('badge-animate');
  
  setTimeout(() => {
    badgeElement.classList.remove('badge-animate');
  }, 300);
}

// 新消息时触发动画
function onNewMessage() {
  const badge = document.querySelector('.notification-badge');
  animateBadge(badge);
}
```

## 应用场景

### 导航菜单

```html
<nav class="navigation">
  <a href="/messages" class="nav-item">
    消息
    <span class="glass-badge">3</span>
  </a>
  <a href="/notifications" class="nav-item">
    通知
    <span class="glass-badge warning">!</span>
  </a>
  <a href="/orders" class="nav-item">
    订单
    <span class="glass-badge success">已完成</span>
  </a>
</nav>
```

### 商品标签

```html
<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="商品">
    <span class="glass-badge danger">限时</span>
    <span class="glass-badge success">包邮</span>
  </div>
  <div class="product-info">
    <h3>商品名称</h3>
    <p>¥199</p>
  </div>
</div>
```

### 状态指示

```html
<div class="user-list">
  <div class="user-item">
    <div class="user-avatar">👤</div>
    <span class="user-name">用户A</span>
    <span class="glass-badge dot success" title="在线"></span>
  </div>
  <div class="user-item">
    <div class="user-avatar">👤</div>
    <span class="user-name">用户B</span>
    <span class="glass-badge dot" title="离线"></span>
  </div>
</div>
```