import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Liquid Glass UI',
  description: '现代液态玻璃UI组件库',
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '示例', link: '/examples/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/getting-started' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '自定义主题', link: '/guide/theming' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件总览',
          items: [
            { text: '所有组件', link: '/components/' }
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: '按钮 Button', link: '/components/button' },
            { text: '输入框 Input', link: '/components/input' },
            { text: '文本域 Textarea', link: '/components/textarea' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: '选择器 Select', link: '/components/select' },
            { text: '复选框 Checkbox', link: '/components/checkbox' },
            { text: '单选框 Radio', link: '/components/radio' },
            { text: '开关 Switch', link: '/components/switch' },
            { text: '滑块 Slider', link: '/components/slider' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: '进度条 Progress', link: '/components/progress' },
            { text: '徽章 Badge', link: '/components/badge' },
            { text: '头像 Avatar', link: '/components/avatar' },
            { text: '卡片 Card', link: '/components/card' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: '导航栏 Navigation', link: '/components/navigation' },
            { text: '标签页 Tabs', link: '/components/tabs' },
            { text: '面包屑 Breadcrumb', link: '/components/breadcrumb' },
            { text: '分页 Pagination', link: '/components/pagination' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: '加载器 Loader', link: '/components/loader' },
            { text: '模态框 Modal', link: '/components/modal' },
            { text: '通知 Notification', link: '/components/notification' },
            { text: '工具提示 Tooltip', link: '/components/tooltip' }
          ]
        },
        {
          text: '其他组件',
          items: [
            { text: '时间选择器 TimePicker', link: '/components/timepicker' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liquid-glass-ui/liquid-glass-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Liquid Glass UI Team'
    },

    search: {
      provider: 'local'
    }
  },

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#4a90e2' }],
    ['meta', { property: 'og:title', content: 'Liquid Glass UI' }],
    ['meta', { property: 'og:description', content: '现代液态玻璃UI组件库' }]
  ]
}) 