# 通知 Notification

通知是向用户显示消息的反馈组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础通知

```html
<div class="glass-notification">
  <div class="notification-content">
    <div class="notification-title">提示</div>
    <span class="notification-separator">-</span>
    <div class="notification-message">这是一条基础通知</div>
  </div>
  <button class="notification-close">×</button>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-notification">
    <div class="notification-content">
      <div class="notification-title">提示</div>
      <span class="notification-separator">-</span>
      <div class="notification-message">这是一条基础通知</div>
    </div>
    <button class="notification-close">×</button>
  </div>
</div>

## 通知类型

### 成功通知

```html
<div class="glass-notification success">
  <div class="notification-content">
    <div class="notification-title">成功</div>
    <span class="notification-separator">-</span>
    <div class="notification-message">操作已成功完成</div>
  </div>
  <button class="notification-close">×</button>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-notification success">
    <div class="notification-content">
      <div class="notification-title">成功</div>
      <span class="notification-separator">-</span>
      <div class="notification-message">操作已成功完成</div>
    </div>
    <button class="notification-close">×</button>
  </div>
</div>

## 通知位置

```html
<!-- 右上角 -->
<div class="notification-container top-right">
  <div class="glass-notification">
    <div class="notification-content">
      <div class="notification-message">右上角通知</div>
    </div>
  </div>
</div>

<!-- 左上角 -->
<div class="notification-container top-left">
  <div class="glass-notification">
    <div class="notification-content">
      <div class="notification-message">左上角通知</div>
    </div>
  </div>
</div>

<!-- 右下角 -->
<div class="notification-container bottom-right">
  <div class="glass-notification">
    <div class="notification-content">
      <div class="notification-message">右下角通知</div>
    </div>
  </div>
</div>
```

## CSS 类名

### 基础类名

- `.glass-notification` - 通知容器
- `.notification-container` - 通知区域容器
- `.notification-icon` - 通知图标
- `.notification-content` - 通知内容
- `.notification-title` - 通知标题
- `.notification-message` - 通知消息
- `.notification-close` - 关闭按钮

### 修饰类名

**类型修饰符**
- `.success` - 成功类型
- `.warning` - 警告类型
- `.error` - 错误类型
- `.info` - 信息类型

**位置修饰符**
- `.top-right` - 右上角
- `.top-left` - 左上角
- `.bottom-right` - 右下角
- `.bottom-left` - 左下角

## JavaScript 增强

### 通知管理器

```javascript
class NotificationManager {
  constructor() {
    this.container = this.createContainer();
    this.notifications = new Map();
    this.idCounter = 0;
  }
  
  createContainer() {
    let container = document.querySelector('.notification-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'notification-container top-right';
      document.body.appendChild(container);
    }
    return container;
  }
  
  show(options = {}) {
    const {
      title = '',
      message = '',
      type = 'info',
      duration = 4000,
      closable = true
    } = options;
    
    const id = ++this.idCounter;
    const notification = this.createNotification(id, title, message, type, closable);
    
    this.container.appendChild(notification);
    this.notifications.set(id, notification);
    
    // 添加显示动画
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // 自动关闭
    if (duration > 0) {
      setTimeout(() => {
        this.hide(id);
      }, duration);
    }
    
    return id;
  }
  
  createNotification(id, title, message, type, closable) {
    const notification = document.createElement('div');
    notification.className = `glass-notification ${type}`;
    notification.dataset.id = id;
    
    const icon = this.getTypeIcon(type);
    
    notification.innerHTML = `
      ${icon ? `<div class="notification-icon">${icon}</div>` : ''}
      <div class="notification-content">
        ${title ? `<div class="notification-title">${title}</div>` : ''}
        <div class="notification-message">${message}</div>
      </div>
      ${closable ? '<button class="notification-close">&times;</button>' : ''}
    `;
    
    // 绑定关闭事件
    if (closable) {
      const closeBtn = notification.querySelector('.notification-close');
      closeBtn.addEventListener('click', () => {
        this.hide(id);
      });
    }
    
    return notification;
  }
  
  getTypeIcon(type) {
    const icons = {
      success: '✅',
      warning: '⚠️',
      error: '❌',
      info: 'ℹ️'
    };
    return icons[type] || '';
  }
  
  hide(id) {
    const notification = this.notifications.get(id);
    if (!notification) return;
    
    notification.classList.add('hide');
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      this.notifications.delete(id);
    }, 300);
  }
  
  hideAll() {
    this.notifications.forEach((notification, id) => {
      this.hide(id);
    });
  }
  
  success(message, options = {}) {
    return this.show({ ...options, message, type: 'success' });
  }
  
  warning(message, options = {}) {
    return this.show({ ...options, message, type: 'warning' });
  }
  
  error(message, options = {}) {
    return this.show({ ...options, message, type: 'error' });
  }
  
  info(message, options = {}) {
    return this.show({ ...options, message, type: 'info' });
  }
}

// 创建全局实例
const notification = new NotificationManager();

// 使用示例
notification.success('操作成功完成！');
notification.error('操作失败，请重试');
notification.warning('请注意数据安全');
notification.info('这是一条提示信息');
```

