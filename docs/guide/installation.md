# 安装

Liquid Glass UI 提供多种安装方式，您可以根据项目需求选择最适合的方式。

## CDN 引入

这是最简单的使用方式，只需在HTML文件的 `<head>` 标签中添加以下代码：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
```

::: tip 推荐
推荐使用指定版本号的CDN链接，以确保项目的稳定性：
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@1.0.1/liquid-glass-ui.css">
```
:::

## NPM 安装

如果您使用构建工具（如 Webpack、Vite 等），可以通过 NPM 安装：

```bash
npm install @1ing/liquid-glass-ui
```

然后在您的CSS或JavaScript文件中引入：

```css
@import '@1ing/liquid-glass-ui/liquid-glass-ui.css';
```

或者在JavaScript中：

```javascript
import '@1ing/liquid-glass-ui/liquid-glass-ui.css'
```

## Yarn 安装

如果您使用 Yarn 包管理器：

```bash
yarn add @1ing/liquid-glass-ui
```

## 下载本地文件

您也可以直接下载CSS文件到本地：

1. 访问 [GitHub Releases](https://github.com/liquid-glass-ui/liquid-glass-ui/releases)
2. 下载最新版本的 `liquid-glass-ui.css`
3. 将文件放入您的项目目录
4. 在HTML中引入：

```html
<link rel="stylesheet" href="./path/to/liquid-glass-ui.css">
```

## 背景要求

为了获得最佳的视觉效果，建议为页面设置一个渐变背景或图片背景：

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
```

或者使用图片背景：

```css
body {
  background-image: url('your-background-image.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
```

## 验证安装

创建一个简单的HTML文件来验证安装是否成功：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liquid Glass UI 测试</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
    </style>
</head>
<body>
    <button class="glass-button primary">Hello Liquid Glass UI!</button>
</body>
</html>
```

如果您看到一个具有玻璃效果的蓝色按钮，说明安装成功！

## 下一步

安装完成后，您可以：

- 查看 [快速上手](/guide/getting-started) 了解基本用法
- 浏览 [组件文档](/components/) 学习各种组件的使用方法
- 查看 [示例页面](/examples/) 获得更多灵感 