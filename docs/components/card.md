# 卡片 Card

卡片是一个灵活的内容容器，用于显示相关信息的组合。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础卡片

```html
<div class="glass-card">
  <h3>卡片标题</h3>
  <p>这是卡片的内容描述</p>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-card">
    <h3>卡片标题</h3>
    <p>这是卡片的内容描述</p>
  </div>
</div>

### 带头部的卡片

```html
<div class="glass-card">
  <div class="card-header">
    <h3>卡片标题</h3>
    <button class="card-action">⚙️</button>
  </div>
  <div class="card-body">
    <p>这是卡片的主要内容区域</p>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-card">
    <div class="card-header">
      <h3>卡片标题</h3>
      <button class="card-action">⚙️</button>
    </div>
    <div class="card-body">
      <p>这是卡片的主要内容区域</p>
    </div>
  </div>
</div>

### 带底部的卡片

```html
<div class="glass-card">
  <div class="card-body">
    <h3>产品名称</h3>
    <p>产品描述信息</p>
  </div>
  <div class="card-footer">
    <button class="glass-button">取消</button>
    <button class="glass-button primary">确认</button>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-card">
    <div class="card-body">
      <h3>产品名称</h3>
      <p>产品描述信息</p>
    </div>
    <div class="card-footer">
      <button class="glass-button">取消</button>
      <button class="glass-button primary">确认</button>
    </div>
  </div>
</div>

## 卡片类型

### 图片卡片

```