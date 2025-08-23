# 头像 Avatar

头像是用于展示用户或实体身份的图形元素。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 图片头像

```html
<div class="glass-avatar">
  <img src="avatar.jpg" alt="用户头像">
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-avatar">
    <div style="width: 48px; height: 48px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">头像</div>
  </div>
</div>

### 文字头像

```html
<div class="glass-avatar">
  <span class="avatar-text">A</span>
</div>

<div class="glass-avatar">
  <span class="avatar-text">张三</span>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-avatar" style="margin-right: 12px;">
    <span class="avatar-text">A</span>
  </div>
  <div class="glass-avatar">
    <span class="avatar-text">张三</span>
  </div>
</div>

### 图标头像

```html
<div class="glass-avatar">
  <span class="avatar-icon">👤</span>
</div>
```

## 头像尺寸

```html
<!-- 小尺寸 -->
<div class="glass-avatar small"></div>

<!-- 默认尺寸 -->
<div class="glass-avatar"></div>

<!-- 大尺寸 -->
<div class="glass-avatar large"></div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0; display: flex; align-items: center; gap: 12px;">
  <div class="glass-avatar small">
    <div style="width: 32px; height: 32px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">小</div>
  </div>
  <div class="glass-avatar">
    <div style="width: 48px; height: 48px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">默认</div>
  </div>
  <div class="glass-avatar large">
    <div style="width: 64px; height: 64px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">大</div>
  </div>
</div>

## 头像形状

### 圆形头像

```html
<div class="glass-avatar">
  <img src="avatar.jpg" alt="圆形头像">
</div>
```

### 方形头像

```html
<div class="glass-avatar square">
  <img src="avatar.jpg" alt="方形头像">
</div>
```

## 头像状态

### 带状态指示

```html
<div class="glass-avatar">
  <img src="avatar.jpg" alt="用户头像">
  <span class="avatar-status online"></span>
</div>

<div class="glass-avatar">
  <img src="avatar.jpg" alt="用户头像">
  <span class="avatar-status offline"></span>
</div>

<div class="glass-avatar">
  <img src="avatar.jpg" alt="用户头像">
  <span class="avatar-status busy"></span>
</div>
```

## CSS 类名

### 基础类名

- `.glass-avatar` - 基础头像样式
- `.avatar-text` - 文字头像内容
- `.avatar-icon` - 图标头像内容
- `.avatar-status` - 状态指示器

### 修饰类名

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸
- `.xlarge` - 超大尺寸

**形状修饰符**
- `.square` - 方形头像

**状态修饰符**
- `.online` - 在线状态
- `.offline` - 离线状态
- `.busy` - 忙碌状态

## JavaScript 增强

### 头像懒加载

```javascript
function initAvatarLazyLoad() {
  const avatars = document.querySelectorAll('.glass-avatar img[data-src]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  avatars.forEach(img => observer.observe(img));
}

// 使用示例
initAvatarLazyLoad();
```

### 头像上传预览

```javascript
function initAvatarUpload(inputElement, avatarElement) {
  inputElement.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const img = avatarElement.querySelector('img');
        if (img) {
          img.src = e.target.result;
        } else {
          avatarElement.innerHTML = `<img src="${e.target.result}" alt="预览头像">`;
        }
      };
      
      reader.readAsDataURL(file);
    }
  });
}

// 使用示例
const uploadInput = document.querySelector('#avatar-upload');
const avatarPreview = document.querySelector('#avatar-preview');
initAvatarUpload(uploadInput, avatarPreview);
```

## 应用场景

### 用户资料

```html
<div class="user-profile">
  <div class="glass-avatar large">
    <img src="user-avatar.jpg" alt="用户头像">
    <span class="avatar-status online"></span>
  </div>
  <div class="user-info">
    <h3>张三</h3>
    <p>前端开发工程师</p>
  </div>
</div>
```

### 评论列表

```html
<div class="comment-list">
  <div class="comment-item">
    <div class="glass-avatar">
      <img src="user1.jpg" alt="用户头像">
    </div>
    <div class="comment-content">
      <div class="comment-author">李四</div>
      <div class="comment-text">这是一条评论内容...</div>
    </div>
  </div>
  
  <div class="comment-item">
    <div class="glass-avatar">
      <span class="avatar-text">王</span>
    </div>
    <div class="comment-content">
      <div class="comment-author">王五</div>
      <div class="comment-text">另一条评论内容...</div>
    </div>
  </div>
</div>
```

### 团队成员

```html
<div class="team-members">
  <div class="member-item">
    <div class="glass-avatar">
      <img src="member1.jpg" alt="成员头像">
    </div>
    <div class="member-name">张三</div>
    <div class="member-role">产品经理</div>
  </div>
  
  <div class="member-item">
    <div class="glass-avatar">
      <img src="member2.jpg" alt="成员头像">
    </div>
    <div class="member-name">李四</div>
    <div class="member-role">设计师</div>
  </div>
  
  <div class="member-item">
    <div class="glass-avatar">
      <span class="avatar-text">王</span>
    </div>
    <div class="member-name">王五</div>
    <div class="member-role">开发工程师</div>
  </div>
</div>
```