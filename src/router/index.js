import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),//登录页面
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),//主页面
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [
      {
        path: '/myPro',
        name: 'MyPro',
        component: () => import('../views/home/MyPro.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/myTask',
        name: 'MyTask',
        component: () => import('../views/home/MyTask.vue'),
        meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      },
      {
        path: '/myWeekly',
        name: 'MyWeekly',
        component: () => import('../views/home/MyWeekly.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/pro',
        name: 'Pro',
        component: () => import('../views/pro/Pro.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/weekly',
        name: 'Weekly',
        component: () => import('../views/pro/Weekly.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/acousticsWeekly',
        name: 'AcousticsWeekly',
        component: () => import('../views/pro/AcousticsWeekly.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/displayControllerWeekly',
        name: 'DisplayControllerWeekly',
        component: () => import('../views/pro/DisplayControllerWeekly.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/imageWeekly',
        name: 'ImageWeekly',
        component: () => import('../views/pro/ImageWeekly.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/milestone',
        name: 'Milestone',
        component: () => import('../views/pro/Milestone.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/user/User.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/auth/Auth.vue'),
        meta: {requireAuth: true},
      },
      {
        path: '/document',
        name: 'Document',
        component: () => import('../views/document/Document.vue'),
        meta: {requireAuth: true},
      }

    ]
  }
]

const router = new VueRouter({
  routes
})


export default router
