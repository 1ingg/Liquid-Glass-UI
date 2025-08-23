# 选择器 Select

选择器是一个下拉选择组件，允许用户从预定义的选项列表中选择一个值。Liquid Glass UI 的选择器采用现代化的设计，提供流畅的动画效果和良好的用户体验。

## 基础用法

最基本的选择器：

```html
<div class="glass-select-container">
  <div class="glass-select" data-placeholder="请选择选项">
    <div class="select-trigger">
      <span class="select-value"></span>
      <div class="select-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown">
      <div class="select-option" data-value="option1">
        <span class="option-text">选项 1</span>
      </div>
      <div class="select-option" data-value="option2">
        <span class="option-text">选项 2</span>
      </div>
      <div class="select-option" data-value="option3">
        <span class="option-text">选项 3</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-select-container">
    <div class="glass-select" data-placeholder="请选择选项">
      <div class="select-trigger">
        <span class="select-value"></span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="option1">
          <span class="option-text">选项 1</span>
        </div>
        <div class="select-option" data-value="option2">
          <span class="option-text">选项 2</span>
        </div>
        <div class="select-option" data-value="option3">
          <span class="option-text">选项 3</span>
        </div>
      </div>
    </div>
  </div>
</div>

## 选择器尺寸

### 紧凑型选择器

```html
<div class="glass-select-container">
  <div class="glass-select compact" data-placeholder="紧凑选择器">
    <div class="select-trigger">
      <span class="select-value"></span>
      <div class="select-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown">
      <div class="select-option" data-value="small1">
        <span class="option-text">小选项 1</span>
      </div>
      <div class="select-option" data-value="small2">
        <span class="option-text">小选项 2</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <div class="glass-select-container" style="width: 200px;">
      <div class="glass-select" data-placeholder="标准选择器">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="glass-select-container" style="width: 150px;">
      <div class="glass-select compact" data-placeholder="紧凑选择器">
        <div class="select-trigger" style="padding: 10px 16px; min-height: 40px;">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 带图标的选项

```html
<div class="glass-select-container">
  <div class="glass-select" data-placeholder="选择语言">
    <div class="select-trigger">
      <span class="select-value"></span>
      <div class="select-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown">
      <div class="select-option" data-value="zh">
        <div class="option-icon">🇨🇳</div>
        <span class="option-text">中文</span>
      </div>
      <div class="select-option" data-value="en">
        <div class="option-icon">🇺🇸</div>
        <span class="option-text">English</span>
      </div>
      <div class="select-option" data-value="ja">
        <div class="option-icon">🇯🇵</div>
        <span class="option-text">日本語</span>
      </div>
      <div class="select-option" data-value="ko">
        <div class="option-icon">🇰🇷</div>
        <span class="option-text">한국어</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-select-container">
    <div class="glass-select" data-placeholder="选择语言" id="language-select">
      <div class="select-trigger">
        <span class="select-value"></span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="zh">
          <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">🇨🇳</div>
          <span class="option-text">中文</span>
        </div>
        <div class="select-option" data-value="en">
          <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">🇺🇸</div>
          <span class="option-text">English</span>
        </div>
        <div class="select-option" data-value="ja">
          <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">🇯🇵</div>
          <span class="option-text">日本語</span>
        </div>
        <div class="select-option" data-value="ko">
          <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">🇰🇷</div>
          <span class="option-text">한국어</span>
        </div>
      </div>
    </div>
  </div>
</div>

## 带颜色的选项

```html
<div class="glass-select-container">
  <div class="glass-select" data-placeholder="选择颜色">
    <div class="select-trigger">
      <span class="select-value"></span>
      <div class="select-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown">
      <div class="select-option" data-value="red">
        <div class="option-color" style="background-color: #ef4444;"></div>
        <span class="option-text">红色</span>
        <span class="option-desc">#ef4444</span>
      </div>
      <div class="select-option" data-value="blue">
        <div class="option-color" style="background-color: #3b82f6;"></div>
        <span class="option-text">蓝色</span>
        <span class="option-desc">#3b82f6</span>
      </div>
      <div class="select-option" data-value="green">
        <div class="option-color" style="background-color: #10b981;"></div>
        <span class="option-text">绿色</span>
        <span class="option-desc">#10b981</span>
      </div>
      <div class="select-option" data-value="purple">
        <div class="option-color" style="background-color: #8b5cf6;"></div>
        <span class="option-text">紫色</span>
        <span class="option-desc">#8b5cf6</span>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div class="glass-select-container">
    <div class="glass-select" data-placeholder="选择颜色" id="color-select">
      <div class="select-trigger">
        <span class="select-value"></span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="red">
          <div style="width: 20px; height: 20px; border-radius: 50%; margin-right: 12px; border: 2px solid rgba(255, 255, 255, 0.3); background-color: #ef4444; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></div>
          <span class="option-text">红色</span>
          <span style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin-left: 8px;">#ef4444</span>
        </div>
        <div class="select-option" data-value="blue">
          <div style="width: 20px; height: 20px; border-radius: 50%; margin-right: 12px; border: 2px solid rgba(255, 255, 255, 0.3); background-color: #3b82f6; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></div>
          <span class="option-text">蓝色</span>
          <span style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin-left: 8px;">#3b82f6</span>
        </div>
        <div class="select-option" data-value="green">
          <div style="width: 20px; height: 20px; border-radius: 50%; margin-right: 12px; border: 2px solid rgba(255, 255, 255, 0.3); background-color: #10b981; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></div>
          <span class="option-text">绿色</span>
          <span style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin-left: 8px;">#10b981</span>
        </div>
        <div class="select-option" data-value="purple">
          <div style="width: 20px; height: 20px; border-radius: 50%; margin-right: 12px; border: 2px solid rgba(255, 255, 255, 0.3); background-color: #8b5cf6; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></div>
          <span class="option-text">紫色</span>
          <span style="color: rgba(255, 255, 255, 0.6); font-size: 12px; margin-left: 8px;">#8b5cf6</span>
        </div>
      </div>
    </div>
  </div>
