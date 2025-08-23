# 进度条 Progress

进度条是用于显示任务完成进度的可视化组件。Liquid Glass UI 的进度条具有精美的玻璃态效果和流畅的动画，提供清晰的进度反馈。

## 基础用法

最基本的进度条：

```html
<div class="glass-progress">
  <div class="progress-bar" style="width: 45%"></div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <div class="glass-progress">
      <div style="width: 45%; height: 8px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
    </div>
  </div>
</div>

## 带标签的进度条

```html
<div class="progress-container">
  <div class="progress-label">
    <span class="label-text">下载进度</span>
    <span class="progress-percent">68%</span>
  </div>
  <div class="glass-progress">
    <div class="progress-bar" style="width: 68%"></div>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">下载进度</span>
      <span style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">68%</span>
    </div>
    <div class="glass-progress">
      <div style="width: 68%; height: 8px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
    </div>
  </div>
</div>

## 不同尺寸

```html
<!-- 小尺寸 -->
<div class="glass-progress small">
  <div class="progress-bar" style="width: 30%"></div>
</div>

<!-- 标准尺寸 -->
<div class="glass-progress">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- 大尺寸 -->
<div class="glass-progress large">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="color: rgba(255, 255, 255, 0.7); font-size: 12px; margin-bottom: 6px;">小尺寸 (4px)</div>
      <div class="glass-progress" style="height: 4px;">
        <div style="width: 30%; height: 4px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 2px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="color: rgba(255, 255, 255, 0.7); font-size: 12px; margin-bottom: 6px;">标准尺寸 (8px)</div>
      <div class="glass-progress">
        <div style="width: 50%; height: 8px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="color: rgba(255, 255, 255, 0.7); font-size: 12px; margin-bottom: 6px;">大尺寸 (12px)</div>
      <div class="glass-progress" style="height: 12px;">
        <div style="width: 75%; height: 12px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 6px; transition: width 0.3s ease;"></div>
      </div>
    </div>
  </div>
</div>

## 不同状态

```html
<!-- 成功状态 -->
<div class="glass-progress">
  <div class="progress-bar success" style="width: 100%"></div>
</div>

<!-- 警告状态 -->
<div class="glass-progress">
  <div class="progress-bar warning" style="width: 75%"></div>
</div>

<!-- 错误状态 -->
<div class="glass-progress">
  <div class="progress-bar error" style="width: 25%"></div>
</div>

<!-- 信息状态 -->
<div class="glass-progress">
  <div class="progress-bar info" style="width: 60%"></div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="color: rgba(34, 197, 94, 0.8); font-size: 12px; margin-bottom: 6px;">成功状态</div>
      <div class="glass-progress">
        <div style="width: 100%; height: 8px; background: linear-gradient(90deg, #10b981 0%, #059669 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="color: rgba(251, 191, 36, 0.8); font-size: 12px; margin-bottom: 6px;">警告状态</div>
      <div class="glass-progress">
        <div style="width: 75%; height: 8px; background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="color: rgba(239, 68, 68, 0.8); font-size: 12px; margin-bottom: 6px;">错误状态</div>
      <div class="glass-progress">
        <div style="width: 25%; height: 8px; background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="color: rgba(59, 130, 246, 0.8); font-size: 12px; margin-bottom: 6px;">信息状态</div>
      <div class="glass-progress">
        <div style="width: 60%; height: 8px; background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
  </div>
</div>

## 圆形进度条

```html
<div class="circular-progress" data-progress="75">
  <svg class="progress-ring" width="120" height="120">
    <circle class="progress-ring-background" cx="60" cy="60" r="54"></circle>
    <circle class="progress-ring-bar" cx="60" cy="60" r="54"></circle>
  </svg>
  <div class="progress-text">75%</div>
</div>
```

