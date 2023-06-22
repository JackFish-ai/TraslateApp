import App from './App.vue'

import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style'

import router from './router'
import store from './store'

createApp(App).use(Varlet).use(store).use(router).mount('#app')
