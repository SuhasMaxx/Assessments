import { createApp } from 'vue'
import MovieBox from './pages/MovieBox/MovieBox.vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import router from './router'

const app = createApp(MovieBox)

app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
