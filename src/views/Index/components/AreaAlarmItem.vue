<script setup lang="ts">
import { useDesign } from '@/utils/useDesign';
import { defineProps } from 'vue'
defineProps({
  index: {
    type: Number,
    required: true
  },
  level: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-area-alarm-item')
</script>

<template>
  <div :class="[`${prefixCls}`, index === 0 ? 'haveBg' : '']" class="flex justify-between h-[calc(25%)] max-h-46px">
    <div class="flex w-[calc(20%)]">
      <div :class="`${prefixCls}-index`" class="flex pl-15px w-[calc(25%)] truncate">{{ index + 1 }}</div>
      <div :class="`${prefixCls}-level`" class="flex pl-15px w-[calc(50%)] truncate">{{ level }}</div>
      <div :class="`${prefixCls}-empty`" class="flex pl-15px w-[calc(25%)] truncate"></div>
    </div>
    <div :class="`${prefixCls}-location`" class="pl-15px w-[calc(20%)] truncate">{{ location }}</div>
    <div :class="`${prefixCls}-content`" class="pl-15px w-[calc(20%)] truncate">{{ content }}</div>
    <div :class="`${prefixCls}-datetime`" class="pl-15px w-[calc(20%)] truncate">{{ datetime }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-area-alarm-item';

.#{$prefix-chart} {
  
  & > div {
    box-shadow: inset 0px 1px 0px 0px rgba(220, 223, 230, 0.61);
    line-height: 45px;
    color: gray;
    font-size: 14px;
  }

  &.haveBg > div{
    background-color: rgba(var(--el-color-primary-rgb), 0.1);
  }

  &.haveBg &-level {
    background-color: rgba(var(--el-color-primary-rgb), 0.1);
  }
}
</style>
