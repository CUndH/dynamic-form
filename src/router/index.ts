import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

/* eslint-disable @typescript-eslint/no-var-requires */

export const constantRoutes: AppRouteRecordRaw[] = [
  {
    path: '/redirect',
    name: 'Redirect',
    children: [
      {
        meta: {},
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue')
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  }
]

// 前端异步菜单
export const presetRoutes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    alias: '/index',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '主页',
      icon: 'material-symbols:home',
      noCache: true
    }
  },
  {
    path: '/404',
    name: '404Page',
    component: () => import('@/views/Error/404.vue'),
    meta: {
      title: '404',
      hidden: true,
      noCache: true
    }
  }
]

// 模拟异步获取菜单
export const asyncRoutes: AppRouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',
    redirect: 'noredirect',
    component: () => import('@/components/Layout/src/Layout.vue'),
    meta: {
      title: '权限管理',
      icon: 'dashicons:admin-generic'
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/Admin/User/Index.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/Admin/Role/Index.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('@/views/Admin/Log/Index.vue'),
        meta: {
          title: '日志管理'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 重置动态路由表
export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', '404Page']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
