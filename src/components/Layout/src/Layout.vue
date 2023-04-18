<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { ref } from 'vue'
// import { Header } from '@/components/Header'
// import { TagsView } from '@/components/TagsView'
// import { Menu } from '@/components/Menu'
// import { Icon } from '@/components/Icon'
import eventBus, { EventTypeName } from '@/utils/eventBus'

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
      break
    case 'resetPassword':
      // todo resetPassword
      break
    default:
      break
  }
}

// const userInfo = userStore.userInfo || wsCache.get('userInfo');
const userInfo = {}

const isRouterLoading = ref(false)

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
      <Menu :class="`${prefixCls}-menu-content`" :is-collapse="menuCollapse" />
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
<!--                    <img src="@/assets/image/avatar.jpg" alt="" />-->
                  </div>
                  <Icon class="dropdown-arrow" :size="24" icon="material-symbols:arrow-drop-down" />
                </div>
                <template #dropdown>
                  <el-dropdown-menu :class="`${prefixCls}-dropdown`">
                    <div class="user-name">
                      {{ userInfo ? userInfo.nickname || userInfo.username : '管理员' }}
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
          <RouterView />
        </div>
        <div :class="`${prefixCls}-footer`">
          <div :class="`${prefixCls}-copyright`" class="mt-10px text-center">
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
    height: 6.4rem;
    flex-shrink: 0;
    background-color: #ffffff;
    color: var(--el-color-primary);
    border-bottom: 1px solid #a8abb3;

    &-right {
      display: flex;
      align-items: center;
      margin: 0 2rem;

      .user-dropdown {
        display: flex;
        align-items: center;
      }

      .dropdown-arrow {
        color: var(--el-color-primary);
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
  &-main {
    width: calc(100% - 20rem);
    max-height: calc(100% - 6.4rem);
    height: calc(100% - 9.6rem);
  }
  &-menu {
    width: 20rem;
    height: 100%;
    flex-shrink: 0;
    background-color: var(--el-menu-bg-color);
    transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
    -webkit-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    -o-transition: all var(--el-transition-duration)
      var(--el-transition-function-ease-in-out-bezier);
    &.is-collapse {
      width: var(--layout-menu-width);
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
    &-logo {
      text-align: center;
      padding: 20px 16px;
      line-height: 24px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      &-title {
        white-space: nowrap;
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px 10px;
    flex-grow: 1;
  }
  &-router {
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    //background-color: white;
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
    padding-left: 30px;
    cursor: pointer;
  }
}
</style>
