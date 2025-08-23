# 文本域 Textarea

文本域是用于多行文本输入的表单控件，适用于评论、描述、消息等较长内容的输入场景。Liquid Glass UI 的文本域具有优雅的玻璃态效果和良好的用户体验。

## 基础用法

最基本的文本域：

```html
<textarea class="glass-textarea" placeholder="请输入多行文本"></textarea>
```

<div class="demo-container">
  <textarea class="glass-textarea" placeholder="请输入多行文本" rows="4"></textarea>
</div>

## 文本域尺寸

### 指定行数

通过 `rows` 属性控制显示的行数：

```html
<textarea class="glass-textarea" rows="3" placeholder="3行文本域"></textarea>
<textarea class="glass-textarea" rows="6" placeholder="6行文本域"></textarea>
<textarea class="glass-textarea" rows="10" placeholder="10行文本域"></textarea>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px;">
    <textarea class="glass-textarea" rows="3" placeholder="3行文本域"></textarea>
    <textarea class="glass-textarea" rows="6" placeholder="6行文本域"></textarea>
    <textarea class="glass-textarea" rows="10" placeholder="10行文本域"></textarea>
  </div>
</div>

### 最小尺寸变体

```html
<textarea class="glass-textarea minimal" placeholder="简约文本域" rows="3"></textarea>
```

<div class="demo-container">
  <textarea class="glass-textarea" style="border-radius: 8px; padding: 12px 16px; font-size: 13px; min-height: 80px;" placeholder="简约文本域" rows="3"></textarea>
</div>

## 文本域状态

### 禁用状态

```html
<textarea class="glass-textarea" placeholder="禁用的文本域" disabled rows="4"></textarea>
```

### 只读状态

```html
<textarea class="glass-textarea" readonly rows="4">这是只读的文本内容，用户无法编辑但可以选择和复制。</textarea>
```

### 必填字段

```html
<textarea class="glass-textarea" placeholder="必填文本域" required rows="4"></textarea>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px;">
    <textarea class="glass-textarea" placeholder="正常文本域" rows="3"></textarea>
    <textarea class="glass-textarea" placeholder="禁用的文本域" disabled rows="3"></textarea>
    <textarea class="glass-textarea" readonly rows="3">这是只读的文本内容</textarea>
  </div>
</div>

## 带标签的文本域

```html
<div class="form-group">
  <label class="form-label">消息内容</label>
  <textarea class="glass-textarea" placeholder="请输入您的消息..." rows="4"></textarea>
</div>

<div class="form-group">
  <label class="form-label">产品描述</label>
  <textarea class="glass-textarea" placeholder="详细描述产品特性..." rows="6"></textarea>
</div>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 400px;">
    <div>
      <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">消息内容</label>
      <textarea class="glass-textarea" placeholder="请输入您的消息..." rows="4"></textarea>
    </div>
    <div>
      <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">产品描述</label>
      <textarea class="glass-textarea" placeholder="详细描述产品特性..." rows="6"></textarea>
    </div>
  </div>
</div>

## 字符计数功能

带字符计数的文本域：

```html
<div class="form-group">
  <label class="form-label">评论 (最多500字)</label>
  <textarea class="glass-textarea" placeholder="分享您的想法..." rows="4" maxlength="500"></textarea>
  <div class="char-counter">
    <span class="char-count">0</span>/<span class="char-limit">500</span>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <label style="display: block; color: rgba(255,255,255,0.8); font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">评论 (最多500字)</label>
    <textarea class="glass-textarea" placeholder="分享您的想法..." rows="4" maxlength="500" id="comment-textarea"></textarea>
    <div style="color: rgba(255,255,255,0.6); font-size: 12px; text-align: right; margin-top: 4px; font-family: monospace;">
      <span id="char-count">0</span>/<span>500</span>
    </div>
  </div>
</div>

## 增强型文本域

带工具栏的文本域：

