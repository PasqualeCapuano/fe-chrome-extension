import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from '../plugins/vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [],
})

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')