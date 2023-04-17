<script setup lang="ts">
import {reactive} from "vue";
import { useDesign } from '@/utils/useDesign'
import { Echart } from "@/components/Echart";

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage')

const lineChartOptions = reactive({
  value: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        color: '#90CB74'
      }
    ],
    axisLabel: {
      color: 'white'
    }
  }
});
</script>
<template>
  <div class="text-32px bg-[#4a70ff]" :class="`${prefixCls}-main`">TEST</div>
  <Echart ref="powerLineChartRef" :option="lineChartOptions.value" height="400px" />
</template>
<style lang="scss" scoped>
$prefix-chart: '#{$namespace}-homepage';

.#{$prefix-chart} {
  &-main {
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
}
</style>
