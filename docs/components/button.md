# 按钮 Button

按钮是用户界面中最基础的交互元素，用于触发操作或导航。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 默认按钮

```html
<button class="glass-button">默认按钮</button>
<button class="glass-button primary">主要按钮</button>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <button class="glass-button">默认按钮</button>
  <button class="glass-button primary" style="margin-left: 8px;">主要按钮</button>
</div>

### 按钮尺寸

```html
<button class="glass-button small">小按钮</button>
<button class="glass-button">默认按钮</button>
<button class="glass-button large">大按钮</button>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <button class="glass-button small">小按钮</button>
  <button class="glass-button" style="margin-left: 8px;">默认按钮</button>
  <button class="glass-button large" style="margin-left: 8px;">大按钮</button>
</div>

### 按钮状态

```html
<button class="glass-button" disabled>禁用按钮</button>
<button class="glass-button primary" disabled>禁用主要按钮</button>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <button class="glass-button" disabled>禁用按钮</button>
  <button class="glass-button primary" style="margin-left: 8px;" disabled>禁用主要按钮</button>
</div>

### 图标按钮

```html
<button class="glass-button">
  <span class="button-icon">🔍</span>
  搜索
</button>
<button class="glass-button primary">
  <span class="button-icon">💾</span>
  保存
</button>
<button class="glass-button icon-only">
  <span class="button-icon">⚙️</span>
</button>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <button class="glass-button">
    <span class="button-icon">🔍</span>
    搜索
  </button>
  <button class="glass-button primary" style="margin-left: 8px;">
    <span class="button-icon">💾</span>
    保存
  </button>
  <button class="glass-button icon-only" style="margin-left: 8px;">
    <span class="button-icon">⚙️</span>
  </button>
</div>

### 按钮组

```html
<div class="glass-button-group">
  <button class="glass-button">左</button>
  <button class="glass-button">中</button>
  <button class="glass-button">右</button>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-button-group">
    <button class="glass-button">左</button>
    <button class="glass-button">中</button>
    <button class="glass-button">右</button>
  </div>
</div>

### 按钮类型

```html
<button class="glass-button primary">主要按钮</button>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <button class="glass-button primary">主要按钮</button>
</div>

## CSS 类名

### 基础类名

- `.glass-button`