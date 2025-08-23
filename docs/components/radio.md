# 单选框 Radio

单选框是允许用户从一组互斥选项中选择一个的表单控件。Liquid Glass UI 的单选框具有精美的玻璃态效果和流畅的动画，提供清晰的选择体验。

## 基础用法

最基本的单选框：

```html
<div class="radio-group">
  <label class="glass-radio">
    <input type="radio" name="basic" value="option1">
    <span class="radio-mark"></span>
    选项 1
  </label>
  
  <label class="glass-radio">
    <input type="radio" name="basic" value="option2">
    <span class="radio-mark"></span>
    选项 2
  </label>
  
  <label class="glass-radio">
    <input type="radio" name="basic" value="option3">
    <span class="radio-mark"></span>
    选项 3
  </label>
</div>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 300px;">
    <label class="glass-radio">
      <input type="radio" name="demo-basic" value="option1">
      <span class="radio-mark"></span>
      选项 1
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-basic" value="option2" checked>
      <span class="radio-mark"></span>
      选项 2
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-basic" value="option3">
      <span class="radio-mark"></span>
      选项 3
    </label>
  </div>
</div>

## 单选框尺寸

### 不同尺寸的单选框

```html
<!-- 小尺寸 -->
<label class="glass-radio small">
  <input type="radio" name="size-small" value="small">
  <span class="radio-mark"></span>
  小单选框
</label>

<!-- 标准尺寸 -->
<label class="glass-radio">
  <input type="radio" name="size-standard" value="standard">
  <span class="radio-mark"></span>
  标准单选框
</label>

<!-- 大尺寸 -->
<label class="glass-radio large">
  <input type="radio" name="size-large" value="large">
  <span class="radio-mark"></span>
  大单选框
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-radio" style="font-size: 13px;">
      <input type="radio" name="demo-size" value="small">
      <span class="radio-mark" style="width: 16px; height: 16px;"></span>
      小单选框
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-size" value="standard" checked>
      <span class="radio-mark"></span>
      标准单选框
    </label>
    
    <label class="glass-radio" style="font-size: 16px;">
      <input type="radio" name="demo-size" value="large">
      <span class="radio-mark" style="width: 24px; height: 24px;"></span>
      大单选框
    </label>
  </div>
</div>

## 单选框状态

### 各种状态的单选框

```html
<!-- 正常状态 -->
<label class="glass-radio">
  <input type="radio" name="states" value="normal">
  <span class="radio-mark"></span>
  正常状态
</label>

<!-- 选中状态 -->
<label class="glass-radio">
  <input type="radio" name="states" value="checked" checked>
  <span class="radio-mark"></span>
  选中状态
</label>

<!-- 禁用状态 -->
<label class="glass-radio">
  <input type="radio" name="disabled-group" value="disabled" disabled>
  <span class="radio-mark"></span>
  禁用状态
</label>

<!-- 禁用且选中 -->
<label class="glass-radio">
  <input type="radio" name="disabled-group" value="disabled-checked" disabled checked>
  <span class="radio-mark"></span>
  禁用且选中
</label>
```

<div class="demo-container">
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <label class="glass-radio">
      <input type="radio" name="demo-states1" value="normal">
      <span class="radio-mark"></span>
      正常状态
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-states1" value="checked" checked>
      <span class="radio-mark"></span>
      选中状态
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-states2" value="disabled" disabled>
      <span class="radio-mark"></span>
      禁用状态
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="demo-states2" value="disabled-checked" disabled checked>
      <span class="radio-mark"></span>
      禁用且选中
    </label>
  </div>
</div>

## 带描述的单选框

