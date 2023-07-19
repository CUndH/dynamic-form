<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { ref, computed } from 'vue'
import eventBus, { EventTypeName } from '@/utils/eventBus'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useUserStore } from '@/store/modules/user'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

const menuCollapse = ref(false)

const toggleCollapse = () => {
  menuCollapse.value = !menuCollapse.value
}

const handleCommandDropdown = (command: string) => {
  switch (command) {
    case 'logout':
      // todo logout
      userStore.logOut()
      break
    case 'resetPassword':
      // todo resetPassword
      break
    default:
      break
  }
}
// const userInfo = userStore.userInfo || wsCache.get('userInfo');
const userInfo = {} as any

const isRouterLoading = ref(false)

const tagsViewStore = useTagsViewStore()

const userStore = useUserStore()

const getCaches = computed((): string[] => {
  return tagsViewStore.getCachedViews
})

eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})
</script>

<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-menu ${menuCollapse ? 'is-collapse' : ''}`">
      <div :class="`${prefixCls}-menu-logo`">
        <p :class="`${prefixCls}-menu-logo-title`">
          {{ menuCollapse ? 'ADMIN' : 'VUE3 ADMIN' }}
        </p>
      </div>
      <div :class="`${prefixCls}-menu-wrap`">
        <Menu :class="`${prefixCls}-menu-content`" :is-collapse="menuCollapse" />
      </div>
    </div>
    <div :class="`${prefixCls}-main`">
      <div :class="`${prefixCls}-header`">
        <Header>
          <template #left>
            <Icon
              :size="24"
              :icon="
                menuCollapse ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined'
              "
              :class="`${prefixCls}-collapse-switch`"
              @click="toggleCollapse"
            />
            <Breadcrumb style="margin-left: 12px" />
          </template>
          <template #right>
            <div :class="`${prefixCls}-header-right`">
              <el-dropdown
                placement="bottom"
                trigger="click"
                popper-class="user-dropdown-popper"
                @command="handleCommandDropdown"
              >
                <div class="user-dropdown">
                  <div class="user-avatar mr-20px">
                    <!-- <img class="border-none" src="@/assets/image/avatar.jpg" alt="" /> -->
                  </div>
                  <div>
                    {{ userInfo && userInfo.name ? userInfo.name : userInfo.username || '管理员' }}
                  </div>
                  <Icon class="dropdown-arrow" :size="24" icon="material-symbols:arrow-drop-down" />
                </div>
                <template #dropdown>
                  <el-dropdown-menu :class="`${prefixCls}-dropdown`">
                    <div class="user-name">
                      {{
                        userInfo && userInfo.name ? userInfo.name : userInfo.username || '管理员'
                      }}
                    </div>
                    <el-divider class="mt-10px mb-0" />
                    <el-dropdown-item command="resetPassword">
                      <div class="dropdown-btn">
                        <Icon icon="mdi:password-reset" :size="16" />
                        <span>修改密码</span>
                      </div>
                    </el-dropdown-item>
                    <el-dropdown-item command="logout">
                      <div class="drop-down-btn logout-btn">
                        <Icon icon="ri:logout-circle-r-line" :size="16" />
                        <span>退出</span>
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </template>
        </Header>
      </div>
      <div v-loading="isRouterLoading" :class="`${prefixCls}-content`">
        <TagsView class="mt-10px mb-10px" />
        <div :class="`${prefixCls}-router`">
          <transition name="slide-fade">
            <RouterView>
              <template #default="{ Component, route }">
                <keep-alive :include="getCaches">
                  <component :is="Component" :key="route.fullPath" />
                </keep-alive>
              </template>
            </RouterView>
          </transition>
        </div>
        <div :class="`${prefixCls}-footer`">
          <div :class="`${prefixCls}-copyright`" class="my-8px text-center">
            Copyright © {{ new Date().getFullYear() }}
            <a target="_blank" href="https://www.heilansc.com/">海澜智云</a>出品
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$vNamespace}-layout';

.#{$prefix-cls} {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f0f3f6;
  display: flex;
  &-header {
    height: var(--tool-header-height);
    flex-shrink: 0;
    background-color: var(--tool-header-bg);
    color: var(--el-color-primary);
    // border-bottom: 1px solid #a8abb3;

    &-right {
      display: flex;
      align-items: center;
      margin: 0 2rem;

      .user-dropdown {
        display: flex;
        align-items: center;
      }

      .dropdown-arrow {
        color: var(--color-normal);
        cursor: pointer;
      }

      .user-avatar {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 50%;
        overflow: hidden;

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  &-alarm {
    width: 100%;
    height: 3.2rem;
    box-sizing: border-box;
    overflow: hidden;
    transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
    -webkit-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    -o-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    &.is-hidden {
      height: 0;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;
      box-sizing: border-box;
      color: white;
      background-color: white;
      &.hint {
        background-color: #4a70ff;
      }
      &.warning,
      &.minor {
        background-color: var(--el-color-warning);
      }
      &.important,
      &.serious {
        background-color: var(--el-color-danger);
      }
      .alarm-content {
        display: inline-flex;
        align-items: center;
        font-size: 1.8rem;
        line-height: 3.2rem;
      }
      .alarm-toolbar {
        display: flex;
        line-height: 3.2rem;
        font-size: 0;
        align-items: center;
        justify-content: space-between;
        &-icon {
          margin: 0 0.2rem;
          cursor: pointer;
          &:hover {
            background-color: rgba(121, 121, 121, 0.3);
          }
          &.is-disabled {
            visibility: hidden;
          }
        }
      }
    }
  }
  &-main {
    // width: calc(100% - 22rem);
    overflow: hidden;
    flex: 1;
    // max-height: calc(100% - 6.4rem);
    // height: calc(100% - 9.6rem);
  }
  &-menu {
    width: var(--layout-menu-width);
    height: 100%;
    flex-shrink: 0;
    background: var(--main-bg-color);
    transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
    -webkit-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    -o-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.is-collapse {
      width: var(--layout-menu-collapse-width);
      &-wrap {
        padding-bottom: var(--layout-menu-collapse-width);
      }
    }

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: var(--color-normal);
      height: var(--tool-header-height);
      background-color: var(--layout-logo-bg);
      &-title {
        white-space: nowrap;
        color: var(--layout-logo-color);
      }
    }
    &-wrap {
      flex: 1;
      padding-bottom: var(--layout-menu-width);
      overflow-y: auto;
      // background-image: url('@/assets/image/layoutMenu/normal-menu-bottom.png');
      background-repeat: no-repeat;
      background-position: 50% 99%;
      background-size: 95% auto;
    }
    &-content {
      height: 100%;
      overflow-y: auto;
    }
    &-footer {
      height: 20%;
      padding-bottom: 5%;
      box-sizing: border-box;
    }

    // 露出底部背景图片
    > ::v-deep(.el-menu) {
    }
    ::v-deep(.el-menu) {
      background: transparent;
      &.el-menu--collapse {
        width: 72px;
      }
      .el-menu-item {
        color: var(--layout-menu-color);
        &.is-active {
          background: var(--layout-menu-active-bg);
          color: var(--layout-menu-active-color);
        }
        &:hover {
          background-color: var(--layout-menu-hover-bg);
          color: var(--layout-menu-hover-color);
        }
      }
      .el-sub-menu {
        &.is-active {
          background: var(--layout-menu-hover-bg) !important;
          > .el-menu {
            background: var(--layout-menu-hover-bg) !important;
          }
        }
        .el-sub-menu__title {
          color: var(--layout-menu-color);
          &:hover {
            color: var(--layout-menu-hover-color);
            background-color: var(--layout-menu-hover-bg);
          }
        }
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - var(--tool-header-height));
    box-sizing: border-box;
    flex-grow: 1;
    padding: 0 12px;
    background-color: var(--content-bg);
    overflow: hidden;
  }
  &-router {
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    // background-color: white;
  }
  &-footer {
    flex-shrink: 0;
  }
  &-dropdown {
    .user-name {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
    .dropdown-btn {
      display: flex;
      cursor: pointer;
      align-items: center;
      &.logout-btn:hover {
        color: var(--el-color-danger);
      }
    }
  }
  &-copyright {
    font-size: 12px;
    box-sizing: border-box;
    text-align: center;
    margin: 3px 0;
  }
  &-logo,
  &-logo-collapse {
    width: auto;
    height: 4rem;
    mix-blend-mode: screen;
    display: inline-block;
    opacity: 1;
  }
  &-collapse-switch {
    padding-left: 12px;
    color: var(--color-normal);
    cursor: pointer;
  }
}
</style>
