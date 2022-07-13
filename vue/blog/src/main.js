import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/router'
import directives from '@/directives'

const app = createApp(App)

directives.forEach((c) => {
  app.directive(c.name, c)
})

components.forEach((c) => {
  app.component(c.name, c)
})

app.use(router).mount('#app')