```html
<div class="radio-group">
  <div class="group-label">选择套餐</div>
  
  <label class="glass-radio with-description">
    <input type="radio" name="plan" value="basic">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-title">基础套餐</div>
      <div class="radio-description">适合个人使用，包含基本功能</div>
      <div class="radio-price">¥29/月</div>
    </div>
  </label>
  
  <label class="glass-radio with-description">
    <input type="radio" name="plan" value="pro">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-title">专业套餐</div>
      <div class="radio-description">适合团队协作，包含高级功能</div>
      <div class="radio-price">¥99/月</div>
    </div>
  </label>
  
  <label class="glass-radio with-description">
    <input type="radio" name="plan" value="enterprise">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-title">企业套餐</div>
      <div class="radio-description">适合大型企业，包含定制服务</div>
      <div class="radio-price">联系销售</div>
    </div>
  </label>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 20px; font-weight: 500;">选择套餐</div>
    
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <label class="glass-radio" style="display: flex; align-items: flex-start; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer; border: 2px solid transparent; transition: all 0.3s ease;">
        <input type="radio" name="demo-plan" value="basic" style="display: none;">
        <span class="radio-mark" style="margin-top: 4px; margin-right: 16px;"></span>
        <div style="flex: 1;">
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 6px; font-size: 16px;">基础套餐</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px; line-height: 1.4;">适合个人使用，包含基本功能</div>
          <div style="color: rgba(102, 126, 234, 0.9); font-weight: 600; font-size: 18px;">¥29/月</div>
        </div>
      </label>
      
      <label class="glass-radio" style="display: flex; align-items: flex-start; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer; border: 2px solid transparent; transition: all 0.3s ease;">
        <input type="radio" name="demo-plan" value="pro" checked style="display: none;">
        <span class="radio-mark" style="margin-top: 4px; margin-right: 16px;"></span>
        <div style="flex: 1;">
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 6px; font-size: 16px;">专业套餐</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px; line-height: 1.4;">适合团队协作，包含高级功能</div>
          <div style="color: rgba(102, 126, 234, 0.9); font-weight: 600; font-size: 18px;">¥99/月</div>
        </div>
      </label>
      
      <label class="glass-radio" style="display: flex; align-items: flex-start; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer; border: 2px solid transparent; transition: all 0.3s ease;">
        <input type="radio" name="demo-plan" value="enterprise" style="display: none;">
        <span class="radio-mark" style="margin-top: 4px; margin-right: 16px;"></span>
        <div style="flex: 1;">
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 6px; font-size: 16px;">企业套餐</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px; margin-bottom: 8px; line-height: 1.4;">适合大型企业，包含定制服务</div>
          <div style="color: rgba(102, 126, 234, 0.9); font-weight: 600; font-size: 18px;">联系销售</div>
        </div>
      </label>
    </div>
  </div>
</div>

## 带图标的单选框

```html
<div class="radio-group">
  <div class="group-label">选择主题</div>
  
  <label class="glass-radio icon-radio">
    <input type="radio" name="theme" value="light">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-icon">☀️</div>
      <div class="radio-text">
        <div class="radio-title">浅色主题</div>
        <div class="radio-description">明亮清爽的界面风格</div>
      </div>
    </div>
  </label>
  
  <label class="glass-radio icon-radio">
    <input type="radio" name="theme" value="dark">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-icon">🌙</div>
      <div class="radio-text">
        <div class="radio-title">深色主题</div>
        <div class="radio-description">护眼舒适的暗色界面</div>
      </div>
    </div>
  </label>
  
  <label class="glass-radio icon-radio">
    <input type="radio" name="theme" value="auto">
    <span class="radio-mark"></span>
    <div class="radio-content">
      <div class="radio-icon">🔄</div>
      <div class="radio-text">
        <div class="radio-title">自动切换</div>
        <div class="radio-description">跟随系统主题自动调整</div>
      </div>
    </div>
  </label>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 20px; font-weight: 500;">选择主题</div>
    
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <label class="glass-radio" style="display: flex; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
        <input type="radio" name="demo-theme" value="light" style="display: none;">
        <span class="radio-mark" style="margin-right: 16px;"></span>
        <div style="font-size: 24px; margin-right: 16px;">☀️</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">浅色主题</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">明亮清爽的界面风格</div>
        </div>
      </label>
      
      <label class="glass-radio" style="display: flex; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
        <input type="radio" name="demo-theme" value="dark" checked style="display: none;">
        <span class="radio-mark" style="margin-right: 16px;"></span>
        <div style="font-size: 24px; margin-right: 16px;">🌙</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">深色主题</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">护眼舒适的暗色界面</div>
        </div>
      </label>
      
      <label class="glass-radio" style="display: flex; align-items: center; padding: 16px; background: rgba(255, 255, 255, 0.05); border-radius: 12px; cursor: pointer;">
        <input type="radio" name="demo-theme" value="auto" style="display: none;">
        <span class="radio-mark" style="margin-right: 16px;"></span>
        <div style="font-size: 24px; margin-right: 16px;">🔄</div>
        <div>
          <div style="color: rgba(255, 255, 255, 0.9); font-weight: 500; margin-bottom: 4px;">自动切换</div>
          <div style="color: rgba(255, 255, 255, 0.6); font-size: 13px;">跟随系统主题自动调整</div>
        </div>
      </label>
    </div>
  </div>
