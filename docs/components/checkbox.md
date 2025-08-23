# 复选框 Checkbox

复选框是允许用户从一组选项中选择多个项目的表单控件。Liquid Glass UI 的复选框具有精美的玻璃态效果和流畅的动画，提供优雅的用户体验。

## 基础用法

最基本的复选框：

```html
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  基础复选框
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-checkbox">
      <input type="checkbox">
      <span class="checkmark"></span>
      基础复选框
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" checked>
      <span class="checkmark"></span>
      已选中复选框
    </label>
  </div>
</div>

## 复选框尺寸

### 不同尺寸的复选框

```html
<!-- 小尺寸 -->
<label class="glass-checkbox small">
  <input type="checkbox">
  <span class="checkmark"></span>
  小复选框
</label>

<!-- 标准尺寸 -->
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  标准复选框
</label>

<!-- 大尺寸 -->
<label class="glass-checkbox large">
  <input type="checkbox">
  <span class="checkmark"></span>
  大复选框
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-checkbox" style="font-size: 13px;">
      <input type="checkbox">
      <span class="checkmark" style="width: 16px; height: 16px;"></span>
      小复选框
    </label>
    <label class="glass-checkbox">
      <input type="checkbox">
      <span class="checkmark"></span>
      标准复选框
    </label>
    <label class="glass-checkbox" style="font-size: 16px;">
      <input type="checkbox">
      <span class="checkmark" style="width: 24px; height: 24px;"></span>
      大复选框
    </label>
  </div>
</div>

## 复选框状态

### 各种状态的复选框

```html
<!-- 正常状态 -->
<label class="glass-checkbox">
  <input type="checkbox">
  <span class="checkmark"></span>
  正常状态
</label>

<!-- 选中状态 -->
<label class="glass-checkbox">
  <input type="checkbox" checked>
  <span class="checkmark"></span>
  选中状态
</label>

<!-- 禁用状态 -->
<label class="glass-checkbox">
  <input type="checkbox" disabled>
  <span class="checkmark"></span>
  禁用状态
</label>

<!-- 禁用且选中 -->
<label class="glass-checkbox">
  <input type="checkbox" disabled checked>
  <span class="checkmark"></span>
  禁用且选中
</label>

<!-- 不确定状态 -->
<label class="glass-checkbox">
  <input type="checkbox" class="indeterminate">
  <span class="checkmark"></span>
  不确定状态
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-checkbox">
      <input type="checkbox">
      <span class="checkmark"></span>
      正常状态
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" checked>
      <span class="checkmark"></span>
      选中状态
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" disabled>
      <span class="checkmark"></span>
      禁用状态
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" disabled checked>
      <span class="checkmark"></span>
      禁用且选中
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" id="indeterminate-demo">
      <span class="checkmark"></span>
      不确定状态
    </label>
  </div>
</div>

## 复选框组

### 相关选项的分组

```html
<div class="checkbox-group">
  <div class="group-label">兴趣爱好</div>
  <label class="glass-checkbox">
    <input type="checkbox" name="hobbies" value="reading">
    <span class="checkmark"></span>
    阅读
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" name="hobbies" value="music">
    <span class="checkmark"></span>
    音乐
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" name="hobbies" value="sports">
    <span class="checkmark"></span>
    运动
  </label>
  <label class="glass-checkbox">
    <input type="checkbox" name="hobbies" value="travel">
    <span class="checkmark"></span>
    旅行
  </label>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 300px;">
    <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 16px; font-weight: 500;">兴趣爱好</div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <label class="glass-checkbox">
        <input type="checkbox" name="hobbies" value="reading">
        <span class="checkmark"></span>
        阅读
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="hobbies" value="music">
        <span class="checkmark"></span>
        音乐
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="hobbies" value="sports">
        <span class="checkmark"></span>
        运动
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="hobbies" value="travel">
        <span class="checkmark"></span>
        旅行
      </label>
    </div>
  </div>
</div>

## 带图标的复选框

