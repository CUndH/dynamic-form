<script setup lang="ts">
import { ref, useSlots, defineProps } from 'vue'
import { propTypes } from '@/utils/propTypes'
// import { useDesign } from '@/utils/useDesign'
import { useRoute } from 'vue-router'

// const { getPrefixCls } = useDesign()

const route = useRoute()

// const prefixCls = getPrefixCls('content-wrap')

const slots = useSlots()

const hideDefaultTitle = ref(false)

if (slots.hasOwnProperty('prefix-title')) {
  hideDefaultTitle.value = true
}

defineProps({
  // 是否展示标题
  showTitle: propTypes.bool.def(true)
  // // 标题右侧问号提示内容
  // message: propTypes.string.def('')
})

const title = route.meta.title
</script>

<template>
  <div class="flex flex-col overflow-hidden h-full rounded-4px" :key="title">
    <div
      v-if="showTitle"
      class="flex px-12px justify-between items-center h-40px leading-40px my-8px mx-0 box-border rounded-5px"
    >
      <div class="text-2.2rem font-bold tracking-normal text-[var(--content-title)]">
        <slot name="prefix-title"></slot>
        <span v-if="!hideDefaultTitle">{{ title }}</span>
      </div>
      <div class="flex items-center -sm:hidden">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="flex flex-col flex-1 overflow-y-auto h-100% pt-0">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<!-- <style lang="scss" scoped>
$prefix-cls: '#{$vNamespace}-content-wrap';

.#{$prefix-cls} {
  padding: 20px;
  &-header {
    display: flex;
    align-items: center;
  }
  &-title {
    font-size: 1.6rem;
    font-weight: 700;
  }
  &-message {
    max-width: 20rem;
  }
  &-main {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss">
$prefix-cls: '#{$vNamespace}-content-wrap';
.#{$prefix-cls} {
  .el-card__body {
    padding: 0;
    flex-grow: 1;
    height: 100%;
  }
  &.show-title {
    .el-card__body {
      height: calc(100% - 62px);
    }
  }
}
</style> -->
