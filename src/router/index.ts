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
  }
]

// 模拟异步获取菜单
export const asyncRoutes: AppRouteRecordRaw[] = []

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
