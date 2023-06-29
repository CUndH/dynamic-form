<script setup lang="ts">
import { useDesign } from '@/utils/useDesign';
import { defineProps } from 'vue'
defineProps({
  index: {
    type: Number,
    required: true
  },
  area: {
    type: String,
    required: true,
  },
  usage: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-last-item')
</script>

<template>
  <div :class="`${prefixCls}`" class="flex justify-between h-[calc(25%)] max-h-46px">
    <div :class="`${prefixCls}-index`" class="pl-15px w-[calc(15%)] truncate">{{ index + 1 }}</div>
    <div :class="`${prefixCls}-area`" class="pl-15px w-[calc(30%)] truncate">{{ area }}</div>
    <div :class="`${prefixCls}-usage`" class="px-15px w-[calc(36%)] truncate">
      <el-progress
        :show-text="false"
        :stroke-width="12"
        :percentage="usage"
        status="primary"
      />
    </div>
    <div :class="`${prefixCls}-value`" class="pl-15px w-[calc(19%)] truncate">{{ value }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-last-item';

.#{$prefix-chart} {
  box-shadow: inset 0px 1px 0px 0px rgba(220, 223, 230, 0.61);
  & > div {
    line-height: 45px;
    color: gray;
    font-size: 14px;
  }
  & div {
    margin: auto;
  }
}
</style>