```html
<div class="custom-textarea-container">
  <div class="textarea-toolbar">
    <button class="toolbar-btn" title="粗体">B</button>
    <button class="toolbar-btn" title="斜体">I</button>
    <button class="toolbar-btn" title="下划线">U</button>
    <div class="toolbar-divider"></div>
    <button class="toolbar-btn" title="链接">🔗</button>
    <button class="toolbar-btn" title="图片">📷</button>
    <div class="char-counter">
      <span class="char-count">0</span>/<span class="char-limit">1000</span>
    </div>
  </div>
  <div class="textarea-wrapper">
    <textarea class="glass-textarea enhanced" placeholder="开始写作..." rows="6"></textarea>
  </div>
  <div class="textarea-status">
    <div class="status-indicators">
      <div class="status-indicator" data-status="saved">💾 已保存</div>
    </div>
    <div class="word-count">字数: 0</div>
  </div>
</div>
```

## 实际应用场景

### 联系表单

```html
<form class="contact-form">
  <div class="form-group">
    <label class="form-label">主题</label>
    <input type="text" class="glass-input" placeholder="邮件主题">
  </div>
  
  <div class="form-group">
    <label class="form-label">详细描述</label>
    <textarea class="glass-textarea" placeholder="请详细描述您的问题或需求..." rows="6" required></textarea>
  </div>
  
  <button type="submit" class="glass-button primary">发送消息</button>
</form>
```

### 用户反馈

```html
<div class="feedback-form">
  <h3 style="color: white; margin-bottom: 20px;">用户反馈</h3>
  
  <div class="form-group">
    <label class="form-label">您的建议</label>
    <textarea 
      class="glass-textarea" 
      placeholder="告诉我们您的想法，帮助我们改进产品..." 
      rows="5"
    ></textarea>
  </div>
  
  <div class="form-group">
    <label class="form-label">遇到的问题</label>
    <textarea 
      class="glass-textarea" 
      placeholder="请描述您遇到的具体问题（可选）..." 
      rows="4"
    ></textarea>
  </div>
  
  <div style="display: flex; gap: 12px;">
    <button class="glass-button">稍后提交</button>
    <button class="glass-button primary">提交反馈</button>
  </div>
</div>
```

### 内容编辑器

```html
<div class="content-editor">
  <div class="editor-header">
    <h4 style="color: white;">写新文章</h4>
    <div class="editor-actions">
      <button class="glass-button small">保存草稿</button>
      <button class="glass-button primary small">发布</button>
    </div>
  </div>
  
  <div class="form-group">
    <input type="text" class="glass-input" placeholder="文章标题" style="font-size: 18px; font-weight: 500;">
  </div>
  
  <div class="form-group">
    <textarea 
      class="glass-textarea" 
      placeholder="开始写作..." 
      rows="12"
      style="font-size: 16px; line-height: 1.6;"
    ></textarea>
  </div>
  
  <div class="editor-footer">
    <div class="editor-stats">
      <span style="color: rgba(255,255,255,0.6); font-size: 12px;">字数: 0 | 预计阅读时间: 0分钟</span>
    </div>
  </div>
</div>
```

### 评论系统

```html
<div class="comment-system">
  <div class="comment-form">
    <div class="user-avatar">
      <div class="glass-avatar small">👤</div>
    </div>
    <div class="comment-input">
      <textarea 
        class="glass-textarea" 
        placeholder="写下您的评论..." 
        rows="3"
      ></textarea>
      <div class="comment-actions">
        <div class="comment-options">
          <label class="glass-checkbox">
            <input type="checkbox">
            <span class="checkmark"></span>
            匿名评论
          </label>
        </div>
        <button class="glass-button primary small">发表评论</button>
      </div>
    </div>
  </div>
</div>
```

## 文本域验证

### HTML5 验证

```html
<textarea 
  class="glass-textarea" 
  placeholder="请输入内容..." 
  required
  minlength="10"
  maxlength="500"
  rows="4"
></textarea>
```

### 自定义验证样式

```css
.glass-textarea:invalid {
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.glass-textarea:valid {
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
}

.error-message {
  color: rgba(252, 165, 165, 0.9);
  font-size: 12px;
  margin-top: 4px;
}

.success-message {
  color: rgba(134, 239, 172, 0.9);
  font-size: 12px;
  margin-top: 4px;
}
```

