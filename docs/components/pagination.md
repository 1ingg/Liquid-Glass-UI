# 分页 Pagination

分页是用于分割大量数据的导航组件。

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1ing/liquid-glass-ui@latest/liquid-glass-ui.css">

## 基础用法

### 基础分页

```html
<div class="glass-pagination">
  <button class="pagination-item prev" disabled>上一页</button>
  <button class="pagination-item active">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item">4</button>
  <button class="pagination-item">5</button>
  <button class="pagination-item next">下一页</button>
</div>
```

**预览效果：**
<div style="padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; margin: 12px 0;">
  <div class="glass-pagination">
    <button class="pagination-item prev" disabled>上一页</button>
    <button class="pagination-item active">1</button>
    <button class="pagination-item">2</button>
    <button class="pagination-item">3</button>
    <button class="pagination-item">4</button>
    <button class="pagination-item">5</button>
    <button class="pagination-item next">下一页</button>
  </div>
</div>

### 简洁分页

```html
<div class="glass-pagination simple">
  <button class="pagination-item prev">‹</button>
  <span class="pagination-info">第 1 页，共 10 页</span>
  <button class="pagination-item next">›</button>
</div>
```

## 分页类型

### 带省略号的分页

```html
<div class="glass-pagination">
  <button class="pagination-item prev">上一页</button>
  <button class="pagination-item">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item active">3</button>
  <button class="pagination-item">4</button>
  <button class="pagination-item">5</button>
  <span class="pagination-ellipsis">...</span>
  <button class="pagination-item">20</button>
  <button class="pagination-item next">下一页</button>
</div>
```

### 迷你分页

```html
<div class="glass-pagination mini">
  <button class="pagination-item prev">‹</button>
  <button class="pagination-item">1</button>
  <button class="pagination-item active">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item next">›</button>
</div>
```

## 分页尺寸

```html
<!-- 小尺寸 -->
<div class="glass-pagination small">
  <button class="pagination-item prev">上一页</button>
  <button class="pagination-item active">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item next">下一页</button>
</div>

<!-- 默认尺寸 -->
<div class="glass-pagination">
  <button class="pagination-item prev">上一页</button>
  <button class="pagination-item active">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item next">下一页</button>
</div>

<!-- 大尺寸 -->
<div class="glass-pagination large">
  <button class="pagination-item prev">上一页</button>
  <button class="pagination-item active">1</button>
  <button class="pagination-item">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item next">下一页</button>
</div>
```

## CSS 类名

### 基础类名

- `.glass-pagination` - 分页容器
- `.pagination-item` - 分页项
- `.pagination-info` - 分页信息
- `.pagination-ellipsis` - 省略号

### 修饰类名

**类型修饰符**
- `.simple` - 简洁样式
- `.mini` - 迷你样式

**尺寸修饰符**
- `.small` - 小尺寸
- `.large` - 大尺寸

**状态修饰符**
- `.active` - 当前页
- `.prev` - 上一页按钮
- `.next` - 下一页按钮
- `:disabled` - 禁用状态

## JavaScript 增强

### 分页控制

```javascript
class Pagination {
  constructor(container, options = {}) {
    this.container = container;
    this.currentPage = options.currentPage || 1;
    this.totalPages = options.totalPages || 1;
    this.showPages = options.showPages || 5;
    this.onChange = options.onChange || (() => {});
    
    this.render();
    this.bindEvents();
  }
  
  render() {
    const pages = this.generatePages();
    this.container.innerHTML = pages;
  }
  
  generatePages() {
    let html = '';
    
    // 上一页按钮
    html += `<button class="pagination-item prev" ${this.currentPage === 1 ? 'disabled' : ''}>上一页</button>`;
    
    // 页码按钮
    const startPage = Math.max(1, this.currentPage - Math.floor(this.showPages / 2));
    const endPage = Math.min(this.totalPages, startPage + this.showPages - 1);
    
    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="pagination-item ${i === this.currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    // 省略号和最后一页
    if (endPage < this.totalPages) {
      if (endPage < this.totalPages - 1) {
        html += '<span class="pagination-ellipsis">...</span>';
      }
      html += `<button class="pagination-item" data-page="${this.totalPages}">${this.totalPages}</button>`;
    }
    
    // 下一页按钮
    html += `<button class="pagination-item next" ${this.currentPage === this.totalPages ? 'disabled' : ''}>下一页</button>`;
    
    return html;
  }
  
  bindEvents() {
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('pagination-item') && !e.target.disabled) {
        if (e.target.classList.contains('prev')) {
          this.goToPage(this.currentPage - 1);
        } else if (e.target.classList.contains('next')) {
          this.goToPage(this.currentPage + 1);
        } else if (e.target.dataset.page) {
          this.goToPage(parseInt(e.target.dataset.page));
        }
      }
    });
  }
  
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.render();
      this.bindEvents();
      this.onChange(page);
    }
  }
}

// 使用示例
const paginationContainer = document.querySelector('.glass-pagination');
const pagination = new Pagination(paginationContainer, {
  currentPage: 1,
  totalPages: 20,
  showPages: 5,
  onChange: (page) => {
    console.log('切换到第', page, '页');
  }
});
```

### 简单分页控制

```javascript
function initSimplePagination(element, currentPage, totalPages) {
  const prevBtn = element.querySelector('.prev');
  const nextBtn = element.querySelector('.next');
  const info = element.querySelector('.pagination-info');
  
  function updateState() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    info.textContent = `第 ${currentPage} 页，共 ${totalPages} 页`;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateState();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateState();
    }
  });
  
  updateState();
}
```

## 应用场景

### 数据表格

```html
<div class="data-table">
  <table class="glass-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>邮箱</th>
        <th>状态</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>张三</td>
        <td>zhang@example.com</td>
        <td>活跃</td>
      </tr>
      <!-- 更多行... -->
    </tbody>
  </table>
  
  <div class="glass-pagination">
    <button class="pagination-item prev">上一页</button>
    <button class="pagination-item active">1</button>
    <button class="pagination-item">2</button>
    <button class="pagination-item">3</button>
    <button class="pagination-item">4</button>
    <button class="pagination-item">5</button>
    <button class="pagination-item next">下一页</button>
  </div>
</div>
```

### 文章列表

```html
<div class="article-list">
  <div class="article-item">
    <h3>文章标题一</h3>
    <p>文章摘要内容...</p>
  </div>
  <div class="article-item">
    <h3>文章标题二</h3>
    <p>文章摘要内容...</p>
  </div>
  <!-- 更多文章... -->
  
  <div class="glass-pagination large">
    <button class="pagination-item prev">上一页</button>
    <button class="pagination-item">1</button>
    <button class="pagination-item active">2</button>
    <button class="pagination-item">3</button>
    <span class="pagination-ellipsis">...</span>
    <button class="pagination-item">10</button>
    <button class="pagination-item next">下一页</button>
  </div>
</div>
```

### 移动端分页

```html
<div class="mobile-pagination">
  <div class="glass-pagination simple">
    <button class="pagination-item prev">‹</button>
    <span class="pagination-info">3 / 15</span>
    <button class="pagination-item next">›</button>
  </div>
</div>
```