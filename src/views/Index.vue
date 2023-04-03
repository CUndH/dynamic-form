<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage')
</script>
<template>
  <div :class="`${prefixCls}-main`">TEST</div>
</template>
<style lang="less" scoped>
@prefix-chart: ~'@{namespace}-homepage';

.@{prefix-chart} {
  &-main {
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
}
</style>
