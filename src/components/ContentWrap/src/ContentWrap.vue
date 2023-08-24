<script setup lang="ts">
import { ref, useSlots, defineProps } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/utils/useDesign'
import { useRoute } from 'vue-router'

const { getPrefixCls } = useDesign()

const route = useRoute()

const prefixCls = getPrefixCls('content-wrap')

const slots = useSlots()

const hideDefaultTitle = ref(false)

if (slots.hasOwnProperty('prefix-title')) {
  hideDefaultTitle.value = true
}

defineProps({
  // 是否展示标题
  showTitle: propTypes.bool.def(true),
  // // 标题右侧问号提示内容
  // message: propTypes.string.def('')
})

const title = route.meta.title
</script>

<template>
  <div :class="prefixCls" class="flex flex-col overflow-hidden h-full rounded-4px" :key="title">
    <div
      v-if="showTitle"
      :class="`${prefixCls}-header`"
      class="flex px-20px justify-between items-center bg-[#F9F9F9] h-60px leading-60px mx-0 box-border"
    >
      <slot name="header">
        <div class="text-2.2rem font-bold tracking-normal text-[var(--content-title)]">
          <slot name="prefix-title"></slot>
          <span v-if="!hideDefaultTitle">{{ title }}</span>
        </div>
        <div class="flex items-center -sm:hidden">
          <slot name="extra"></slot>
        </div>
      </slot>
    </div>
    <div  :class="`${prefixCls}-content`" class="flex flex-col flex-1 overflow-y-auto h-100% pt-0">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$prefix-cls: '#{$vNamespace}-content-wrap';

.#{$prefix-cls} {
  box-shadow: 0px 0px 4px 1px rgba(0, 53, 100, 0.1);
  border-radius: 6px;
  &-header {
    border-bottom: 1px solid #E9E9E9;
  }
}
</style>
