import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/recommend/index.vue'
import Resource from '../views/resource/index.vue'
import My from '../views/my/index.vue'

const routes = [{
    path: '/login',
    component: () => import('../views/login.vue')
}, { 
    path: '/', 
    component: () => import('../views/container.vue'),
    children: [
        { path: '/recommend', component: Recommend },
        { path: '/resource', component: Resource },
        // { path: '/my', component: My },
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
