# 徽章 Badge

徽章是用于显示状态、计数或标签的小型标记组件。Liquid Glass UI 的徽章具有精美的玻璃态效果，可以灵活地应用于各种场景。

## 基础用法

最基本的徽章：

```html
<span class="glass-badge">新</span>
<span class="glass-badge">热门</span>
<span class="glass-badge">推荐</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <span class="glass-badge" style="padding: 4px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">新</span>
    <span class="glass-badge" style="padding: 4px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">热门</span>
    <span class="glass-badge" style="padding: 4px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">推荐</span>
  </div>
</div>

## 不同类型

```html
<!-- 默认类型 -->
<span class="glass-badge">默认</span>

<!-- 成功类型 -->
<span class="glass-badge success">成功</span>

<!-- 警告类型 -->
<span class="glass-badge warning">警告</span>

<!-- 错误类型 -->
<span class="glass-badge error">错误</span>

<!-- 信息类型 -->
<span class="glass-badge info">信息</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <span style="padding: 4px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">默认</span>
    <span style="padding: 4px 12px; background: rgba(16, 185, 129, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(16, 185, 129, 0.3);">成功</span>
    <span style="padding: 4px 12px; background: rgba(245, 158, 11, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(245, 158, 11, 0.3);">警告</span>
    <span style="padding: 4px 12px; background: rgba(239, 68, 68, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(239, 68, 68, 0.3);">错误</span>
    <span style="padding: 4px 12px; background: rgba(59, 130, 246, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(59, 130, 246, 0.3);">信息</span>
  </div>
</div>

## 不同尺寸

```html
<!-- 小尺寸 -->
<span class="glass-badge small">小</span>

<!-- 标准尺寸 -->
<span class="glass-badge">标准</span>

<!-- 大尺寸 -->
<span class="glass-badge large">大</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <span style="padding: 2px 8px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 10px; font-size: 10px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">小</span>
    <span style="padding: 4px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">标准</span>
    <span style="padding: 6px 16px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 14px; font-size: 14px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">大</span>
  </div>
</div>

## 数字徽章

```html
<div class="badge-container">
  <span class="item-icon">📧</span>
  <span class="glass-badge number">3</span>
</div>

<div class="badge-container">
  <span class="item-icon">🔔</span>
  <span class="glass-badge number">99+</span>
</div>

<div class="badge-container">
  <span class="item-icon">💬</span>
  <span class="glass-badge number dot"></span>
</div>
```

<div class="demo-container">
  <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
    <div style="position: relative; display: inline-flex; align-items: center; justify-content: center;">
      <span style="font-size: 32px;">📧</span>
      <span style="position: absolute; top: -6px; right: -6px; padding: 2px 6px; background: rgba(239, 68, 68, 0.9); color: white; border-radius: 10px; font-size: 10px; font-weight: 600; min-width: 18px; text-align: center; backdrop-filter: blur(10px); border: 1px solid rgba(239, 68, 68, 0.3);">3</span>
    </div>
    
    <div style="position: relative; display: inline-flex; align-items: center; justify-content: center;">
      <span style="font-size: 32px;">🔔</span>
      <span style="position: absolute; top: -6px; right: -6px; padding: 2px 6px; background: rgba(239, 68, 68, 0.9); color: white; border-radius: 10px; font-size: 10px; font-weight: 600; min-width: 18px; text-align: center; backdrop-filter: blur(10px); border: 1px solid rgba(239, 68, 68, 0.3);">99+</span>
    </div>
    
    <div style="position: relative; display: inline-flex; align-items: center; justify-content: center;">
      <span style="font-size: 32px;">💬</span>
      <span style="position: absolute; top: 2px; right: 2px; width: 12px; height: 12px; background: rgba(239, 68, 68, 0.9); border-radius: 50%; border: 2px solid rgba(255, 255, 255, 0.2);"></span>
    </div>
  </div>
</div>

## 带图标的徽章

```html
<span class="glass-badge icon-badge">
  <span class="badge-icon">⭐</span>
  推荐
</span>

<span class="glass-badge icon-badge success">
  <span class="badge-icon">✓</span>
  已完成
</span>

<span class="glass-badge icon-badge warning">
  <span class="badge-icon">!</span>
  注意
