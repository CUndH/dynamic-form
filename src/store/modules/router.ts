import { constantRoutes, presetRoutes, asyncRoutes } from '@/router'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'
import { store } from '@/store'
// import {
//   flatMultiLevelRoutes,
//   generateRoutesFromServer,
// } from "@/utils/routerHelper";
// import { getPermissionRouterApi } from "@/api/permission";

export interface RouterModuleState {
  routers: AppRouteRecordRaw[]
  addRouters: AppRouteRecordRaw[]
  isAddRouters: boolean
  menuTabRouters: AppRouteRecordRaw[]
}

export const useRouterStore = defineStore({
  id: 'router',
  state: (): RouterModuleState => ({
    routers: [],
    addRouters: [],
    isAddRouters: false,
    menuTabRouters: []
  }),
  persist: {
    enabled: true
  },
  getters: {
    getRouters(): AppRouteRecordRaw[] {
      return this.routers
    },
    getAddRouters(): AppRouteRecordRaw[] {
      return cloneDeep(this.addRouters)
    },
    getIsAddRouters(): boolean {
      return this.isAddRouters
    }
  },
  actions: {
    generateRoutes(): Promise<unknown> {
      return new Promise<void>(async (resolve) => {
        // @ts-ignore
        this.addRouters = presetRoutes.concat(asyncRoutes)
        // @ts-ignore
        this.routers = cloneDeep(constantRoutes)
          .concat(presetRoutes)
          .concat(asyncRoutes)
          .concat([
            {
              name: '',
              meta: {},
              path: '/:pathMatch(.*)*',
              redirect: '/404'
            }
          ])
        resolve()
      })
    },
    setIsAddRouters(state: boolean): void {
      this.isAddRouters = state
    },
    setMenuTabRouters(routers: AppRouteRecordRaw[]): void {
      this.menuTabRouters = routers
    }
  }
})

export const routerStoreWithOut = () => {
  return useRouterStore(store)
}
