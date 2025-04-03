import Theme from 'vitepress/theme'
import { h } from 'vue'
import Layout from './Layout.vue'
import './style.css'

export default {
    ...Theme,
    // 使用注入插槽的包装组件覆盖 Layout
    Layout:  () => {
        return h(Layout, null, {
          // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
      },
}