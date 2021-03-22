import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Home from '@/pages/Home'
import Notify from '@/pages/NotifyPage'
import NotFound from '@/pages/404'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/vue-notify/',
            name: 'home',
            component: Home
        },
        {
            path: '/vue-notify/notify',
            name: 'notify',
            component: Notify
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})