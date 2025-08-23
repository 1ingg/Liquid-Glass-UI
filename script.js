// Background parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-container');
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
});

// Button interaction effects
document.addEventListener('DOMContentLoaded', function() {
    // Button click animations
    const buttons = document.querySelectorAll('.glass-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Input focus effects
    const inputs = document.querySelectorAll('.glass-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize components
    initializeTabs();
    initializeSliders();
    initializeModal();
    initializeNotifications();
    initializeCustomSelects();
    initializeTimePickers();
    initializeTextAreas();
    
    // Add ripple effect styles
    addRippleStyles();
});

// Tabs functionality
function initializeTabs() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabItems.forEach(item => item.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            if (tabPanes[index]) {
                tabPanes[index].classList.add('active');
            }
        });
    });
}

// Slider functionality
function initializeSliders() {
    const sliders = document.querySelectorAll('.slider-input');
    
    sliders.forEach(slider => {
        const updateLabel = () => {
            const value = slider.value;
            const label = slider.closest('.slider-group').querySelector('.form-label');
            if (label) {
                const labelText = label.textContent.split(':')[0];
                label.textContent = `${labelText}: ${value}%`;
            }
        };
        
        slider.addEventListener('input', updateLabel);
        updateLabel(); // Initialize
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('glassModal');
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

function openModal() {
    const modal = document.getElementById('glassModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('glassModal');
    
    // Start fade out animation
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.style.opacity = '';
        modal.style.transition = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Notification functionality
function initializeNotifications() {
    // Hide notification initially
    const notification = document.querySelector('.glass-notification');
    if (notification) {
        notification.style.display = 'none';
    }
    
    // Close button functionality
    const closeButtons = document.querySelectorAll('.notification-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.glass-notification').style.display = 'none';
        });
    });
}

function showNotification(type) {
    const notification = document.querySelector('.glass-notification');
    
    // Remove existing type classes
    notification.classList.remove('success', 'warning', 'error');
    
    // Add the new type class
    notification.classList.add(type);
    
    // Update content based on type
    const title = notification.querySelector('.notification-title');
    const message = notification.querySelector('.notification-message');
    
    switch(type) {
        case 'success':
            title.textContent = '成功';
            message.textContent = '操作完成';
            break;
        case 'warning':
            title.textContent = '警告';
            message.textContent = '请注意';
            break;
        case 'error':
            title.textContent = '错误';
            message.textContent = '操作失败';
            break;
    }
    
    // Show notification
    notification.style.display = 'flex';
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        if (notification.style.display !== 'none') {
            notification.style.display = 'none';
        }
    }, 3000);
}

// Add dynamic ripple effect styles
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .glass-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Switch toggle functionality
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox' && e.target.closest('.glass-switch')) {
        const switchElement = e.target.closest('.glass-switch');
        const label = switchElement.querySelector('.switch-label');
        
        // Add visual feedback
        switchElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
            switchElement.style.transform = 'scale(1)';
        }, 150);
        
        // Optional: Add haptic feedback for mobile
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
});

// Progress bar animation
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    const circularProgress = document.querySelectorAll('.progress-ring-fill');
    
    // Animate linear progress bars
    progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        if (progress) {
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = progress + '%';
            }, 300);
        }
    });
    
    // Animate circular progress bars
    circularProgress.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        if (progress) {
            const circumference = 2 * Math.PI * 52; // radius = 52
            const offset = circumference - (progress / 100) * circumference;
            
            circle.style.strokeDashoffset = circumference;
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 300);
        }
    });
}

// Initialize progress bar animation when component is visible
function observeProgressBars() {
    const progressContainers = document.querySelectorAll('.progress-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                entry.target.setAttribute('data-animated', 'true');
                
                // Animate linear progress
                const progressFill = entry.target.querySelector('.progress-fill');
                if (progressFill) {
                    const progress = progressFill.getAttribute('data-progress');
                    progressFill.style.width = '0%';
                    setTimeout(() => {
                        progressFill.style.width = progress + '%';
                    }, 300);
                }
                
                // Animate circular progress
                const circularProgress = entry.target.querySelector('.progress-ring-fill');
                if (circularProgress) {
                    const progress = circularProgress.getAttribute('data-progress');
                    const circumference = 2 * Math.PI * 52;
                    const offset = circumference - (progress / 100) * circumference;
                    
                    circularProgress.style.strokeDashoffset = circumference;
                    setTimeout(() => {
                        circularProgress.style.strokeDashoffset = offset;
                    }, 500);
                }
            }
        });
    });
    
    progressContainers.forEach(container => observer.observe(container));
}