</div>

## 分组选项

```html
<div class="glass-select-container">
  <div class="glass-select" data-placeholder="选择城市">
    <div class="select-trigger">
      <span class="select-value"></span>
      <div class="select-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown">
      <div class="option-group-label">华北地区</div>
      <div class="select-option" data-value="beijing">
        <span class="option-text">北京</span>
      </div>
      <div class="select-option" data-value="tianjin">
        <span class="option-text">天津</span>
      </div>
      
      <div class="option-group-label">华东地区</div>
      <div class="select-option" data-value="shanghai">
        <span class="option-text">上海</span>
      </div>
      <div class="select-option" data-value="hangzhou">
        <span class="option-text">杭州</span>
      </div>
      
      <div class="option-group-label">华南地区</div>
      <div class="select-option" data-value="guangzhou">
        <span class="option-text">广州</span>
      </div>
      <div class="select-option" data-value="shenzhen">
        <span class="option-text">深圳</span>
      </div>
    </div>
  </div>
</div>
```

## 带标签的选择器

```html
<div class="form-group">
  <label class="form-label">选择国家</label>
  <div class="glass-select-container">
    <div class="glass-select" data-placeholder="请选择国家">
      <div class="select-trigger">
        <span class="select-value"></span>
        <div class="select-arrow">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>
      <div class="select-dropdown">
        <div class="select-option" data-value="china">
          <span class="option-text">中国</span>
        </div>
        <div class="select-option" data-value="usa">
          <span class="option-text">美国</span>
        </div>
        <div class="select-option" data-value="japan">
          <span class="option-text">日本</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 300px;">
    <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">选择国家</label>
    <div class="glass-select-container">
      <div class="glass-select" data-placeholder="请选择国家" id="country-select">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: rgba(255, 255, 255, 0.7);">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div class="select-dropdown">
          <div class="select-option" data-value="china">
            <span class="option-text">中国</span>
          </div>
          <div class="select-option" data-value="usa">
            <span class="option-text">美国</span>
          </div>
          <div class="select-option" data-value="japan">
            <span class="option-text">日本</span>
          </div>
          <div class="select-option" data-value="korea">
            <span class="option-text">韩国</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## 实际应用场景

### 设置表单

```html
<form class="settings-form">
  <div class="form-group">
    <label class="form-label">主题</label>
    <div class="glass-select-container">
      <div class="glass-select" data-placeholder="选择主题">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div class="select-dropdown">
          <div class="select-option" data-value="light">
            <div class="option-icon">☀️</div>
            <span class="option-text">浅色主题</span>
          </div>
          <div class="select-option" data-value="dark">
            <div class="option-icon">🌙</div>
            <span class="option-text">深色主题</span>
          </div>
          <div class="select-option" data-value="auto">
            <div class="option-icon">🔄</div>
            <span class="option-text">自动切换</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="form-group">
    <label class="form-label">时区</label>
    <div class="glass-select-container">
      <div class="glass-select" data-placeholder="选择时区">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div class="select-dropdown">
          <div class="select-option" data-value="utc+8">
            <span class="option-text">GMT+8 北京时间</span>
          </div>
          <div class="select-option" data-value="utc+0">
            <span class="option-text">GMT+0 格林威治时间</span>
          </div>
          <div class="select-option" data-value="utc-5">
            <span class="option-text">GMT-5 东部时间</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
