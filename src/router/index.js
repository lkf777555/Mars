import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404' // 重定向
  },
  {
    path: '/404',
    component: () => import('../views/404')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../layout'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      },
      {
        path: '/system/user',
        name: 'user',
        component: () => import('../views/system/user')
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: () => import('../views/system/menu')
      },
      {
        path: '/system/role',
        name: 'role',
        component: () => import('../views/system/role')
      },
      {
        path: '/system/dept',
        name: 'dept',
        component: () => import('../views/system/dept')
      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('../views/system/staff')
      },
      {
        path: '/salary',
        name: 'salary',
        component: () => import('../views/system/salary')
      },
      {
        path: '/audit/leave',
        name: 'leave',
        component: () => import('../views/system/leave')
      },
      {
        path: '/audit/approve',
        name: 'approve',
        component: () => import('../views/system/approve')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (localStorage.getItem('vuex')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
