# 标签页 Tabs

标签页是用于在不同内容面板之间切换的导航组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础标签页

```html
<div class="glass-tabs">
  <div class="tabs-nav">
    <button class="tab-item active">标签一</button>
    <button class="tab-item">标签二</button>
    <button class="tab-item">标签三</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">内容一</div>
    <div class="tab-panel">内容二</div>
    <div class="tab-panel">内容三</div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-tabs">
    <div class="tabs-nav">
      <button class="tab-item active">标签一</button>
      <button class="tab-item">标签二</button>
      <button class="tab-item">标签三</button>
    </div>
    <div class="tabs-content">
      <div class="tab-panel active">内容一</div>
      <div class="tab-panel">内容二</div>
      <div class="tab-panel">内容三</div>
    </div>
  </div>
</div>

### 带图标的标签页

```html
<div class="glass-tabs">
  <div class="tabs-nav">
    <button class="tab-item active">
      <span class="tab-icon">📄</span>
      文档
    </button>
    <button class="tab-item">
      <span class="tab-icon">⚙️</span>
      设置
    </button>
    <button class="tab-item">
      <span class="tab-icon">👤</span>
      用户
    </button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">文档内容</div>
    <div class="tab-panel">设置内容</div>
    <div class="tab-panel">用户内容</div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-tabs">
    <div class="tabs-nav">
      <button class="tab-item active">
        <span class="tab-icon">📄</span>
        文档
      </button>
      <button class="tab-item">
        <span class="tab-icon">⚙️</span>
        设置
      </button>
      <button class="tab-item">
        <span class="tab-icon">👤</span>
        用户
      </button>
    </div>
    <div class="tabs-content">
      <div class="tab-panel active">文档内容</div>
      <div class="tab-panel">设置内容</div>
      <div class="tab-panel">用户内容</div>
    </div>
  </div>
</div>

## 标签页类型

### 卡片式标签页

```html
<div class="glass-tabs card">
  <div class="tabs-nav">
    <button class="tab-item active">首页</button>
    <button class="tab-item">产品</button>
    <button class="tab-item">关于</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">首页内容</div>
    <div class="tab-panel">产品内容</div>
    <div class="tab-panel">关于内容</div>
  </div>
</div>
```

### 边框式标签页

```html
<div class="glass-tabs bordered">
  <div class="tabs-nav">
    <button class="tab-item active">概述</button>
    <button class="tab-item">详情</button>
    <button class="tab-item">评价</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">概述内容</div>
    <div class="tab-panel">详情内容</div>
    <div class="tab-panel">评价内容</div>
  </div>
</div>
```

## 标签页位置

### 垂直标签页

```html
<div class="glass-tabs vertical">
  <div class="tabs-nav">
    <button class="tab-item active">选项一</button>
    <button class="tab-item">选项二</button>
    <button class="tab-item">选项三</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">垂直内容一</div>
    <div class="tab-panel">垂直内容二</div>
    <div class="tab-panel">垂直内容三</div>
  </div>
</div>
```

## CSS 类名

### 基础类名

- `.glass-tabs` - 标签页容器
- `.tabs-nav` - 标签导航区域
- `.tab-item` - 单个标签
- `.tabs-content` - 内容区域
- `.tab-panel` - 内容面板
- `.tab-icon` - 标签图标

### 修饰类名

**类型修饰符**
- `.card` - 卡片式样式
- `.bordered` - 边框式样式

**布局修饰符**
- `.vertical` - 垂直布局

**状态修饰符**
- `.active` - 激活状态

## JavaScript 增强

### 标签页切换

```javascript
function initTabs(tabsElement) {
  const tabItems = tabsElement.querySelectorAll('.tab-item');
  const tabPanels = tabsElement.querySelectorAll('.tab-panel');
  
  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // 移除所有激活状态
      tabItems.forEach(item => item.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // 设置当前激活状态
      tab.classList.add('active');
      tabPanels[index].classList.add('active');
      
      // 触发切换事件
      tabsElement.dispatchEvent(new CustomEvent('tab-change', {
        detail: { index, tab, panel: tabPanels[index] }
      }));
    });
  });
}

// 初始化所有标签页
document.querySelectorAll('.glass-tabs').forEach(initTabs);
```

### 键盘导航

```javascript
function addKeyboardNavigation(tabsElement) {
  const tabItems = Array.from(tabsElement.querySelectorAll('.tab-item'));
  
  tabItems.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let nextIndex = index;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          nextIndex = index > 0 ? index - 1 : tabItems.length - 1;
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextIndex = index < tabItems.length - 1 ? index + 1 : 0;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = tabItems.length - 1;
          break;
      }
      
      if (nextIndex !== index) {
        tabItems[nextIndex].focus();
        tabItems[nextIndex].click();
      }
    });
  });
}
```

## 应用场景

### 设置面板

```html
<div class="glass-tabs">
  <div class="tabs-nav">
    <button class="tab-item active">
      <span class="tab-icon">👤</span>
      个人信息
    </button>
    <button class="tab-item">
      <span class="tab-icon">🔒</span>
      安全设置
    </button>
    <button class="tab-item">
      <span class="tab-icon">🔔</span>
      通知设置
    </button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">
      <h3>个人信息</h3>
      <p>编辑您的个人资料信息...</p>
    </div>
    <div class="tab-panel">
      <h3>安全设置</h3>
      <p>管理您的账户安全...</p>
    </div>
    <div class="tab-panel">
      <h3>通知设置</h3>
      <p>配置通知偏好...</p>
    </div>
  </div>
</div>
```

### 产品展示

```html
<div class="glass-tabs card">
  <div class="tabs-nav">
    <button class="tab-item active">产品介绍</button>
    <button class="tab-item">技术规格</button>
    <button class="tab-item">用户评价</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">
      <h3>产品介绍</h3>
      <p>这是一款革命性的产品...</p>
    </div>
    <div class="tab-panel">
      <h3>技术规格</h3>
      <ul>
        <li>尺寸：10cm x 5cm</li>
        <li>重量：100g</li>
        <li>材质：铝合金</li>
      </ul>
    </div>
    <div class="tab-panel">
      <h3>用户评价</h3>
      <p>⭐⭐⭐⭐⭐ 非常好用的产品！</p>
    </div>
  </div>
</div>
```

### 数据仪表板

```html
<div class="glass-tabs">
  <div class="tabs-nav">
    <button class="tab-item active">今日</button>
    <button class="tab-item">本周</button>
    <button class="tab-item">本月</button>
    <button class="tab-item">本年</button>
  </div>
  <div class="tabs-content">
    <div class="tab-panel active">
      <p>今日访问量：1,234</p>
      <p>新用户：56</p>
    </div>
    <div class="tab-panel">
      <p>本周访问量：8,765</p>
      <p>新用户：234</p>
    </div>
    <div class="tab-panel">
      <p>本月访问量：32,456</p>
      <p>新用户：1,234</p>
    </div>
    <div class="tab-panel">
      <p>本年访问量：156,789</p>
      <p>新用户：5,678</p>
    </div>
  </div>
</div>
```