```

### 筛选器

```html
<div class="filter-bar">
  <div class="filter-item">
    <label class="form-label">分类</label>
    <div class="glass-select-container">
      <div class="glass-select compact" data-placeholder="全部分类">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div class="select-dropdown">
          <div class="select-option" data-value="all">
            <span class="option-text">全部分类</span>
          </div>
          <div class="select-option" data-value="electronics">
            <span class="option-text">电子产品</span>
          </div>
          <div class="select-option" data-value="clothing">
            <span class="option-text">服装</span>
          </div>
          <div class="select-option" data-value="books">
            <span class="option-text">图书</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="filter-item">
    <label class="form-label">排序</label>
    <div class="glass-select-container">
      <div class="glass-select compact" data-placeholder="默认排序">
        <div class="select-trigger">
          <span class="select-value"></span>
          <div class="select-arrow">
            <svg viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
        <div class="select-dropdown">
          <div class="select-option" data-value="default">
            <span class="option-text">默认排序</span>
          </div>
          <div class="select-option" data-value="price-asc">
            <span class="option-text">价格从低到高</span>
          </div>
          <div class="select-option" data-value="price-desc">
            <span class="option-text">价格从高到低</span>
          </div>
          <div class="select-option" data-value="newest">
            <span class="option-text">最新上架</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 用户资料表单

```html
<form class="profile-form">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">性别</label>
      <div class="glass-select-container">
        <div class="glass-select" data-placeholder="请选择">
          <div class="select-trigger">
            <span class="select-value"></span>
            <div class="select-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
          </div>
          <div class="select-dropdown">
            <div class="select-option" data-value="male">
              <div class="option-icon">👨</div>
              <span class="option-text">男</span>
            </div>
            <div class="select-option" data-value="female">
              <div class="option-icon">👩</div>
              <span class="option-text">女</span>
            </div>
            <div class="select-option" data-value="other">
              <div class="option-icon">👤</div>
              <span class="option-text">其他</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label class="form-label">职业</label>
      <div class="glass-select-container">
        <div class="glass-select" data-placeholder="请选择职业">
          <div class="select-trigger">
            <span class="select-value"></span>
            <div class="select-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
          </div>
          <div class="select-dropdown">
            <div class="select-option" data-value="developer">
              <span class="option-text">软件开发</span>
            </div>
            <div class="select-option" data-value="designer">
              <span class="option-text">设计师</span>
            </div>
            <div class="select-option" data-value="manager">
              <span class="option-text">管理人员</span>
            </div>
            <div class="select-option" data-value="student">
              <span class="option-text">学生</span>
            </div>
            <div class="select-option" data-value="other">
              <span class="option-text">其他</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
```

## JavaScript 交互

### 基础交互功能

```javascript
class GlassSelect {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelector('.select-trigger');
    this.dropdown = element.querySelector('.select-dropdown');
    this.valueSpan = element.querySelector('.select-value');
    this.options = element.querySelectorAll('.select-option');
    this.placeholder = element.dataset.placeholder || '请选择';
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.setPlaceholder();
  }
  
  bindEvents() {
    // 点击触发器
    this.trigger.addEventListener('click', () => {
      this.toggle();
    });
    
    // 选择选项
    this.options.forEach(option => {
      option.addEventListener('click', () => {
        this.selectOption(option);
      });
    });
    
    // 点击外部关闭
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.close();
      }
    });
    
    // 键盘导航
    this.element.addEventListener('keydown', (e) => {
      this.handleKeyboard(e);
    });
  }
  
  toggle() {
    if (this.element.classList.contains('active')) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    this.element.classList.add('active');
    this.trigger.setAttribute('aria-expanded', 'true');
  }
  
  close() {
    this.element.classList.remove('active');
    this.trigger.setAttribute('aria-expanded', 'false');
  }
  
  selectOption(option) {
    const value = option.dataset.value;
    const text = option.querySelector('.option-text').textContent;
    
    // 更新显示值
    this.valueSpan.textContent = text;
    
    // 更新选中状态
    this.options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    
    // 触发change事件
    this.element.dispatchEvent(new CustomEvent('change', {
      detail: { value, text }
    }));
    
    this.close();
  }
  
  setPlaceholder() {
    if (this.valueSpan.textContent === '') {
      this.valueSpan.textContent = this.placeholder;
      this.valueSpan.style.color = 'rgba(255, 255, 255, 0.6)';
    }
  }
  
  handleKeyboard(e) {
    // 实现键盘导航
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.toggle();
        break;
      case 'Escape':
        this.close();
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();
        // 实现上下箭头导航
        break;
    }
  }
}

// 初始化所有选择器
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.glass-select').forEach(select => {
    new GlassSelect(select);
  });
});
```

