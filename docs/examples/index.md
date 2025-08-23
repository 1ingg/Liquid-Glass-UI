# 示例页面

这里展示了 Liquid Glass UI 在实际项目中的应用示例，包含完整的页面布局和交互功能。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 登录页面

一个完整的登录页面示例，展示了表单组件的组合使用。

### 在线预览

<div style="margin: 24px 0; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden;">
  <iframe 
    srcdoc='<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户登录 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
        
        * {
            font-family: "Inter", sans-serif;
        }
        
        body {
            background: 
                radial-gradient(circle at 20% 80%, rgba(255, 154, 158, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(254, 207, 239, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 173, 173, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 75%, #ff9a9e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
            position: relative;
            overflow: hidden;
        }
        
        body::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
            animation: float 20s ease-in-out infinite;
            pointer-events: none;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        .login-container {
            width: 100%;
            max-width: 420px;
            position: relative;
            z-index: 1;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .login-title {
            color: white;
            font-size: 2.2rem;
            font-weight: 600;
            margin-bottom: 8px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .login-subtitle {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
            font-weight: 400;
        }
        
        .glass-container {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 
                0 20px 50px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            position: relative;
            overflow: hidden;
        }
        
        .glass-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
        }
        
        .login-form {
            display: flex;
            flex-direction: column;
            gap: 28px;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .form-label {
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
            font-size: 0.95rem;
            letter-spacing: 0.025em;
        }
        
        .glass-input {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 16px 20px;
            font-size: 1rem;
            color: white;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        
        .glass-input:focus {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .glass-input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }
        
        .form-actions {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 12px;
        }
        
        .glass-checkbox {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
        }
        
        .glass-button.primary.large {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)) !important;
            color: rgba(0, 0, 0, 0.8) !important;
            border: none !important;
            border-radius: 16px !important;
            padding: 18px 24px !important;
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            cursor: pointer;
            transition: all 0.3s ease !important;
            backdrop-filter: blur(10px) !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
            width: 100% !important;
            text-align: center;
        }
        
        .glass-button.primary.large:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8)) !important;
        }
        
        .glass-button.primary.large:focus {
            outline: none !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(255, 255, 255, 0.3) !important;
        }
        
        .form-footer {
            text-align: center;
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .form-footer a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        
        .form-footer a:hover {
            color: white;
            text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
        }
        
        .divider {
            display: flex;
            align-items: center;
            margin: 24px 0;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
        }
        
        .divider::before,
        .divider::after {
            content: "";
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }
        
        .divider span {
            padding: 0 20px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-header">
            <h1 class="login-title">欢迎回来</h1>
        </div>
        <div class="glass-container">
            <form class="login-form">
                <div class="form-group">
                    <label class="form-label">邮箱地址</label>
                    <input type="email" class="glass-input" placeholder="请输入您的邮箱地址" required>
                </div>
                <div class="form-group">
                    <label class="form-label">密码</label>
                    <input type="password" class="glass-input" placeholder="请输入您的密码" required>
                </div>
                <div class="form-actions">
                    <label class="glass-checkbox">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        记住我的登录状态
                    </label>
                    <button type="submit" class="glass-button primary">立即登录</button>
                </div>
            </form>
            <div class="divider">
                <span>或</span>
            </div>
            <div class="form-footer">
                <a href="javascript:void(0);">忘记密码？</a>
                <a href="javascript:void(0);">还没有账户？立即注册</a>
            </div>
        </div>
    </div>
</body>
</html>'
    style="width: 100%; height: 800px; border: none;"
    title="登录页面预览">
  </iframe>
</div>

### 完整代码

::: details 点击查看完整HTML代码
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户登录 - Liquid Glass UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
    <style>
        body {
            background: 
                radial-gradient(circle at 20% 80%, rgba(255, 154, 158, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(254, 207, 239, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 173, 173, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 75%, #ff9a9e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
            font-family: "Inter", sans-serif;
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
                    
                    <button type="submit" class="glass-button primary">登录</button>
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
::: 