</span>

<span class="glass-badge icon-badge error">
  <span class="badge-icon">✗</span>
  失败
</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <span style="padding: 6px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; gap: 6px;">
      <span>⭐</span>
      推荐
    </span>
    <span style="padding: 6px 12px; background: rgba(16, 185, 129, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(16, 185, 129, 0.3); display: flex; align-items: center; gap: 6px;">
      <span>✓</span>
      已完成
    </span>
    <span style="padding: 6px 12px; background: rgba(245, 158, 11, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(245, 158, 11, 0.3); display: flex; align-items: center; gap: 6px;">
      <span>!</span>
      注意
    </span>
    <span style="padding: 6px 12px; background: rgba(239, 68, 68, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(239, 68, 68, 0.3); display: flex; align-items: center; gap: 6px;">
      <span>✗</span>
      失败
    </span>
  </div>
</div>

## 可关闭的徽章

```html
<span class="glass-badge closable">
  标签1
  <button class="badge-close">×</button>
</span>

<span class="glass-badge closable info">
  JavaScript
  <button class="badge-close">×</button>
</span>

<span class="glass-badge closable success">
  Vue.js
  <button class="badge-close">×</button>
</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <span style="padding: 6px 8px 6px 12px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; gap: 8px;">
      标签1
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.7); cursor: pointer; font-size: 14px; padding: 0; line-height: 1; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s ease;" onmouseover="this.style.background='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='none'">×</button>
    </span>
    
    <span style="padding: 6px 8px 6px 12px; background: rgba(59, 130, 246, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(59, 130, 246, 0.3); display: flex; align-items: center; gap: 8px;">
      JavaScript
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.8); cursor: pointer; font-size: 14px; padding: 0; line-height: 1; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s ease;" onmouseover="this.style.background='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='none'">×</button>
    </span>
    
    <span style="padding: 6px 8px 6px 12px; background: rgba(16, 185, 129, 0.8); color: white; border-radius: 12px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(16, 185, 129, 0.3); display: flex; align-items: center; gap: 8px;">
      Vue.js
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.8); cursor: pointer; font-size: 14px; padding: 0; line-height: 1; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s ease;" onmouseover="this.style.background='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='none'">×</button>
    </span>
  </div>
</div>

## 徽章形状

```html
<!-- 圆形徽章 -->
<span class="glass-badge circle">A</span>
<span class="glass-badge circle">5</span>

<!-- 方形徽章 -->
<span class="glass-badge square">新</span>
<span class="glass-badge square">热</span>

<!-- 胶囊形徽章 -->
<span class="glass-badge pill">推荐</span>
<span class="glass-badge pill">限时</span>
```

<div class="demo-container">
  <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="display: flex; gap: 8px;">
        <span style="width: 32px; height: 32px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 50%; font-size: 14px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;">A</span>
        <span style="width: 32px; height: 32px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 50%; font-size: 14px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;">5</span>
      </div>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">圆形</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="display: flex; gap: 8px;">
        <span style="width: 32px; height: 32px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 4px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;">新</span>
        <span style="width: 32px; height: 32px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 4px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;">热</span>
      </div>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">方形</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <div style="display: flex; gap: 8px;">
        <span style="padding: 8px 16px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 20px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">推荐</span>
        <span style="padding: 8px 16px; background: rgba(255, 255, 255, 0.15); color: rgba(255, 255, 255, 0.9); border-radius: 20px; font-size: 12px; font-weight: 500; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">限时</span>
      </div>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">胶囊形</span>
    </div>
  </div>
</div>

## 实际应用场景

### 状态标识

```html
<div class="status-list">
  <div class="status-item">
    <span class="status-title">订单状态</span>
    <span class="glass-badge success">已完成</span>
  </div>
  
  <div class="status-item">
    <span class="status-title">支付状态</span>
    <span class="glass-badge warning">待支付</span>
  </div>
  
  <div class="status-item">
    <span class="status-title">物流状态</span>
    <span class="glass-badge info">运输中</span>
  </div>
  
  <div class="status-item">
    <span class="status-title">售后状态</span>
    <span class="glass-badge error">已拒绝</span>
  </div>