// Dynamic progress update function
function updateProgress(selector, newProgress) {
    const progressElement = document.querySelector(selector);
    if (!progressElement) return;
    
    if (progressElement.classList.contains('progress-fill')) {
        // Linear progress
        progressElement.style.width = newProgress + '%';
        progressElement.setAttribute('data-progress', newProgress);
        
        // Update label if exists
        const label = progressElement.closest('.progress-container').querySelector('.progress-label');
        if (label) {
            const labelText = label.textContent.split(' - ')[0];
            label.textContent = `${labelText} - ${newProgress}%`;
        }
    } else if (progressElement.classList.contains('progress-ring-fill')) {
        // Circular progress
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (newProgress / 100) * circumference;
        progressElement.style.strokeDashoffset = offset;
        progressElement.setAttribute('data-progress', newProgress);
        
        // Update percentage text
        const percentText = progressElement.closest('.glass-progress').querySelector('.progress-percent');
        if (percentText) {
            percentText.textContent = newProgress + '%';
        }
        
        // Update label if exists
        const label = progressElement.closest('.progress-container').querySelector('.progress-label');
        if (label) {
            const labelText = label.textContent.split(' - ')[0];
            label.textContent = `${labelText} - ${newProgress}%`;
        }
    }
}

// Navigation active state management
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-item')) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        e.target.classList.add('active');
    }
});

// Page breadcrumb navigation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('breadcrumb-item') && !e.target.classList.contains('active')) {
        e.preventDefault();
        
        // Simple breadcrumb navigation simulation
        const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
        const clickedIndex = Array.from(breadcrumbItems).indexOf(e.target);
        
        // Remove items after clicked item
        for (let i = clickedIndex + 1; i < breadcrumbItems.length; i++) {
            if (!breadcrumbItems[i].classList.contains('active')) {
                breadcrumbItems[i].style.opacity = '0.5';
            }
        }
        
        // Add visual feedback
        e.target.style.color = 'rgba(74, 144, 226, 0.8)';
        setTimeout(() => {
            e.target.style.color = '';
        }, 200);
    }
});

// Initialize component animations on page load
window.addEventListener('load', () => {
    observeProgressBars();
    
    // Add subtle entrance animations to components
    const components = document.querySelectorAll('.component-showcase');
    components.forEach((component, index) => {
        component.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });
});

// Checkbox and radio animations
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox' || e.target.type === 'radio') {
        const container = e.target.closest('.glass-checkbox, .glass-radio');
        if (container) {
            container.style.transform = 'scale(0.95)';
            setTimeout(() => {
                container.style.transform = 'scale(1)';
            }, 150);
        }
    }
});

// Smooth scroll for any internal navigation
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states for interactive elements
function addLoadingState(element) {
    const originalText = element.textContent;
    element.textContent = '加载中...';
    element.disabled = true;
    element.style.opacity = '0.7';
    
    return function removeLoadingState() {
        element.textContent = originalText;
        element.disabled = false;
        element.style.opacity = '1';
    };
}

// Pagination functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('page-btn') && !e.target.disabled) {
        // Remove active class from all page buttons
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button (if it's a number)
        if (!isNaN(e.target.textContent)) {
            e.target.classList.add('active');
        }
        
        // Add loading simulation
        const removeLoading = addLoadingState(e.target);
        setTimeout(removeLoading, 800);
    }
});

// Enhanced hover effects with sound (optional)
function initializeAudioFeedback() {
    let audioContext;
    
    const playHoverSound = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };
    
    // Add subtle sound to button hovers (opt-in)
    document.querySelectorAll('.glass-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (button.dataset.sound === 'enabled') {
                playHoverSound();
            }
        });
    });
}

// Custom Select functionality
function initializeCustomSelects() {
    const selects = document.querySelectorAll('.glass-select');
    
    selects.forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');
        const valueElement = select.querySelector('.select-value');
        const options = select.querySelectorAll('.select-option');
        const placeholder = select.getAttribute('data-placeholder') || '请选择';
        
        // Set initial state
        valueElement.textContent = placeholder;
        
        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllSelects();
            toggleSelect(select);
        });
        
        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                selectOption(select, option);
            });
            
            // Add hover sound effect
            option.addEventListener('mouseenter', () => {
                option.style.transform = 'translateX(4px) scale(1.02)';
            });
            
            option.addEventListener('mouseleave', () => {
                option.style.transform = '';
            });
        });
        
        // Keyboard navigation
        select.addEventListener('keydown', (e) => {
            handleSelectKeyboard(e, select);
        });
        
        // Make select focusable
        select.setAttribute('tabindex', '0');
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', closeAllSelects);
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllSelects();
        }
    });
}