### 简单通知函数

```javascript
function showNotification(message, type = 'info', duration = 4000) {
  const container = getNotificationContainer();
  
  const notification = document.createElement('div');
  notification.className = `glass-notification ${type} show`;
  
  const icon = getNotificationIcon(type);
  notification.innerHTML = `
    ${icon ? `<div class="notification-icon">${icon}</div>` : ''}
    <div class="notification-content">
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close">&times;</button>
  `;
  
  // 关闭按钮事件
  notification.querySelector('.notification-close').addEventListener('click', () => {
    hideNotification(notification);
  });
  
  container.appendChild(notification);
  
  // 自动关闭
  if (duration > 0) {
    setTimeout(() => {
      hideNotification(notification);
    }, duration);
  }
}

function getNotificationContainer() {
  let container = document.querySelector('.notification-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'notification-container top-right';
    document.body.appendChild(container);
  }
  return container;
}

function getNotificationIcon(type) {
  const icons = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️'
  };
  return icons[type] || '';
}

function hideNotification(notification) {
  notification.classList.add('hide');
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// 便捷函数
function notifySuccess(message) {
  showNotification(message, 'success');
}

function notifyError(message) {
  showNotification(message, 'error');
}

function notifyWarning(message) {
  showNotification(message, 'warning');
}

function notifyInfo(message) {
  showNotification(message, 'info');
}
```

## 应用场景

### 表单提交反馈

```html
<form class="glass-form" id="contact-form">
  <div class="form-group">
    <input type="text" class="glass-input" placeholder="姓名" required>
  </div>
  <div class="form-group">
    <input type="email" class="glass-input" placeholder="邮箱" required>
  </div>
  <div class="form-group">
    <textarea class="glass-textarea" placeholder="消息"></textarea>
  </div>
  <button type="submit" class="glass-button primary">发送</button>
</form>

<script>
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    notification.success('消息发送成功！', {
      title: '提交成功',
      duration: 3000
    });
  } catch (error) {
    notification.error('发送失败，请稍后重试', {
      title: '提交失败',
      duration: 5000
    });
  }
});
</script>
```

### 操作状态提示

```html
<div class="action-buttons">
  <button class="glass-button" onclick="saveData()">保存</button>
  <button class="glass-button danger" onclick="deleteData()">删除</button>
  <button class="glass-button" onclick="exportData()">导出</button>
</div>

<script>
function saveData() {
  notification.info('正在保存数据...', { duration: 0 });
  
  setTimeout(() => {
    notification.hideAll();
    notification.success('数据保存成功！');
  }, 2000);
}

function deleteData() {
  notification.warning('确认删除操作？此操作无法撤销', {
    duration: 0,
    closable: true
  });
}

function exportData() {
  notification.info('开始导出数据...', { duration: 1000 });
  
  setTimeout(() => {
    notification.success('导出完成，文件已下载');
  }, 3000);
}
</script>
```

### 系统状态通知

```html
<div class="system-status">
  <button onclick="checkConnection()">检查连接</button>
  <button onclick="syncData()">同步数据</button>
  <button onclick="updateSystem()">系统更新</button>
</div>

<script>
function checkConnection() {
  // 模拟网络检查
  const isOnline = Math.random() > 0.3;
  
  if (isOnline) {
    notification.success('网络连接正常');
  } else {
    notification.error('网络连接失败，请检查网络设置');
  }
}

function syncData() {
  notification.info('正在同步数据...', { duration: 0 });
  
  setTimeout(() => {
    notification.hideAll();
    notification.success('数据同步完成', {
      title: '同步成功',
      duration: 3000
    });
  }, 2500);
}

function updateSystem() {
  notification.warning('系统将在5分钟后重启进行更新', {
    title: '系统更新',
    duration: 10000
  });
}
</script>
```