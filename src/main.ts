import { createApp } from 'vue'
import faIcon from '@/utils/faIcon'
import App from './App.vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/main.scss'

const app = createApp(App)

app.component('fa-icon', faIcon)
app.mount('#app')
