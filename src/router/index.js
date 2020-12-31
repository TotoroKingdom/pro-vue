import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')//登录页面
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),//主页面
    children: [
      {
        path: '/myPro',
        name: 'MyPro',
        component: () => import('../views/home/MyPro.vue'),
      },
      {
        path: '/myTask',
        name: 'MyTask',
        component: () => import('../views/home/MyTask.vue'),
      },
      {
        path: '/myWeekly',
        name: 'MyWeekly',
        component: () => import('../views/home/MyWeekly.vue'),
      },
      {
        path: '/pro',
        name: 'Pro',
        component: () => import('../views/pro/Pro.vue'),
      },
      {
        path: '/weekly',
        name: 'Weekly',
        component: () => import('../views/pro/Weekly.vue'),
      },
      {
        path: '/milestone',
        name: 'Milestone',
        component: () => import('../views/pro/Milestone.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/user/User.vue'),
      },
      {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/auth/Auth.vue'),
      },
      {
        path: '/document',
        name: 'Document',
        component: () => import('../views/document/Document.vue'),
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
