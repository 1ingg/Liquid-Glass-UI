# 单选框 Radio

单选框是表单中用于从多个选项中选择一个的控件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 单选组

```html
<div class="radio-group">
  <label class="glass-radio">
    <input type="radio" name="option" value="option1">
    <span class="radio-mark"></span>
    选项一
  </label>
  <label class="glass-radio">
    <input type="radio" name="option" value="option2">
    <span class="radio-mark"></span>
    选项二
  </label>
  <label class="glass-radio">
    <input type="radio" name="option" value="option3">
    <span class="radio-mark"></span>
    选项三
  </label>
</div>
```

### 带标签的单选组

```html
<div class="form-group">
  <label class="form-label">性别</label>
  <div class="radio-group">
    <label class="glass-radio">
      <input type="radio" name="gender" value="male">
      <span class="radio-mark"></span>
      男
    </label>
    <label class="glass-radio">
      <input type="radio" name="gender" value="female">
      <span class="radio-mark"></span>
      女
    </label>
  </div>
</div>
```

### 基础单选框

```html
<label class="glass-radio">
  <input type="radio" name="option">
  <span class="radiomark"></span>
  选项一
</label>

<label class="glass-radio">
  <input type="radio" name="option">
  <span class="radiomark"></span>
  选项二
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-radio" style="margin-right: 16px;">
    <input type="radio" name="preview-option">
    <span class="radiomark"></span>
    选项一
  </label>
  <label class="glass-radio">
    <input type="radio" name="preview-option">
    <span class="radiomark"></span>
    选项二
  </label>
</div>

## 单选框状态

### 默认选中

```html
<div class="radio-group">
  <label class="glass-radio">
    <input type="radio" name="default" value="option1" checked>
    <span class="radio-mark"></span>
    默认选中
  </label>
  <label class="glass-radio">
    <input type="radio" name="default" value="option2">
    <span class="radio-mark"></span>
    未选中
  </label>
</div>
```

### 禁用状态

```html
<label class="glass-radio">
  <input type="radio" name="disabled-demo" disabled>
  <span class="radio-checkmark"></span>
  禁用选项一
</label>

<label class="glass-radio">
  <input type="radio" name="disabled-demo" checked disabled>
  <span class="radio-checkmark"></span>
  禁用选项二（已选中）
</label>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <label class="glass-radio" style="margin-right: 16px;">
    <input type="radio" name="disabled-demo" disabled>
    <span class="radio-checkmark"></span>
    禁用选项一
  </label>
  <label class="glass-radio">
    <input type="radio" name="disabled-demo" checked disabled>
    <span class="radio-checkmark"></span>
    禁用选项二（已选中）
  </label>
</div>

### 垂直单选组

```html
<div class="radio-group vertical">
  <label class="glass-radio">
    <input type="radio" name="vertical-demo" checked>
    <span class="radio-checkmark"></span>
    选项一
  </label>
  <label class="glass-radio">
    <input type="radio" name="vertical-demo">
    <span class="radio-checkmark"></span>
    选项二
  </label>
  <label class="glass-radio">
    <input type="radio" name="vertical-demo">
    <span class="radio-checkmark"></span>
    选项三
  </label>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="radio-group vertical">
    <label class="glass-radio" style="display: block; margin-bottom: 8px;">
      <input type="radio" name="vertical-demo" checked>
      <span class="radio-checkmark"></span>
      选项一
    </label>
    <label class="glass-radio" style="display: block; margin-bottom: 8px;">
      <input type="radio" name="vertical-demo">
      <span class="radio-checkmark"></span>
      选项二
    </label>
    <label class="glass-radio" style="display: block;">
      <input type="radio" name="vertical-demo">
      <span class="radio-checkmark"></span>
      选项三
    </label>
  </div>
</div>

## 单选框尺寸

```html
<!-- 小尺寸 -->
<div class="radio-group">
  <label class="glass-radio small">
    <input type="radio" name="size-small" value="option1">
    <span class="radio-mark"></span>
    小尺寸
  </label>
</div>

<!-- 默认尺寸 -->
<div class="radio-group">
  <label class="glass-radio">
    <input type="radio" name="size-default" value="option1">
    <span class="radio-mark"></span>
    默认尺寸
  </label>
</div>

<!-- 大尺寸 -->
<div class="radio-group">
  <label class="glass-radio large">
    <input type="radio" name="size-large" value="option1">
    <span class="radio-mark"></span>
    大尺寸
  </label>
</div>
```

## CSS 类名

### 基础类名

- `.glass-radio` - 基础单选框样式
- `.radio-mark` - 单选框标记
- `.radio-group` - 单选框组容器

### 修饰类名

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `:checked` - 选中状态
- `:disabled` - 禁用状态

## JavaScript 增强

### 单选框事件处理

```javascript
// 监听单选框变化
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      console.log('选择了:', this.value);
    }
  });
});
```

### 获取选中值

```javascript
function getSelectedValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

// 使用示例
const selectedGender = getSelectedValue('gender');
console.log('选择的性别:', selectedGender);
```

## 应用场景

### 问卷调查

```html
<form class="survey-form">
  <div class="form-group">
    <label class="form-label">您对我们服务的满意度？</label>
    <div class="radio-group">
      <label class="glass-radio">
        <input type="radio" name="satisfaction" value="5">
        <span class="radio-mark"></span>
        非常满意
      </label>
      <label class="glass-radio">
        <input type="radio" name="satisfaction" value="4">
        <span class="radio-mark"></span>
        满意
      </label>
      <label class="glass-radio">
        <input type="radio" name="satisfaction" value="3">
        <span class="radio-mark"></span>
        一般
      </label>
      <label class="glass-radio">
        <input type="radio" name="satisfaction" value="2">
        <span class="radio-mark"></span>
        不满意
      </label>
    </div>
  </div>
</form>
```

### 支付方式选择

```html
<div class="payment-form">
  <div class="form-group">
    <label class="form-label">选择支付方式</label>
    <div class="radio-group">
      <label class="glass-radio">
        <input type="radio" name="payment" value="alipay">
        <span class="radio-mark"></span>
        支付宝
      </label>
      <label class="glass-radio">
        <input type="radio" name="payment" value="wechat">
        <span class="radio-mark"></span>
        微信支付
      </label>
      <label class="glass-radio">
        <input type="radio" name="payment" value="credit">
        <span class="radio-mark"></span>
        信用卡
      </label>
    </div>
  </div>
</div>
```

### 配置选项

```html
<div class="config-form">
  <div class="form-group">
    <label class="form-label">通知频率</label>
    <div class="radio-group">
      <label class="glass-radio">
        <input type="radio" name="frequency" value="realtime">
        <span class="radio-mark"></span>
        实时通知
      </label>
      <label class="glass-radio">
        <input type="radio" name="frequency" value="daily">
        <span class="radio-mark"></span>
        每日汇总
      </label>
      <label class="glass-radio">
        <input type="radio" name="frequency" value="weekly">
        <span class="radio-mark"></span>
        每周汇总
      </label>
      <label class="glass-radio">
        <input type="radio" name="frequency" value="never">
        <span class="radio-mark"></span>
        从不通知
      </label>
    </div>
  </div>
</div>
```