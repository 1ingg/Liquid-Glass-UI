# 开关 Switch

开关是一个用于切换两种状态的交互组件，通常用于开启/关闭功能或设置。Liquid Glass UI 的开关具有流畅的动画效果和现代化的玻璃态设计。

## 基础用法

最基本的开关：

```html
<label class="glass-switch">
  <input type="checkbox">
  <span class="switch-slider"></span>
</label>
```

<div class="demo-container">
  <div style="display: flex; gap: 24px; align-items: center;">
    <label class="glass-switch">
      <input type="checkbox" style="display: none;">
      <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: rgba(255, 255, 255, 0.2); border-radius: 24px; position: relative; cursor: pointer; transition: all 0.3s ease;">
        <span style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
      </span>
    </label>
    
    <label class="glass-switch">
      <input type="checkbox" checked style="display: none;">
      <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 24px; position: relative; cursor: pointer; transition: all 0.3s ease;">
        <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
      </span>
    </label>
  </div>
</div>

## 带标签的开关

```html
<div class="switch-item">
  <div class="switch-label">
    <div class="label-text">启用通知</div>
    <div class="label-description">接收重要消息和更新提醒</div>
  </div>
  <label class="glass-switch">
    <input type="checkbox" checked>
    <span class="switch-slider"></span>
  </label>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px;">
      <div>
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">启用通知</div>
        <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">接收重要消息和更新提醒</div>
      </div>
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;" id="switch-1">
        <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 24px; position: relative; cursor: pointer; transition: all 0.3s ease;" onclick="toggleSwitch('switch-1', this)">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
    </div>
    
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px;">
      <div>
        <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">自动保存</div>
        <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">自动保存您的工作进度</div>
      </div>
      <label class="glass-switch">
        <input type="checkbox" style="display: none;" id="switch-2">
        <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: rgba(255, 255, 255, 0.2); border-radius: 24px; position: relative; cursor: pointer; transition: all 0.3s ease;" onclick="toggleSwitch('switch-2', this)">
          <span style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
    </div>
  </div>
</div>

## 不同尺寸

```html
<!-- 小尺寸 -->
<label class="glass-switch small">
  <input type="checkbox">
  <span class="switch-slider"></span>
</label>

<!-- 标准尺寸 -->
<label class="glass-switch">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
</label>

<!-- 大尺寸 -->
<label class="glass-switch large">
  <input type="checkbox">
  <span class="switch-slider"></span>
</label>
```

<div class="demo-container">
  <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" style="display: none;">
        <span class="switch-slider" style="display: inline-block; width: 36px; height: 18px; background: rgba(255, 255, 255, 0.2); border-radius: 18px; position: relative; cursor: pointer; transition: all 0.3s ease;">
          <span style="position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">小尺寸</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;">
        <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 24px; position: relative; cursor: pointer; transition: all 0.3s ease;">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">标准尺寸</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" style="display: none;">
        <span class="switch-slider" style="display: inline-block; width: 60px; height: 30px; background: rgba(255, 255, 255, 0.2); border-radius: 30px; position: relative; cursor: pointer; transition: all 0.3s ease;">
          <span style="position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(255, 255, 255, 0.7); font-size: 12px;">大尺寸</span>
    </div>
  </div>
</div>

## 开关状态

```html
<!-- 正常状态 -->
<label class="glass-switch">
  <input type="checkbox">
  <span class="switch-slider"></span>
  <span class="switch-text">正常状态</span>
</label>

<!-- 禁用状态 -->
<label class="glass-switch">
  <input type="checkbox" disabled>
  <span class="switch-slider"></span>
  <span class="switch-text">禁用状态</span>
</label>

