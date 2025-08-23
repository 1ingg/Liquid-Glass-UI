# 输入框 Input

输入框是表单中最常用的控件，用于接收用户的文本输入。Liquid Glass UI 的输入框具有优雅的玻璃态效果和流畅的交互动画。

## 基础用法

最基本的文本输入框：

```html
<input type="text" class="glass-input" placeholder="请输入文本">
```

<div class="demo-container">
  <input type="text" class="glass-input" placeholder="请输入文本">
</div>

## 输入框类型

### 文本输入框

```html
<input type="text" class="glass-input" placeholder="文本输入">
```

### 密码输入框

```html
<input type="password" class="glass-input" placeholder="请输入密码">
```

### 邮箱输入框

```html
<input type="email" class="glass-input" placeholder="请输入邮箱">
```

### 数字输入框

```html
<input type="number" class="glass-input" placeholder="请输入数字">
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 300px;">
    <input type="text" class="glass-input" placeholder="文本输入">
    <input type="password" class="glass-input" placeholder="请输入密码">
    <input type="email" class="glass-input" placeholder="请输入邮箱">
    <input type="number" class="glass-input" placeholder="请输入数字">
  </div>
</div>

## 输入框状态

### 聚焦状态

当输入框获得焦点时会有特殊的视觉效果：

```html
<input type="text" class="glass-input" placeholder="点击查看聚焦效果" autofocus>
```

### 禁用状态

```html
<input type="text" class="glass-input" placeholder="禁用的输入框" disabled>
```

### 只读状态

```html
<input type="text" class="glass-input" value="只读文本" readonly>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 300px;">
    <input type="text" class="glass-input" placeholder="正常输入框">
    <input type="text" class="glass-input" placeholder="禁用的输入框" disabled>
    <input type="text" class="glass-input" value="只读文本" readonly>
  </div>
</div>

## 输入框尺寸

虽然输入框没有预定义的尺寸类，但您可以通过CSS自定义：

```html
<input type="text" class="glass-input" style="padding: 8px 16px; font-size: 12px;" placeholder="小尺寸">
<input type="text" class="glass-input" placeholder="默认尺寸">
<input type="text" class="glass-input" style="padding: 16px 24px; font-size: 16px;" placeholder="大尺寸">
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 300px;">
    <input type="text" class="glass-input" style="padding: 8px 16px; font-size: 12px;" placeholder="小尺寸">
    <input type="text" class="glass-input" placeholder="默认尺寸">
    <input type="text" class="glass-input" style="padding: 16px 24px; font-size: 16px;" placeholder="大尺寸">
  </div>
</div>

## 带标签的输入框

```html
<div class="form-group">
  <label class="form-label">用户名</label>
  <input type="text" class="glass-input" placeholder="请输入用户名">
</div>

<div class="form-group">
  <label class="form-label">邮箱地址</label>
  <input type="email" class="glass-input" placeholder="请输入邮箱地址">
</div>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 300px;">
    <div>
      <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">用户名</label>
      <input type="text" class="glass-input" placeholder="请输入用户名">
    </div>
    <div>
      <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">邮箱地址</label>
      <input type="email" class="glass-input" placeholder="请输入邮箱地址">
    </div>
  </div>
</div>

## 实际应用场景

### 登录表单

```html
<form class="login-form">
  <div class="form-group">
    <label class="form-label">邮箱</label>
    <input type="email" class="glass-input" placeholder="请输入邮箱地址" required>
  </div>
  
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="glass-input" placeholder="请输入密码" required>
  </div>
  
  <button type="submit" class="glass-button primary large">登录</button>
</form>
```

### 搜索框

```html
<div class="search-container">
  <input type="search" class="glass-input" placeholder="搜索内容...">
  <button class="glass-button">🔍</button>
</div>
```

### 联系表单

```html
<form class="contact-form">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">姓名</label>
      <input type="text" class="glass-input" placeholder="您的姓名">
    </div>
    
    <div class="form-group">
      <label class="form-label">电话</label>
      <input type="tel" class="glass-input" placeholder="联系电话">
    </div>
  </div>
  
  <div class="form-group">
    <label class="form-label">邮箱</label>
    <input type="email" class="glass-input" placeholder="邮箱地址">
  </div>
  
  <div class="form-group">
    <label class="form-label">公司</label>
    <input type="text" class="glass-input" placeholder="公司名称（可选）">
  </div>
</form>
```

### 设置面板

```html
<div class="settings-panel">
  <div class="setting-item">
    <label class="form-label">显示名称</label>
    <input type="text" class="glass-input" value="用户123">
  </div>
  
  <div class="setting-item">
    <label class="form-label">个人简介</label>
    <input type="text" class="glass-input" placeholder="介绍一下自己...">
  </div>
  
  <div class="setting-item">
    <label class="form-label">网站URL</label>
    <input type="url" class="glass-input" placeholder="https://your-website.com">
  </div>
</div>
```

## 输入验证

### HTML5 验证

```html
<input type="email" class="glass-input" placeholder="邮箱" required>
<input type="url" class="glass-input" placeholder="网站URL" pattern="https://.*">
<input type="tel" class="glass-input" placeholder="手机号" pattern="[0-9]{11}">
```

### 自定义验证样式

```css
.glass-input:invalid {
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.glass-input:valid {
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-input` | 基础输入框样式 |
| `.form-group` | 表单组容器 |
| `.form-label` | 表单标签样式 |

## JavaScript 增强

为输入框添加交互增强：

```javascript
// 聚焦效果增强
document.querySelectorAll('.glass-input').forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  input.addEventListener('blur', function() {
    this.style.transform = 'translateY(0)';
  });
});

// 实时字符计数
function addCharacterCounter(input, maxLength) {
  const counter = document.createElement('div');
  counter.className = 'char-counter';
  counter.style.cssText = `
    color: rgba(255,255,255,0.6);
    font-size: 12px;
    text-align: right;
    margin-top: 4px;
  `;
  
  input.parentNode.appendChild(counter);
  
  function updateCounter() {
    const length = input.value.length;
    counter.textContent = `${length}/${maxLength}`;
    
    if (length > maxLength * 0.9) {
      counter.style.color = 'rgba(251, 191, 36, 0.8)';
    } else {
      counter.style.color = 'rgba(255,255,255,0.6)';
    }
  }
  
  input.addEventListener('input', updateCounter);
  updateCounter();
}
```

## 自定义样式

通过CSS变量自定义输入框外观：

```css
:root {
  --glass-input-bg: rgba(255, 255, 255, 0.12);
  --glass-input-border: rgba(255, 255, 255, 0.25);
  --glass-input-focus-border: rgba(74, 144, 226, 0.6);
  --glass-input-text: rgba(255, 255, 255, 0.9);
  --glass-input-placeholder: rgba(255, 255, 255, 0.6);
}
```

## 可访问性

- 支持键盘导航
- 支持屏幕阅读器
- 提供明确的标签和占位文本
- 支持 `required`、`aria-*` 等属性

```html
<label for="username" class="form-label">用户名</label>
<input 
  type="text" 
  id="username"
  class="glass-input" 
  placeholder="请输入用户名"
  aria-describedby="username-help"
  required
>
<div id="username-help" class="help-text">
  用户名长度应为3-20个字符
</div>
```

## 注意事项

- 在深色背景上效果最佳
- 确保占位文本有足够的对比度
- 为必填字段提供清晰的标识
- 在移动设备上测试输入体验

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