function toggleSelect(select) {
    const isActive = select.classList.contains('active');
    
    if (isActive) {
        closeSelect(select);
    } else {
        openSelect(select);
    }
}

function openSelect(select) {
    select.classList.add('active');
    select.focus();
    
    // Add opening animation
    const dropdown = select.querySelector('.select-dropdown');
    dropdown.style.transform = 'translateY(-10px) scale(0.95)';
    dropdown.style.opacity = '0';
    
    setTimeout(() => {
        dropdown.style.transform = 'translateY(0) scale(1)';
        dropdown.style.opacity = '1';
    }, 10);
    
    // Scroll to selected option if any
    const selectedOption = select.querySelector('.select-option.selected');
    if (selectedOption) {
        selectedOption.scrollIntoView({ block: 'nearest' });
    }
}

function closeSelect(select) {
    const dropdown = select.querySelector('.select-dropdown');
    
    dropdown.style.transform = 'translateY(-10px) scale(0.95)';
    dropdown.style.opacity = '0';
    
    setTimeout(() => {
        select.classList.remove('active');
    }, 200);
}

function closeAllSelects() {
    const activeSelects = document.querySelectorAll('.glass-select.active');
    activeSelects.forEach(closeSelect);
}

function selectOption(select, option) {
    const valueElement = select.querySelector('.select-value');
    const options = select.querySelectorAll('.select-option');
    const optionText = option.querySelector('.option-text').textContent;
    const optionValue = option.getAttribute('data-value');
    
    // Remove previous selection
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Mark as selected
    option.classList.add('selected');
    
    // Update display value
    valueElement.textContent = optionText;
    valueElement.style.color = 'rgba(255, 255, 255, 0.95)';
    
    // Store selected value
    select.setAttribute('data-value', optionValue);
    
    // Add selection animation
    option.style.transform = 'translateX(4px) scale(1.05)';
    option.style.background = 'rgba(74, 144, 226, 0.3)';
    
    setTimeout(() => {
        option.style.transform = '';
        option.style.background = '';
    }, 200);
    
    // Close dropdown
    closeSelect(select);
    
    // Trigger custom event
    const changeEvent = new CustomEvent('selectChange', {
        detail: {
            value: optionValue,
            text: optionText,
            select: select
        }
    });
    select.dispatchEvent(changeEvent);
    
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function handleSelectKeyboard(e, select) {
    const options = Array.from(select.querySelectorAll('.select-option'));
    const currentSelected = select.querySelector('.select-option.selected');
    const isOpen = select.classList.contains('active');
    
    let currentIndex = currentSelected ? options.indexOf(currentSelected) : -1;
    
    switch (e.key) {
        case 'Enter':
        case ' ':
            e.preventDefault();
            if (!isOpen) {
                openSelect(select);
            } else if (currentIndex >= 0) {
                selectOption(select, options[currentIndex]);
            }
            break;
            
        case 'ArrowDown':
            e.preventDefault();
            if (!isOpen) {
                openSelect(select);
            } else {
                currentIndex = Math.min(currentIndex + 1, options.length - 1);
                focusOption(options[currentIndex]);
            }
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            if (isOpen) {
                currentIndex = Math.max(currentIndex - 1, 0);
                focusOption(options[currentIndex]);
            }
            break;
            
        case 'Escape':
            e.preventDefault();
            closeSelect(select);
            break;
            
        case 'Home':
            e.preventDefault();
            if (isOpen) {
                focusOption(options[0]);
            }
            break;
            
        case 'End':
            e.preventDefault();
            if (isOpen) {
                focusOption(options[options.length - 1]);
            }
            break;
    }
}

function focusOption(option) {
    // Remove previous focus
    const select = option.closest('.glass-select');
    const options = select.querySelectorAll('.select-option');
    options.forEach(opt => opt.classList.remove('focused'));
    
    // Add focus to current option
    option.classList.add('focused');
    option.scrollIntoView({ block: 'nearest' });
    
    // Visual feedback
    option.style.background = 'rgba(255, 255, 255, 0.15)';
    option.style.transform = 'translateX(2px)';
    
    setTimeout(() => {
        option.style.background = '';
        option.style.transform = '';
    }, 200);
}

// Utility function to get selected value
function getSelectValue(selector) {
    const select = document.querySelector(selector);
    return select ? select.getAttribute('data-value') : null;
}

// Utility function to set selected value
function setSelectValue(selector, value) {
    const select = document.querySelector(selector);
    if (!select) return;
    
    const option = select.querySelector(`[data-value="${value}"]`);
    if (option) {
        selectOption(select, option);
    }
}

// Add some CSS for focused state
function addSelectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .select-option.focused {
            background: rgba(255, 255, 255, 0.08) !important;
            border: 1px solid rgba(74, 144, 226, 0.3);
        }
        
        .glass-select:focus {
            outline: none;
        }
        
        @media (max-width: 768px) {
            .select-dropdown {
                max-height: 200px;
            }
            
            .select-option {
                padding: 14px 16px;
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize select styles
document.addEventListener('DOMContentLoaded', addSelectStyles);

// Time Picker functionality
function initializeTimePickers() {
    const timePickers = document.querySelectorAll('.glass-time-picker');
    
    timePickers.forEach(picker => {
        const timeDisplay = picker.querySelector('.time-display');
        const timePanel = picker.querySelector('.time-panel');
        const timeValue = picker.querySelector('.time-value');
        const hourOptions = picker.querySelector('.hour-options');
        const minuteOptions = picker.querySelector('.minute-options');
        
        // Generate hour options (00-23)
        for (let i = 0; i < 24; i++) {
            const hour = i.toString().padStart(2, '0');
            const option = document.createElement('div');
            option.className = 'time-option';
            option.textContent = hour;
            option.addEventListener('click', () => selectTime(picker, hour, null));
            hourOptions.appendChild(option);
        }
        
        // Generate minute options (00-59, step 5)
        for (let i = 0; i < 60; i += 5) {
            const minute = i.toString().padStart(2, '0');
            const option = document.createElement('div');
            option.className = 'time-option';
            option.textContent = minute;
            option.addEventListener('click', () => selectTime(picker, null, minute));
            minuteOptions.appendChild(option);
        }
        
        // Set initial selected options
        const initialTime = picker.dataset.time || '12:00';
        updateSelectedTime(picker, initialTime);
        
        // Toggle time panel
        timeDisplay.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleTimePanel(picker);
        });
    });
    
    // Close time panels when clicking outside
    document.addEventListener('click', function() {
        timePickers.forEach(picker => {
            closeTimePanel(picker);
        });
    });
}

function toggleTimePanel(picker) {
    const timePanel = picker.querySelector('.time-panel');
    const isActive = picker.classList.contains('active');
    
    // Close all other panels
    document.querySelectorAll('.glass-time-picker').forEach(p => {
        if (p !== picker) closeTimePanel(p);
    });
    
    if (isActive) {
        closeTimePanel(picker);
    } else {
        openTimePanel(picker);
    }
}

function openTimePanel(picker) {
    const timePanel = picker.querySelector('.time-panel');
    picker.classList.add('active');
    timePanel.style.display = 'flex';
    
    setTimeout(() => {
        timePanel.classList.add('show');
    }, 10);
}

function closeTimePanel(picker) {
    const timePanel = picker.querySelector('.time-panel');
    picker.classList.remove('active');
    timePanel.classList.remove('show');
    
    setTimeout(() => {
        timePanel.style.display = 'none';
    }, 300);
}

function selectTime(picker, hour, minute) {
    const timeValue = picker.querySelector('.time-value');
    const currentTime = timeValue.textContent.split(':');
    
    const newHour = hour !== null ? hour : currentTime[0];
    const newMinute = minute !== null ? minute : currentTime[1];
    const newTime = `${newHour}:${newMinute}`;
    
    updateSelectedTime(picker, newTime);
    picker.dataset.time = newTime;
}

function updateSelectedTime(picker, time) {
    const timeValue = picker.querySelector('.time-value');
    const [hour, minute] = time.split(':');
    
    timeValue.textContent = time;
    
    // Update selected options
    const hourOptions = picker.querySelectorAll('.hour-options .time-option');
    const minuteOptions = picker.querySelectorAll('.minute-options .time-option');
    
    hourOptions.forEach(option => {
        option.classList.toggle('selected', option.textContent === hour);
    });
    
    minuteOptions.forEach(option => {
        option.classList.toggle('selected', option.textContent === minute);
    });
    
    // Scroll selected options into view
    const selectedHour = picker.querySelector('.hour-options .time-option.selected');
    const selectedMinute = picker.querySelector('.minute-options .time-option.selected');
    
    if (selectedHour) selectedHour.scrollIntoView({ block: 'center', behavior: 'smooth' });
    if (selectedMinute) selectedMinute.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

// Text Area functionality
function initializeTextAreas() {
    const textAreas = document.querySelectorAll('.glass-textarea');
    
    textAreas.forEach(textarea => {
        const isEnhanced = textarea.dataset.enhanced === 'true';
        
        // Auto-resize functionality
        function autoResize() {
            if (!isEnhanced) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            }
        }
        
        // Enhanced textarea specific functionality
        if (isEnhanced) {
            initializeEnhancedTextarea(textarea);
        }
        
        // Add focus effects
        textarea.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        textarea.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
        
        // Add input effects
        textarea.addEventListener('input', function() {
            autoResize();
            
            // Add typing effect
            this.classList.add('typing');
            clearTimeout(this.typingTimer);
            
            this.typingTimer = setTimeout(() => {
                this.classList.remove('typing');
            }, 500);
            
            if (isEnhanced) {
                updateTextareaStatus(this);
            }
        });
        
        // Add hover effects
        textarea.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        textarea.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
        
        // Initialize auto-resize
        autoResize();
    });
}

function initializeEnhancedTextarea(textarea) {
    const container = textarea.closest('.custom-textarea-container');
    const toolbar = container.querySelector('.textarea-toolbar');
    const charCount = container.querySelector('.char-count');
    const wordCount = container.querySelector('.words');
    const lineCount = container.querySelector('.lines');
    const statusSaved = container.querySelector('[data-status="saved"]');
    const statusTyping = container.querySelector('[data-status="typing"]');
    
    // Toolbar button functionality
    toolbar.addEventListener('click', function(e) {
        const btn = e.target.closest('.toolbar-btn');
        if (!btn) return;
        
        const action = btn.dataset.action;
        const text = btn.dataset.text;
        
        switch (action) {
            case 'bold':
                wrapSelectedText(textarea, '**', '**');
                btn.classList.toggle('active');
                break;
            case 'italic':
                wrapSelectedText(textarea, '*', '*');
                btn.classList.toggle('active');
                break;
            case 'underline':
                wrapSelectedText(textarea, '_', '_');
                btn.classList.toggle('active');
                break;
            case 'insertText':
                insertTextAtCursor(textarea, text);
                break;
            case 'clear':
                if (confirm('确定要清除所有内容吗？')) {
                    textarea.value = '';
                    updateTextareaStatus(textarea);
                }
                break;
        }
        
        textarea.focus();
    });
    
    // Keyboard shortcuts
    textarea.addEventListener('keydown', function(e) {
        if (e.ctrlKey) {
            switch (e.key) {
                case 'b':
                    e.preventDefault();
                    wrapSelectedText(textarea, '**', '**');
                    break;
                case 'i':
                    e.preventDefault();
                    wrapSelectedText(textarea, '*', '*');
                    break;
                case 'u':
                    e.preventDefault();
                    wrapSelectedText(textarea, '_', '_');
                    break;
            }
        }
    });
    
    // Auto-save simulation
    let saveTimeout;
    textarea.addEventListener('input', function() {
        // Show typing status
        statusSaved.style.display = 'none';
        statusTyping.style.display = 'flex';
        
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            statusTyping.style.display = 'none';
            statusSaved.style.display = 'flex';
        }, 1000);
    });
    
    // Initialize status
    updateTextareaStatus(textarea);
}

