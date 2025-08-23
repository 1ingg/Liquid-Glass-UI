# 复选框 Checkbox

复选框是表单中用于多选的控件，允许用户选择多个选项。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 单个复选框

```html
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  选择此项
</label>
```

### 多个复选框

```html
<div class="checkbox-group">
  <label class="glass-checkbox">
    <input type="checkbox" value="option1">
    <span class="checkmark"></span>
    选项一
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" value="option2">
    <span class="checkmark"></span>
    选项二
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" value="option3">
    <span class="checkmark"></span>
    选项三
  </label>
</div>
```

### 基础复选框

```html
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  选项一
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-checkbox">
    <input type="checkbox">
    <span class="checkmark"></span>
    选项一
  </label>
</div>

## 复选框状态

### 选中状态

```html
<label class="glass-checkbox">
  <input type="checkbox" checked>
  <span class="checkmark"></span>
  已选中
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-checkbox">
    <input type="checkbox" checked>
    <span class="checkmark"></span>
    已选中
  </label>
</div>

### 禁用状态

```html
<label class="glass-checkbox">
  <input type="checkbox" disabled>
  <span class="checkmark"></span>
  禁用未选中
</label>

<label class="glass-checkbox">
  <input type="checkbox" checked disabled>
  <span class="checkmark"></span>
  禁用已选中
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-checkbox" style="margin-right: 16px;">
    <input type="checkbox" disabled>
    <span class="checkmark"></span>
    禁用未选中
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" checked disabled>
    <span class="checkmark"></span>
    禁用已选中
  </label>
</div>

### 复选框组

```html
<div class="checkbox-group">
  <label class="glass-checkbox">
    <input type="checkbox" checked>
    <span class="checkmark"></span>
    选项一
  </label>
  <label class="glass-checkbox">
    <input type="checkbox">
    <span class="checkmark"></span>
    选项二
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" checked>
    <span class="checkmark"></span>
    选项三
  </label>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="checkbox-group">
    <label class="glass-checkbox" style="display: block; margin-bottom: 8px;">
      <input type="checkbox" checked>
      <span class="checkmark"></span>
      选项一
    </label>
    <label class="glass-checkbox" style="display: block; margin-bottom: 8px;">
      <input type="checkbox">
      <span class="checkmark"></span>
      选项二
    </label>
    <label class="glass-checkbox" style="display: block;">
      <input type="checkbox" checked>
      <span class="checkmark"></span>
      选项三
    </label>
  </div>
</div>

### 不确定状态

```html
<label class="glass-checkbox">
  <input type="checkbox" class="indeterminate">
  <span class="checkmark"></span>
  不确定状态
</label>
```

## 复选框尺寸

```html
<!-- 小尺寸 -->
<label class="glass-checkbox small">
  <input type="checkbox">
  <span class="checkmark"></span>
  小尺寸
</label>

<!-- 默认尺寸 -->
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  默认尺寸
</label>

<!-- 大尺寸 -->
<label class="glass-checkbox large">
  <input type="checkbox">
  <span class="checkmark"></span>
  大尺寸
</label>
```

## CSS 类名

### 基础类名

- `.glass-checkbox` - 基础复选框样式
- `.checkmark` - 复选框标记
- `.checkbox-group` - 复选框组容器

### 修饰类名

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `:checked` - 选中状态
- `:disabled` - 禁用状态
- `.indeterminate` - 不确定状态

## JavaScript 增强

### 全选功能

```javascript
function initSelectAll(selectAllCheckbox, checkboxes) {
  selectAllCheckbox.addEventListener('change', function() {
    checkboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
    });
  });
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      const someChecked = Array.from(checkboxes).some(cb => cb.checked);
      
      selectAllCheckbox.checked = allChecked;
      selectAllCheckbox.indeterminate = someChecked && !allChecked;
    });
  });
}

// 使用示例
const selectAll = document.querySelector('#select-all');
const items = document.querySelectorAll('.item-checkbox');
initSelectAll(selectAll, items);
```

### 不确定状态

```javascript
// 设置不确定状态
document.querySelectorAll('.indeterminate').forEach(checkbox => {
  checkbox.indeterminate = true;
});
```

## 应用场景

### 全选列表

```html
<div class="select-list">
  <label class="glass-checkbox">
    <input type="checkbox" id="select-all">
    <span class="checkmark"></span>
    全选
  </label>
  
  <div class="item-list">
    <label class="glass-checkbox">
      <input type="checkbox" class="item-checkbox" value="item1">
      <span class="checkmark"></span>
      项目 1
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" class="item-checkbox" value="item2">
      <span class="checkmark"></span>
      项目 2
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" class="item-checkbox" value="item3">
      <span class="checkmark"></span>
      项目 3
    </label>
  </div>
</div>
```

### 设置选项

```html
<form class="settings-form">
  <div class="setting-group">
    <h4>通知设置</h4>
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="email">
      <span class="checkmark"></span>
      邮件通知
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="sms">
      <span class="checkmark"></span>
      短信通知
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="push">
      <span class="checkmark"></span>
      推送通知
    </label>
  </div>
</form>
```

### 协议同意

```
```