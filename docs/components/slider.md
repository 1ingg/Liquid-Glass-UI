# 滑块 Slider

滑块是用于在指定范围内选择数值的输入控件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础滑块

```html
<div class="glass-slider">
  <input type="range" class="slider-input" min="0" max="100" value="50">
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-slider">
    <input type="range" class="slider-input" min="0" max="100" value="50" style="width: 100%;">
  </div>
</div>

## CSS 类名

### 基础类名

- `.glass-slider` - 基础滑块样式
- `.glass-slider-range` - 双向滑块容器

### 修饰类名

**状态修饰符**
- `:disabled` - 禁用状态
- `:readonly` - 只读状态

## JavaScript 增强

### 滑块事件处理

```javascript
// 监听滑块值变化
document.querySelectorAll('.glass-slider input').forEach(slider => {
  slider.addEventListener('input', function() {
    console.log('滑块值:', this.value);
  });
  
  slider.addEventListener('change', function() {
    console.log('最终值:', this.value);
  });
});
```

### 显示当前值

```javascript
function addValueDisplay(slider) {
  const display = document.createElement('span');
  display.className = 'slider-value';
  display.textContent = slider.value;
  
  slider.parentNode.appendChild(display);
  
  slider.addEventListener('input', function() {
    display.textContent = this.value;
  });
}

// 使用示例
document.querySelectorAll('.glass-slider input').forEach(addValueDisplay);
```

## 应用场景

### 音量控制

```html
<div class="volume-control">
  <label class="form-label">音量控制</label>
  <div class="glass-slider">
    <span class="slider-icon">🔇</span>
    <input type="range" min="0" max="100" value="50" id="volume-slider">
    <span class="slider-icon">🔊</span>
  </div>
  <span class="slider-value">50</span>
</div>
```

### 价格范围

```html
<div class="price-range">
  <label class="form-label">价格范围</label>
  <div class="glass-slider-range">
    <input type="range" min="0" max="1000" value="200" class="range-min">
    <input type="range" min="0" max="1000" value="800" class="range-max">
  </div>
  <div class="range-display">
    <span class="range-min-value">¥200</span>
    <span>-</span>
    <span class="range-max-value">¥800</span>
  </div>
</div>
```

### 设置调节

```html
<div class="settings-sliders">
  <div class="setting-item">
    <label class="form-label">亮度</label>
    <div class="glass-slider">
      <input type="range" min="10" max="100" value="80">
    </div>
  </div>
  
  <div class="setting-item">
    <label class="form-label">对比度</label>
    <div class="glass-slider">
      <input type="range" min="0" max="100" value="50">
    </div>
  </div>
  
  <div class="setting-item">
    <label class="form-label">饱和度</label>
    <div class="glass-slider">
      <input type="range" min="0" max="200" value="100">
    </div>
  </div>
</div>
``` 