</div>
```

### 技能标签

```html
<div class="skill-tags">
  <h4>技能标签</h4>
  <div class="tag-list">
    <span class="glass-badge closable skill-tag">HTML</span>
    <span class="glass-badge closable skill-tag">CSS</span>
    <span class="glass-badge closable skill-tag">JavaScript</span>
    <span class="glass-badge closable skill-tag">Vue.js</span>
    <span class="glass-badge closable skill-tag">React</span>
    <span class="glass-badge closable skill-tag">Node.js</span>
    <span class="glass-badge closable skill-tag">Python</span>
    <span class="glass-badge closable skill-tag">TypeScript</span>
  </div>
</div>
```

### 通知徽章

```html
<div class="notification-badges">
  <div class="nav-item">
    <span class="nav-icon">📨</span>
    <span class="nav-text">消息</span>
    <span class="glass-badge number">5</span>
  </div>
  
  <div class="nav-item">
    <span class="nav-icon">🔔</span>
    <span class="nav-text">通知</span>
    <span class="glass-badge number">12</span>
  </div>
  
  <div class="nav-item">
    <span class="nav-icon">📋</span>
    <span class="nav-text">任务</span>
    <span class="glass-badge number dot"></span>
  </div>
</div>
```

### 产品标签

```html
<div class="product-card">
  <div class="product-image">
    <img src="https://via.placeholder.com/200x150" alt="产品图片">
    <div class="product-badges">
      <span class="glass-badge new">新品</span>
      <span class="glass-badge hot">热销</span>
    </div>
  </div>
  
  <div class="product-info">
    <h3 class="product-title">智能手机</h3>
    <div class="product-tags">
      <span class="glass-badge small">5G</span>
      <span class="glass-badge small">AI拍照</span>
      <span class="glass-badge small">快充</span>
    </div>
    <div class="product-price">¥2,999</div>
  </div>
</div>
```

## JavaScript 功能

### 基础徽章管理

```javascript
class BadgeManager {
  constructor() {
    this.badges = new Map();
    this.init();
  }
  
  init() {
    // 为可关闭的徽章添加事件监听
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('badge-close')) {
        this.closeBadge(e.target.closest('.glass-badge'));
      }
    });
  }
  
  createBadge(text, type = 'default', options = {}) {
    const badge = document.createElement('span');
    badge.className = `glass-badge ${type}`;
    
    if (options.size) {
      badge.classList.add(options.size);
    }
    
    if (options.shape) {
      badge.classList.add(options.shape);
    }
    
    if (options.closable) {
      badge.classList.add('closable');
      badge.innerHTML = `
        ${text}
        <button class="badge-close" aria-label="关闭">×</button>
      `;
    } else {
      badge.textContent = text;
    }
    
    if (options.icon) {
      const icon = document.createElement('span');
      icon.className = 'badge-icon';
      icon.textContent = options.icon;
      badge.insertBefore(icon, badge.firstChild);
    }
    
    return badge;
  }
  
  addBadge(container, text, type, options = {}) {
    const badge = this.createBadge(text, type, options);
    const id = options.id || `badge-${Date.now()}`;
    
    badge.dataset.badgeId = id;
    this.badges.set(id, badge);
    
    container.appendChild(badge);
    
    // 添加入场动画
    badge.style.opacity = '0';
    badge.style.transform = 'scale(0.8)';
    
    requestAnimationFrame(() => {
      badge.style.transition = 'all 0.3s ease';
      badge.style.opacity = '1';
      badge.style.transform = 'scale(1)';
    });
    
    return id;
  }
  
  removeBadge(badgeId, animate = true) {
    const badge = this.badges.get(badgeId);
    if (!badge) return;
    
    if (animate) {
      badge.style.transition = 'all 0.3s ease';
      badge.style.opacity = '0';
      badge.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        if (badge.parentNode) {
          badge.parentNode.removeChild(badge);
        }
        this.badges.delete(badgeId);
      }, 300);
    } else {
      if (badge.parentNode) {
        badge.parentNode.removeChild(badge);
      }
      this.badges.delete(badgeId);
    }
  }
  
  closeBadge(badge) {
    const badgeId = badge.dataset.badgeId;
    if (badgeId) {
      this.removeBadge(badgeId);
    } else {
      // 直接移除
      badge.style.transition = 'all 0.3s ease';
      badge.style.opacity = '0';
      badge.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        if (badge.parentNode) {
          badge.parentNode.removeChild(badge);
        }
      }, 300);
    }
  }
  
  updateBadgeText(badgeId, newText) {
    const badge = this.badges.get(badgeId);
    if (!badge) return;
    
    const closeBtn = badge.querySelector('.badge-close');
    if (closeBtn) {
      badge.childNodes[0].textContent = newText;
    } else {
      badge.textContent = newText;
    }
  }
  
  getBadgeCount(container) {
    return container.querySelectorAll('.glass-badge').length;
  }
}