```html
<div class="icon-checkbox-group">
  <label class="glass-checkbox icon-checkbox">
    <input type="checkbox" name="features" value="notifications">
    <span class="checkmark"></span>
    <div class="checkbox-content">
      <div class="checkbox-icon">🔔</div>
      <div class="checkbox-text">
        <div class="checkbox-title">消息通知</div>
        <div class="checkbox-desc">接收重要消息和更新提醒</div>
      </div>
    </div>
  </label>
  
  <label class="glass-checkbox icon-checkbox">
    <input type="checkbox" name="features" value="emails">
    <span class="checkmark"></span>
    <div class="checkbox-content">
      <div class="checkbox-icon">📧</div>
      <div class="checkbox-text">
        <div class="checkbox-title">邮件订阅</div>
        <div class="checkbox-desc">订阅产品动态和优惠信息</div>
      </div>
    </div>
  </label>
  
  <label class="glass-checkbox icon-checkbox">
    <input type="checkbox" name="features" value="analytics">
    <span class="checkmark"></span>
    <div class="checkbox-content">
      <div class="checkbox-icon">📊</div>
      <div class="checkbox-text">
        <div class="checkbox-title">数据分析</div>
        <div class="checkbox-desc">帮助改善产品体验的匿名数据</div>
      </div>
    </div>
  </label>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-checkbox" style="display: flex; align-items: flex-start; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
      <input type="checkbox" name="features" value="notifications" style="display: none;">
      <span class="checkmark" style="margin-top: 2px; margin-right: 16px;"></span>
      <div style="display: flex; align-items: center; flex: 1;">
        <div style="font-size: 24px; margin-right: 16px;">🔔</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">消息通知</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">接收重要消息和更新提醒</div>
        </div>
      </div>
    </label>
    
    <label class="glass-checkbox" style="display: flex; align-items: flex-start; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
      <input type="checkbox" name="features" value="emails" style="display: none;">
      <span class="checkmark" style="margin-top: 2px; margin-right: 16px;"></span>
      <div style="display: flex; align-items: center; flex: 1;">
        <div style="font-size: 24px; margin-right: 16px;">📧</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">邮件订阅</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">订阅产品动态和优惠信息</div>
        </div>
      </div>
    </label>
    
    <label class="glass-checkbox" style="display: flex; align-items: flex-start; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
      <input type="checkbox" name="features" value="analytics" style="display: none;">
      <span class="checkmark" style="margin-top: 2px; margin-right: 16px;"></span>
      <div style="display: flex; align-items: center; flex: 1;">
        <div style="font-size: 24px; margin-right: 16px;">📊</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">数据分析</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">帮助改善产品体验的匿名数据</div>
        </div>
      </div>
    </label>
  </div>
</div>

## 全选功能

```html
<div class="select-all-group">
  <label class="glass-checkbox master-checkbox">
    <input type="checkbox" id="select-all">
    <span class="checkmark"></span>
    全选
  </label>
  
  <div class="sub-options">
    <label class="glass-checkbox">
      <input type="checkbox" name="items" value="item1" class="sub-checkbox">
      <span class="checkmark"></span>
      选项 1
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" name="items" value="item2" class="sub-checkbox">
      <span class="checkmark"></span>
      选项 2
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" name="items" value="item3" class="sub-checkbox">
      <span class="checkmark"></span>
      选项 3
    </label>
    <label class="glass-checkbox">
      <input type="checkbox" name="items" value="item4" class="sub-checkbox">
      <span class="checkmark"></span>
      选项 4
    </label>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 300px;">
    <label class="glass-checkbox" style="font-weight: 500; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
      <input type="checkbox" id="demo-select-all">
      <span class="checkmark"></span>
      全选
    </label>
    
    <div style="margin-left: 24px; display: flex; flex-direction: column; gap: 12px;">
      <label class="glass-checkbox">
        <input type="checkbox" name="demo-items" value="item1" class="demo-sub-checkbox">
        <span class="checkmark"></span>
        选项 1
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="demo-items" value="item2" class="demo-sub-checkbox">
        <span class="checkmark"></span>
        选项 2
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="demo-items" value="item3" class="demo-sub-checkbox">
        <span class="checkmark"></span>
        选项 3
      </label>
      <label class="glass-checkbox">
        <input type="checkbox" name="demo-items" value="item4" class="demo-sub-checkbox">
        <span class="checkmark"></span>
        选项 4
      </label>
    </div>
  </div>
</div>

## 实际应用场景

### 用户权限设置

```html
<form class="permissions-form">
  <div class="permission-section">
    <h4 style="color: white; margin-bottom: 16px;">用户权限</h4>
    
    <div class="permission-category">
      <label class="glass-checkbox category-checkbox">
        <input type="checkbox" id="user-permissions">
        <span class="checkmark"></span>
        用户管理
      </label>
      
      <div class="sub-permissions">
        <label class="glass-checkbox">
          <input type="checkbox" name="user-perms" value="view" class="user-sub-perm">
          <span class="checkmark"></span>
          查看用户
        </label>
        <label class="glass-checkbox">
          <input type="checkbox" name="user-perms" value="create" class="user-sub-perm">
          <span class="checkmark"></span>
          创建用户
        </label>
        <label class="glass-checkbox">
          <input type="checkbox" name="user-perms" value="edit" class="user-sub-perm">
          <span class="checkmark"></span>
          编辑用户
        </label>
        <label class="glass-checkbox">
          <input type="checkbox" name="user-perms" value="delete" class="user-sub-perm">
          <span class="checkmark"></span>
          删除用户
        </label>
      </div>
    </div>
    
    <div class="permission-category">
      <label class="glass-checkbox category-checkbox">
        <input type="checkbox" id="content-permissions">
        <span class="checkmark"></span>
        内容管理
      </label>
      
      <div class="sub-permissions">
        <label class="glass-checkbox">
          <input type="checkbox" name="content-perms" value="view" class="content-sub-perm">
          <span class="checkmark"></span>
          查看内容
        </label>
        <label class="glass-checkbox">
          <input type="checkbox" name="content-perms" value="publish" class="content-sub-perm">
          <span class="checkmark"></span>
          发布内容
        </label>
        <label class="glass-checkbox">
          <input type="checkbox" name="content-perms" value="moderate" class="content-sub-perm">
          <span class="checkmark"></span>
          审核内容
        </label>
      </div>
    </div>
  </div>
</form>
```

