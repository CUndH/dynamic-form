import router from '@/router'
import { defineStore } from 'pinia'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { ElMessage, ElNotification } from 'element-plus';
import { store } from '@/store'
// import { loginApi, logoutApi } from '@/api/auth';
// import { getUserInfoApi } from '@/api/base';
import { useCache } from '@/utils/useCache';

interface userModuleState {
  userInfo: any;
  roles: string[],
  menuIds: string[]
}

const { wsCache } = useCache();

export const useUserStore = defineStore({
  id: 'user',
  state: (): userModuleState => ({
    userInfo: {},
    roles: [],
    menuIds: [],
  }),
  persist: {
    enabled: true
  },
  getters: {},
  actions: {
    async login(params: LoginParams) {
      try {
        const res = await loginApi(params)
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async logOut() {
      const tagsViewStore = useTagsViewStore()
      tagsViewStore.delAllViews()
      // await logoutApi();
      ElNotification.success('退出登录！');
      router.replace('/login')
    },
    setUserInfo(info) {
      this.userInfo = info;
    },
    setUserRoles(roles) {
      this.roles = roles;
    },
    getUserInfo() {
      return getUserInfoApi()
        .then((res) => {
          const { code, data, msg } = res;
          if (code === 0) {
            this.setUserInfo(data.sysUserDBO);
            this.setUserRoles(data.roles);
            wsCache.set('userInfo', data.sysUserDBO);
            wsCache.set('roles', data.roles);
          } else {
            ElMessage.error(msg);
          }
        })
        .catch((e) => {
          ElMessage.error(e);
        });
    },
    setUserMenuIds(ids) {
      this.menuIds = ids;
    }
  }
})

export const userStoreWithOut = () => {
  return useUserStore(store)
}
