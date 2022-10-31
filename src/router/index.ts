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
        { 
            path: '/resource', 
            component: Resource,
            meta: {
                requiresAuth: true
            }
        },
        // { path: '/my', component: My },
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 导航守卫
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.localStorage.getItem('mbToken')) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: { redirect: to.fullPath },
        }
    }
})
export default router
