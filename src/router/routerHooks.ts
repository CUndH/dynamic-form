import router from './index'
import { useTitle } from '@/utils/useTitle'
import type { RouteRecordRaw } from 'vue-router'
import { routerStoreWithOut } from '@/store/modules/router'
import eventBus, { EventTypeName } from '@/utils/eventBus'

const routerStore = routerStoreWithOut()

router.beforeEach(async (to, _from, next) => {
  eventBus.notify(EventTypeName.PAGE_START_LOAD)
  if (routerStore.getIsAddRouters) {
    next()
    return
  }
  // 生成动态路由
  await routerStore.generateRoutes()
  routerStore.getAddRouters.forEach((route) => {
    router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
  })
  routerStore.setIsAddRouters(true)
  const nextData = { ...to, replace: true }
  next(nextData)
})

router.afterEach((to) => {
  useTitle(to?.meta?.title as string)
  eventBus.notify(EventTypeName.PAGE_LOADED)
})