<!-- 禁用且选中 -->
<label class="glass-switch">
  <input type="checkbox" disabled checked>
  <span class="switch-slider"></span>
  <span class="switch-text">禁用且选中</span>
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
    <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
      <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: rgba(255, 255, 255, 0.2); border-radius: 24px; position: relative; transition: all 0.3s ease;">
        <span style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
      </span>
      <span style="color: rgba(255, 255, 255, 0.8);">正常状态</span>
    </label>
    
    <label style="display: flex; align-items: center; gap: 12px; cursor: not-allowed; opacity: 0.5;">
      <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: rgba(255, 255, 255, 0.1); border-radius: 24px; position: relative;">
        <span style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.6); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);"></span>
      </span>
      <span style="color: rgba(255, 255, 255, 0.5);">禁用状态</span>
    </label>
    
    <label style="display: flex; align-items: center; gap: 12px; cursor: not-allowed; opacity: 0.5;">
      <span class="switch-slider" style="display: inline-block; width: 48px; height: 24px; background: rgba(102, 126, 234, 0.3); border-radius: 24px; position: relative;">
        <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.6); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);"></span>
      </span>
      <span style="color: rgba(255, 255, 255, 0.5);">禁用且选中</span>
    </label>
  </div>
</div>

## 带图标的开关

```html
<div class="icon-switches">
  <label class="glass-switch icon-switch">
    <input type="checkbox">
    <span class="switch-slider">
      <span class="switch-icon off">🔇</span>
      <span class="switch-icon on">🔊</span>
    </span>
  </label>
  
  <label class="glass-switch icon-switch">
    <input type="checkbox">
    <span class="switch-slider">
      <span class="switch-icon off">🌙</span>
      <span class="switch-icon on">☀️</span>
    </span>
  </label>
  
  <label class="glass-switch icon-switch">
    <input type="checkbox">
    <span class="switch-slider">
      <span class="switch-icon off">📱</span>
      <span class="switch-icon on">📵</span>
    </span>
  </label>
</div>
```

<div class="demo-container">
  <div style="display: flex; gap: 24px; flex-wrap: wrap;">
    <label class="glass-switch">
      <input type="checkbox" style="display: none;" id="icon-switch-1">
      <span class="switch-slider" style="display: inline-block; width: 64px; height: 32px; background: rgba(255, 255, 255, 0.2); border-radius: 32px; position: relative; cursor: pointer; transition: all 0.3s ease;" onclick="toggleIconSwitch('icon-switch-1', this)">
        <span style="position: absolute; top: 4px; left: 4px; width: 24px; height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; font-size: 12px;">🔇</span>
        <span style="position: absolute; top: 50%; right: 8px; transform: translateY(-50%); font-size: 12px; opacity: 0.5;">🔊</span>
      </span>
    </label>
    
    <label class="glass-switch">
      <input type="checkbox" style="display: none;" id="icon-switch-2">
      <span class="switch-slider" style="display: inline-block; width: 64px; height: 32px; background: rgba(255, 255, 255, 0.2); border-radius: 32px; position: relative; cursor: pointer; transition: all 0.3s ease;" onclick="toggleIconSwitch('icon-switch-2', this)">
        <span style="position: absolute; top: 4px; left: 4px; width: 24px; height: 24px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; font-size: 12px;">🌙</span>
        <span style="position: absolute; top: 50%; right: 8px; transform: translateY(-50%); font-size: 12px; opacity: 0.5;">☀️</span>
      </span>
    </label>
  </div>
</div>

## 颜色变体

```html
<!-- 成功色 -->
<label class="glass-switch success">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
</label>

<!-- 警告色 -->
<label class="glass-switch warning">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
</label>

<!-- 错误色 -->
<label class="glass-switch error">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
</label>

<!-- 信息色 -->
<label class="glass-switch info">
  <input type="checkbox" checked>
  <span class="switch-slider"></span>
</label>
```

