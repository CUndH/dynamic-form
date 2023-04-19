<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
// import { RouteRecordRaw } from 'vue-router';
import { pathResolve } from '@/utils/routerHelper'
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('menu-item')

const props = defineProps({
  data: {
    type: Object as PropType<AppRouteRecordRaw>,
    default: () => {
      return {}
    }
  },
  parentPath: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 1
  }
})

const getFullPath = (item: AppRouteRecordRaw) => {
  return pathResolve(props.parentPath, item.path)
}

const createMenuItemKey = (index: number) => {
  return props.parentPath ? `${props.parentPath}-${index}` : `${index}`
}

const visibleRouteChildren = computed(() => {
  if (Array.isArray(props.data.children)) {
    return props.data.children.filter((item) => !item.meta.hidden)
  }
  return []
})
</script>

<template>
  <el-sub-menu v-if="visibleRouteChildren.length > 1" :index="getFullPath(data)">
    <template #title>
      <Icon
        v-if="data.meta.icon"
        :class="`${prefixCls}-icon`"
        :icon="data.meta.icon"
        size="1.8rem"
      />
      <span :class="`${prefixCls}-title`">{{ data.meta?.title || data.name }}</span>
    </template>
    <menu-item
      v-for="(item, index) in visibleRouteChildren"
      :key="createMenuItemKey(index)"
      :class="`${prefixCls}`"
      :data="item"
      :parent-path="getFullPath(data)"
      :level="level + 1"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="getFullPath(data)">
    <Icon v-if="data.meta.icon" :class="`${prefixCls}-icon`" :icon="data.meta.icon" size="1.8rem" />
    <template #title>
      <span :class="`${prefixCls}-title`">{{ data.meta?.title || data.name }}</span>
    </template>
  </el-menu-item>
</template>

<style lang="scss">
$prefix-cls: '#{$vNamespace}-menu-item';

.#{$prefix-cls} {
  &-title {
    font-size: 1.6rem;
  }
  &-icon {
    &[class^='el-icon'] {
      width: 1em;
    }
  }
}
</style>