### 购物车结算

```html
<div class="checkout-items">
  <div class="checkout-header">
    <label class="glass-checkbox">
      <input type="checkbox" id="select-all-items">
      <span class="checkmark"></span>
      全选商品
    </label>
    <div class="total-info">
      已选择 <span id="selected-count">0</span> 件商品
    </div>
  </div>
  
  <div class="item-list">
    <div class="checkout-item">
      <label class="glass-checkbox">
        <input type="checkbox" name="cart-items" value="item1" class="cart-item-checkbox" data-price="299">
        <span class="checkmark"></span>
      </label>
      <div class="item-info">
        <div class="item-name">苹果 iPhone 15</div>
        <div class="item-price">¥5,999</div>
      </div>
    </div>
    
    <div class="checkout-item">
      <label class="glass-checkbox">
        <input type="checkbox" name="cart-items" value="item2" class="cart-item-checkbox" data-price="199">
        <span class="checkmark"></span>
      </label>
      <div class="item-info">
        <div class="item-name">AirPods Pro</div>
        <div class="item-price">¥1,999</div>
      </div>
    </div>
    
    <div class="checkout-item">
      <label class="glass-checkbox">
        <input type="checkbox" name="cart-items" value="item3" class="cart-item-checkbox" data-price="99">
        <span class="checkmark"></span>
      </label>
      <div class="item-info">
        <div class="item-name">保护壳</div>
        <div class="item-price">¥199</div>
      </div>
    </div>
  </div>
  
  <div class="checkout-summary">
    <div class="total-amount">
      总计：¥<span id="total-amount">0</span>
    </div>
    <button class="glass-button primary">结算</button>
  </div>
</div>
```

### 偏好设置

```html
<form class="preferences-form">
  <div class="preference-section">
    <h4 style="color: white; margin-bottom: 16px;">通知偏好</h4>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="email" checked>
      <span class="checkmark"></span>
      <div class="setting-content">
        <div class="setting-title">邮件通知</div>
        <div class="setting-desc">接收重要更新和活动通知</div>
      </div>
    </label>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="push">
      <span class="checkmark"></span>
      <div class="setting-content">
        <div class="setting-title">推送通知</div>
        <div class="setting-desc">在设备上接收实时推送消息</div>
      </div>
    </label>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="notifications" value="sms">
      <span class="checkmark"></span>
      <div class="setting-content">
        <div class="setting-title">短信通知</div>
        <div class="setting-desc">紧急情况下的短信提醒</div>
      </div>
    </label>
  </div>
  
  <div class="preference-section">
    <h4 style="color: white; margin-bottom: 16px;">隐私设置</h4>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="privacy" value="public-profile">
      <span class="checkmark"></span>
      公开个人资料
    </label>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="privacy" value="activity-tracking" checked>
      <span class="checkmark"></span>
      允许活动跟踪
    </label>
    
    <label class="glass-checkbox">
      <input type="checkbox" name="privacy" value="data-sharing">
      <span class="checkmark"></span>
      允许数据共享
    </label>
  </div>
</form>
```

## JavaScript 增强功能

### 基础交互

```javascript
// 不确定状态设置
function setIndeterminate(checkbox, isIndeterminate) {
  checkbox.indeterminate = isIndeterminate;
  if (isIndeterminate) {
    checkbox.classList.add('indeterminate');
  } else {
    checkbox.classList.remove('indeterminate');
  }
}

// 全选功能
function initSelectAll(masterCheckbox, subCheckboxes) {
  masterCheckbox.addEventListener('change', function() {
    subCheckboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
      checkbox.dispatchEvent(new Event('change'));
    });
  });
  
  subCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedCount = subCheckboxes.filter(cb => cb.checked).length;
      const totalCount = subCheckboxes.length;
      
      if (checkedCount === 0) {
        masterCheckbox.checked = false;
        setIndeterminate(masterCheckbox, false);
      } else if (checkedCount === totalCount) {
        masterCheckbox.checked = true;
        setIndeterminate(masterCheckbox, false);
      } else {
        masterCheckbox.checked = false;
        setIndeterminate(masterCheckbox, true);
      }
    });
  });
}
```

