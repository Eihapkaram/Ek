import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import jQuery from 'jquery'
import '../node_modules/jquery/dist/jquery.js'

window.jQuery = jQuery
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// main.js أو plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css' // إدراج الأيقونات محلياً

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})
AOS.init()
createApp(App).use(vuetify).use(createPinia()).use(router).mount('#app')
