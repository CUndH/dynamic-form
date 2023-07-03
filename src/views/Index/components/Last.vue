<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import LastItem from './LastItem.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-last')

const lasts: ILast[] = [
  {
    area: '车床工艺3车间',
    usage: 70,
    value: '337'
  },
  {
    area: '空压2机组',
    usage: 80,
    value: '432'
  },
  {
    area: '冰机系统3号机组',
    usage: 50,
    value: '970'
  }
]
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">用能概况统计</div>
  </div>

  <div class="h-[calc(100%-45px)] overflow-hidden">
    <div class="px-20px w-full mt-5px h-full">
      <!-- 表头 -->
      <div :class="`${prefixCls}-title`" class="flex justify-between h-[25%]">
        <div class="pl-15px w-[15%] truncate">序号</div>
        <div class="pl-15px w-[30%] truncate">区域</div>
        <div class="pl-15px w-[36%] truncate">用量</div>
        <div class="pl-15px w-[19%] truncate">能耗（标准煤）</div>
      </div>

      <LastItem
        v-for="(last, index) in lasts"
        :key="index"
        :index="index"
        :last="last"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-last';

.#{$prefix-chart}-title {
  line-height: 3;
  font-size: 14px;
}
</style>
