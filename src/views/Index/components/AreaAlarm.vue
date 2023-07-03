<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import AreaAlarmItem from '../components/AreaAlarmItem.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-area-alarm')

interface IAreaAlarms {
  level: string
  location: string
  content: string
  datetime: string
}

const areaAlarms: IAreaAlarms[] = [
  {
    level: '三级报警',
    location: '三号变压站二号空压机',
    content: '#2空压机、能耗异常',
    datetime: '2022-3-16 18:57'
  },
  {
    level: '一级报警',
    location: '三号变压站二号空压机',
    content: '#2空压机、能耗异常',
    datetime: '2022-3-16 18:57'
  },
  {
    level: '二级报警',
    location: '三号变压站二号空压机',
    content: '#2空压机、能耗异常',
    datetime: '2022-3-16 18:57'
  }
]
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">区域告警情况（{{ areaAlarms.length }}）</div>
  </div>

  <div class="h-[calc(100%-45px)] overflow-hidden">
    <div class="px-20px w-full mt-5px h-full">
      <!-- 表头 -->
      <div :class="`${prefixCls}-item-title`" class="flex justify-between h-[calc(25%)]">
        <div class="flex w-[calc(20%)]">
          <div class="pl-15px w-[calc(25%)] truncate">序号</div>
          <div class="pl-15px w-[calc(50%)] truncate">告警级别</div>
          <div class="pl-15px w-[calc(25%)] truncate"></div>
        </div>
        <div class="pl-15px w-[calc(20%)] truncate">位置详情</div>
        <div class="pl-15px w-[calc(20%)] truncate">内容详情</div>
        <div class="pl-15px w-[calc(20%)] truncate">告警时间</div>
      </div>

      <AreaAlarmItem
        v-for="(areaAlarm, index) in areaAlarms"
        :key="index"
        :index="index"
        :level="areaAlarm.level"
        :location="areaAlarm.location"
        :content="areaAlarm.content"
        :datetime="areaAlarm.datetime"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-area-alarm-item-title';

.#{$prefix-chart} {
  & > div {
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