</div>

## 水平布局

```html
<div class="radio-group horizontal">
  <div class="group-label">性别</div>
  <div class="radio-options">
    <label class="glass-radio">
      <input type="radio" name="gender" value="male">
      <span class="radio-mark"></span>
      男
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="gender" value="female">
      <span class="radio-mark"></span>
      女
    </label>
    
    <label class="glass-radio">
      <input type="radio" name="gender" value="other">
      <span class="radio-mark"></span>
      其他
    </label>
  </div>
</div>
```

<div class="demo-container">
  <div style="width: 100%; max-width: 400px;">
    <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 16px; font-weight: 500;">性别</div>
    
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <label class="glass-radio">
        <input type="radio" name="demo-gender" value="male">
        <span class="radio-mark"></span>
        男
      </label>
      
      <label class="glass-radio">
        <input type="radio" name="demo-gender" value="female" checked>
        <span class="radio-mark"></span>
        女
      </label>
      
      <label class="glass-radio">
        <input type="radio" name="demo-gender" value="other">
        <span class="radio-mark"></span>
        其他
      </label>
    </div>
  </div>
</div>

## 实际应用场景

### 支付方式选择

```html
<form class="payment-form">
  <div class="form-section">
    <h4 style="color: white; margin-bottom: 20px;">选择支付方式</h4>
    
    <div class="payment-methods">
      <label class="glass-radio payment-method">
        <input type="radio" name="payment" value="wechat">
        <span class="radio-mark"></span>
        <div class="payment-content">
          <div class="payment-icon">💳</div>
          <div class="payment-info">
            <div class="payment-name">微信支付</div>
            <div class="payment-desc">使用微信扫码支付</div>
          </div>
          <div class="payment-badge">推荐</div>
        </div>
      </label>
      
      <label class="glass-radio payment-method">
        <input type="radio" name="payment" value="alipay">
        <span class="radio-mark"></span>
        <div class="payment-content">
          <div class="payment-icon">📱</div>
          <div class="payment-info">
            <div class="payment-name">支付宝</div>
            <div class="payment-desc">使用支付宝账户支付</div>
          </div>
        </div>
      </label>
      
      <label class="glass-radio payment-method">
        <input type="radio" name="payment" value="bank">
        <span class="radio-mark"></span>
        <div class="payment-content">
          <div class="payment-icon">🏦</div>
          <div class="payment-info">
            <div class="payment-name">银行卡</div>
            <div class="payment-desc">使用储蓄卡或信用卡支付</div>
          </div>
        </div>
      </label>
    </div>
  </div>
</form>
```

### 配送选项

