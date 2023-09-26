import './assets/_css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import Vue3Geolocation from 'vue3-geolocation'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vue3Geolocation)
app.mount('#app')
app.use(VueCarousel);
