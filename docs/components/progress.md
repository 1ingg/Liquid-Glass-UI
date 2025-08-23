# 进度条 Progress

进度条用于显示任务完成进度的可视化组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础进度条

```html
<div class="glass-progress">
  <div class="progress-track">
    <div class="progress-fill" data-progress="60"></div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-progress">
    <div class="progress-track">
      <div class="progress-fill" style="width: 60%"></div>
    </div>
  </div>
</div>

### 带文字的进度条

```html
<div class="progress-container">
  <label class="progress-label">下载进度 - 75%</label>
  <div class="glass-progress">
    <div class="progress-track">
      <div class="progress-fill" data-progress="75"></div>
    </div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="progress-container">
    <label class="progress-label" style="display: block; margin-bottom: 8px; color: rgba(255,255,255,0.9);">下载进度 - 75%</label>
    <div class="glass-progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 75%"></div>
      </div>
    </div>
  </div>
</div>

## 进度条状态

### 成功状态

```html
<div class="glass-progress success">
  <div class="progress-track">
    <div class="progress-fill" style="width: 100%;"></div>
  </div>
</div>
```

### 警告状态

```html
<div class="glass-progress warning">
  <div class="progress-track">
    <div class="progress-fill" style="width: 75%;"></div>
  </div>
</div>
```

### 错误状态

```html
<div class="glass-progress error">
  <div class="progress-track">
    <div class="progress-fill" style="width: 25%;"></div>
  </div>
</div>
```

## CSS 类名

### 基础类名

- `.glass-progress` - 进度条容器
- `.progress-track` - 进度条轨道
- `.progress-fill` - 进度条填充
- `.progress-text` - 进度条文字

### 修饰类名

**状态修饰符**
- `.success` - 成功状态
- `.warning` - 警告状态
- `.error` - 错误状态

## JavaScript 增强

### 进度控制

```javascript
class ProgressBar {
  constructor(element) {
    this.container = element;
    this.fill = element.querySelector('.progress-fill');
    this.text = element.querySelector('.progress-text');
    this.currentValue = 0;
  }
  
  setValue(value) {
    this.currentValue = Math.max(0, Math.min(100, value));
    this.fill.style.width = this.currentValue + '%';
    
    if (this.text) {
      this.text.textContent = Math.round(this.currentValue) + '%';
    }
  }
  
  animate(targetValue, duration = 1000) {
    const startValue = this.currentValue;
    const startTime = Date.now();
    
    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = startValue + (targetValue - startValue) * progress;
      this.setValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  }
}

// 使用示例
const progressBar = new ProgressBar(document.querySelector('.glass-progress'));
progressBar.animate(75);
```

### 自动进度模拟

```javascript
function simulateProgress(progressElement, duration = 3000) {
  const progressBar = new ProgressBar(progressElement);
  const steps = 100;
  const stepDuration = duration / steps;
  
  let current = 0;
  
  const interval = setInterval(() => {
    current += Math.random() * 3;
    
    if (current >= 100) {
      current = 100;
      progressBar.setValue(current);
      clearInterval(interval);
    } else {
      progressBar.setValue(current);
    }
  }, stepDuration);
}
```

## 应用场景

### 文件上传

```html
<div class="upload-progress">
  <div class="file-info">
    <span>document.pdf</span>
    <span>2.5 MB</span>
  </div>
  <div class="glass-progress">
    <div class="progress-track">
      <div class="progress-fill" style="width: 35%;"></div>
    </div>
    <div class="progress-text">35%</div>
  </div>
</div>
```

### 任务完成度

```html
<div class="task-progress">
  <h4>项目进度</h4>
  <div class="glass-progress">
    <div class="progress-track">
      <div class="progress-fill" style="width: 68%;"></div>
    </div>
    <div class="progress-text">68%</div>
  </div>
  <p>已完成 17/25 个任务</p>
</div>
```

### 技能水平

```html
<div class="skill-set">
  <div class="skill-item">
    <label>JavaScript</label>
    <div class="glass-progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 90%;"></div>
      </div>
    </div>
  </div>
  <div class="skill-item">
    <label>CSS</label>
    <div class="glass-progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 85%;"></div>
      </div>
    </div>
  </div>
</div>
``` 