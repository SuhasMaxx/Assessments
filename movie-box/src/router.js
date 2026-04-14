import { createRouter, createWebHistory } from 'vue-router'
import Featured from './pages/Featured/Featured.vue'
import Search from './pages/Search/Search.vue'

const routes = [
    {
        path: '/',
        component: Search
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/featured',
        component: Featured
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router