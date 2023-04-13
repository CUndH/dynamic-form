<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { ref } from 'vue'
import { Header } from '@/components/Header'
import { TagsView } from '@/components/TagsView'
import { Menu } from '@/components/Menu'
import { Icon } from '@/components/Icon'
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
    <div :class="`${prefixCls}-header`">
      <Header>
        <template #left>
          <div :class="`${prefixCls}-header-left ${menuCollapse ? 'is-collapse' : ''}`">
            <p :class="`${prefixCls}-title`">
              {{ menuCollapse ? 'ADMIN' : 'VUE3 ADMIN' }}
            </p>
          </div>
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
                <div class="user-avatar mr20">
                  <img src="@/assets/image/avatar.jpg" alt="" />
                </div>
                <Icon class="dropdown-arrow" :size="24" icon="material-symbols:arrow-drop-down" />
              </div>
              <template #dropdown>
                <el-dropdown-menu :class="`${prefixCls}-dropdown`">
                  <div class="user-name">
                    {{ userInfo ? userInfo.nickname || userInfo.username : '管理员' }}
                  </div>
                  <el-divider class="mt10 mb0" />
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
    <div :class="`${prefixCls}-main`">
      <div :class="`${prefixCls}-menu ${menuCollapse ? 'is-collapse' : ''}`">
        <Menu :class="`${prefixCls}-menu-content`" :is-collapse="menuCollapse" />
      </div>
      <div v-loading="isRouterLoading" :class="`${prefixCls}-content`">
        <TagsView class="mt10 mb10" />
        <div :class="`${prefixCls}-router`">
          <slot name="content"></slot>
        </div>
        <div :class="`${prefixCls}-footer`">
          <div :class="`${prefixCls}-copyright`" class="mt10 tc">
            Copyright © {{ new Date().getFullYear() }}
            <a target="_blank" href="https://www.heilansc.com/">海澜智云</a>出品
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-layout';

.@{prefix-cls} {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f0f3f6;
  display: flex;
  flex-direction: column;
  &-header {
    height: 6.4rem;
    flex-shrink: 0;
    background-color: #ffffff;
    color: #4a70ff;
    border-bottom: 1px solid #a8abb3;
    &-left {
      display: flex;
      text-align: left;
      width: 20rem;
      padding: 0 10px;
      box-sizing: border-box;
      &.is-collapse {
        width: var(--layout-menu-width);
      }
      transition: all var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier);
      -webkit-transition: all var(--el-transition-duration)
        var(--el-transition-function-ease-in-out-bezier);
      -o-transition: all var(--el-transition-duration)
        var(--el-transition-function-ease-in-out-bezier);
    }
    &-right {
      display: flex;
      align-items: center;
      margin: 0 2rem;

      .user-dropdown {
        display: flex;
        align-items: center;
      }

      .dropdown-arrow {
        color: #4a70ff;
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
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: calc(100% - 6.4rem);
    height: calc(100% - 9.6rem);
    flex-grow: 1;
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
  }
  &-content {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20rem);
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
  &-title {
    white-space: nowrap;
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
    cursor: pointer;
  }
}
</style>
