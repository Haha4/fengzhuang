import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import  comfirm from './components/globalCom/comfirm.vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('comfirm',comfirm)
app.use(ElementPlus).mount('#app')
const app2 = createApp(App)

app2.use(ElementPlus).mount('#app2')