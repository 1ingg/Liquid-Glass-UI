# 示例页面

这里展示了 Liquid Glass UI 在实际项目中的应用示例，包含完整的页面布局和交互功能。

## 登录页面

一个完整的登录页面示例，展示了表单组件的组合使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户登录 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/liquid-glass-ui@latest/dist/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
        }
        
        .login-container {
            width: 100%;
            max-width: 400px;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .login-title {
            color: white;
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 8px;
        }
        
        .login-subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
        }
        
        .login-form {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .form-actions {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 8px;
        }
        
        .form-footer {
            text-align: center;
            margin-top: 32px;
        }
        
        .form-footer a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 0.9rem;
        }
        
        .form-footer a:hover {
            color: white;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-header">
            <h1 class="login-title">欢迎回来</h1>
            <p class="login-subtitle">登录到您的账户</p>
        </div>
        
        <div class="glass-container">
            <form class="login-form">
                <div class="form-group">
                    <label class="form-label">邮箱地址</label>
                    <input type="email" class="glass-input" placeholder="请输入邮箱地址" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label">密码</label>
                    <input type="password" class="glass-input" placeholder="请输入密码" required>
                </div>
                
                <div class="form-actions">
                    <label class="glass-checkbox">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        记住我
                    </label>
                    
                    <button type="submit" class="glass-button primary large">登录</button>
                </div>
            </form>
            
            <div class="form-footer">
                <p><a href="#">忘记密码？</a></p>
                <p>还没有账户？ <a href="#">立即注册</a></p>
            </div>
        </div>
    </div>
</body>
</html>
```

## 仪表板页面

展示数据面板和导航的完整示例：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>仪表板 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/liquid-glass-ui@latest/dist/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        
        .dashboard-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
        }
        
        .dashboard-title {
            color: white;
            font-size: 2rem;
            font-weight: 300;
        }
        
        .user-menu {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            margin-bottom: 32px;
        }
        
        .stat-card {
            padding: 24px;
            text-align: center;
        }
        
        .stat-value {
            color: white;
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .stat-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 24px;
        }
        
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        .chart-container {
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.1rem;
        }
        
        .activity-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .activity-item:last-child {
            border-bottom: none;
        }
        
        .activity-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }
        
        .activity-content {
            flex: 1;
        }
        
        .activity-text {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
            margin-bottom: 4px;
        }
        
        .activity-time {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.8rem;
        }
        
        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
            
            .dashboard-header {
                flex-direction: column;
                gap: 16px;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <h1 class="dashboard-title">仪表板</h1>
            <div class="user-menu">
                <div class="glass-avatar small">👤</div>
                <span style="color: rgba(255,255,255,0.9);">用户名</span>
                <button class="glass-button small">退出</button>
            </div>
        </div>
        
        <nav class="glass-nav" style="margin-bottom: 32px;">
            <a href="#" class="nav-item active">总览</a>
            <a href="#" class="nav-item">分析</a>
            <a href="#" class="nav-item">用户</a>
            <a href="#" class="nav-item">设置</a>
        </nav>
        
        <div class="stats-grid">
            <div class="glass-card stat-card">
                <div class="stat-value">1,234</div>
                <div class="stat-label">总用户数</div>
            </div>
            <div class="glass-card stat-card">
                <div class="stat-value">856</div>
                <div class="stat-label">活跃用户</div>
            </div>
            <div class="glass-card stat-card">
                <div class="stat-value">$12,345</div>
                <div class="stat-label">本月收入</div>
            </div>
            <div class="glass-card stat-card">
                <div class="stat-value">98.5%</div>
                <div class="stat-label">系统正常运行时间</div>
            </div>
        </div>
        
        <div class="content-grid">
            <div class="main-content">
                <div class="glass-card">
                    <h3 style="color: white; margin-bottom: 20px;">数据趋势</h3>
                    <div class="chart-container">
                        📊 图表区域（可集成 Chart.js 等图表库）
                    </div>
                </div>
                
                <div class="glass-card">
                    <h3 style="color: white; margin-bottom: 20px;">快速操作</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
                        <button class="glass-button">添加用户</button>
                        <button class="glass-button">生成报告</button>
                        <button class="glass-button">导出数据</button>
                        <button class="glass-button">系统设置</button>
                    </div>
                </div>
            </div>
            
            <div class="sidebar">
                <div class="glass-card">
                    <h4 style="color: white; margin-bottom: 16px;">最近活动</h4>
                    <div class="activity-item">
                        <div class="activity-avatar">👤</div>
                        <div class="activity-content">
                            <div class="activity-text">新用户注册</div>
                            <div class="activity-time">2分钟前</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-avatar">📊</div>
                        <div class="activity-content">
                            <div class="activity-text">报告生成完成</div>
                            <div class="activity-time">15分钟前</div>
                        </div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-avatar">⚙️</div>
                        <div class="activity-content">
                            <div class="activity-text">系统更新</div>
                            <div class="activity-time">1小时前</div>
                        </div>
                    </div>
                </div>
                
                <div class="glass-card">
                    <h4 style="color: white; margin-bottom: 16px;">系统状态</h4>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">CPU 使用率</span>
                                <span style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">45%</span>
                            </div>
                            <div class="glass-progress">
                                <div class="progress-track">
                                    <div class="progress-fill" style="width: 45%;"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">内存使用率</span>
                                <span style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">72%</span>
                            </div>
                            <div class="glass-progress">
                                <div class="progress-track">
                                    <div class="progress-fill" style="width: 72%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 设置页面

展示表单和设置面板的综合应用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>设置 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/liquid-glass-ui@latest/dist/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        
        .settings-container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .settings-header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .settings-title {
            color: white;
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 8px;
        }
        
        .settings-tabs {
            margin-bottom: 32px;
        }
        
        .settings-content {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        
        .setting-section {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        
        .section-title {
            color: white;
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
        }
        
        .setting-info {
            flex: 1;
            margin-right: 20px;
        }
        
        .setting-name {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 4px;
        }
        
        .setting-description {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        .setting-control {
            flex-shrink: 0;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        @media (max-width: 768px) {
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .setting-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }
            
            .setting-info {
                margin-right: 0;
            }
        }
    </style>
</head>
<body>
    <div class="settings-container">
        <div class="settings-header">
            <h1 class="settings-title">账户设置</h1>
        </div>
        
        <div class="glass-tabs settings-tabs">
            <div class="tab-header">
                <div class="tab-item active">个人资料</div>
                <div class="tab-item">安全设置</div>
                <div class="tab-item">通知设置</div>
                <div class="tab-item">偏好设置</div>
            </div>
        </div>
        
        <div class="glass-container settings-content">
            <!-- 个人资料设置 -->
            <div class="setting-section">
                <h2 class="section-title">个人信息</h2>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">用户名</label>
                        <input type="text" class="glass-input" value="johndoe" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <label class="form-label">显示名称</label>
                        <input type="text" class="glass-input" value="John Doe" placeholder="显示名称">
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">邮箱地址</label>
                    <input type="email" class="glass-input" value="john@example.com" placeholder="邮箱地址">
                </div>
                
                <div class="form-group">
                    <label class="form-label">个人简介</label>
                    <textarea class="glass-textarea" rows="4" placeholder="介绍一下自己...">我是一名前端开发者，专注于用户体验设计和现代Web技术。</textarea>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">电话号码</label>
                        <input type="tel" class="glass-input" placeholder="手机号码">
                    </div>
                    <div class="form-group">
                        <label class="form-label">网站</label>
                        <input type="url" class="glass-input" placeholder="https://your-website.com">
                    </div>
                </div>
            </div>
            
            <!-- 偏好设置 -->
            <div class="setting-section">
                <h2 class="section-title">偏好设置</h2>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">深色模式</div>
                        <div class="setting-description">启用深色主题界面</div>
                    </div>
                    <div class="setting-control">
                        <label class="glass-switch">
                            <input type="checkbox" checked>
                            <span class="switch-slider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">自动保存</div>
                        <div class="setting-description">自动保存您的工作进度</div>
                    </div>
                    <div class="setting-control">
                        <label class="glass-switch">
                            <input type="checkbox" checked>
                            <span class="switch-slider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">语言</div>
                        <div class="setting-description">选择界面显示语言</div>
                    </div>
                    <div class="setting-control">
                        <div class="glass-select-container" style="width: 150px;">
                            <div class="glass-select compact" data-placeholder="选择语言">
                                <div class="select-trigger">
                                    <span class="select-value">中文</span>
                                    <div class="select-arrow">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M7 10l5 5 5-5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="select-dropdown">
                                    <div class="select-option selected" data-value="zh">
                                        <span class="option-text">中文</span>
                                    </div>
                                    <div class="select-option" data-value="en">
                                        <span class="option-text">English</span>
                                    </div>
                                    <div class="select-option" data-value="ja">
                                        <span class="option-text">日本語</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">时区</div>
                        <div class="setting-description">设置您所在的时区</div>
                    </div>
                    <div class="setting-control">
                        <div class="glass-select-container" style="width: 200px;">
                            <div class="glass-select compact" data-placeholder="选择时区">
                                <div class="select-trigger">
                                    <span class="select-value">GMT+8 北京时间</span>
                                    <div class="select-arrow">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M7 10l5 5 5-5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="select-dropdown">
                                    <div class="select-option selected" data-value="gmt+8">
                                        <span class="option-text">GMT+8 北京时间</span>
                                    </div>
                                    <div class="select-option" data-value="gmt+0">
                                        <span class="option-text">GMT+0 伦敦时间</span>
                                    </div>
                                    <div class="select-option" data-value="gmt-5">
                                        <span class="option-text">GMT-5 纽约时间</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 通知设置 -->
            <div class="setting-section">
                <h2 class="section-title">通知设置</h2>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">邮件通知</div>
                        <div class="setting-description">接收重要更新和消息的邮件通知</div>
                    </div>
                    <div class="setting-control">
                        <label class="glass-checkbox">
                            <input type="checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">推送通知</div>
                        <div class="setting-description">在浏览器中接收实时推送通知</div>
                    </div>
                    <div class="setting-control">
                        <label class="glass-checkbox">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                
                <div class="setting-item">
                    <div class="setting-info">
                        <div class="setting-name">短信通知</div>
                        <div class="setting-description">接收安全相关的短信通知</div>
                    </div>
                    <div class="setting-control">
                        <label class="glass-checkbox">
                            <input type="checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            
            <!-- 操作按钮 -->
            <div style="display: flex; justify-content: flex-end; gap: 16px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <button class="glass-button">重置</button>
                <button class="glass-button primary">保存设置</button>
            </div>
        </div>
    </div>
    
    <script>
        // 简单的标签页切换功能
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
        
        // 下拉选择器功能
        document.querySelectorAll('.glass-select').forEach(select => {
            const trigger = select.querySelector('.select-trigger');
            const dropdown = select.querySelector('.select-dropdown');
            const valueSpan = select.querySelector('.select-value');
            const options = select.querySelectorAll('.select-option');
            
            trigger.addEventListener('click', () => {
                select.classList.toggle('active');
            });
            
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const text = option.querySelector('.option-text').textContent;
                    valueSpan.textContent = text;
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
    </script>
</body>
</html>
```

## 电商产品页面

展示卡片、徽章和购物车功能的应用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>产品展示 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/liquid-glass-ui@latest/dist/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        
        .shop-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .shop-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
        }
        
        .shop-title {
            color: white;
            font-size: 2rem;
            font-weight: 300;
        }
        
        .shop-search {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        
        .filters {
            display: flex;
            gap: 16px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }
        
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
        }
        
        .product-card {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
        }
        
        .product-image {
            height: 200px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            position: relative;
        }
        
        .product-badge {
            position: absolute;
            top: 12px;
            right: 12px;
        }
        
        .product-info {
            padding: 0 4px;
        }
        
        .product-title {
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 8px;
        }
        
        .product-description {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            margin-bottom: 12px;
            line-height: 1.4;
        }
        
        .product-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }
        
        .price-current {
            color: white;
            font-size: 1.3rem;
            font-weight: 600;
        }
        
        .price-original {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            text-decoration: line-through;
        }
        
        .product-actions {
            display: flex;
            gap: 8px;
        }
        
        .cart-badge {
            position: relative;
        }
        
        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background: rgba(239, 68, 68, 0.8);
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            .shop-header {
                flex-direction: column;
                gap: 16px;
            }
            
            .shop-search {
                width: 100%;
            }
            
            .shop-search input {
                flex: 1;
            }
            
            .filters {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="shop-container">
        <div class="shop-header">
            <h1 class="shop-title">精品商店</h1>
            <div class="shop-search">
                <input type="search" class="glass-input" placeholder="搜索产品..." style="width: 300px;">
                <button class="glass-button cart-badge">
                    🛒
                    <span class="cart-count">3</span>
                </button>
            </div>
        </div>
        
        <div class="filters">
            <button class="glass-button primary">全部</button>
            <button class="glass-button">电子产品</button>
            <button class="glass-button">服装</button>
            <button class="glass-button">家居</button>
            <button class="glass-button">运动</button>
            <button class="glass-button">美妆</button>
        </div>
        
        <div class="product-grid">
            <div class="glass-card product-card">
                <div class="product-image">
                    📱
                    <span class="glass-badge success product-badge">热销</span>
                </div>
                <div class="product-info">
                    <h3 class="product-title">智能手机 Pro</h3>
                    <p class="product-description">最新款智能手机，配备先进的处理器和高清摄像头，为您带来极致体验。</p>
                    <div class="product-price">
                        <span class="price-current">¥4,999</span>
                        <span class="price-original">¥5,999</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-card product-card">
                <div class="product-image">
                    💻
                    <span class="glass-badge primary product-badge">新品</span>
                </div>
                <div class="product-info">
                    <h3 class="product-title">轻薄笔记本</h3>
                    <p class="product-description">超轻薄设计，强劲性能，完美适合移动办公和学习需求。</p>
                    <div class="product-price">
                        <span class="price-current">¥8,999</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-card product-card">
                <div class="product-image">
                    🎧
                    <span class="glass-badge warning product-badge">限时</span>
                </div>
                <div class="product-info">
                    <h3 class="product-title">无线耳机</h3>
                    <p class="product-description">主动降噪技术，高保真音质，长续航设计，音乐爱好者的首选。</p>
                    <div class="product-price">
                        <span class="price-current">¥1,299</span>
                        <span class="price-original">¥1,599</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-card product-card">
                <div class="product-image">⌚</div>
                <div class="product-info">
                    <h3 class="product-title">智能手表</h3>
                    <p class="product-description">健康监测，运动追踪，智能提醒，让科技与生活完美融合。</p>
                    <div class="product-price">
                        <span class="price-current">¥2,299</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-card product-card">
                <div class="product-image">🏠</div>
                <div class="product-info">
                    <h3 class="product-title">智能音箱</h3>
                    <p class="product-description">语音控制，智能家居控制中心，高品质音响效果。</p>
                    <div class="product-price">
                        <span class="price-current">¥599</span>
                        <span class="price-original">¥799</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
            
            <div class="glass-card product-card">
                <div class="product-image">📷</div>
                <div class="product-info">
                    <h3 class="product-title">数码相机</h3>
                    <p class="product-description">专业级画质，多种拍摄模式，记录生活中的每个精彩瞬间。</p>
                    <div class="product-price">
                        <span class="price-current">¥6,999</span>
                    </div>
                    <div class="product-actions">
                        <button class="glass-button small">♡</button>
                        <button class="glass-button primary" style="flex: 1;">加入购物车</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 分页 -->
        <div style="display: flex; justify-content: center; margin-top: 48px;">
            <div class="glass-pagination">
                <button class="page-btn" disabled>上一页</button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <span class="page-ellipsis">...</span>
                <button class="page-btn">10</button>
                <button class="page-btn">下一页</button>
            </div>
        </div>
    </div>
    
    <script>
        // 购物车功能
        let cartCount = 3;
        
        document.querySelectorAll('.product-actions .glass-button.primary').forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                document.querySelector('.cart-count').textContent = cartCount;
                
                // 添加成功反馈
                this.textContent = '已添加 ✓';
                this.style.background = 'rgba(34, 197, 94, 0.3)';
                
                setTimeout(() => {
                    this.textContent = '加入购物车';
                    this.style.background = '';
                }, 2000);
            });
        });
        
        // 收藏功能
        document.querySelectorAll('.product-actions .glass-button.small').forEach(button => {
            button.addEventListener('click', function() {
                if (this.textContent === '♡') {
                    this.textContent = '❤️';
                    this.style.background = 'rgba(239, 68, 68, 0.2)';
                } else {
                    this.textContent = '♡';
                    this.style.background = '';
                }
            });
        });
        
        // 筛选功能
        document.querySelectorAll('.filters .glass-button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.filters .glass-button').forEach(b => b.classList.remove('primary'));
                this.classList.add('primary');
            });
        });
    </script>
</body>
</html>
```

## 使用说明

这些示例展示了 Liquid Glass UI 在实际项目中的应用：

1. **登录页面** - 展示表单组件的组合使用和页面布局
2. **仪表板页面** - 展示数据展示组件和复杂布局
3. **设置页面** - 展示各种表单控件和设置界面
4. **电商页面** - 展示卡片布局和交互功能

每个示例都包含：
- 完整的HTML结构
- 响应式CSS样式
- 基础JavaScript交互
- 实用的页面布局

您可以将这些示例作为起点，根据实际需求进行修改和扩展。 