<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { PropType, defineProps } from 'vue'

defineProps({
  index: {
    type: Number,
    required: true
  },
  areaAlarm: {
    type: Object as PropType<IAreaAlarm>,
    required: true
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('alarm-item')
</script>

<template>
  <div
    :class="[`${prefixCls}`, index === 0 ? 'has-bg' : '']"
    class="flex justify-between h-[25%] max-h-46px"
  >
    <div class="flex w-[20%]">
      <div :class="`${prefixCls}-index`" class="flex pl-15px w-[25%] truncate">
        {{ index + 1 }}
      </div>
      <div :class="`${prefixCls}-level`" class="flex pl-15px w-[50%] truncate">
        {{ areaAlarm.level }}
      </div>
      <div :class="`${prefixCls}-empty`" class="flex pl-15px w-[25%] truncate"></div>
    </div>
    <div :class="`${prefixCls}-location`" class="pl-15px w-[20%] truncate">
      {{ areaAlarm.location }}
    </div>
    <div :class="`${prefixCls}-content`" class="pl-15px w-[20%] truncate">{{ areaAlarm.content }}</div>
    <div :class="`${prefixCls}-datetime`" class="pl-15px w-[20%] truncate">
      {{ areaAlarm.datetime }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-alarm-item';

.#{$prefix-chart} {
  line-height: 3;
  color: gray;
  font-size: 14px;

  > div {
    box-shadow: inset 0px 1px 0px 0px rgba(220, 223, 230, 0.61);
  }

  &.has-bg > div {
    background-color: rgba(var(--el-color-primary-rgb), 0.1);
  }

  &.has-bg &-level {
    background-color: rgba(var(--el-color-primary-rgb), 0.1);
  }
}
</style>
