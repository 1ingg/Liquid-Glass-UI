# 卡片 Card

卡片是一个灵活的内容容器，用于显示相关信息的组合。Liquid Glass UI 的卡片采用玻璃态设计，具有优雅的透明效果和现代化的视觉体验。

## 基础用法

最基本的卡片：

```html
<div class="glass-card">
  <div class="card-content">
    <h3>基础卡片</h3>
    <p>这是一个基础的玻璃态卡片，展示了最简单的用法。卡片具有半透明的背景和毛玻璃效果。</p>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-card" style="width: 100%; max-width: 400px; margin: 0;">
    <div style="padding: 24px;">
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 12px 0; font-size: 18px;">基础卡片</h3>
      <p style="color: rgba(255, 255, 255, 0.7); margin: 0; line-height: 1.5;">这是一个基础的玻璃态卡片，展示了最简单的用法。卡片具有半透明的背景和毛玻璃效果。</p>
    </div>
  </div>
</div>

## 带头部的卡片

```html
<div class="glass-card">
  <div class="card-header">
    <h3 class="card-title">用户信息</h3>
    <div class="card-actions">
      <button class="glass-button small">编辑</button>
    </div>
  </div>
  <div class="card-content">
    <div class="user-info">
      <div class="avatar">👤</div>
      <div class="info">
        <div class="name">张三</div>
        <div class="email">zhangsan@example.com</div>
        <div class="role">管理员</div>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-card" style="width: 100%; max-width: 400px; margin: 0;">
    <div style="padding: 20px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center;">
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 18px;">用户信息</h3>
      <button class="glass-button" style="padding: 8px 16px; font-size: 13px;">编辑</button>
    </div>
    <div style="padding: 24px;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 24px;">👤</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">张三</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 14px; margin-bottom: 2px;">zhangsan@example.com</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">管理员</div>
        </div>
      </div>
    </div>
  </div>
</div>

## 带图片的卡片

```html
<div class="glass-card image-card">
  <div class="card-image">
    <img src="https://via.placeholder.com/400x200" alt="卡片图片">
    <div class="image-overlay">
      <button class="glass-button">查看详情</button>
    </div>
  </div>
  <div class="card-content">
    <h3 class="card-title">美丽风景</h3>
    <p class="card-description">
      一张展示自然美景的图片，蓝天白云下的山川河流，令人心旷神怡。
    </p>
    <div class="card-meta">
      <span class="meta-item">📅 2024-01-15</span>
      <span class="meta-item">👁️ 1,234 次浏览</span>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-card" style="width: 100%; max-width: 400px; margin: 0; overflow: hidden;">
    <div style="position: relative; height: 200px; background: linear-gradient(45deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center;">
      <div style="color: rgba(255, 255, 255, 0.8); font-size: 48px;">🏔️</div>
      <div style="position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
        <button class="glass-button">查看详情</button>
      </div>
    </div>
    <div style="padding: 24px;">
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 12px 0; font-size: 18px;">美丽风景</h3>
      <p style="color: rgba(255, 255, 255, 0.7); margin: 0 0 16px 0; line-height: 1.5; font-size: 14px;">
        一张展示自然美景的图片，蓝天白云下的山川河流，令人心旷神怡。
      </p>
      <div style="display: flex; gap: 16px; color: rgba(255, 255, 255, 0.6); font-size: 13px;">
        <span>📅 2024-01-15</span>
        <span>👁️ 1,234 次浏览</span>
      </div>
    </div>
  </div>
</div>

## 统计卡片

```html
<div class="stats-grid">
  <div class="glass-card stat-card">
    <div class="stat-icon">👥</div>
    <div class="stat-content">
      <div class="stat-number">1,234</div>
      <div class="stat-label">总用户数</div>
      <div class="stat-trend positive">
        <span class="trend-icon">↗️</span>
        <span class="trend-text">+12%</span>
      </div>
    </div>
  </div>
  
  <div class="glass-card stat-card">
    <div class="stat-icon">💰</div>
    <div class="stat-content">
      <div class="stat-number">¥89,123</div>
      <div class="stat-label">月收入</div>
      <div class="stat-trend positive">
        <span class="trend-icon">↗️</span>
        <span class="trend-text">+8.5%</span>
      </div>
    </div>
  </div>
  
  <div class="glass-card stat-card">
    <div class="stat-icon">📊</div>
    <div class="stat-content">
      <div class="stat-number">98.5%</div>
      <div class="stat-label">系统正常运行时间</div>
      <div class="stat-trend neutral">
        <span class="trend-icon">➡️</span>
        <span class="trend-text">稳定</span>
      </div>
    </div>
  </div>
  
  <div class="glass-card stat-card">
    <div class="stat-icon">🎯</div>
    <div class="stat-content">
      <div class="stat-number">456</div>
      <div class="stat-label">今日活跃</div>
      <div class="stat-trend negative">
        <span class="trend-icon">↘️</span>
        <span class="trend-text">-3.2%</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; width: 100%;">
    <div class="glass-card" style="padding: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 12px;">👥</div>
      <div style="color: rgba(255, 255, 255, 0.9); font-size: 24px; font-weight: 600; margin-bottom: 4px;">1,234</div>
      <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px;">总用户数</div>
      <div style="color: rgba(34, 197, 94, 0.8); font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 4px;">
        <span>↗️</span>
        <span>+12%</span>
      </div>
    </div>
    
    <div class="glass-card" style="padding: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 12px;">💰</div>
      <div style="color: rgba(255, 255, 255, 0.9); font-size: 24px; font-weight: 600; margin-bottom: 4px;">¥89,123</div>
      <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px;">月收入</div>
      <div style="color: rgba(34, 197, 94, 0.8); font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 4px;">
        <span>↗️</span>
        <span>+8.5%</span>
      </div>
    </div>
    
    <div class="glass-card" style="padding: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 12px;">📊</div>
      <div style="color: rgba(255, 255, 255, 0.9); font-size: 24px; font-weight: 600; margin-bottom: 4px;">98.5%</div>
      <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px;">系统正常运行时间</div>
      <div style="color: rgba(156, 163, 175, 0.8); font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 4px;">
        <span>➡️</span>
        <span>稳定</span>
      </div>
    </div>
    
    <div class="glass-card" style="padding: 24px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 12px;">🎯</div>
      <div style="color: rgba(255, 255, 255, 0.9); font-size: 24px; font-weight: 600; margin-bottom: 4px;">456</div>
      <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px;">今日活跃</div>
      <div style="color: rgba(239, 68, 68, 0.8); font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 4px;">
        <span>↘️</span>
        <span>-3.2%</span>
      </div>
    </div>
  </div>
