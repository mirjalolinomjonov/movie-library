import './assets/styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const options = {
  timeout: 2000,
}
const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast, options)

app.mount('#app')