## JavaScript 增强功能

### 自动调整高度

```javascript
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

document.querySelectorAll('.glass-textarea').forEach(textarea => {
  textarea.addEventListener('input', function() {
    autoResize(this);
  });
});
```

### 字符计数器

```javascript
function addCharacterCounter(textarea, maxLength) {
  const counter = document.createElement('div');
  counter.className = 'char-counter';
  counter.innerHTML = `<span class="char-count">0</span>/<span class="char-limit">${maxLength}</span>`;
  
  textarea.parentNode.insertBefore(counter, textarea.nextSibling);
  
  function updateCounter() {
    const length = textarea.value.length;
    const charCount = counter.querySelector('.char-count');
    charCount.textContent = length;
    
    // 颜色提示
    if (length > maxLength * 0.9) {
      charCount.style.color = 'rgba(251, 191, 36, 0.8)';
    } else if (length > maxLength * 0.8) {
      charCount.style.color = 'rgba(255, 255, 255, 0.8)';
    } else {
      charCount.style.color = 'rgba(255, 255, 255, 0.6)';
    }
  }
  
  textarea.addEventListener('input', updateCounter);
  updateCounter();
}
```

### 实时保存

```javascript
function enableAutoSave(textarea, saveCallback) {
  let saveTimeout;
  
  textarea.addEventListener('input', function() {
    clearTimeout(saveTimeout);
    
    // 显示"正在输入"状态
    const indicator = document.querySelector('.status-indicator');
    if (indicator) {
      indicator.textContent = '✏️ 正在编辑';
      indicator.dataset.status = 'typing';
    }
    
    saveTimeout = setTimeout(() => {
      saveCallback(this.value);
      
      // 显示"已保存"状态
      if (indicator) {
        indicator.textContent = '💾 已保存';
        indicator.dataset.status = 'saved';
      }
    }, 2000);
  });
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-textarea` | 基础文本域样式 |
| `.glass-textarea.minimal` | 简约风格文本域 |
| `.custom-textarea-container` | 增强型文本域容器 |
| `.textarea-toolbar` | 文本域工具栏 |
| `.toolbar-btn` | 工具栏按钮 |
| `.char-counter` | 字符计数器 |

## 自定义样式

通过CSS变量自定义文本域外观：

```css
:root {
  --glass-textarea-bg: rgba(255, 255, 255, 0.08);
  --glass-textarea-border: rgba(255, 255, 255, 0.2);
  --glass-textarea-focus-border: rgba(74, 144, 226, 0.5);
  --glass-textarea-text: rgba(255, 255, 255, 0.9);
  --glass-textarea-placeholder: rgba(255, 255, 255, 0.6);
}
```

## 可访问性

- 支持键盘导航和Tab键切换
- 支持屏幕阅读器
- 提供明确的标签和说明文本
- 支持 `required`、`aria-*` 等属性

```html
<label for="description" class="form-label">产品描述</label>
<textarea 
  id="description"
  class="glass-textarea" 
  placeholder="详细描述产品特性和优势"
  aria-describedby="description-help"
  required
  rows="6"
></textarea>
<div id="description-help" class="help-text">
  请提供详细的产品信息，这将帮助用户更好地了解您的产品
</div>
```

## 注意事项

- 为较长的内容设置合适的行数
- 在移动设备上测试输入体验
- 考虑添加字符限制和计数器
- 提供清晰的标签和占位文本
- 确保在深色背景上有足够的对比度

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
// 字符计数功能
document.addEventListener('DOMContentLoaded', function() {
  const commentTextarea = document.getElementById('comment-textarea');
  const charCount = document.getElementById('char-count');
  
  if (commentTextarea && charCount) {
    commentTextarea.addEventListener('input', function() {
      charCount.textContent = this.value.length;
      
      if (this.value.length > 450) {
        charCount.style.color = 'rgba(251, 191, 36, 0.8)';
      } else {
        charCount.style.color = 'rgba(255, 255, 255, 0.6)';
      }
    });
  }
});
</script> 