```html
<div class="shipping-options">
  <h4 style="color: white; margin-bottom: 20px;">选择配送方式</h4>
  
  <div class="shipping-methods">
    <label class="glass-radio shipping-method">
      <input type="radio" name="shipping" value="standard">
      <span class="radio-mark"></span>
      <div class="shipping-content">
        <div class="shipping-info">
          <div class="shipping-name">标准配送</div>
          <div class="shipping-time">3-5个工作日</div>
        </div>
        <div class="shipping-price">免费</div>
      </div>
    </label>
    
    <label class="glass-radio shipping-method">
      <input type="radio" name="shipping" value="express">
      <span class="radio-mark"></span>
      <div class="shipping-content">
        <div class="shipping-info">
          <div class="shipping-name">快速配送</div>
          <div class="shipping-time">1-2个工作日</div>
        </div>
        <div class="shipping-price">¥15</div>
      </div>
    </label>
    
    <label class="glass-radio shipping-method">
      <input type="radio" name="shipping" value="overnight">
      <span class="radio-mark"></span>
      <div class="shipping-content">
        <div class="shipping-info">
          <div class="shipping-name">次日达</div>
          <div class="shipping-time">次日上午送达</div>
        </div>
        <div class="shipping-price">¥30</div>
      </div>
    </label>
  </div>
</div>
```

### 问卷调查

```html
<div class="survey-form">
  <div class="survey-question">
    <h4 style="color: white; margin-bottom: 16px;">您对我们的服务满意度如何？</h4>
    
    <div class="rating-options">
      <label class="glass-radio rating-option">
        <input type="radio" name="satisfaction" value="5">
        <span class="radio-mark"></span>
        <div class="rating-content">
          <div class="rating-stars">⭐⭐⭐⭐⭐</div>
          <div class="rating-text">非常满意</div>
        </div>
      </label>
      
      <label class="glass-radio rating-option">
        <input type="radio" name="satisfaction" value="4">
        <span class="radio-mark"></span>
        <div class="rating-content">
          <div class="rating-stars">⭐⭐⭐⭐</div>
          <div class="rating-text">满意</div>
        </div>
      </label>
      
      <label class="glass-radio rating-option">
        <input type="radio" name="satisfaction" value="3">
        <span class="radio-mark"></span>
        <div class="rating-content">
          <div class="rating-stars">⭐⭐⭐</div>
          <div class="rating-text">一般</div>
        </div>
      </label>
      
      <label class="glass-radio rating-option">
        <input type="radio" name="satisfaction" value="2">
        <span class="radio-mark"></span>
        <div class="rating-content">
          <div class="rating-stars">⭐⭐</div>
          <div class="rating-text">不满意</div>
        </div>
      </label>
      
      <label class="glass-radio rating-option">
        <input type="radio" name="satisfaction" value="1">
        <span class="radio-mark"></span>
        <div class="rating-content">
          <div class="rating-stars">⭐</div>
          <div class="rating-text">非常不满意</div>
        </div>
      </label>
    </div>
  </div>
</div>
```

## JavaScript 增强功能

### 基础交互

```javascript
// 单选框组管理
class RadioGroup {
  constructor(name) {
    this.name = name;
    this.radios = document.querySelectorAll(`input[name="${name}"]`);
    this.init();
  }
  
  init() {
    this.radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.onSelectionChange(e.target.value, e.target);
        }
      });
    });
  }
  
  onSelectionChange(value, element) {
    // 触发自定义事件
    document.dispatchEvent(new CustomEvent('radioGroupChange', {
      detail: {
        name: this.name,
        value: value,
        element: element
      }
    }));
  }
  
  getValue() {
    const checked = Array.from(this.radios).find(radio => radio.checked);
    return checked ? checked.value : null;
  }
  
  setValue(value) {
    const target = Array.from(this.radios).find(radio => radio.value === value);
    if (target) {
      target.checked = true;
      target.dispatchEvent(new Event('change'));
    }
  }
  
  disable() {
    this.radios.forEach(radio => radio.disabled = true);
  }
  
  enable() {
    this.radios.forEach(radio => radio.disabled = false);
  }
}
```

