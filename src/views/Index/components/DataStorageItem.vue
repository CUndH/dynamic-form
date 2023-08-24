<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { PropType, defineProps } from 'vue'
defineProps({
  dataStorage: {
    type: Object as PropType<IDataStorage>,
    required: true
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-storage-item')
</script>

<template>
  <div :class="`${prefixCls}`" class="flex items-center w-[51%] h-[25%] max-h-45px">
    <div :class="`${prefixCls}-left`" class="w-[60%] h-full truncate">{{ dataStorage.left }}</div>
    <div :class="`${prefixCls}-right`" class="w-[40%] h-full truncate">{{ dataStorage.right }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-storage-item';

.#{$prefix-chart} {
  border: 1px solid #dcdfe6;
  border-bottom: none;
  text-align: center;
  line-height: 2.5;

  &.has-border-bottom {
    border-bottom: 1px solid #dcdfe6;
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
