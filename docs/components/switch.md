# 开关 Switch

开关是用于在两个状态之间切换的控件，通常表示开启或关闭某个功能。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础开关

```html
<label class="glass-switch">
  <input type="checkbox">
  <span class="switch-slider"></span>
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-switch">
    <input type="checkbox">
    <span class="switch-slider"></span>
  </label>
</div>

### 带文字的开关

```html
<label class="glass-switch">
  <input type="checkbox">
  <span class="switch-slider"></span>
  <span class="switch-text">启用通知</span>
</label>
```

### 带标签的开关

```html
<div class="form-group">
  <label class="form-label">
    <span>启用通知</span>
    <label class="glass-switch">
      <input type="checkbox" checked>
      <span class="switch-slider"></span>
    </label>
  </label>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="form-group">
    <label class="form-label">
      <span>启用通知</span>
      <label class="glass-switch" style="margin-left: 12px;">
        <input type="checkbox" checked>
        <span class="switch-slider"></span>
      </label>
    </label>
  </div>
</div>

## 开关状态

### 默认开启

```html
<label class="glass-switch">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
  <span class="switch-text">默认开启</span>
</label>
```

### 禁用状态

```html
<!-- 禁用关闭状态 -->
<label class="glass-switch">
  <input type="checkbox" disabled>
  <span class="switch-slider"></span>
</label>

<!-- 禁用开启状态 -->
<label class="glass-switch">
  <input type="checkbox" checked disabled>
  <span class="switch-slider"></span>
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-switch" style="margin-right: 16px;">
    <input type="checkbox" disabled>
    <span class="switch-slider"></span>
  </label>
  <span style="margin-right: 24px; color: rgba(255,255,255,0.7);">禁用关闭</span>
  <label class="glass-switch">
    <input type="checkbox" checked disabled>
    <span class="switch-slider"></span>
  </label>
  <span style="color: rgba(255,255,255,0.7);">禁用开启</span>
</div>

## CSS 类名

### 基础类名

- `.glass-switch` - 基础开关样式
- `.switch-slider` - 开关滑块
- `.switch-text` - 开关文字

### 修饰类名

**状态修饰符**
- `:checked` - 开启状态
- `:disabled` - 禁用状态

## JavaScript 增强

### 开关事件处理

```javascript
// 监听开关状态变化
document.querySelectorAll('.glass-switch input').forEach(switchInput => {
  switchInput.addEventListener('change', function() {
    console.log('开关状态:', this.checked ? '开启' : '关闭');
  });
});
```

### 编程控制开关

```javascript
function toggleSwitch(switchElement, state) {
  const input = switchElement.querySelector('input');
  if (input) {
    input.checked = state;
    input.dispatchEvent(new Event('change'));
  }
}

// 使用示例
const notificationSwitch = document.querySelector('#notification-switch');
toggleSwitch(notificationSwitch, true); // 开启
```

## 应用场景

### 设置面板

```html
<div class="settings-panel">
  <h3>通知设置</h3>
  
  <div class="setting-item">
    <label class="glass-switch">
      <input type="checkbox" id="email-notifications">
      <span class="switch-slider"></span>
      <span class="switch-text">邮件通知</span>
    </label>
  </div>
  
  <div class="setting-item">
    <label class="glass-switch">
      <input type="checkbox" id="push-notifications" checked>
      <span class="switch-slider"></span>
      <span class="switch-text">推送通知</span>
    </label>
  </div>
  
  <div class="setting-item">
    <label class="glass-switch">
      <input type="checkbox" id="sound-notifications">
      <span class="switch-slider"></span>
      <span class="switch-text">声音提醒</span>
    </label>
  </div>
</div>
```

### 功能开关

```html
<div class="feature-toggles">
  <div class="toggle-item">
    <label class="glass-switch">
      <input type="checkbox" id="dark-mode">
      <span class="switch-slider"></span>
      <span class="switch-text">深色模式</span>
    </label>
  </div>
  
  <div class="toggle-item">
    <label class="glass-switch">
      <input type="checkbox" id="auto-save" checked>
      <span class="switch-slider"></span>
      <span class="switch-text">自动保存</span>
    </label>
  </div>
  
  <div class="toggle-item">
    <label class="glass-switch">
      <input type="checkbox" id="enable-animations">
      <span class="switch-slider"></span>
      <span class="switch-text">启用动画</span>
    </label>
  </div>
</div>
```

### 权限控制

```html
<div class="permission-controls">
  <h4>用户权限</h4>
  
  <div class="permission-item">
    <label class="glass-switch">
      <input type="checkbox" id="can-edit">
      <span class="switch-slider"></span>
      <span class="switch-text">编辑权限</span>
    </label>
  </div>
  
  <div class="permission-item">
    <label class="glass-switch">
      <input type="checkbox" id="can-delete">
      <span class="switch-slider"></span>
      <span class="switch-text">删除权限</span>
    </label>
  </div>
  
  <div class="permission-item">
    <label class="glass-switch">
      <input type="checkbox" id="can-share" checked>
      <span class="switch-slider"></span>
      <span class="switch-text">分享权限</span>
    </label>
  </div>
</div>
```