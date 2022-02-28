import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
axios.defaults.baseURL = 'http://127.0.0.1:8000'
const app = createApp(App)
app.use(VueSweetalert2)
app.use(store,VueAxios,axios)
app.use(router)
app.mount('#app')
