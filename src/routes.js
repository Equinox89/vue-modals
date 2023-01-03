// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Pages

import Home from '@/pages/Home.vue'
import Example from '@/pages/Example.vue'

// Routering

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/example',
            name: 'Example',
            component: Example
        },
    ]
})