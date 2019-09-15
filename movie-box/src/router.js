import Vue from 'vue'
import Router from 'vue-router'
import Featured from './pages/Featured/Featured'
import Search from './pages/Search/Search'


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