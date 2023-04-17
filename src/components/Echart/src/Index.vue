<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import 'echarts-wordcloud'
import { use } from 'echarts/core'
import useOptions from '@/plugins/echarts'
import VChart, { THEME_KEY } from 'vue-echarts';
import { propTypes } from '@/utils/propTypes'
import { computed, PropType, ref, watch, provide } from 'vue'
import { isString } from '@/utils/is'
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('echart')

const props = defineProps({
  // 对应echarts的option参数
  option: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  width: propTypes.oneOfType([Number, String]).def('100%'),
  height: propTypes.oneOfType([Number, String]).def('100%'),
  type: propTypes.string.def('')
})

const extraOption = {}

const option = computed(() => {
  return Object.assign(props.option, extraOption)
})

const elRef = ref<ElRef>()

let echartRef: Nullable<echarts.ECharts> = null

use(useOptions);

provide(THEME_KEY, 'dark');

const styles = computed(() => {
  const width = isString(props.width) ? props.width : `${props.width}px`
  const height = isString(props.height) ? props.height : `${props.height}px`

  return {
    width,
    height
  }
})

watch(
  () => option.value,
  (option) => {
    if (echartRef) {
      echartRef?.setOption(option)
    }
  },
  {
    deep: true
  }
)
</script>

<template>
  <v-chart ref="elRef" :class="[$attrs.class, prefixCls]" :style="styles" :option="option" autoresize />
</template>
