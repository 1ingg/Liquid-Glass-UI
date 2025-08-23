# 输入框 Input

输入框是表单中最常用的控件，用于接收用户的文本输入。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础输入框

```html
<input type="text" class="glass-input" placeholder="请输入内容">
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <input type="text" class="glass-input" placeholder="请输入内容">
</div>

### 密码输入框

```html
<input type="password" class="glass-input" placeholder="请输入密码">
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <input type="password" class="glass-input" placeholder="请输入密码">
</div>

### 邮箱输入框

```html
<input type="email" class="glass-input" placeholder="请输入邮箱">
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <input type="email" class="glass-input" placeholder="请输入邮箱" style="width: 100%;">
</div>

## 输入框状态

### 禁用状态

```html
<input type="text" class="glass-input" placeholder="禁用状态" disabled>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <input type="text" class="glass-input" placeholder="禁用状态" disabled style="width: 100%;">
</div>

### 只读状态

```html
<input type="text" class="glass-input" value="只读内容" readonly>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <input type="text" class="glass-input" value="只读内容" readonly style="width: 100%;">
</div>

## 带标签的输入框

```html
<div class="form-group">
  <label class="form-label">用户名</label>
  <input type="text" class="glass-input" placeholder="请输入用户名">
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="form-group">
    <label class="form-label">用户名</label>
    <input type="text" class="glass-input" placeholder="请输入用户名">
  </div>
</div>

## CSS 类名

### 基础类名

- `.glass-input` - 基础输入框样式

### 修饰类名

**状态修饰符**
- `:disabled` - 禁用状态
- `:readonly` - 只读状态

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**组合类名**
- `.form-group` - 表单组容器
- `.form-label` - 表单标签

## JavaScript 增强

### 基础功能

```javascript
// 输入框聚焦和失焦效果
document.querySelectorAll('.glass-input').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
  });
});
```

### 验证功能

```javascript
// 输入验证
function validateInput(input) {
  const value = input.value.trim();
  
  if (input.hasAttribute('required') && !value) {
    input.classList.add('error');
    return false;
  }
  
  if (input.type === 'email' && value && !isValidEmail(value)) {
    input.classList.add('error');
    return false;
  }
  
  input.classList.remove('error');
  input.classList.add('success');
  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

## 应用场景

### 登录表单

```html
<form class="glass-form">
  <div class="form-group">
    <label class="form-label">用户名</label>
    <input type="text" class="glass-input" placeholder="请输入用户名" required>
  </div>
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="glass-input" placeholder="请输入密码" required>
  </div>
  <button type="submit" class="glass-button primary">登录</button>
</form>
```

### 搜索框

```html
<div class="search-container">
  <input type="search" class="glass-input" placeholder="搜索内容...">
  <button class="glass-button">搜索</button>
</div>
```