# 快速上手

本指南将帮助您快速开始使用 Liquid Glass UI，在几分钟内创建出美观的界面。

## 基本页面结构

首先，创建一个基本的HTML页面：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个 Liquid Glass UI 页面</title>
    
    <!-- 引入 Liquid Glass UI -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
    
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
    </style>
</head>
<body>
    <!-- 您的内容将在这里 -->
</body>
</html>
```

## 使用组件

### 按钮组件

最简单的开始方式是使用按钮组件：

```html
<!-- 基础按钮 -->
<button class="glass-button">默认按钮</button>

<!-- 主要按钮 -->
<button class="glass-button primary">主要按钮</button>

<!-- 不同尺寸 -->
<button class="glass-button small">小按钮</button>
<button class="glass-button large">大按钮</button>
```

### 输入框组件

创建表单输入框：

```html
<!-- 文本输入框 -->
<input type="text" class="glass-input" placeholder="请输入文本">

<!-- 文本域 -->
<textarea class="glass-textarea" placeholder="请输入多行文本" rows="4"></textarea>
```

### 卡片组件

使用卡片展示内容：

```html
<div class="glass-card">
    <h4>卡片标题</h4>
    <p>这是卡片的内容部分，可以放置任何您需要的信息。</p>
</div>
```

## 组合使用

将不同组件组合使用，创建更复杂的界面：

```html
<div class="glass-container" style="max-width: 400px; margin: 0 auto;">
    <h2 style="color: white; text-align: center; margin-bottom: 30px;">
        用户登录
    </h2>
    
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <input type="email" class="glass-input" placeholder="邮箱地址">
        <input type="password" class="glass-input" placeholder="密码">
        
        <label class="glass-checkbox">
            <input type="checkbox">
            <span class="checkmark"></span>
            记住我
        </label>
        
        <button class="glass-button primary large">登录</button>
    </div>
</div>
```

## 添加交互功能

虽然 Liquid Glass UI 是纯CSS库，但您可以轻松添加JavaScript来增强交互性：

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
    // 按钮点击事件
    const loginBtn = document.querySelector('.glass-button.primary');
    loginBtn.addEventListener('click', function() {
        alert('登录按钮被点击了！');
    });
    
    // 输入框焦点效果增强
    const inputs = document.querySelectorAll('.glass-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
</script>
```

## 响应式布局

Liquid Glass UI 组件默认支持响应式设计，您可以使用CSS Grid或Flexbox创建响应式布局：

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
    <div class="glass-card">
        <h4>功能卡片 1</h4>
        <p>第一个功能的描述</p>
        <button class="glass-button">了解更多</button>
    </div>
    
    <div class="glass-card">
        <h4>功能卡片 2</h4>
        <p>第二个功能的描述</p>
        <button class="glass-button">了解更多</button>
    </div>
    
    <div class="glass-card">
        <h4>功能卡片 3</h4>
        <p>第三个功能的描述</p>
        <button class="glass-button">了解更多</button>
    </div>
</div>
```

## 主题定制

您可以通过CSS变量轻松定制主题：

```css
:root {
    --glass-primary: rgba(255, 100, 150, 0.8);
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.3);
}
```

## 完整示例

这是一个完整的示例页面：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liquid Glass UI 示例</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>欢迎使用 Liquid Glass UI</h1>
            <p>现代化的液态玻璃UI组件库</p>
        </div>
        
        <div class="grid">
            <div class="glass-card">
                <h4>快速开始</h4>
                <p>只需几分钟就能创建美观的界面</p>
                <button class="glass-button primary">开始使用</button>
            </div>
            
            <div class="glass-card">
                <h4>丰富组件</h4>
                <p>包含所有常用的UI组件</p>
                <button class="glass-button">查看组件</button>
            </div>
            
            <div class="glass-card">
                <h4>响应式设计</h4>
                <p>完美适配各种设备</p>
                <button class="glass-button">了解更多</button>
            </div>
        </div>
    </div>
</body>
</html>
```

## 下一步

现在您已经了解了基础用法，接下来可以：

- 浏览 [组件文档](/components/) 学习更多组件
- 查看 [自定义主题](/guide/theming) 了解主题定制
- 阅读 [最佳实践](/guide/best-practices) 获得使用建议 