# 工具提示 Tooltip

工具提示是鼠标悬停时显示的信息提示组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础工具提示

```html
<button class="glass-button" data-tooltip="这是一个提示信息">
  悬停查看提示
</button>
```

### 不同位置

```html
<!-- 上方 -->
<button class="glass-button" data-tooltip="上方提示" data-tooltip-position="top">
  上方提示
</button>

<!-- 下方 -->
<button class="glass-button" data-tooltip="下方提示" data-tooltip-position="bottom">
  下方提示
</button>

<!-- 左侧 -->
<button class="glass-button" data-tooltip="左侧提示" data-tooltip-position="left">
  左侧提示
</button>

<!-- 右侧 -->
<button class="glass-button" data-tooltip="右侧提示" data-tooltip-position="right">
  右侧提示
</button>
```

## 工具提示内容

### 纯文本提示

```html
<span class="tooltip-trigger" data-tooltip="这是纯文本提示">
  文本提示
</span>
```

### 富文本提示

```html
<div class="tooltip-trigger" data-tooltip-html="true">
  <span>富文本提示</span>
  <div class="glass-tooltip">
    <strong>标题</strong><br>
    这是包含<em>HTML</em>的提示内容
  </div>
</div>
```

### 延迟显示

```html
<button class="glass-button" 
        data-tooltip="延迟500ms显示" 
        data-tooltip-delay="500">
  延迟提示
</button>
```

## 工具提示触发方式

### 鼠标悬停触发

```html
<button class="glass-button" data-tooltip="鼠标悬停显示" data-tooltip-trigger="hover">
  悬停触发
</button>
```

### 点击触发

```html
<button class="glass-button" data-tooltip="点击显示/隐藏" data-tooltip-trigger="click">
  点击触发
</button>
```

### 焦点触发

```html
<input type="text" 
       class="glass-input" 
       placeholder="获得焦点时显示提示"
       data-tooltip="请输入有效的邮箱地址" 
       data-tooltip-trigger="focus">
```

## CSS 类名

### 基础类名

- `.glass-tooltip` - 工具提示容器
- `.tooltip-trigger` - 触发元素
- `.tooltip-arrow` - 提示箭头

### 修饰类名

**位置修饰符**
- `.top` - 上方显示
- `.bottom` - 下方显示
- `.left` - 左侧显示
- `.right` - 右侧显示

**状态修饰符**
- `.show` - 显示状态

## JavaScript 增强

### 工具提示管理器

```javascript
class TooltipManager {
  constructor() {
    this.tooltips = new Map();
    this.init();
  }
  
  init() {
    this.bindEvents();
  }
  
  bindEvents() {
    document.addEventListener('mouseenter', (e) => {
      const trigger = e.target.closest('[data-tooltip]');
      if (trigger && this.getTriggerType(trigger) === 'hover') {
        this.show(trigger);
      }
    }, true);
    
    document.addEventListener('mouseleave', (e) => {
      const trigger = e.target.closest('[data-tooltip]');
      if (trigger && this.getTriggerType(trigger) === 'hover') {
        this.hide(trigger);
      }
    }, true);
    
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-tooltip]');
      if (trigger && this.getTriggerType(trigger) === 'click') {
        this.toggle(trigger);
      }
    });
    
    document.addEventListener('focus', (e) => {
      const trigger = e.target.closest('[data-tooltip]');
      if (trigger && this.getTriggerType(trigger) === 'focus') {
        this.show(trigger);
      }
    }, true);
    
    document.addEventListener('blur', (e) => {
      const trigger = e.target.closest('[data-tooltip]');
      if (trigger && this.getTriggerType(trigger) === 'focus') {
        this.hide(trigger);
      }
    }, true);
  }
  
  getTriggerType(element) {
    return element.dataset.tooltipTrigger || 'hover';
  }
  
  show(trigger) {
    const delay = parseInt(trigger.dataset.tooltipDelay) || 0;
    
    if (delay > 0) {
      setTimeout(() => {
        this.createTooltip(trigger);
      }, delay);
    } else {
      this.createTooltip(trigger);
    }
  }
  
  hide(trigger) {
    const tooltip = this.tooltips.get(trigger);
    if (tooltip) {
      tooltip.classList.remove('show');
      setTimeout(() => {
        if (tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
        }
        this.tooltips.delete(trigger);
      }, 200);
    }
  }
  
  toggle(trigger) {
    if (this.tooltips.has(trigger)) {
      this.hide(trigger);
    } else {
      this.show(trigger);
    }
  }
  
  createTooltip(trigger) {
    if (this.tooltips.has(trigger)) return;
    
    const content = trigger.dataset.tooltip;
    const position = trigger.dataset.tooltipPosition || 'top';
    const isHtml = trigger.dataset.tooltipHtml === 'true';
    
    const tooltip = document.createElement('div');
    tooltip.className = `glass-tooltip ${position}`;
    
    if (isHtml) {
      tooltip.innerHTML = trigger.querySelector('.glass-tooltip').innerHTML;
    } else {
      tooltip.textContent = content;
    }
    
    // 添加箭头
    const arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';
    tooltip.appendChild(arrow);
    
    document.body.appendChild(tooltip);
    this.tooltips.set(trigger, tooltip);
    
    // 计算位置
    this.positionTooltip(trigger, tooltip, position);
    
    // 显示动画
    setTimeout(() => {
      tooltip.classList.add('show');
    }, 10);
  }
  
  positionTooltip(trigger, tooltip, position) {
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let top, left;
    
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 8;
        break;
    }
    
    // 确保提示不超出视窗
    const margin = 8;
    top = Math.max(margin, Math.min(window.innerHeight - tooltipRect.height - margin, top));
    left = Math.max(margin, Math.min(window.innerWidth - tooltipRect.width - margin, left));
    
    tooltip.style.top = top + window.scrollY + 'px';
    tooltip.style.left = left + window.scrollX + 'px';
  }
}

// 初始化工具提示管理器
const tooltipManager = new TooltipManager();
```