### 复选框组验证

```javascript
function validateCheckboxGroup(groupName, minRequired = 1, maxAllowed = null) {
  const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  let isValid = true;
  let message = '';
  
  if (checkedCount < minRequired) {
    isValid = false;
    message = `至少选择 ${minRequired} 个选项`;
  } else if (maxAllowed && checkedCount > maxAllowed) {
    isValid = false;
    message = `最多选择 ${maxAllowed} 个选项`;
  }
  
  return { isValid, message, checkedCount };
}
```

### 购物车总价计算

```javascript
function initShoppingCart() {
  const selectAllCheckbox = document.getElementById('select-all-items');
  const itemCheckboxes = document.querySelectorAll('.cart-item-checkbox');
  const selectedCountSpan = document.getElementById('selected-count');
  const totalAmountSpan = document.getElementById('total-amount');
  
  function updateTotals() {
    const checkedItems = Array.from(itemCheckboxes).filter(cb => cb.checked);
    const selectedCount = checkedItems.length;
    const totalAmount = checkedItems.reduce((sum, cb) => {
      return sum + parseFloat(cb.dataset.price);
    }, 0);
    
    selectedCountSpan.textContent = selectedCount;
    totalAmountSpan.textContent = totalAmount.toLocaleString();
  }
  
  // 全选功能
  initSelectAll(selectAllCheckbox, Array.from(itemCheckboxes));
  
  // 更新总计
  itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotals);
  });
  
  selectAllCheckbox.addEventListener('change', updateTotals);
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-checkbox` | 基础复选框样式 |
| `.glass-checkbox.small` | 小尺寸复选框 |
| `.glass-checkbox.large` | 大尺寸复选框 |
| `.checkmark` | 复选框标记 |
| `.checkbox-group` | 复选框组容器 |
| `.icon-checkbox` | 带图标的复选框 |
| `.checkbox-content` | 复选框内容区域 |
| `.checkbox-icon` | 复选框图标 |
| `.checkbox-title` | 复选框标题 |
| `.checkbox-desc` | 复选框描述 |

## 自定义样式

通过CSS变量自定义复选框外观：

```css
:root {
  --checkbox-size: 20px;
  --checkbox-bg: rgba(255, 255, 255, 0.1);
  --checkbox-border: rgba(255, 255, 255, 0.3);
  --checkbox-checked-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --checkbox-checked-border: rgba(102, 126, 234, 0.8);
  --checkbox-checkmark-color: white;
  --checkbox-text-color: rgba(255, 255, 255, 0.9);
  --checkbox-disabled-opacity: 0.5;
}
```

## 可访问性

- 支持键盘导航（Tab、Space键）
- 支持屏幕阅读器
- 提供清晰的焦点指示器
- 支持 ARIA 属性

```html
<fieldset>
  <legend>选择您的兴趣</legend>
  <label class="glass-checkbox">
    <input type="checkbox" name="interests" value="tech" aria-describedby="tech-desc">
    <span class="checkmark"></span>
    科技
  </label>
  <div id="tech-desc" class="sr-only">关于最新科技趋势和产品</div>
</fieldset>
```

## 注意事项

- 为复选框组提供清晰的标签
- 合理使用全选功能，避免误操作
- 在移动设备上确保触摸区域足够大
- 为复杂选项提供足够的说明文本
- 考虑添加选择数量限制和验证

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
// 复选框交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 设置不确定状态
  const indeterminateCheckbox = document.getElementById('indeterminate-demo');
  if (indeterminateCheckbox) {
    indeterminateCheckbox.indeterminate = true;
  }
  
  // 全选功能演示
  const selectAllCheckbox = document.getElementById('demo-select-all');
  const subCheckboxes = document.querySelectorAll('.demo-sub-checkbox');
  
  if (selectAllCheckbox && subCheckboxes.length > 0) {
    selectAllCheckbox.addEventListener('change', function() {
      subCheckboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
      });
    });
    
    subCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const checkedCount = Array.from(subCheckboxes).filter(cb => cb.checked).length;
        const totalCount = subCheckboxes.length;
        
        if (checkedCount === 0) {
          selectAllCheckbox.checked = false;
          selectAllCheckbox.indeterminate = false;
        } else if (checkedCount === totalCount) {
          selectAllCheckbox.checked = true;
          selectAllCheckbox.indeterminate = false;
        } else {
          selectAllCheckbox.checked = false;
          selectAllCheckbox.indeterminate = true;
        }
      });
    });
  }
});
</script> 