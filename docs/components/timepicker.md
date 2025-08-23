# 时间选择器 TimePicker

时间选择器是用于选择时间的输入组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础时间选择器

```html
<div class="glass-timepicker">
  <input type="time" class="glass-input" value="12:00">
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-timepicker">
    <input type="time" class="glass-input" value="12:00">
  </div>
</div>

### 带标签的时间选择器

```html
<div class="form-group">
  <label class="form-label">选择时间</label>
  <div class="glass-timepicker">
    <input type="time" class="glass-input" value="09:30">
  </div>
</div>
```

### 自定义时间选择器

```html
<div class="glass-timepicker custom">
  <div class="timepicker-input">
    <input type="text" class="glass-input" placeholder="选择时间" readonly>
    <span class="timepicker-icon">🕐</span>
  </div>
  <div class="timepicker-dropdown">
    <div class="time-columns">
      <div class="time-column hours">
        <div class="time-item active">09</div>
        <div class="time-item">10</div>
        <div class="time-item">11</div>
        <div class="time-item">12</div>
      </div>
      <div class="time-separator">:</div>
      <div class="time-column minutes">
        <div class="time-item">00</div>
        <div class="time-item">15</div>
        <div class="time-item active">30</div>
        <div class="time-item">45</div>
      </div>
    </div>
  </div>
</div>
```

## 时间格式

### 12小时制

```html
<div class="glass-timepicker format-12">
  <div class="timepicker-input">
    <input type="text" class="glass-input" value="2:30 PM" readonly>
    <span class="timepicker-icon">🕐</span>
  </div>
  <div class="timepicker-dropdown">
    <div class="time-columns">
      <div class="time-column hours">
        <div class="time-item">01</div>
        <div class="time-item active">02</div>
        <div class="time-item">03</div>
      </div>
      <div class="time-separator">:</div>
      <div class="time-column minutes">
        <div class="time-item active">30</div>
        <div class="time-item">45</div>
      </div>
      <div class="time-column period">
        <div class="time-item">AM</div>
        <div class="time-item active">PM</div>
      </div>
    </div>
  </div>
</div>
```

### 24小时制

```html
<div class="glass-timepicker format-24">
  <div class="timepicker-input">
    <input type="text" class="glass-input" value="14:30" readonly>
    <span class="timepicker-icon">🕐</span>
  </div>
  <div class="timepicker-dropdown">
    <div class="time-columns">
      <div class="time-column hours">
        <div class="time-item">13</div>
        <div class="time-item active">14</div>
        <div class="time-item">15</div>
      </div>
      <div class="time-separator">:</div>
      <div class="time-column minutes">
        <div class="time-item active">30</div>
        <div class="time-item">45</div>
      </div>
    </div>
  </div>
</div>
```

## 时间选择器状态

### 禁用状态

```html
<div class="glass-timepicker disabled">
  <input type="time" class="glass-input" value="12:00" disabled>
</div>
```

### 只读状态

```html
<div class="glass-timepicker readonly">
  <input type="time" class="glass-input" value="12:00" readonly>
