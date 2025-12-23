import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ViteBlog",
    description: "A VitePress Site",
    base: "/VitePressBlog/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: 'Android', link: '/android/basics'}
        ],

        sidebar: {
            '/': [
                {
                    text: 'Examples',
                    items: [
                        {text: 'Markdown Examples', link: '/markdown-examples'},
                        {text: 'Runtime API Examples', link: '/api-examples'}
                    ]
                }
            ],
            '/android/': [
                {
                    text: 'Android',
                    items: [
                        {text: 'Android基础', link: '/android/basics'},
                        {text: 'Android进阶', link: '/android/advanced'},
                        {text: 'Jetpack Compose', link: '/android/compose'}
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