### 动态价格计算

```javascript
function initPricingRadios() {
  const planRadios = document.querySelectorAll('input[name="plan"]');
  const priceDisplay = document.getElementById('selected-price');
  
  const prices = {
    basic: 29,
    pro: 99,
    enterprise: 'contact'
  };
  
  planRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        const price = prices[this.value];
        if (priceDisplay) {
          priceDisplay.textContent = typeof price === 'number' ? `¥${price}/月` : price;
        }
        
        // 更新其他相关UI
        updatePlanFeatures(this.value);
      }
    });
  });
}

function updatePlanFeatures(plan) {
  const features = {
    basic: ['基础功能', '1个用户', '5GB存储'],
    pro: ['高级功能', '10个用户', '100GB存储', '优先支持'],
    enterprise: ['全部功能', '无限用户', '无限存储', '专属客服', '定制开发']
  };
  
  const featureList = document.getElementById('plan-features');
  if (featureList && features[plan]) {
    featureList.innerHTML = features[plan]
      .map(feature => `<li>${feature}</li>`)
      .join('');
  }
}
```

### 表单验证

```javascript
function validateRadioGroup(name, errorMessage = '请选择一个选项') {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  const isSelected = Array.from(radios).some(radio => radio.checked);
  
  return {
    isValid: isSelected,
    message: isSelected ? '' : errorMessage
  };
}

// 实时验证
function initRadioValidation() {
  const radioGroups = ['payment', 'shipping', 'plan'];
  
  radioGroups.forEach(groupName => {
    const radios = document.querySelectorAll(`input[name="${groupName}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', function() {
        const validation = validateRadioGroup(groupName);
        updateValidationUI(groupName, validation);
      });
    });
  });
}

function updateValidationUI(groupName, validation) {
  const errorElement = document.getElementById(`${groupName}-error`);
  if (errorElement) {
    errorElement.textContent = validation.message;
    errorElement.style.display = validation.isValid ? 'none' : 'block';
  }
}
```

## CSS 类名

| 类名 | 说明 |
| --- | --- |
| `.glass-radio` | 基础单选框样式 |
| `.glass-radio.small` | 小尺寸单选框 |
| `.glass-radio.large` | 大尺寸单选框 |
| `.radio-mark` | 单选框标记 |
| `.radio-group` | 单选框组容器 |
| `.radio-group.horizontal` | 水平布局单选框组 |
| `.radio-content` | 单选框内容区域 |
| `.radio-title` | 单选框标题 |
| `.radio-description` | 单选框描述 |
| `.radio-icon` | 单选框图标 |

## 自定义样式

通过CSS变量自定义单选框外观：

```css
:root {
  --radio-size: 20px;
  --radio-bg: rgba(255, 255, 255, 0.1);
  --radio-border: rgba(255, 255, 255, 0.3);
  --radio-checked-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --radio-checked-border: rgba(102, 126, 234, 0.8);
  --radio-dot-color: white;
  --radio-text-color: rgba(255, 255, 255, 0.9);
  --radio-disabled-opacity: 0.5;
}
```

## 可访问性

- 支持键盘导航（Tab、Arrow键、Space键）
- 支持屏幕阅读器
- 提供清晰的焦点指示器
- 支持 ARIA 属性

```html
<fieldset>
  <legend>选择您的偏好</legend>
  <label class="glass-radio">
    <input type="radio" name="preference" value="option1" aria-describedby="option1-desc">
    <span class="radio-mark"></span>
    选项 1
  </label>
  <div id="option1-desc" class="sr-only">选项 1 的详细说明</div>
</fieldset>
```

## 注意事项

- 为单选框组提供清晰的分组标签
- 确保选项之间互斥的逻辑清晰
- 在移动设备上确保触摸区域足够大
- 为复杂选项提供足够的说明文本
- 考虑使用默认选中的选项以提高用户体验

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