### 搜索功能

```javascript
function addSearchToSelect(selectElement) {
  const dropdown = selectElement.querySelector('.select-dropdown');
  
  // 创建搜索输入框
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'select-search';
  searchInput.placeholder = '搜索选项...';
  searchInput.style.cssText = `
    width: 100%;
    padding: 8px 12px;
    margin-bottom: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    outline: none;
  `;
  
  dropdown.insertBefore(searchInput, dropdown.firstChild);
  
  // 搜索功能
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const options = dropdown.querySelectorAll('.select-option');
    
    options.forEach(option => {
      const text = option.querySelector('.option-text').textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        option.style.display = 'flex';
      } else {
        option.style.display = 'none';
      }
    });
  });
  
  // 防止点击搜索框时关闭下拉框
  searchInput.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-select-container` | 选择器容器 |
| `.glass-select` | 基础选择器样式 |
| `.glass-select.compact` | 紧凑型选择器 |
| `.select-trigger` | 触发器区域 |
| `.select-value` | 显示值区域 |
| `.select-arrow` | 箭头图标 |
| `.select-dropdown` | 下拉列表 |
| `.select-option` | 选项 |
| `.select-option.selected` | 选中的选项 |
| `.option-icon` | 选项图标 |
| `.option-color` | 选项颜色指示器 |
| `.option-text` | 选项文本 |
| `.option-desc` | 选项描述 |

## 可访问性

- 支持键盘导航（Space、Enter、Escape、Arrow键）
- 支持 ARIA 属性
- 支持屏幕阅读器
- 提供清晰的焦点指示器

```html
<div class="glass-select-container">
  <div 
    class="glass-select" 
    role="combobox"
    aria-haspopup="listbox"
    aria-expanded="false"
    aria-labelledby="select-label"
    tabindex="0"
  >
    <div id="select-label" class="form-label">选择选项</div>
    <div class="select-trigger">
      <span class="select-value" role="textbox" aria-readonly="true"></span>
      <div class="select-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
    <div class="select-dropdown" role="listbox">
      <div class="select-option" role="option" data-value="option1">
        <span class="option-text">选项 1</span>
      </div>
    </div>
  </div>
</div>
```

## 注意事项

- 确保选项文本简洁明了
- 在移动设备上测试触摸体验
- 为复杂选项提供足够的视觉层次
- 考虑添加搜索功能以处理大量选项
- 保持一致的选项格式和样式

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

<script>
// 简单的选择器交互功能
document.addEventListener('DOMContentLoaded', function() {
  const selects = ['language-select', 'color-select', 'country-select'];
  
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    const trigger = select.querySelector('.select-trigger');
    const dropdown = select.querySelector('.select-dropdown');
    const valueSpan = select.querySelector('.select-value');
    const options = select.querySelectorAll('.select-option');
    const placeholder = select.dataset.placeholder;
    
    // 设置占位符
    valueSpan.textContent = placeholder;
    valueSpan.style.color = 'rgba(255, 255, 255, 0.6)';
    
    trigger.addEventListener('click', () => {
      select.classList.toggle('active');
    });
    
    options.forEach(option => {
      option.addEventListener('click', () => {
        const text = option.querySelector('.option-text').textContent;
        const icon = option.querySelector('[style*="font-size: 16px"]') || option.querySelector('[style*="background-color"]');
        
        if (icon) {
          valueSpan.innerHTML = icon.outerHTML + ' ' + text;
        } else {
          valueSpan.textContent = text;
        }
        
        valueSpan.style.color = 'rgba(255, 255, 255, 0.9)';
        select.classList.remove('active');
        
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
      });
    });
    
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove('active');
      }
    });
  });
});
</script>
