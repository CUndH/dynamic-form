<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage')

</script>
<template>
  <div class="text-32px bg-[#4a70ff] text-[#ffffff]" :class="`${prefixCls}-main`">TEST</div>
</template>
<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-homepage';

.#{$prefix-chart} {
  &-main {
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
}
</style>
