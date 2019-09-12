import Vue from 'vue'
import Router from 'vue-router'
import Featured from './pages/Featured'
import Search from './pages/Search'


Vue.use(Router)

export default new Router({
    routes: [
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
})