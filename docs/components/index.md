# 组件总览

Liquid Glass UI 提供了丰富的组件库，涵盖了现代Web应用开发的各种需求。所有组件都采用玻璃态设计风格，具有一致的视觉语言和交互体验。

## 基础组件

这些是最常用的基础UI组件：

### [按钮 Button](/components/button)
用于触发操作的交互元素，支持多种样式和尺寸。

```html
<button class="glass-button primary">主要按钮</button>
```

### [输入框 Input](/components/input)
用于接收用户文本输入的表单控件。

```html
<input type="text" class="glass-input" placeholder="请输入内容">
```

### [文本域 Textarea](/components/textarea)
用于多行文本输入的表单控件。

```html
<textarea class="glass-textarea" placeholder="请输入多行文本"></textarea>
```

## 表单组件

完整的表单控件集合：

### [选择器 Select](/components/select)
下拉选择组件，提供单选功能。

```html
<div class="glass-select-container">
    <div class="glass-select" data-placeholder="请选择">
        <!-- 选择器结构 -->
    </div>
</div>
```

### [复选框 Checkbox](/components/checkbox)
多选框组件，用于多项选择。

```html
<label class="glass-checkbox">
    <input type="checkbox">
    <span class="checkmark"></span>
    选项文本
</label>
```

### [单选框 Radio](/components/radio)
单选框组件，用于单项选择。

```html
<label class="glass-radio">
    <input type="radio" name="group">
    <span class="radiomark"></span>
    选项文本
</label>
```

### [开关 Switch](/components/switch)
开关切换组件，用于布尔值选择。

```html
<label class="glass-switch">
    <input type="checkbox">
    <span class="switch-slider"></span>
    <span class="switch-label">开关</span>
</label>
```

### [滑块 Slider](/components/slider)
范围选择滑块组件。

```html
<div class="glass-slider">
    <input type="range" class="slider-input" min="0" max="100" value="50">
</div>
```

## 数据展示

用于展示数据和状态的组件：

### [进度条 Progress](/components/progress)
显示操作进度的组件。

```html
<div class="glass-progress">
    <div class="progress-track">
        <div class="progress-fill" style="width: 60%;"></div>
    </div>
</div>
```

### [徽章 Badge](/components/badge)
用于显示状态或计数的小标签。

```html
<span class="glass-badge primary">新消息</span>
```

### [头像 Avatar](/components/avatar)
用户头像显示组件。

```html
<div class="glass-avatar">
    <img src="avatar.jpg" alt="用户头像">
</div>
```

### [卡片 Card](/components/card)
内容容器组件，用于组织相关信息。

```html
<div class="glass-card">
    <h4>卡片标题</h4>
    <p>卡片内容</p>
</div>
```

## 导航组件

页面导航和结构组件：

### [导航栏 Navigation](/components/navigation)
页面主导航组件。

```html
<nav class="glass-nav">
    <a href="#" class="nav-item active">首页</a>
    <a href="#" class="nav-item">产品</a>
    <a href="#" class="nav-item">关于</a>
</nav>
```

### [标签页 Tabs](/components/tabs)
标签页切换组件。

```html
<div class="glass-tabs">
    <div class="tab-header">
        <div class="tab-item active">标签1</div>
        <div class="tab-item">标签2</div>
    </div>
    <div class="tab-content">
        <!-- 内容区域 -->
    </div>
</div>
```

### [面包屑 Breadcrumb](/components/breadcrumb)
页面层级导航组件。

```html
<nav class="glass-breadcrumb">
    <a href="#" class="breadcrumb-item">首页</a>
    <span class="breadcrumb-divider">/</span>
    <a href="#" class="breadcrumb-item">产品</a>
    <span class="breadcrumb-divider">/</span>
    <span class="breadcrumb-item active">详情</span>
</nav>
```

### [分页 Pagination](/components/pagination)
分页导航组件。

```html
<div class="glass-pagination">
    <button class="page-btn">上一页</button>
    <button class="page-btn active">1</button>
    <button class="page-btn">2</button>
    <button class="page-btn">下一页</button>
</div>
```

## 反馈组件

用户反馈和交互组件：

### [加载器 Loader](/components/loader)
加载状态指示器。

```html
<div class="glass-loader spinner medium">
    <div class="spinner-ring"></div>
</div>
```

### [模态框 Modal](/components/modal)
弹出式对话框组件。

```html
<div class="glass-modal">
    <div class="modal-content">
        <div class="modal-header">
            <h4>标题</h4>
            <button class="modal-close">×</button>
        </div>
        <div class="modal-body">内容</div>
    </div>
</div>
```

### [通知 Notification](/components/notification)
消息通知组件。

```html
<div class="glass-notification">
    <div class="notification-content">
        <span class="notification-title">通知</span>
        <span class="notification-message">这是一条通知消息</span>
    </div>
    <button class="notification-close">×</button>
</div>
```

### [工具提示 Tooltip](/components/tooltip)
悬停提示组件。

```html
<div class="glass-tooltip-container">
    <button class="glass-button">悬停我</button>
    <div class="glass-tooltip">这是提示内容</div>
</div>
```

## 特殊组件

特殊用途的组件：

### [时间选择器 TimePicker](/components/timepicker)
时间选择输入组件。

```html
<div class="glass-time-picker">
    <div class="time-display">
        <span class="time-value">12:00</span>
    </div>
</div>
```

## 组件特性

所有 Liquid Glass UI 组件都具有以下特性：

- **🎨 一致的设计语言**：统一的玻璃态视觉风格
- **📱 响应式设计**：适配各种屏幕尺寸
- **♿ 可访问性支持**：遵循WCAG无障碍标准
- **🔧 易于定制**：支持CSS变量主题定制
- **⚡ 高性能**：纯CSS实现，无JavaScript依赖
- **🌐 浏览器兼容**：支持所有现代浏览器

## 使用建议

- 在暗色或渐变背景上使用效果最佳
- 建议搭配适当的背景模糊效果
- 可以通过CSS变量轻松定制主题色彩
- 组件间可以自由组合使用

## 下一步

选择您感兴趣的组件开始深入了解：

- 从 [按钮组件](/components/button) 开始了解基础用法
- 查看 [自定义主题](/guide/theming) 学习如何定制样式
- 浏览 [示例页面](/examples/) 获得更多设计灵感 