<div class="demo-container">
  <div style="display: flex; gap: 32px; flex-wrap: wrap; justify-content: center;">
    <div style="position: relative; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center;">
      <svg width="120" height="120" style="transform: rotate(-90deg);">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="12"></circle>
        <circle cx="60" cy="60" r="54" fill="none" stroke="url(#gradient1)" stroke-width="12" stroke-linecap="round" stroke-dasharray="339.29" stroke-dashoffset="84.8" style="transition: stroke-dashoffset 0.5s ease;"></circle>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#667eea"/>
            <stop offset="100%" style="stop-color:#764ba2"/>
          </linearGradient>
        </defs>
      </svg>
      <div style="position: absolute; color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 600;">75%</div>
    </div>
    
    <div style="position: relative; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center;">
      <svg width="120" height="120" style="transform: rotate(-90deg);">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="12"></circle>
        <circle cx="60" cy="60" r="54" fill="none" stroke="url(#gradient2)" stroke-width="12" stroke-linecap="round" stroke-dasharray="339.29" stroke-dashoffset="169.6" style="transition: stroke-dashoffset 0.5s ease;"></circle>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#10b981"/>
            <stop offset="100%" style="stop-color:#059669"/>
          </linearGradient>
        </defs>
      </svg>
      <div style="position: absolute; color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 600;">50%</div>
    </div>
    
    <div style="position: relative; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center;">
      <svg width="120" height="120" style="transform: rotate(-90deg);">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="12"></circle>
        <circle cx="60" cy="60" r="54" fill="none" stroke="url(#gradient3)" stroke-width="12" stroke-linecap="round" stroke-dasharray="339.29" stroke-dashoffset="271.4" style="transition: stroke-dashoffset 0.5s ease;"></circle>
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#f59e0b"/>
            <stop offset="100%" style="stop-color:#d97706"/>
          </linearGradient>
        </defs>
      </svg>
      <div style="position: absolute; color: rgba(255, 255, 255, 0.9); font-size: 18px; font-weight: 600;">20%</div>
    </div>
  </div>
</div>

## 步骤进度条

```html
<div class="step-progress">
  <div class="step completed">
    <div class="step-indicator">
      <div class="step-number">1</div>
    </div>
    <div class="step-content">
      <div class="step-title">账户信息</div>
      <div class="step-description">填写基本信息</div>
    </div>
  </div>
  
  <div class="step-line completed"></div>
  
  <div class="step completed">
    <div class="step-indicator">
      <div class="step-number">2</div>
    </div>
    <div class="step-content">
      <div class="step-title">身份验证</div>
      <div class="step-description">验证身份信息</div>
    </div>
  </div>
  
  <div class="step-line active"></div>
  
  <div class="step active">
    <div class="step-indicator">
      <div class="step-number">3</div>
    </div>
    <div class="step-content">
      <div class="step-title">设置密码</div>
      <div class="step-description">设置登录密码</div>
    </div>
  </div>
  
  <div class="step-line"></div>
  
  <div class="step">
    <div class="step-indicator">
      <div class="step-number">4</div>
    </div>
    <div class="step-content">
      <div class="step-title">完成注册</div>
      <div class="step-description">注册完成</div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 600px;">
    <div style="display: flex; align-items: center; position: relative;">
      <!-- Step 1 -->
      <div style="display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; z-index: 2;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px; box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);">1</div>
        <div style="margin-top: 12px; text-align: center;">
          <div style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; margin-bottom: 4px;">账户信息</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">填写基本信息</div>
        </div>
      </div>
      
      <!-- Line 1 -->
      <div style="flex: 1; height: 2px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); margin: 0 -20px; position: relative; z-index: 1;"></div>
      
      <!-- Step 2 -->
      <div style="display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; z-index: 2;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px; box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);">2</div>
        <div style="margin-top: 12px; text-align: center;">
          <div style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; margin-bottom: 4px;">身份验证</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">验证身份信息</div>
        </div>
      </div>
      
      <!-- Line 2 -->
      <div style="flex: 1; height: 2px; background: linear-gradient(90deg, #667eea 50%, rgba(255, 255, 255, 0.2) 50%); margin: 0 -20px; position: relative; z-index: 1;"></div>
      
      <!-- Step 3 -->
      <div style="display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; z-index: 2;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); border: 2px solid #667eea; display: flex; align-items: center; justify-content: center; color: #667eea; font-weight: 600; font-size: 14px;">3</div>
        <div style="margin-top: 12px; text-align: center;">
          <div style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500; margin-bottom: 4px;">设置密码</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 12px;">设置登录密码</div>
        </div>
      </div>
      
      <!-- Line 3 -->
      <div style="flex: 1; height: 2px; background: rgba(255, 255, 255, 0.2); margin: 0 -20px; position: relative; z-index: 1;"></div>
      
      <!-- Step 4 -->
      <div style="display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; z-index: 2;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); border: 2px solid rgba(255, 255, 255, 0.3); display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.6); font-weight: 600; font-size: 14px;">4</div>
        <div style="margin-top: 12px; text-align: center;">
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 14px; font-weight: 500; margin-bottom: 4px;">完成注册</div>
          <div style="color: rgba(255, 255, 255, 0.4); font-size: 12px;">注册完成</div>
        </div>
      </div>
    </div>
  </div>
</div>

## 多进度条

```html
<div class="multi-progress">
  <div class="progress-item">
    <div class="progress-info">
      <span class="progress-name">CPU 使用率</span>
      <span class="progress-value">65%</span>
    </div>
    <div class="glass-progress">
      <div class="progress-bar" style="width: 65%; background: linear-gradient(90deg, #3b82f6, #1d4ed8);"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-info">
      <span class="progress-name">内存使用率</span>
      <span class="progress-value">82%</span>
    </div>
    <div class="glass-progress">
      <div class="progress-bar" style="width: 82%; background: linear-gradient(90deg, #f59e0b, #d97706);"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-info">
      <span class="progress-name">磁盘使用率</span>
      <span class="progress-value">45%</span>
    </div>
    <div class="glass-progress">
      <div class="progress-bar" style="width: 45%; background: linear-gradient(90deg, #10b981, #059669);"></div>
    </div>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px;">
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">CPU 使用率</span>
        <span style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">65%</span>
      </div>
      <div class="glass-progress">
        <div style="width: 65%; height: 8px; background: linear-gradient(90deg, #3b82f6, #1d4ed8); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">内存使用率</span>
        <span style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">82%</span>
      </div>
      <div class="glass-progress">
        <div style="width: 82%; height: 8px; background: linear-gradient(90deg, #f59e0b, #d97706); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
    
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">磁盘使用率</span>
        <span style="color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">45%</span>
      </div>
      <div class="glass-progress">
        <div style="width: 45%; height: 8px; background: linear-gradient(90deg, #10b981, #059669); border-radius: 4px; transition: width 0.3s ease;"></div>
      </div>
    </div>
  </div>
