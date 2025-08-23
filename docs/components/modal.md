# 模态框 Modal

模态框是覆盖在页面上的对话框组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础模态框

```html
<div class="glass-modal">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-header">
      <h3 class="modal-title">标题</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>这是模态框的内容</p>
    </div>
    <div class="modal-footer">
      <button class="glass-button">取消</button>
      <button class="glass-button primary">确认</button>
    </div>
  </div>
</div>
```

### 简单模态框

```html
<div class="glass-modal simple">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-content">
      <h3>确认删除</h3>
      <p>您确定要删除这个项目吗？此操作无法撤销。</p>
      <div class="modal-actions">
        <button class="glass-button">取消</button>
        <button class="glass-button danger">删除</button>
      </div>
    </div>
  </div>
</div>
```

## 模态框类型

### 确认模态框

```html
<div class="glass-modal-overlay">
  <div class="glass-modal small">
    <div class="modal-header">
      <h3>确认操作</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>您确定要删除这个项目吗？此操作无法撤销。</p>
    </div>
    <div class="modal-footer">
      <button class="glass-button">取消</button>
      <button class="glass-button primary">确认删除</button>
    </div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; position: relative; min-height: 300px;">
  <div style="position: relative; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 20px; min-height: 260px; display: flex; align-items: center; justify-content: center;">
    <div class="glass-modal small" style="position: relative; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); max-width: 400px; width: 100%;">
      <div class="modal-header" style="padding: 20px 20px 0; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; color: white;">确认操作</h3>
        <button class="modal-close" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body" style="padding: 20px;">
        <p style="margin: 0; color: rgba(255,255,255,0.9);">您确定要删除这个项目吗？此操作无法撤销。</p>
      </div>
      <div class="modal-footer" style="padding: 0 20px 20px; display: flex; gap: 12px; justify-content: flex-end;">
        <button class="glass-button" style="padding: 8px 16px;">取消</button>
        <button class="glass-button primary" style="padding: 8px 16px;">确认删除</button>
      </div>
    </div>
  </div>
</div>

### 表单模态框

```html
<div class="glass-modal-overlay">
  <div class="glass-modal medium">
    <div class="modal-header">
      <h3>编辑用户信息</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <label class="form-label">用户名</label>
          <input type="text" class="glass-input" value="john_doe">
        </div>
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input type="email" class="glass-input" value="john@example.com">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="glass-button">取消</button>
      <button class="glass-button primary">保存</button>
    </div>
  </div>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; position: relative; min-height: 350px;">
  <div style="position: relative; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 20px; min-height: 310px; display: flex; align-items: center; justify-content: center;">
    <div class="glass-modal medium" style="position: relative; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); max-width: 500px; width: 100%;">
      <div class="modal-header" style="padding: 20px 20px 0; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; color: white;">编辑用户信息</h3>
        <button class="modal-close" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">&times;</button>
      </div>
      <div class="modal-body" style="padding: 20px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; color: rgba(255,255,255,0.9);">用户名</label>
          <input type="text" class="glass-input" value="john_doe" style="width: 100%;">
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; color: rgba(255,255,255,0.9);">邮箱</label>
          <input type="email" class="glass-input" value="john@example.com" style="width: 100%;">
        </div>
      </div>
      <div class="modal-footer" style="padding: 0 20px 20px; display: flex; gap: 12px; justify-content: flex-end;">
        <button class="glass-button" style="padding: 8px 16px;">取消</button>
        <button class="glass-button primary" style="padding: 8px 16px;">保存</button>
      </div>
    </div>
  </div>
</div>

### 信息提示

```html
<div class="glass-modal info">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-content">
      <div class="modal-icon">ℹ️</div>
      <h3>提示信息</h3>
      <p>操作已成功完成！</p>
      <div class="modal-actions">
        <button class="glass-button primary">知道了</button>
      </div>
    </div>
  </div>
</div>
```

## 模态框尺寸

```html
<!-- 小尺寸 -->
<div class="glass-modal small">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-content">
      <h3>小尺寸模态框</h3>
      <p>内容相对较少的模态框</p>
    </div>
  </div>
</div>

<!-- 默认尺寸 -->
<div class="glass-modal">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-content">
      <h3>默认尺寸模态框</h3>
      <p>标准大小的模态框内容</p>
    </div>
  </div>
</div>

<!-- 大尺寸 -->
<div class="glass-modal large">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-content">
      <h3>大尺寸模态框</h3>
      <p>需要展示更多内容的大型模态框</p>
    </div>
  </div>
</div>
```

## CSS 类名

### 基础类名

- `.glass-modal` - 模态框容器
- `.modal-overlay` - 遮罩层
- `.modal-container` - 模态框主体
- `.modal-header` - 头部区域
- `.modal-title` - 标题
- `.modal-close` - 关闭按钮
- `.modal-body` - 内容区域
- `.modal-footer` - 底部区域
- `.modal-content` - 简单内容区域
- `.modal-actions` - 操作按钮区域
- `.modal-icon` - 图标

### 修饰类名

