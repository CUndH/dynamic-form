<script setup lang="ts">
import { computed, defineProps, unref } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { useDesign } from '@/utils/useDesign'
import { useRouterStore } from '@/store/modules/router'

const routerStore = useRouterStore()
const { currentRoute, push } = useRouter()
const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('menu')

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const activeMenu = computed(() => {
  const { meta, path } = unref(currentRoute)
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
})

const menuSelect = (index: string) => {
  push(index)
}

const createMenuItemKey = (item, index: number) => {
  return item.parentPath ? `${item.parentPath}-${index}` : `${index}`
}

const visibleRoute = computed(() => {
  if (Array.isArray(routerStore.getAddRouters)) {
    return routerStore.getAddRouters.filter((item) => !item.meta.hidden);
  }
  return [];
});
</script>

<template>
  <el-menu
    :default-active="unref(activeMenu)"
    :collapse="isCollapse"
    :class="`${prefixCls}-vertical`"
    @select="menuSelect"
  >
    <menu-item
      v-for="(item, index) in visibleRoute"
      :key="createMenuItemKey(item, index)"
      :class="`${prefixCls}-item`"
      :data="item"
    />
  </el-menu>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$vNamespace}-menu';

.#{$prefix-cls} {
  &-vertical {
    border-right: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