</div>

## JavaScript 功能

### 基础进度条控制

```javascript
class GlassProgress {
  constructor(element, options = {}) {
    this.element = element;
    this.progressBar = element.querySelector('.progress-bar');
    this.options = {
      animationDuration: 300,
      showText: false,
      format: (value) => `${value}%`,
      ...options
    };
    
    this.value = 0;
    this.init();
  }
  
  init() {
    if (this.options.showText) {
      this.createProgressText();
    }
  }
  
  createProgressText() {
    this.textElement = document.createElement('div');
    this.textElement.className = 'progress-text';
    this.textElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255, 255, 255, 0.9);
      font-size: 12px;
      font-weight: 500;
      pointer-events: none;
    `;
    this.element.style.position = 'relative';
    this.element.appendChild(this.textElement);
  }
  
  setValue(value, animate = true) {
    this.value = Math.max(0, Math.min(100, value));
    
    if (animate) {
      this.progressBar.style.transition = `width ${this.options.animationDuration}ms ease`;
    } else {
      this.progressBar.style.transition = 'none';
    }
    
    this.progressBar.style.width = `${this.value}%`;
    
    if (this.textElement) {
      this.textElement.textContent = this.options.format(this.value);
    }
    
    // 触发事件
    this.element.dispatchEvent(new CustomEvent('progress-change', {
      detail: { value: this.value }
    }));
  }
  
  getValue() {
    return this.value;
  }
  
  increment(amount = 1) {
    this.setValue(this.value + amount);
  }
  
  decrement(amount = 1) {
    this.setValue(this.value - amount);
  }
  
  setColor(color) {
    this.progressBar.style.background = color;
  }
  
  reset() {
    this.setValue(0, false);
  }
}

// 使用示例
const progress = new GlassProgress(document.querySelector('.glass-progress'), {
  showText: true,
  format: (value) => `${value.toFixed(1)}%`
});

