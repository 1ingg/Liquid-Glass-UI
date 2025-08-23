# 文本域 Textarea

文本域是多行文本输入控件，适用于需要输入大量文本内容的场景。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础文本域

```html
<textarea class="glass-textarea" placeholder="请输入多行文本"></textarea>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <textarea class="glass-textarea" placeholder="请输入多行文本"></textarea>
</div>

### 带标签的文本域

```html
<div class="form-group">
  <label class="form-label">描述</label>
  <textarea class="glass-textarea" placeholder="请输入详细描述"></textarea>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="form-group">
    <label class="form-label" style="display: block; margin-bottom: 8px; color: rgba(255,255,255,0.9);">描述</label>
    <textarea class="glass-textarea" placeholder="请输入详细描述" style="width: 100%; height: 100px;"></textarea>
  </div>
</div>

## 文本域变体

### 增强文本域

```html
<textarea class="glass-textarea enhanced" placeholder="支持增强功能的文本域..." rows="6"></textarea>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <textarea class="glass-textarea enhanced" placeholder="支持增强功能的文本域..." rows="6" style="width: 100%;"></textarea>
</div>

### 简洁文本域

```html
<textarea class="glass-textarea minimal" placeholder="简洁的文本输入框..." rows="3"></textarea>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <textarea class="glass-textarea minimal" placeholder="简洁的文本输入框..." rows="3" style="width: 100%;"></textarea>
</div>

## 文本域状态

### 禁用状态

```html
<textarea class="glass-textarea" placeholder="禁用状态" disabled></textarea>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <textarea class="glass-textarea" placeholder="禁用状态" disabled style="width: 100%; height: 100px;"></textarea>
</div>

### 只读状态

```html
<textarea class="glass-textarea" readonly>这是只读的文本内容</textarea>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <textarea class="glass-textarea" readonly style="width: 100%; height: 100px;">这是只读的文本内容</textarea>
</div>

## 自动调整高度

```html
<textarea class="glass-textarea auto-resize" placeholder="输入内容会自动调整高度..."></textarea>
```

## CSS 类名

### 基础类名

- `.glass-textarea` - 基础文本域样式

### 修饰类名

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `.error` - 错误状态
- `.success` - 成功状态
- `:disabled` - 禁用状态
- `:readonly` - 只读状态

**功能修饰符**
- `.auto-resize` - 自动调整高度

## JavaScript 增强

### 自动调整高度

```javascript
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// 应用到所有自动调整的文本域
document.querySelectorAll('.glass-textarea.auto-resize').forEach(textarea => {
  textarea.addEventListener('input', function() {
    autoResize(this);
  });
  
  // 初始调整
  autoResize(textarea);
});
```

### 字符计数

```javascript
function addCharacterCounter(textarea, maxLength) {
  const counter = document.createElement('div');
  counter.className = 'character-counter';
  counter.style.cssText = `
    margin-top: 8px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    text-align: right;
  `;
  
  textarea.parentNode.appendChild(counter);
  
  function updateCounter() {
    const current = textarea.value.length;
    counter.textContent = `${current}/${maxLength}`;
    
    if (current > maxLength) {
      counter.style.color = 'rgba(239, 68, 68, 0.8)';
      textarea.classList.add('error');
    } else {
      counter.style.color = 'rgba(255, 255, 255, 0.6)';
      textarea.classList.remove('error');
    }
  }
  
  textarea.addEventListener('input', updateCounter);
  updateCounter();
}

// 使用示例
const textarea = document.querySelector('#comment-textarea');
addCharacterCounter(textarea, 500);
```

## 应用场景

### 留言表单

```html
<form class="comment-form">
  <div class="form-group">
    <label class="form-label">姓名</label>
    <input type="text" class="glass-input" placeholder="请输入您的姓名" required>
  </div>
  <div class="form-group">
    <label class="form-label">留言内容</label>
    <textarea class="glass-textarea auto-resize" 
              placeholder="请输入您的留言..." 
              rows="4" 
              required></textarea>
  </div>
  <button type="submit" class="glass-button primary">提交留言</button>
</form>
```

### 文章编辑

```html
<div class="editor-form">
  <div class="form-group">
    <label class="form-label">文章标题</label>
    <input type="text" class="glass-input" placeholder="请输入文章标题">
  </div>
  <div class="form-group">
    <label class="form-label">文章内容</label>
    <textarea class="glass-textarea large auto-resize" 
              placeholder="请输入文章内容..." 
              rows="10"></textarea>
  </div>
</div>
```

### 反馈表单

```html
<div class="feedback-form">
  <h3>意见反馈</h3>
  <div class="form-group">
    <label class="form-label">反馈类型</label>
    <select class="glass-select">
      <option>功能建议</option>
      <option>Bug报告</option>
      <option>其他</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label">详细描述</label>
    <textarea class="glass-textarea auto-resize" 
              placeholder="请详细描述您的反馈..." 
              rows="6"></textarea>
  </div>
</div>
```