</div>

## 产品卡片

```html
<div class="product-grid">
  <div class="glass-card product-card">
    <div class="product-image">
      <img src="https://via.placeholder.com/300x200" alt="产品图片">
      <div class="product-badge">新品</div>
      <div class="product-actions">
        <button class="action-btn favorite">❤️</button>
        <button class="action-btn share">📤</button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">苹果 iPhone 15 Pro</h3>
      <p class="product-description">全新的钛合金设计，配备强大的A17 Pro芯片</p>
      <div class="product-rating">
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <span class="rating-text">(128 评价)</span>
      </div>
      <div class="product-footer">
        <div class="price">
          <span class="current-price">¥8,999</span>
          <span class="original-price">¥9,999</span>
        </div>
        <button class="glass-button primary">立即购买</button>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-card" style="width: 100%; max-width: 320px; margin: 0; overflow: hidden;">
    <div style="position: relative; height: 200px; background: linear-gradient(45deg, #f3f4f6, #e5e7eb); display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 64px;">📱</div>
      <div style="position: absolute; top: 12px; left: 12px; background: rgba(239, 68, 68, 0.9); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">新品</div>
      <div style="position: absolute; top: 12px; right: 12px; display: flex; gap: 8px;">
        <button style="width: 32px; height: 32px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;">❤️</button>
        <button style="width: 32px; height: 32px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;">📤</button>
      </div>
    </div>
    <div style="padding: 20px;">
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">苹果 iPhone 15 Pro</h3>
      <p style="color: rgba(255, 255, 255, 0.6); margin: 0 0 12px 0; font-size: 13px; line-height: 1.4;">全新的钛合金设计，配备强大的A17 Pro芯片</p>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
        <div style="color: #fbbf24;">⭐⭐⭐⭐⭐</div>
        <span style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">(128 评价)</span>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 600;">¥8,999</span>
          <span style="color: rgba(255, 255, 255, 0.5); font-size: 14px; text-decoration: line-through; margin-left: 8px;">¥9,999</span>
        </div>
        <button class="glass-button primary" style="padding: 8px 16px; font-size: 13px;">立即购买</button>
      </div>
    </div>
  </div>
</div>

## 通知卡片

```html
<div class="notification-cards">
  <div class="glass-card notification-card success">
    <div class="notification-icon">✅</div>
    <div class="notification-content">
      <div class="notification-title">操作成功</div>
      <div class="notification-message">您的设置已保存成功</div>
      <div class="notification-time">2分钟前</div>
    </div>
    <button class="notification-close">✖️</button>
  </div>
  
  <div class="glass-card notification-card warning">
    <div class="notification-icon">⚠️</div>
    <div class="notification-content">
      <div class="notification-title">注意</div>
      <div class="notification-message">您的存储空间即将用完</div>
      <div class="notification-time">5分钟前</div>
    </div>
    <button class="notification-close">✖️</button>
  </div>
  
  <div class="glass-card notification-card error">
    <div class="notification-icon">❌</div>
    <div class="notification-content">
      <div class="notification-title">错误</div>
      <div class="notification-message">网络连接失败，请检查网络设置</div>
      <div class="notification-time">10分钟前</div>
    </div>
    <button class="notification-close">✖️</button>
  </div>