**类型修饰符**
- `.simple` - 简单样式
- `.confirm` - 确认对话框
- `.info` - 信息提示

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `.active` - 显示状态

## JavaScript 增强

### 模态框控制

```javascript
class Modal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      closable: true,
      backdrop: true,
      keyboard: true,
      ...options
    };
    
    this.isVisible = false;
    this.init();
  }
  
  init() {
    this.bindEvents();
  }
  
  bindEvents() {
    // 关闭按钮
    const closeBtn = this.element.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }
    
    // 遮罩层点击关闭
    if (this.options.backdrop) {
      const overlay = this.element.querySelector('.modal-overlay');
      if (overlay) {
        overlay.addEventListener('click', () => this.hide());
      }
    }
    
    // ESC键关闭
    if (this.options.keyboard) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isVisible) {
          this.hide();
        }
      });
    }
  }
  
  show() {
    if (this.isVisible) return;
    
    this.isVisible = true;
    this.element.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 触发显示事件
    this.element.dispatchEvent(new CustomEvent('modal-show'));
  }
  
  hide() {
    if (!this.isVisible) return;
    
    this.isVisible = false;
    this.element.classList.remove('active');
    document.body.style.overflow = '';
    
    // 触发隐藏事件
    this.element.dispatchEvent(new CustomEvent('modal-hide'));
  }
  
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }
}

// 使用示例
const modal = new Modal(document.querySelector('.glass-modal'));

// 显示模态框
document.querySelector('#show-modal').addEventListener('click', () => {
  modal.show();
});
```

### 创建动态模态框

```javascript
function createModal(options = {}) {
  const {
    title = '提示',
    content = '',
    type = 'default',
    size = 'medium',
    confirmText = '确认',
    cancelText = '取消',
    onConfirm = () => {},
    onCancel = () => {}
  } = options;
  
  const modal = document.createElement('div');
  modal.className = `glass-modal ${type} ${size}`;
  
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal-content">
        ${type === 'confirm' || type === 'info' ? '<div class="modal-icon">' + getIcon(type) + '</div>' : ''}
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="modal-actions">
          ${type === 'info' ? '' : `<button class="glass-button cancel-btn">${cancelText}</button>`}
          <button class="glass-button primary confirm-btn">${confirmText}</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const modalInstance = new Modal(modal);
  
  // 绑定按钮事件
  const confirmBtn = modal.querySelector('.confirm-btn');
  const cancelBtn = modal.querySelector('.cancel-btn');
  
  confirmBtn.addEventListener('click', () => {
    onConfirm();
    modalInstance.hide();
    setTimeout(() => modal.remove(), 300);
  });
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      onCancel();
      modalInstance.hide();
      setTimeout(() => modal.remove(), 300);
    });
  }
  
  modalInstance.show();
  
  return modalInstance;
}

function getIcon(type) {
  const icons = {
    confirm: '⚠️',
    info: 'ℹ️',
    success: '✅',
    error: '❌'
  };
  return icons[type] || '';
}

// 使用示例
function showConfirm() {
  createModal({
    title: '确认删除',
    content: '您确定要删除这个项目吗？此操作无法撤销。',
    type: 'confirm',
    onConfirm: () => {
      console.log('确认删除');
    },
    onCancel: () => {
      console.log('取消删除');
    }
  });
}
```

## 应用场景

### 确认删除

```html
<div class="content-item">
  <h4>重要文档.docx</h4>
  <p>最后修改：2024年1月15日</p>
  <button class="glass-button danger" onclick="confirmDelete()">删除</button>
</div>

<script>
function confirmDelete() {
  createModal({
    title: '确认删除',
    content: '您确定要删除"重要文档.docx"吗？删除后无法恢复。',
    type: 'confirm',
    confirmText: '删除',
    cancelText: '取消',
    onConfirm: () => {
      // 执行删除操作
      console.log('文件已删除');
    }
  });
}
</script>
```

### 用户信息编辑

```html
<div class="glass-modal large" id="edit-modal">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-header">
      <h3 class="modal-title">编辑用户信息</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <form class="glass-form">
        <div class="form-group">
          <label class="form-label">姓名</label>
          <input type="text" class="glass-input" value="张三">
        </div>
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input type="email" class="glass-input" value="zhang@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">职位</label>
          <select class="glass-select">
            <option>开发工程师</option>
            <option>产品经理</option>
            <option>设计师</option>
          </select>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="glass-button">取消</button>
      <button class="glass-button primary">保存</button>
    </div>
  </div>
</div>
```

### 图片预览

```html
<div class="glass-modal large" id="image-modal">
  <div class="modal-overlay"></div>
  <div class="modal-container">
    <div class="modal-header">
      <h3 class="modal-title">图片预览</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <div class="image-preview">
        <img src="preview-image.jpg" alt="预览图片" style="max-width: 100%; height: auto;">
      </div>
    </div>
    <div class="modal-footer">
      <button class="glass-button">下载</button>
      <button class="glass-button primary">关闭</button>
    </div>
  </div>
</div>
```