<div class="demo-container">
  <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;">
        <span style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 24px; position: relative; cursor: pointer;">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(16, 185, 129, 0.8); font-size: 12px;">成功</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;">
        <span style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 24px; position: relative; cursor: pointer;">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(245, 158, 11, 0.8); font-size: 12px;">警告</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;">
        <span style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 24px; position: relative; cursor: pointer;">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(239, 68, 68, 0.8); font-size: 12px;">错误</span>
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
      <label class="glass-switch">
        <input type="checkbox" checked style="display: none;">
        <span style="display: inline-block; width: 48px; height: 24px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 24px; position: relative; cursor: pointer;">
          <span style="position: absolute; top: 2px; right: 2px; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.9); border-radius: 50%; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);"></span>
        </span>
      </label>
      <span style="color: rgba(59, 130, 246, 0.8); font-size: 12px;">信息</span>
    </div>
  </div>
</div>

## 实际应用场景

### 设置面板

```html
<div class="settings-panel">
  <h3>隐私设置</h3>
  
  <div class="setting-group">
    <div class="setting-item">
      <div class="setting-info">
        <div class="setting-title">公开个人资料</div>
        <div class="setting-description">允许其他用户查看您的个人资料信息</div>
      </div>
      <label class="glass-switch">
        <input type="checkbox">
        <span class="switch-slider"></span>
      </label>
    </div>
    
    <div class="setting-item">
      <div class="setting-info">
        <div class="setting-title">活动状态</div>
        <div class="setting-description">显示您的在线状态和最后活跃时间</div>
      </div>
      <label class="glass-switch">
        <input type="checkbox" checked>
        <span class="switch-slider"></span>
      </label>
    </div>
    
    <div class="setting-item">
      <div class="setting-info">
        <div class="setting-title">数据分析</div>
        <div class="setting-description">允许收集匿名使用数据以改善服务</div>
      </div>
      <label class="glass-switch">
        <input type="checkbox">
        <span class="switch-slider"></span>
      </label>
    </div>
  </div>
</div>
```

### 功能开关

```html
<div class="feature-toggles">
  <h3>功能开关</h3>
  
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">🔔</div>
        <label class="glass-switch">
          <input type="checkbox" checked>
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="feature-content">
        <h4>推送通知</h4>
        <p>接收重要消息和更新提醒</p>
      </div>
    </div>
    
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">🌓</div>
        <label class="glass-switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="feature-content">
        <h4>深色模式</h4>
        <p>使用深色主题保护您的眼睛</p>
      </div>
    </div>
    
    <div class="feature-card">
      <div class="feature-header">
        <div class="feature-icon">🔒</div>
        <label class="glass-switch">
          <input type="checkbox" checked>
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="feature-content">
        <h4>双重验证</h4>
        <p>增强账户安全性</p>
      </div>
    </div>
  </div>
</div>
```

### 权限控制

```html
<div class="permission-controls">
  <h3>用户权限</h3>
  
  <div class="permission-section">
    <h4>内容管理</h4>
    <div class="permission-list">
      <div class="permission-item">
        <span class="permission-name">创建内容</span>
        <label class="glass-switch">
          <input type="checkbox" checked>
          <span class="switch-slider"></span>
        </label>
      </div>
      
      <div class="permission-item">
        <span class="permission-name">编辑内容</span>
        <label class="glass-switch">
          <input type="checkbox" checked>
          <span class="switch-slider"></span>
        </label>
      </div>
      
      <div class="permission-item">
        <span class="permission-name">删除内容</span>
        <label class="glass-switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
      
      <div class="permission-item">
        <span class="permission-name">发布内容</span>
        <label class="glass-switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
    </div>
  </div>
  
  <div class="permission-section">
    <h4>用户管理</h4>
    <div class="permission-list">
      <div class="permission-item">
        <span class="permission-name">查看用户</span>
        <label class="glass-switch">
          <input type="checkbox" checked>
          <span class="switch-slider"></span>
        </label>
      </div>
      
      <div class="permission-item">
        <span class="permission-name">邀请用户</span>
        <label class="glass-switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
      
      <div class="permission-item">
        <span class="permission-name">管理权限</span>
        <label class="glass-switch">
          <input type="checkbox">
          <span class="switch-slider"></span>
        </label>
      </div>
    </div>
  </div>
</div>
```

