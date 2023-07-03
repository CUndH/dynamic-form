<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { defineProps } from 'vue'
defineProps({
  left: {
    type: String,
    required: true
  },
  right: {
    type: String,
    required: true
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-data-storage-item')
</script>

<template>
  <div :class="`${prefixCls}`" class="flex items-center w-[calc(51%)] h-[calc(25%)] max-h-45px">
    <div :class="`${prefixCls}-left`" class="w-[calc(60%)] h-full truncate">{{ left }}</div>
    <div :class="`${prefixCls}-right`" class="w-[calc(40%)] h-full truncate">{{ right }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-data-storage-item';

.#{$prefix-chart} {
  border: 1px solid #dcdfe6;
  border-bottom: none;
  * {
    text-align: center;
    line-height: 40px;
  }
  &-left {
    border-right: 1px solid #dcdfe6;
    background-color: rgba(var(--el-color-primary-rgb), 0.1);
  }
  &-right {
    font-size: 14px;
  }
}
</style>