### 简单工具提示

```javascript
function initTooltips() {
  const triggers = document.querySelectorAll('[data-tooltip]');
  
  triggers.forEach(trigger => {
    let tooltip = null;
    let timeoutId = null;
    
    function showTooltip() {
      if (tooltip) return;
      
      const content = trigger.dataset.tooltip;
      const position = trigger.dataset.tooltipPosition || 'top';
      const delay = parseInt(trigger.dataset.tooltipDelay) || 0;
      
      timeoutId = setTimeout(() => {
        tooltip = createTooltip(content, position);
        document.body.appendChild(tooltip);
        positionTooltip(trigger, tooltip, position);
        
        setTimeout(() => {
          tooltip.classList.add('show');
        }, 10);
      }, delay);
    }
    
    function hideTooltip() {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      if (tooltip) {
        tooltip.classList.remove('show');
        setTimeout(() => {
          if (tooltip && tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
          }
          tooltip = null;
        }, 200);
      }
    }
    
    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
  });
}

function createTooltip(content, position) {
  const tooltip = document.createElement('div');
  tooltip.className = `glass-tooltip ${position}`;
  tooltip.textContent = content;
  
  const arrow = document.createElement('div');
  arrow.className = 'tooltip-arrow';
  tooltip.appendChild(arrow);
  
  return tooltip;
}

function positionTooltip(trigger, tooltip, position) {
  const triggerRect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  let top, left;
  
  switch (position) {
    case 'top':
      top = triggerRect.top - tooltipRect.height - 8;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'bottom':
      top = triggerRect.bottom + 8;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'left':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left - tooltipRect.width - 8;
      break;
    case 'right':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + 8;
      break;
  }
  
  tooltip.style.top = top + window.scrollY + 'px';
  tooltip.style.left = left + window.scrollX + 'px';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initTooltips);
```

## 应用场景

### 按钮说明

```html
<div class="button-group">
  <button class="glass-button" data-tooltip="保存当前文档">
    💾 保存
  </button>
  <button class="glass-button" data-tooltip="撤销上一步操作">
    ↩️ 撤销
  </button>
  <button class="glass-button" data-tooltip="重做上一步操作">
    ↪️ 重做
  </button>
  <button class="glass-button danger" data-tooltip="永久删除选中项目">
    🗑️ 删除
  </button>
</div>
```

### 表单字段帮助

```html
<form class="glass-form">
  <div class="form-group">
    <label class="form-label">
      用户名
      <span class="help-icon" data-tooltip="用户名长度为3-20个字符，只能包含字母和数字">❓</span>
    </label>
    <input type="text" class="glass-input" placeholder="请输入用户名">
  </div>
  
  <div class="form-group">
    <label class="form-label">
      密码强度
      <span class="help-icon" data-tooltip="密码应包含大小写字母、数字和特殊字符，长度至少8位">❓</span>
    </label>
    <input type="password" class="glass-input" placeholder="请输入密码">
  </div>
  
  <div class="form-group">
    <label class="form-label">
      邮箱验证
      <span class="help-icon" data-tooltip="用于接收重要通知和密码重置邮件">❓</span>
    </label>
    <input type="email" class="glass-input" placeholder="请输入邮箱地址">
  </div>
</form>
```

### 图标功能说明

```html
<div class="toolbar">
  <button class="tool-button" data-tooltip="粗体文字" data-tooltip-position="bottom">
    <strong>B</strong>
  </button>
  <button class="tool-button" data-tooltip="斜体文字" data-tooltip-position="bottom">
    <em>I</em>
  </button>
  <button class="tool-button" data-tooltip="下划线" data-tooltip-position="bottom">
    <u>U</u>
  </button>
  <button class="tool-button" data-tooltip="插入链接" data-tooltip-position="bottom">
    🔗
  </button>
  <button class="tool-button" data-tooltip="插入图片" data-tooltip-position="bottom">
    🖼️
  </button>
</div>
```

### 状态指示器

```html
<div class="status-panel">
  <div class="status-item">
    <span class="status-dot success" data-tooltip="服务运行正常"></span>
    <span>API 服务</span>
  </div>
  <div class="status-item">
    <span class="status-dot warning" data-tooltip="响应时间较慢"></span>
    <span>数据库</span>
  </div>
  <div class="status-item">
    <span class="status-dot error" data-tooltip="连接失败"></span>
    <span>缓存服务</span>
  </div>
</div>

<style>
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}

.status-dot.success { background: #4CAF50; }
.status-dot.warning { background: #FF9800; }
.status-dot.error { background: #F44336; }
</style>
```