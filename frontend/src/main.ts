import './assets/_css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "bottom-right",
  pauseOnHover: false,
  theme: 'light',
} as ToastContainerOptions)

app.mount('#app')