</div>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 400px;">
    <div class="glass-card" style="padding: 16px; display: flex; align-items: flex-start; gap: 12px; border-left: 4px solid rgba(34, 197, 94, 0.8);">
      <div style="font-size: 20px;">✅</div>
      <div style="flex: 1;">
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">操作成功</div>
        <div style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin-bottom: 4px;">您的设置已保存成功</div>
        <div style="color: rgba(255, 255, 255, 0.5); font-size: 12px;">2分钟前</div>
      </div>
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.6); cursor: pointer; font-size: 12px;">✖️</button>
    </div>
    
    <div class="glass-card" style="padding: 16px; display: flex; align-items: flex-start; gap: 12px; border-left: 4px solid rgba(251, 191, 36, 0.8);">
      <div style="font-size: 20px;">⚠️</div>
      <div style="flex: 1;">
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">注意</div>
        <div style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin-bottom: 4px;">您的存储空间即将用完</div>
        <div style="color: rgba(255, 255, 255, 0.5); font-size: 12px;">5分钟前</div>
      </div>
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.6); cursor: pointer; font-size: 12px;">✖️</button>
    </div>
    
    <div class="glass-card" style="padding: 16px; display: flex; align-items: flex-start; gap: 12px; border-left: 4px solid rgba(239, 68, 68, 0.8);">
      <div style="font-size: 20px;">❌</div>
      <div style="flex: 1;">
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">错误</div>
        <div style="color: rgba(255, 255, 255, 0.7); font-size: 14px; margin-bottom: 4px;">网络连接失败，请检查网络设置</div>
        <div style="color: rgba(255, 255, 255, 0.5); font-size: 12px;">10分钟前</div>
      </div>
      <button style="background: none; border: none; color: rgba(255, 255, 255, 0.6); cursor: pointer; font-size: 12px;">✖️</button>
    </div>
  </div>
</div>

## 可交互卡片

```html
<div class="interactive-card-grid">
  <div class="glass-card interactive-card" tabindex="0">
    <div class="card-content">
      <div class="feature-icon">🚀</div>
      <h3 class="feature-title">性能优化</h3>
      <p class="feature-description">提升应用性能，优化用户体验</p>
      <div class="feature-status">
        <span class="status-dot active"></span>
        <span class="status-text">已启用</span>
      </div>
    </div>
  </div>
  
  <div class="glass-card interactive-card" tabindex="0">
    <div class="card-content">
      <div class="feature-icon">🔒</div>
      <h3 class="feature-title">安全防护</h3>
      <p class="feature-description">多层安全防护，保障数据安全</p>
      <div class="feature-status">
        <span class="status-dot active"></span>
        <span class="status-text">已启用</span>
      </div>
    </div>
  </div>
  
  <div class="glass-card interactive-card" tabindex="0">
    <div class="card-content">
      <div class="feature-icon">📊</div>
      <h3 class="feature-title">数据分析</h3>
      <p class="feature-description">深度数据分析，洞察业务趋势</p>
      <div class="feature-status">
        <span class="status-dot inactive"></span>
        <span class="status-text">未启用</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; width: 100%;">
    <div class="glass-card" style="padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
      <div style="font-size: 48px; margin-bottom: 16px;">🚀</div>
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 8px 0; font-size: 16px;">性能优化</h3>
      <p style="color: rgba(255, 255, 255, 0.6); margin: 0 0 16px 0; font-size: 13px; line-height: 1.4;">提升应用性能，优化用户体验</p>
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: rgba(34, 197, 94, 0.8);"></span>
        <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">已启用</span>
      </div>
    </div>
    
    <div class="glass-card" style="padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
      <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 8px 0; font-size: 16px;">安全防护</h3>
      <p style="color: rgba(255, 255, 255, 0.6); margin: 0 0 16px 0; font-size: 13px; line-height: 1.4;">多层安全防护，保障数据安全</p>
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: rgba(34, 197, 94, 0.8);"></span>
        <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">已启用</span>
      </div>
    </div>
    
    <div class="glass-card" style="padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
      <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
      <h3 style="color: rgba(255, 255, 255, 0.9); margin: 0 0 8px 0; font-size: 16px;">数据分析</h3>
      <p style="color: rgba(255, 255, 255, 0.6); margin: 0 0 16px 0; font-size: 13px; line-height: 1.4;">深度数据分析，洞察业务趋势</p>
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: rgba(156, 163, 175, 0.6);"></span>
        <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">未启用</span>
      </div>
    </div>
  </div>
</div>

## JavaScript 增强功能

### 卡片交互

```javascript
// 卡片悬停效果
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.glass-card.interactive-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '';
    });
    
    card.addEventListener('click', function() {
      // 添加点击动画
      this.style.transform = 'translateY(-4px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      }, 100);
    });
  });
}

