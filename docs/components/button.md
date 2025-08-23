# 按钮 Button

按钮是用户界面中最基本的交互元素之一，用于触发操作或导航。Liquid Glass UI 的按钮采用玻璃态设计，提供优雅的视觉效果和流畅的交互体验。

## 基础用法

最基本的按钮样式：

```html
<button class="glass-button">默认按钮</button>
```

<div class="demo-container">
  <button class="glass-button">默认按钮</button>
</div>

## 按钮类型

### 主要按钮

用于主要操作的按钮，具有更强的视觉重点：

```html
<button class="glass-button primary">主要按钮</button>
```

<div class="demo-container">
  <button class="glass-button primary">主要按钮</button>
</div>

## 按钮尺寸

提供三种不同的尺寸选择：

```html
<button class="glass-button small">小按钮</button>
<button class="glass-button">默认按钮</button>
<button class="glass-button large">大按钮</button>
```

<div class="demo-container">
  <button class="glass-button small">小按钮</button>
  <button class="glass-button">默认按钮</button>
  <button class="glass-button large">大按钮</button>
</div>

## 按钮状态

### 禁用状态

```html
<button class="glass-button" disabled>禁用按钮</button>
<button class="glass-button primary" disabled>禁用主要按钮</button>
```

<div class="demo-container">
  <button class="glass-button" disabled>禁用按钮</button>
  <button class="glass-button primary" disabled>禁用主要按钮</button>
</div>

## 按钮组合

多个按钮的组合使用：

```html
<div class="button-group">
  <button class="glass-button">取消</button>
  <button class="glass-button primary">确认</button>
</div>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px;">
    <button class="glass-button">取消</button>
    <button class="glass-button primary">确认</button>
  </div>
</div>

## 带图标的按钮

结合图标使用的按钮：

```html
<button class="glass-button">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
  添加
</button>

<button class="glass-button primary">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </svg>
  保存
</button>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px;">
    <button class="glass-button">
      ➕ 添加
    </button>
    <button class="glass-button primary">
      ✓ 保存
    </button>
  </div>
</div>

## 链接样式按钮

使用 `<a>` 标签创建链接按钮：

```html
<a href="#" class="glass-button">链接按钮</a>
<a href="#" class="glass-button primary">主要链接</a>
```

<div class="demo-container">
  <div style="display: flex; gap: 12px;">
    <a href="#" class="glass-button">链接按钮</a>
    <a href="#" class="glass-button primary">主要链接</a>
  </div>
</div>

## 实际应用场景

### 登录表单

```html
<div class="login-form">
  <input type="email" class="glass-input" placeholder="邮箱地址">
  <input type="password" class="glass-input" placeholder="密码">
  <div class="button-group">
    <button class="glass-button">注册</button>
    <button class="glass-button primary large">登录</button>
  </div>
</div>
```

### 操作确认对话框

```html
<div class="confirmation-dialog">
  <h4>确认删除</h4>
  <p>此操作无法撤销，确定要删除吗？</p>
  <div class="button-group">
    <button class="glass-button">取消</button>
    <button class="glass-button primary">确认删除</button>
  </div>
</div>
```

### 工具栏按钮组

```html
<div class="toolbar">
  <button class="glass-button small">✂️ 剪切</button>
  <button class="glass-button small">📋 复制</button>
  <button class="glass-button small">📄 粘贴</button>
  <div class="divider"></div>
  <button class="glass-button small">↶ 撤销</button>
  <button class="glass-button small">↷ 重做</button>
</div>
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-button` | 基础按钮样式 |
| `.glass-button.primary` | 主要按钮样式 |
| `.glass-button.small` | 小尺寸按钮 |
| `.glass-button.large` | 大尺寸按钮 |

## 自定义样式

您可以通过CSS变量自定义按钮的外观：

```css
:root {
  --glass-primary: rgba(255, 100, 150, 0.8);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.3);
}
```

## 可访问性

- 支持键盘导航（Tab 键）
- 支持空格键和回车键触发
- 禁用状态下不可获得焦点
- 建议为图标按钮添加 `aria-label` 属性

```html
<button class="glass-button" aria-label="添加新项目">
  ➕
</button>
```

## 注意事项

- 在深色背景上效果最佳
- 避免在同一页面使用过多不同类型的按钮
- 主要按钮应该用于最重要的操作
- 保持按钮文本简洁明了

<style scoped>
.demo-container {
  padding: 24px;
  margin: 16px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.demo-container .glass-button {
  margin: 4px;
}
</style> 