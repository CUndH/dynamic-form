<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { PropType, defineProps } from 'vue'
defineProps({
  index: {
    type: Number,
    required: true
  },
  last: {
    type: Object as PropType<ILast>,
    required: true
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-last-item')
</script>

<template>
  <div :class="`${prefixCls}`" class="flex justify-between h-[25%] max-h-46px">
    <div :class="`${prefixCls}-index`" class="pl-15px w-[15%] truncate">{{ index + 1 }}</div>
    <div :class="`${prefixCls}-area`" class="pl-15px w-[30%] truncate">{{ last.area }}</div>
    <div :class="`${prefixCls}-usage`" class="px-15px w-[36%] truncate">
      <el-progress :show-text="false" :stroke-width="12" :percentage="last.usage" status="primary" />
    </div>
    <div :class="`${prefixCls}-value`" class="pl-15px w-[19%] truncate">{{ last.value }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-last-item';

.#{$prefix-chart} {
  box-shadow: inset 0px 1px 0px 0px rgba(220, 223, 230, 0.61);
  line-height: 3;
  color: gray;
  font-size: 14px;
  
  & div {
    margin: auto;
  }
}
</style>