// 卡片懒加载
function initCardLazyLoading() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
  });
}
```

### 通知卡片管理

```javascript
class NotificationManager {
  constructor() {
    this.container = this.createContainer();
    this.notifications = new Map();
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.className = 'notification-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      max-width: 400px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
    return container;
  }
  
  show(options = {}) {
    const {
      type = 'info',
      title = '',
      message = '',
      duration = 5000,
      closable = true
    } = options;
    
    const id = Date.now().toString();
    const notification = this.createNotification(id, type, title, message, closable);
    
    this.container.appendChild(notification);
    this.notifications.set(id, notification);
    
    // 入场动画
    requestAnimationFrame(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    });
    
    // 自动关闭
    if (duration > 0) {
      setTimeout(() => this.hide(id), duration);
    }
    
    return id;
  }
  
  createNotification(id, type, title, message, closable) {
    const notification = document.createElement('div');
    notification.className = `glass-card notification-card ${type}`;
    notification.style.cssText = `
      margin-bottom: 12px;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
    `;
    
    const icons = {
      success: '✅',
      warning: '⚠️',
      error: '❌',
      info: 'ℹ️'
    };
    
    notification.innerHTML = `
      <div style="font-size: 20px;">${icons[type] || icons.info}</div>
      <div style="flex: 1;">
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">${title}</div>
        <div style="color: rgba(255, 255, 255, 0.7); font-size: 14px;">${message}</div>
      </div>
      ${closable ? '<button class="notification-close" style="background: none; border: none; color: rgba(255, 255, 255, 0.6); cursor: pointer;">✖️</button>' : ''}
    `;
    
    if (closable) {
      notification.querySelector('.notification-close').addEventListener('click', () => {
        this.hide(id);
      });
    }
    
    return notification;
  }
  
  hide(id) {
    const notification = this.notifications.get(id);
    if (notification) {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
        this.notifications.delete(id);
      }, 300);
    }
  }
  
  clear() {
    this.notifications.forEach((notification, id) => {
      this.hide(id);
    });
  }
}

// 使用示例
const notifications = new NotificationManager();

// 显示不同类型的通知
notifications.show({
  type: 'success',
  title: '操作成功',
  message: '您的设置已保存成功'
});
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-card` | 基础卡片样式 |
| `.card-header` | 卡片头部 |
| `.card-title` | 卡片标题 |
| `.card-content` | 卡片内容区域 |
| `.card-footer` | 卡片底部 |
| `.card-actions` | 卡片操作区域 |
| `.image-card` | 带图片的卡片 |
| `.stat-card` | 统计卡片 |
| `.product-card` | 产品卡片 |
| `.notification-card` | 通知卡片 |
| `.interactive-card` | 可交互卡片 |

## 自定义样式

通过CSS变量自定义卡片外观：

```css
:root {
  --card-bg: rgba(255, 255, 255, 0.08);
  --card-border: rgba(255, 255, 255, 0.12);
  --card-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  --card-backdrop-filter: blur(16px);
  --card-border-radius: 16px;
  --card-padding: 24px;
  --card-hover-transform: translateY(-4px);
  --card-hover-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}
```

## 可访问性

- 支持键盘导航
- 提供适当的ARIA标签
- 确保足够的颜色对比度
- 支持屏幕阅读器

```html
<div class="glass-card" role="article" aria-labelledby="card-title">
  <h3 id="card-title">卡片标题</h3>
  <p>卡片内容</p>
  <button aria-label="执行操作">操作按钮</button>
</div>
```

## 注意事项

- 避免在卡片中放置过多信息
- 保持卡片间距一致
- 确保图片有合适的备用文本
- 在移动设备上测试触摸体验
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