## JavaScript 功能

### 基础开关控制

```javascript
class GlassSwitch {
  constructor(element, options = {}) {
    this.element = element;
    this.input = element.querySelector('input[type="checkbox"]');
    this.slider = element.querySelector('.switch-slider');
    this.options = {
      onChange: null,
      animationDuration: 300,
      ...options
    };
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.updateState();
  }
  
  bindEvents() {
    this.input.addEventListener('change', () => {
      this.updateState();
      this.triggerChange();
    });
    
    this.slider.addEventListener('click', (e) => {
      if (e.target === this.slider || this.slider.contains(e.target)) {
        this.toggle();
      }
    });
    
    // 键盘支持
    this.element.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.toggle();
      }
    });
  }
  
  updateState() {
    if (this.input.checked) {
      this.element.classList.add('checked');
    } else {
      this.element.classList.remove('checked');
    }
  }
  
  toggle() {
    if (!this.input.disabled) {
      this.input.checked = !this.input.checked;
      this.updateState();
      this.triggerChange();
    }
  }
  
  setValue(value) {
    this.input.checked = Boolean(value);
    this.updateState();
  }
  
  getValue() {
    return this.input.checked;
  }
  
  disable() {
    this.input.disabled = true;
    this.element.classList.add('disabled');
  }
  
  enable() {
    this.input.disabled = false;
    this.element.classList.remove('disabled');
  }
  
  triggerChange() {
    if (this.options.onChange) {
      this.options.onChange(this.input.checked);
    }
    
    // 触发自定义事件
    this.element.dispatchEvent(new CustomEvent('switch-change', {
      detail: { checked: this.input.checked }
    }));
  }
}

// 初始化所有开关
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.glass-switch').forEach(switchElement => {
    new GlassSwitch(switchElement, {
      onChange: (checked) => {
        console.log('Switch changed:', checked);
      }
    });
  });
});
```

### 开关组管理

```javascript
class SwitchGroup {
  constructor(container, options = {}) {
    this.container = container;
    this.switches = [];
    this.options = {
      exclusive: false, // 是否为排他性开关组
      required: false,  // 是否至少需要一个开启
      ...options
    };
    
    this.init();
  }
  
  init() {
    const switchElements = this.container.querySelectorAll('.glass-switch');
    switchElements.forEach(element => {
      const switchInstance = new GlassSwitch(element, {
        onChange: (checked) => this.handleSwitchChange(element, checked)
      });
      this.switches.push({
        element: element,
        instance: switchInstance
      });
    });
  }
  
  handleSwitchChange(changedElement, checked) {
    if (this.options.exclusive && checked) {
      // 排他性：关闭其他开关
      this.switches.forEach(({ element, instance }) => {
        if (element !== changedElement) {
          instance.setValue(false);
        }
      });
    }
    
    if (this.options.required) {
      // 必需性：确保至少有一个开启
      const hasChecked = this.switches.some(({ instance }) => instance.getValue());
      if (!hasChecked) {
        // 如果没有任何开关开启，重新开启当前开关
        const currentSwitch = this.switches.find(({ element }) => element === changedElement);
        if (currentSwitch) {
          currentSwitch.instance.setValue(true);
        }
      }
    }
    
    // 触发组变化事件
    this.triggerGroupChange();
  }
  
  getValues() {
    return this.switches.map(({ instance }) => instance.getValue());
  }
  
  getCheckedSwitches() {
    return this.switches.filter(({ instance }) => instance.getValue());
  }
  
  setValues(values) {
    values.forEach((value, index) => {
      if (this.switches[index]) {
        this.switches[index].instance.setValue(value);
      }
    });
  }
  
  triggerGroupChange() {
    const values = this.getValues();
    const checkedSwitches = this.getCheckedSwitches();
    
    this.container.dispatchEvent(new CustomEvent('switch-group-change', {
      detail: { values, checkedSwitches }
    }));
  }
}
```