function wrapSelectedText(textarea, prefix, suffix) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);
    
    const newText = beforeText + prefix + selectedText + suffix + afterText;
    textarea.value = newText;
    
    // Restore cursor position
    const newStart = start + prefix.length;
    const newEnd = newStart + selectedText.length;
    textarea.setSelectionRange(newStart, newEnd);
    
    updateTextareaStatus(textarea);
}

function insertTextAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(start);
    
    textarea.value = beforeText + text + afterText;
    textarea.setSelectionRange(start + text.length, start + text.length);
    
    updateTextareaStatus(textarea);
}

function updateTextareaStatus(textarea) {
    const container = textarea.closest('.custom-textarea-container');
    if (!container) return;
    
    const charCount = container.querySelector('.char-count');
    const wordCount = container.querySelector('.words');
    const lineCount = container.querySelector('.lines');
    
    const text = textarea.value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    
    if (charCount) charCount.textContent = chars;
    if (wordCount) wordCount.textContent = words;
    if (lineCount) lineCount.textContent = lines;
    
    // Update character count color based on limit
    const maxLength = textarea.maxLength;
    if (maxLength && charCount) {
        const percentage = chars / maxLength;
        if (percentage > 0.9) {
            charCount.style.color = 'rgba(239, 68, 68, 0.8)';
        } else if (percentage > 0.7) {
            charCount.style.color = 'rgba(251, 191, 36, 0.8)';
        } else {
            charCount.style.color = 'rgba(255, 255, 255, 0.8)';
        }
    }
}

// Initialize audio feedback (commented out by default)
// initializeAudioFeedback(); 
