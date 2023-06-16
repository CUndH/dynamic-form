<script setup lang="ts">
// 最外层Layout组件顶部Header部分
import { useDesign } from '@/utils/useDesign';

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls('header');
</script>

<template>
  <div :class="`${prefixCls}-main`">
    <div :class="`${prefixCls}-left-content`">
      <slot name="left"></slot>
    </div>
    <div :class="`${prefixCls}-right-content`">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$vNamespace}-header';

.#{$prefix-cls} {
  &-main {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &-left-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2.8rem;
  }
  &-right-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
