# 选择器 Select

玻璃风格的下拉选择器，支持自定义样式和动画效果。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础选择器

```html
<div class="glass-select" data-placeholder="请选择">
  <div class="select-trigger">
    <span class="select-value">请选择</span>
    <div class="select-arrow">
      <svg viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
  <div class="select-dropdown">
    <div class="select-option" data-value="option1">
      <span class="option-text">选项一</span>
    </div>
    <div class="select-option" data-value="option2">
      <span class="option-text">选项二</span>
    </div>
    <div class="select-option" data-value="option3">
      <span class="option-text">选项三</span>
    </div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; min-height: 200px;">
  <div style="position: relative;">
    <div class="glass-select" data-placeholder="请选择">
      <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: rgba(255,255,255,0.9);">
        <span>请选择</span>
        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor; transform: rotate(180deg);">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
      <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; margin-top: 4px; overflow: hidden;">
        <div style="padding: 12px; color: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer;">选项一</div>
        <div style="padding: 12px; color: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.1); cursor: pointer;">选项二</div>
        <div style="padding: 12px; color: rgba(255,255,255,0.9); cursor: pointer;">选项三</div>
      </div>
    </div>
  </div>
</div>

### 带标签的选择器

```html
<div class="form-group">
  <label class="form-label">选择主题</label>
  <div class="glass-select-container">
    <div class="glass-select compact" data-placeholder="选择主题">
      <div class="select-trigger">
        <span class="select-value">选择主题</span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="light">
          <span class="option-color" style="background: linear-gradient(45deg, #fff, #f0f0f0);"></span>
          <span class="option-text">浅色主题</span>
        </div>
        <div class="select-option" data-value="dark">
          <span class="option-color" style="background: linear-gradient(45deg, #333, #000);"></span>
          <span class="option-text">深色主题</span>
        </div>
        <div class="select-option" data-value="blue">
          <span class="option-color" style="background: linear-gradient(45deg, #4a90e2, #357abd);"></span>
          <span class="option-text">蓝色主题</span>
        </div>
        <div class="select-option" data-value="purple">
          <span class="option-color" style="background: linear-gradient(45deg, #9b59b6, #8e44ad);"></span>
          <span class="option-text">紫色主题</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; min-height: 260px;">
  <div style="position: relative;">
    <label style="display: block; margin-bottom: 8px; color: rgba(255,255,255,0.9); font-weight: 500;">选择主题</label>
    <div class="glass-select-container">
      <div class="glass-select compact" data-placeholder="选择主题">
        <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: rgba(255,255,255,0.9);">
          <span>蓝色主题</span>
          <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor; transform: rotate(180deg);">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
        <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; margin-top: 4px; overflow: hidden;">
          <div style="padding: 12px; color: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer; display: flex; align-items: center;">
            <span style="background: linear-gradient(45deg, #fff, #f0f0f0); width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span>
            浅色主题
          </div>
          <div style="padding: 12px; color: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer; display: flex; align-items: center;">
            <span style="background: linear-gradient(45deg, #333, #000); width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span>
            深色主题
          </div>
          <div style="padding: 12px; color: rgba(255,255,255,0.9); border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer; display: flex; align-items: center; background: rgba(255,255,255,0.15);">
            <span style="background: linear-gradient(45deg, #4a90e2, #357abd); width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span>
            蓝色主题
          </div>
          <div style="padding: 12px; color: rgba(255,255,255,0.9); cursor: pointer; display: flex; align-items: center;">
            <span style="background: linear-gradient(45deg, #9b59b6, #8e44ad); width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span>
            紫色主题
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## CSS 类名

### 基础类名

- `.glass-select-container` - 选择器外层容器（用于复杂选择器）
- `.glass-select` - 选择器主容器
- `.select-trigger` - 触发区域
- `.select-value` - 当前选中值显示
- `.select-arrow` - 下拉箭头
- `.select-dropdown` - 下拉菜单容器
- `.select-option` - 选项元素
- `.option-text` - 选项文本
- `.option-color` - 选项颜色指示器

### 修饰类名

**变体修饰符**
- `.compact` - 紧凑型选择器

**状态修饰符**
- `.active` - 激活状态（下拉菜单展开）
- `.selected` - 选中状态

## JavaScript 增强

### 基础交互