### 条件开关

```javascript
class ConditionalSwitch {
  constructor(masterSwitch, dependentSwitches) {
    this.masterSwitch = new GlassSwitch(masterSwitch, {
      onChange: (checked) => this.handleMasterChange(checked)
    });
    
    this.dependentSwitches = dependentSwitches.map(element => 
      new GlassSwitch(element)
    );
    
    this.init();
  }
  
  init() {
    // 初始状态
    this.handleMasterChange(this.masterSwitch.getValue());
  }
  
  handleMasterChange(checked) {
    this.dependentSwitches.forEach(switchInstance => {
      if (checked) {
        switchInstance.enable();
      } else {
        switchInstance.setValue(false);
        switchInstance.disable();
      }
    });
  }
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-switch` | 基础开关样式 |
| `.glass-switch.small` | 小尺寸开关 |
| `.glass-switch.large` | 大尺寸开关 |
| `.switch-slider` | 开关滑块 |
| `.switch-text` | 开关文本 |
| `.switch-item` | 开关项容器 |
| `.switch-label` | 开关标签 |
| `.icon-switch` | 带图标的开关 |

## 自定义样式

通过CSS变量自定义开关外观：

```css
:root {
  --switch-width: 48px;
  --switch-height: 24px;
  --switch-padding: 2px;
  --switch-bg-off: rgba(255, 255, 255, 0.2);
  --switch-bg-on: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --switch-handle-bg: rgba(255, 255, 255, 0.9);
  --switch-handle-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  --switch-transition: all 0.3s ease;
  --switch-disabled-opacity: 0.5;
}
```

## 可访问性

- 支持键盘导航（Tab、Space、Enter键）
- 提供 ARIA 属性
- 支持屏幕阅读器
- 提供清晰的焦点指示器

```html
<label class="glass-switch" role="switch" aria-checked="false" tabindex="0">
  <input type="checkbox" aria-hidden="true">
  <span class="switch-slider"></span>
  <span class="switch-text" id="switch-label">启用通知</span>
</label>
```

## 注意事项

- 为开关提供清晰的标签说明
- 考虑添加确认对话框对于重要操作
- 在移动设备上确保触摸区域足够大
- 为状态变化提供视觉或声音反馈
- 合理使用禁用状态，避免用户困惑

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
function toggleSwitch(inputId, slider) {
  const input = document.getElementById(inputId);
  const handle = slider.querySelector('span');
  
  input.checked = !input.checked;
  
  if (input.checked) {
    slider.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    handle.style.left = 'auto';
    handle.style.right = '2px';
  } else {
    slider.style.background = 'rgba(255, 255, 255, 0.2)';
    handle.style.left = '2px';
    handle.style.right = 'auto';
  }
}

function toggleIconSwitch(inputId, slider) {
  const input = document.getElementById(inputId);
  const handle = slider.querySelector('span:first-child');
  const rightIcon = slider.querySelector('span:last-child');
  
  input.checked = !input.checked;
  
  if (input.checked) {
    slider.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    handle.style.left = 'auto';
    handle.style.right = '4px';
    handle.innerHTML = rightIcon.innerHTML;
    rightIcon.style.opacity = '0.5';
  } else {
    slider.style.background = 'rgba(255, 255, 255, 0.2)';
    handle.style.left = '4px';
    handle.style.right = 'auto';
    if (inputId === 'icon-switch-1') {
      handle.innerHTML = '🔇';
    } else if (inputId === 'icon-switch-2') {
      handle.innerHTML = '🌙';
    }
    rightIcon.style.opacity = '0.5';
  }
}
</script> 