</div>
```

## CSS 类名

### 基础类名

- `.glass-timepicker` - 时间选择器容器
- `.timepicker-input` - 输入区域
- `.timepicker-icon` - 时间图标
- `.timepicker-dropdown` - 下拉面板
- `.time-columns` - 时间列容器
- `.time-column` - 时间列
- `.time-item` - 时间项
- `.time-separator` - 时间分隔符

### 修饰类名

**格式修饰符**
- `.format-12` - 12小时制
- `.format-24` - 24小时制
- `.custom` - 自定义样式

**状态修饰符**
- `.active` - 选中状态
- `.disabled` - 禁用状态
- `.readonly` - 只读状态

## JavaScript 增强

### 时间选择器组件

```javascript
class TimePicker {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      format: '24', // 12 or 24
      step: 15, // 分钟步长
      minTime: null,
      maxTime: null,
      defaultTime: null,
      ...options
    };
    
    this.isOpen = false;
    this.selectedTime = null;
    this.init();
  }
  
  init() {
    this.createStructure();
    this.bindEvents();
    this.updateDisplay();
  }
  
  createStructure() {
    this.input = this.element.querySelector('input') || this.createElement('input');
    this.input.readOnly = true;
    this.input.placeholder = '选择时间';
    
    this.dropdown = this.createElement('div', 'timepicker-dropdown');
    this.createTimeColumns();
    
    this.element.appendChild(this.dropdown);
  }
  
  createElement(tag, className = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
  }
  
  createTimeColumns() {
    const columns = this.createElement('div', 'time-columns');
    
    // 小时列
    const hourColumn = this.createElement('div', 'time-column hours');
    this.createHourItems(hourColumn);
    columns.appendChild(hourColumn);
    
    // 分隔符
    const separator = this.createElement('div', 'time-separator');
    separator.textContent = ':';
    columns.appendChild(separator);
    
    // 分钟列
    const minuteColumn = this.createElement('div', 'time-column minutes');
    this.createMinuteItems(minuteColumn);
    columns.appendChild(minuteColumn);
    
    // 12小时制的AM/PM
    if (this.options.format === '12') {
      const periodColumn = this.createElement('div', 'time-column period');
      this.createPeriodItems(periodColumn);
      columns.appendChild(periodColumn);
    }
    
    this.dropdown.appendChild(columns);
  }
  
  createHourItems(container) {
    const hours = this.options.format === '12' ? 
      Array.from({length: 12}, (_, i) => (i + 1).toString().padStart(2, '0')) :
      Array.from({length: 24}, (_, i) => i.toString().padStart(2, '0'));
    
    hours.forEach(hour => {
      const item = this.createElement('div', 'time-item');
      item.textContent = hour;
      item.dataset.value = hour;
      container.appendChild(item);
    });
  }
  
  createMinuteItems(container) {
    const step = this.options.step;
    for (let i = 0; i < 60; i += step) {
      const minute = i.toString().padStart(2, '0');
      const item = this.createElement('div', 'time-item');
      item.textContent = minute;
      item.dataset.value = minute;
      container.appendChild(item);
    }
  }
  
  createPeriodItems(container) {
    ['AM', 'PM'].forEach(period => {
      const item = this.createElement('div', 'time-item');
      item.textContent = period;
      item.dataset.value = period;
      container.appendChild(item);
    });
  }
  
  bindEvents() {
    this.input.addEventListener('click', () => this.toggle());
    
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.close();
      }
    });
    
    this.dropdown.addEventListener('click', (e) => {
      if (e.target.classList.contains('time-item')) {
        this.selectTimeItem(e.target);
      }
    });
  }
  
  selectTimeItem(item) {
    const column = item.parentNode;
    
    // 移除同列其他选中状态
    column.querySelectorAll('.time-item').forEach(i => {
      i.classList.remove('active');
    });
    
    // 设置当前选中
    item.classList.add('active');
    
    this.updateSelectedTime();
  }
  
  updateSelectedTime() {
    const hourItem = this.dropdown.querySelector('.hours .time-item.active');
    const minuteItem = this.dropdown.querySelector('.minutes .time-item.active');
    const periodItem = this.dropdown.querySelector('.period .time-item.active');
    
    if (hourItem && minuteItem) {
      let hour = hourItem.dataset.value;
      const minute = minuteItem.dataset.value;
      const period = periodItem ? periodItem.dataset.value : '';
      
      this.selectedTime = {
        hour: hour,
        minute: minute,
        period: period
      };
      
      this.updateDisplay();
      this.triggerChange();
    }
  }
  
  updateDisplay() {
    if (this.selectedTime) {
      const { hour, minute, period } = this.selectedTime;
      const timeString = this.options.format === '12' ? 
        `${hour}:${minute} ${period}` : 
        `${hour}:${minute}`;
      
      this.input.value = timeString;
    }
  }
  
  triggerChange() {
    this.element.dispatchEvent(new CustomEvent('time-change', {
      detail: {
        time: this.selectedTime,
        timeString: this.input.value
      }
    }));
  }
  
  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.dropdown.classList.add('show');
  }
  
  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.dropdown.classList.remove('show');
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  setValue(timeString) {
    // 解析时间字符串并设置值
    const parts = timeString.match(/(\d{1,2}):(\d{2})(\s*(AM|PM))?/i);
    if (parts) {
      this.selectedTime = {
        hour: parts[1].padStart(2, '0'),
        minute: parts[2],
        period: parts[4] || ''
      };
      this.updateDisplay();
      this.updateSelection();
    }
  }
  
  updateSelection() {
    if (!this.selectedTime) return;
    
    const { hour, minute, period } = this.selectedTime;
    
    // 更新小时选择
    const hourItems = this.dropdown.querySelectorAll('.hours .time-item');
    hourItems.forEach(item => {
      item.classList.toggle('active', item.dataset.value === hour);
    });
    
    // 更新分钟选择
    const minuteItems = this.dropdown.querySelectorAll('.minutes .time-item');
    minuteItems.forEach(item => {
      item.classList.toggle('active', item.dataset.value === minute);
    });
    
    // 更新AM/PM选择
    if (this.options.format === '12') {
      const periodItems = this.dropdown.querySelectorAll('.period .time-item');
      periodItems.forEach(item => {
        item.classList.toggle('active', item.dataset.value === period);
      });
    }
  }
  
  getValue() {
    return this.input.value;
  }
}

