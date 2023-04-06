import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// Uso de Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

createApp(App).use(router).mount('#app')