```javascript
// 选择器交互逻辑
document.querySelectorAll('.glass-select').forEach(select => {
  const trigger = select.querySelector('.select-trigger');
  const dropdown = select.querySelector('.select-dropdown');
  const valueSpan = select.querySelector('.select-value');
  const options = select.querySelectorAll('.select-option');
  
  // 点击触发器切换下拉菜单
  trigger.addEventListener('click', function() {
    select.classList.toggle('active');
  });
  
  // 选项点击处理
  options.forEach(option => {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const text = this.querySelector('.option-text').textContent;
      
      // 更新显示值
      valueSpan.textContent = text;
      
      // 移除其他选项的选中状态
      options.forEach(opt => opt.classList.remove('selected'));
      
      // 添加当前选项的选中状态
      this.classList.add('selected');
      
      // 关闭下拉菜单
      select.classList.remove('active');
      
      // 触发自定义事件
      select.dispatchEvent(new CustomEvent('change', {
        detail: { value, text }
      }));
    });
  });
  
  // 点击外部关闭下拉菜单
  document.addEventListener('click', function(e) {
    if (!select.contains(e.target)) {
      select.classList.remove('active');
    }
  });
});
```

### 键盘导航

```javascript
// 键盘导航支持
document.querySelectorAll('.glass-select').forEach(select => {
  const trigger = select.querySelector('.select-trigger');
  const options = select.querySelectorAll('.select-option');
  let currentIndex = -1;
  
  trigger.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        select.classList.toggle('active');
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        if (select.classList.contains('active')) {
          currentIndex = Math.min(currentIndex + 1, options.length - 1);
          updateHighlight();
        } else {
          select.classList.add('active');
        }
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        if (select.classList.contains('active')) {
          currentIndex = Math.max(currentIndex - 1, 0);
          updateHighlight();
        }
        break;
        
      case 'Escape':
        select.classList.remove('active');
        break;
    }
  });
  
  function updateHighlight() {
    options.forEach((option, index) => {
      option.classList.toggle('highlighted', index === currentIndex);
    });
  }
});
```

## 应用场景

### 主题选择器

```html
<div class="form-group">
  <label class="form-label">界面主题</label>
  <div class="glass-select-container">
    <div class="glass-select compact" data-placeholder="选择主题">
      <div class="select-trigger">
        <span class="select-value">选择主题</span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="light">
          <span class="option-color" style="background: linear-gradient(45deg, #fff, #f0f0f0);"></span>
          <span class="option-text">浅色主题</span>
        </div>
        <div class="select-option" data-value="dark">
          <span class="option-color" style="background: linear-gradient(45deg, #333, #000);"></span>
          <span class="option-text">深色主题</span>
        </div>
        <div class="select-option" data-value="blue">
          <span class="option-color" style="background: linear-gradient(45deg, #4a90e2, #357abd);"></span>
          <span class="option-text">蓝色主题</span>
        </div>
        <div class="select-option" data-value="purple">
          <span class="option-color" style="background: linear-gradient(45deg, #9b59b6, #8e44ad);"></span>
          <span class="option-text">紫色主题</span>
        </div>
      </div>
    </div>
  </div>
</div>

### 地区选择

```html
<div class="glass-select" data-placeholder="选择地区">
  <div class="select-trigger">
    <span class="select-value">选择地区</span>
    <div class="select-arrow">
      <svg viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
  <div class="select-dropdown">
    <div class="select-option" data-value="beijing">
      <span class="option-text">北京</span>
    </div>
    <div class="select-option" data-value="shanghai">
      <span class="option-text">上海</span>
    </div>
    <div class="select-option" data-value="guangzhou">
      <span class="option-text">广州</span>
    </div>
    <div class="select-option" data-value="shenzhen">
      <span class="option-text">深圳</span>
    </div>
  </div>
</div>
```

## 最佳实践

### 可访问性

1. **键盘导航**：确保支持方向键、回车键和ESC键
2. **ARIA 属性**：添加适当的ARIA标签提升屏幕阅读器支持
3. **焦点管理**：正确处理焦点状态和Tab键导航

### 性能优化

1. **事件委托**：对大量选项使用事件委托
2. **虚拟滚动**：当选项过多时考虑虚拟滚动
3. **懒加载**：支持远程数据懒加载

### 用户体验

1. **搜索功能**：为大量选项提供搜索过滤
2. **多选支持**：根据需要支持多选模式
3. **加载状态**：显示数据加载状态
 