// 使用示例
const badgeManager = new BadgeManager();

// 添加徽章
const container = document.querySelector('.tag-container');
badgeManager.addBadge(container, 'JavaScript', 'info', { 
  closable: true, 
  id: 'js-badge' 
});
```

### 数字徽章计数器

```javascript
class NumberBadge {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      max: 99,
      showZero: false,
      animate: true,
      ...options
    };
    
    this.count = 0;
    this.init();
  }
  
  init() {
    this.badge = this.createElement();
    this.element.appendChild(this.badge);
    this.updateDisplay();
  }
  
  createElement() {
    const badge = document.createElement('span');
    badge.className = 'glass-badge number';
    badge.style.cssText = `
      position: absolute;
      top: -8px;
      right: -8px;
      min-width: 18px;
      height: 18px;
      padding: 0 6px;
      background: #ef4444;
      color: white;
      border-radius: 9px;
      font-size: 11px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      transform: scale(0);
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    return badge;
  }
  
  setCount(count, animate = this.options.animate) {
    const oldCount = this.count;
    this.count = Math.max(0, count);
    
    if (animate && oldCount !== this.count) {
      this.animateChange();
    } else {
      this.updateDisplay();
    }
  }
  
  increment(amount = 1) {
    this.setCount(this.count + amount);
  }
  
  decrement(amount = 1) {
    this.setCount(this.count - amount);
  }
  
  updateDisplay() {
    const shouldShow = this.count > 0 || (this.count === 0 && this.options.showZero);
    
    if (shouldShow) {
      const displayText = this.count > this.options.max ? 
        `${this.options.max}+` : 
        this.count.toString();
      
      this.badge.textContent = displayText;
      this.badge.style.transform = 'scale(1)';
    } else {
      this.badge.style.transform = 'scale(0)';
    }
  }
  
  animateChange() {
    // 先缩小
    this.badge.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      this.updateDisplay();
      // 再放大
      this.badge.style.transform = 'scale(1.2)';
      
      setTimeout(() => {
        this.badge.style.transform = 'scale(1)';
      }, 150);
    }, 100);
  }
  
  hide() {
    this.badge.style.transform = 'scale(0)';
  }
  
  show() {
    if (this.count > 0 || this.options.showZero) {
      this.badge.style.transform = 'scale(1)';
    }
  }
  
  getCount() {
    return this.count;
  }
}

// 使用示例
const messageIcon = document.querySelector('.message-icon');
const messageBadge = new NumberBadge(messageIcon, { max: 99 });

// 更新计数
messageBadge.setCount(5);
messageBadge.increment(); // 6
messageBadge.decrement(2); // 4
```

### 标签输入组件

```javascript
class TagInput {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      placeholder: '添加标签...',
      maxTags: null,
      allowDuplicates: false,
      badgeType: 'default',
      ...options
    };
    
    this.tags = new Set();
    this.init();
  }
  
  init() {
    this.createElement();
    this.bindEvents();
  }
  
  createElement() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'tag-input-wrapper';
    this.wrapper.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      min-height: 48px;
      align-items: center;
    `;
    
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = this.options.placeholder;
    this.input.style.cssText = `
      background: none;
      border: none;
      outline: none;
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
      flex: 1;
      min-width: 120px;
    `;
    
    this.wrapper.appendChild(this.input);
    this.container.appendChild(this.wrapper);
  }
  
  bindEvents() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        this.addTag(this.input.value.trim());
      } else if (e.key === 'Backspace' && this.input.value === '') {
        this.removeLastTag();
      }
    });
    
    this.input.addEventListener('blur', () => {
      if (this.input.value.trim()) {
        this.addTag(this.input.value.trim());
      }
    });
  }
  
  addTag(text) {
    if (!text) return;
    
    // 检查重复
    if (!this.options.allowDuplicates && this.tags.has(text)) {
      this.input.value = '';
      return;
    }
    
    // 检查数量限制
    if (this.options.maxTags && this.tags.size >= this.options.maxTags) {
      this.input.value = '';
      return;
    }
    
    this.tags.add(text);
    
    // 创建徽章
    const badge = document.createElement('span');
    badge.className = `glass-badge closable ${this.options.badgeType}`;
    badge.innerHTML = `
      ${text}
      <button class="badge-close" aria-label="删除标签">×</button>
    `;
    
    // 添加删除事件
    badge.querySelector('.badge-close').addEventListener('click', () => {
      this.removeTag(text, badge);
    });
    
    // 插入到输入框前
    this.wrapper.insertBefore(badge, this.input);
    this.input.value = '';
    
    // 触发事件
    this.triggerChange();
  }
  
  removeTag(text, badge) {
    this.tags.delete(text);
    badge.remove();
    this.triggerChange();
  }
  
  removeLastTag() {
    const badges = this.wrapper.querySelectorAll('.glass-badge');
    if (badges.length > 0) {
      const lastBadge = badges[badges.length - 1];
      const text = lastBadge.childNodes[0].textContent.trim();
      this.removeTag(text, lastBadge);
    }
  }
  
  getTags() {
    return Array.from(this.tags);
  }
  
  setTags(tags) {
    this.clear();
    tags.forEach(tag => this.addTag(tag));
  }
  
  clear() {
    this.tags.clear();
    this.wrapper.querySelectorAll('.glass-badge').forEach(badge => {
      badge.remove();
    });
    this.triggerChange();
  }
  
  triggerChange() {
    this.container.dispatchEvent(new CustomEvent('tags-change', {
      detail: { tags: this.getTags() }
    }));
  }
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-badge` | 基础徽章样式 |
| `.glass-badge.small` | 小尺寸徽章 |
| `.glass-badge.large` | 大尺寸徽章 |
| `.glass-badge.success` | 成功类型徽章 |
| `.glass-badge.warning` | 警告类型徽章 |
| `.glass-badge.error` | 错误类型徽章 |
| `.glass-badge.info` | 信息类型徽章 |
| `.glass-badge.number` | 数字徽章 |
| `.glass-badge.closable` | 可关闭徽章 |
| `.glass-badge.circle` | 圆形徽章 |
| `.glass-badge.square` | 方形徽章 |
| `.glass-badge.pill` | 胶囊形徽章 |

## 自定义样式

通过CSS变量自定义徽章外观：

```css
:root {
  --badge-bg: rgba(255, 255, 255, 0.15);
  --badge-color: rgba(255, 255, 255, 0.9);
  --badge-border: rgba(255, 255, 255, 0.2);
  --badge-padding: 4px 12px;
  --badge-border-radius: 12px;
  --badge-font-size: 12px;
  --badge-font-weight: 500;
  --badge-backdrop-filter: blur(10px);
  
  --badge-success-bg: rgba(16, 185, 129, 0.8);
  --badge-warning-bg: rgba(245, 158, 11, 0.8);
  --badge-error-bg: rgba(239, 68, 68, 0.8);
  --badge-info-bg: rgba(59, 130, 246, 0.8);
}
```

## 可访问性

- 为徽章提供合适的语义
- 使用 `aria-label` 为关闭按钮提供描述
- 确保足够的颜色对比度
- 支持键盘导航

```html
<span class="glass-badge" role="status" aria-label="新消息提醒">
  新消息
</span>

<span class="glass-badge number" role="status" aria-label="5条未读消息">
  5
</span>

<span class="glass-badge closable">
  标签
  <button class="badge-close" aria-label="删除标签" tabindex="0">×</button>
</span>
```

## 注意事项

- 避免在徽章中放置过多文本
- 数字徽章建议设置最大显示值
- 确保徽章颜色有明确的语义
- 在移动设备上确保触摸区域足够大
- 合理使用动画，避免过度

<style scoped>
.demo-container {
  padding: 24px;
  margin: 16px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style> 