progress.setValue(65);
```

### 圆形进度条

```javascript
class CircularProgress {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      size: 120,
      strokeWidth: 12,
      animationDuration: 500,
      color: '#667eea',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      showText: true,
      ...options
    };
    
    this.value = 0;
    this.init();
  }
  
  init() {
    this.createSVG();
    if (this.options.showText) {
      this.createText();
    }
  }
  
  createSVG() {
    const { size, strokeWidth } = this.options;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', size);
    this.svg.setAttribute('height', size);
    this.svg.style.transform = 'rotate(-90deg)';
    
    // 背景圆
    this.backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.backgroundCircle.setAttribute('cx', size / 2);
    this.backgroundCircle.setAttribute('cy', size / 2);
    this.backgroundCircle.setAttribute('r', radius);
    this.backgroundCircle.setAttribute('fill', 'none');
    this.backgroundCircle.setAttribute('stroke', this.options.backgroundColor);
    this.backgroundCircle.setAttribute('stroke-width', strokeWidth);
    
    // 进度圆
    this.progressCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.progressCircle.setAttribute('cx', size / 2);
    this.progressCircle.setAttribute('cy', size / 2);
    this.progressCircle.setAttribute('r', radius);
    this.progressCircle.setAttribute('fill', 'none');
    this.progressCircle.setAttribute('stroke', this.options.color);
    this.progressCircle.setAttribute('stroke-width', strokeWidth);
    this.progressCircle.setAttribute('stroke-linecap', 'round');
    this.progressCircle.setAttribute('stroke-dasharray', circumference);
    this.progressCircle.setAttribute('stroke-dashoffset', circumference);
    
    this.svg.appendChild(this.backgroundCircle);
    this.svg.appendChild(this.progressCircle);
    this.element.appendChild(this.svg);
    
    this.circumference = circumference;
  }
  
  createText() {
    this.textElement = document.createElement('div');
    this.textElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
      font-weight: 600;
    `;
    this.element.style.position = 'relative';
    this.element.appendChild(this.textElement);
  }
  
  setValue(value, animate = true) {
    this.value = Math.max(0, Math.min(100, value));
    const offset = this.circumference - (this.value / 100) * this.circumference;
    
    if (animate) {
      this.progressCircle.style.transition = `stroke-dashoffset ${this.options.animationDuration}ms ease`;
    } else {
      this.progressCircle.style.transition = 'none';
    }
    
    this.progressCircle.setAttribute('stroke-dashoffset', offset);
    
    if (this.textElement) {
      this.textElement.textContent = `${Math.round(this.value)}%`;
    }
  }
}
```

### 文件上传进度

```javascript
function createUploadProgress(file) {
  const progressContainer = document.createElement('div');
  progressContainer.className = 'upload-progress-item';
  progressContainer.innerHTML = `
    <div class="file-info">
      <div class="file-icon">📄</div>
      <div class="file-details">
        <div class="file-name">${file.name}</div>
        <div class="file-size">${formatFileSize(file.size)}</div>
      </div>
      <div class="upload-status">
        <span class="status-text">准备上传</span>
        <button class="cancel-btn">✖️</button>
      </div>
    </div>
    <div class="glass-progress">
      <div class="progress-bar" style="width: 0%"></div>
    </div>
    <div class="upload-details">
      <span class="upload-speed">0 KB/s</span>
      <span class="upload-percent">0%</span>
    </div>
  `;
  
  return progressContainer;
}

function simulateFileUpload(progressElement) {
  const progressBar = progressElement.querySelector('.progress-bar');
  const statusText = progressElement.querySelector('.status-text');
  const uploadPercent = progressElement.querySelector('.upload-percent');
  const uploadSpeed = progressElement.querySelector('.upload-speed');
  
  let progress = 0;
  statusText.textContent = '上传中';
  
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = `${progress}%`;
    uploadPercent.textContent = `${Math.round(progress)}%`;
    uploadSpeed.textContent = `${(Math.random() * 500 + 100).toFixed(0)} KB/s`;
    
    if (progress >= 100) {
      clearInterval(interval);
      statusText.textContent = '上传完成';
      uploadSpeed.textContent = '';
      progressBar.style.background = 'linear-gradient(90deg, #10b981, #059669)';
    }
  }, 100);
}

function formatFileSize(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-progress` | 基础进度条容器 |
| `.progress-bar` | 进度条填充部分 |
| `.progress-container` | 带标签的进度条容器 |
| `.progress-label` | 进度条标签区域 |
| `.progress-percent` | 百分比显示 |
| `.circular-progress` | 圆形进度条容器 |
| `.step-progress` | 步骤进度条容器 |
| `.multi-progress` | 多进度条容器 |

## 自定义样式

通过CSS变量自定义进度条外观：

```css
:root {
  --progress-height: 8px;
  --progress-bg: rgba(255, 255, 255, 0.1);
  --progress-border-radius: 4px;
  --progress-bar-bg: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  --progress-animation-duration: 0.3s;
  --progress-text-color: rgba(255, 255, 255, 0.9);
}
```

## 可访问性

- 使用 `role="progressbar"` 属性
- 提供 `aria-valuenow`、`aria-valuemin`、`aria-valuemax` 属性
- 为视力障碍用户提供文字描述

```html
<div class="glass-progress" 
     role="progressbar" 
     aria-valuenow="65" 
     aria-valuemin="0" 
     aria-valuemax="100"
     aria-label="文件下载进度">
  <div class="progress-bar" style="width: 65%"></div>
</div>
```

## 注意事项

- 确保进度反映真实状态
- 为长时间任务提供取消选项
- 考虑添加预估剩余时间
- 在移动设备上确保进度条足够清晰
- 避免进度条跳跃式更新

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

.glass-progress {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
</style> 