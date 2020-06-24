import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/Managerindex',
        component: resolve => require([('@/views/managerSystemIndex')], resolve),
        children: [{
                path: 'index',
                name: 'index',
                // component: resolve => require([('@/views/index')], resolve),
                component: () =>
                    import ('@/views/index')
            },
            {
                path: 'accesslog',
                name: 'accesslog',
                // component: resolve => require([('@/views/manager/accesslog')], resolve),
                component: () =>
                    import ('@/views/manager/accesslog')
            },
            {
                path: 'showallquestion',
                // component: resolve => require([('@/views/manager/showallquestion')], resolve),
                component: () =>
                    import ('@/views/manager/showallquestion')
            },
            {
                path: 'showTable',
                name: 'showTable',
                // component: resolve => require([('@/views/manager/showTable')], resolve),
                component: () =>
                    import ('@/views/manager/showTable')
            },
            {
                path: 'subjectiveItem',
                name: 'subjectiveItem',
                // component: resolve => require([('@/views/manager/subjectiveItem')], resolve),
                component: () =>
                    import ('@/views/manager/subjectiveItem')
            },
            {
                path: '',
                redirect: 'index'
            }
        ]
    },
    {
        path: '',
        redirect: '/login'
    }
]

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    // linkActiveClass:'' 设置点击的样式
    routes
})

export default router