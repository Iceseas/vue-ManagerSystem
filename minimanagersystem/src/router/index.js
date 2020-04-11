import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import login from '../views/login.vue'
import managerSystemIndex from '../views/managerSystemIndex.vue'
import accesslog from '../views/manager/accesslog.vue'
import showallquestion from '../views/manager/showallquestion.vue'
import showTable from '../views/manager/showTable.vue'
import subjectiveItem from '../views/manager/subjectiveItem.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/Managerindex',
        component: managerSystemIndex,
        children: [{
                path: 'index',
                name: 'index',
                component: index
            },
            {
                path: 'accesslog',
                name: 'accesslog',
                component: accesslog
            },
            {
                path: 'showallquestion',
                component: showallquestion,
            },
            {
                path: 'showTable',
                name: 'showTable',
                component: showTable
            },
            {
                path: 'subjectiveItem',
                name: 'subjectiveItem',
                component: subjectiveItem
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
    base: process.env.BASE_URL,
    routes
})

export default router