// 使用示例
document.querySelectorAll('.glass-timepicker.custom').forEach(element => {
  new TimePicker(element, {
    format: '24',
    step: 15
  });
});
```

### 简单时间选择器

```javascript
function initTimePickers() {
  document.querySelectorAll('.glass-timepicker').forEach(timepicker => {
    const input = timepicker.querySelector('input[type="time"]');
    if (!input) return;
    
    // 添加变化事件
    input.addEventListener('change', function() {
      const time = this.value;
      console.log('选择的时间:', time);
      
      // 触发自定义事件
      timepicker.dispatchEvent(new CustomEvent('time-select', {
        detail: { time: time }
      }));
    });
    
    // 添加焦点样式
    input.addEventListener('focus', function() {
      timepicker.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      timepicker.classList.remove('focused');
    });
  });
}

// 格式化时间显示
function formatTime(timeString, format = '24') {
  if (!timeString) return '';
  
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  
  if (format === '12') {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  }
  
  return `${hours}:${minutes}`;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initTimePickers);
```

## 应用场景

### 预约时间选择

```html
<form class="glass-form">
  <div class="form-group">
    <label class="form-label">预约日期</label>
    <input type="date" class="glass-input">
  </div>
  
  <div class="form-group">
    <label class="form-label">预约时间</label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" min="09:00" max="18:00" step="1800">
    </div>
  </div>
  
  <button type="submit" class="glass-button primary">确认预约</button>
</form>
```

### 工作时间设置

```html
<div class="work-schedule">
  <h3>工作时间设置</h3>
  
  <div class="schedule-item">
    <label class="form-label">上班时间</label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="09:00">
    </div>
  </div>
  
  <div class="schedule-item">
    <label class="form-label">下班时间</label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="18:00">
    </div>
  </div>
  
  <div class="schedule-item">
    <label class="form-label">午休开始</label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="12:00">
    </div>
  </div>
  
  <div class="schedule-item">
    <label class="form-label">午休结束</label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="13:00">
    </div>
  </div>
</div>
```

### 提醒时间设置

```html
<div class="reminder-settings">
  <h3>设置提醒</h3>
  
  <div class="form-group">
    <label class="form-label">
      <input type="checkbox" class="glass-checkbox"> 
      每日提醒
    </label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="08:00">
    </div>
  </div>
  
  <div class="form-group">
    <label class="form-label">
      <input type="checkbox" class="glass-checkbox">
      会议提醒
    </label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="14:30">
    </div>
  </div>
  
  <div class="form-group">
    <label class="form-label">
      <input type="checkbox" class="glass-checkbox">
      下班提醒
    </label>
    <div class="glass-timepicker">
      <input type="time" class="glass-input" value="17:30">
    </div>
  </div>
</div>
```