import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

/* eslint-disable @typescript-eslint/no-var-requires */

const Layout = () => import('@/components/Layout/src/Layout.vue')

export const constantRoutes: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
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

// 前端异步菜单
export const presetRoutes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '',
    meta: {
      title: '驾驶舱',
    },
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/Index/Index.vue'),
        meta: {
          title: '驾驶舱',
          icon: 'material-symbols:home',
          noCache: true
        }
      }
    ]
  },
]

// 模拟异步获取菜单
export const asyncRoutes: AppRouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',
    redirect: 'noredirect',
    component: Layout,
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
        path: 'user/detail',
        name: 'UserDetail',
        component: () => import('@/views/Admin/User/Detail.vue'),
        meta: {
          title: '用户详情',
          hidden: true
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
        path: 'role/detail',
        name: 'RoleDetail',
        component: () => import('@/views/Admin/Role/Detail.vue'),
        meta: {
          title: '角色详情',
          hidden: true
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
  },
  {
    path: '/form',
    name: 'FormPage',
    redirect: 'noredirect',
    component: Layout,
    meta: {
      title: '动态表单',
      icon: 'dashicons:admin-generic'
    },
    children: [
      {
        path: 'form1',
        name: 'Form1',
        component: () => import('@/views/Form/Form1.vue'),
        meta: {
          title: '表单1'
        }
      },
      {
        path: 'form2',
        name: 'Form2',
        component: () => import('@/views/Form/Form2.vue'),
        meta: {
          title: '表单2'
        }
      },
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
