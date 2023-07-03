<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import LastItem from '../components/LastItem.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-last')

interface ILasts {
  area: string
  usage: number
  value: string
}

const lasts: ILasts[] = [
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
      <div :class="`${prefixCls}-item-title`" class="flex justify-between h-[calc(25%)]">
        <div class="pl-15px w-[calc(15%)] truncate">序号</div>
        <div class="pl-15px w-[calc(30%)] truncate">区域</div>
        <div class="pl-15px w-[calc(36%)] truncate">用量</div>
        <div class="pl-15px w-[calc(19%)] truncate">能耗（标准煤）</div>
      </div>

      <LastItem
        v-for="(last, index) in lasts"
        :key="index"
        :index="index"
        :area="last.area"
        :usage="last.usage"
        :value="last.value"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-last-item-title';

.#{$prefix-chart} {
  & > div {
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
