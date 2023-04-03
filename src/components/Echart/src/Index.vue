<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { debounce } from 'lodash-es'
import 'echarts-wordcloud'
import echarts from '@/plugins/echarts'
import geoJson from '@/constants/china.json'
import { propTypes } from '@/utils/propTypes'
import { computed, PropType, ref, unref, watch, onMounted, onBeforeUnmount, onActivated } from 'vue'
import { isString } from '@/utils/is'
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('echart')

const props = defineProps({
  // 对应echarts的options参数
  options: {
    type: Object as PropType<EChartsOption>,
    required: true
  },
  width: propTypes.oneOfType([Number, String]).def('100%'),
  height: propTypes.oneOfType([Number, String]).def('100%'),
  type: propTypes.string.def('')
})

const extraOptions = {}

const options = computed(() => {
  return Object.assign(props.options, extraOptions)
})

const elRef = ref<ElRef>()

let echartRef: Nullable<echarts.ECharts> = null

const contentEl = ref<Element>()

const styles = computed(() => {
  const width = isString(props.width) ? props.width : `${props.width}px`
  const height = isString(props.height) ? props.height : `${props.height}px`

  return {
    width,
    height
  }
})

const initChart = () => {
  if (unref(elRef) && props.options) {
    if (props.type === 'geo') {
      echarts.registerMap('china', geoJson)
    }
    echartRef = echarts.init(unref(elRef) as HTMLElement)
    echartRef?.setOption(unref(options))
  }
}

watch(
  () => options.value,
  (options) => {
    if (echartRef) {
      echartRef?.setOption(options)
    }
  },
  {
    deep: true
  }
)

// resize响应
const resizeHandler = debounce(() => {
  if (echartRef) {
    echartRef.resize()
  }
}, 100)

const contentResizeHandler = async (e: TransitionEvent) => {
  if (e.propertyName === 'width') {
    resizeHandler()
  }
}

onMounted(() => {
  initChart()

  window.addEventListener('resize', resizeHandler)

  contentEl.value = document.getElementsByClassName(`${variables.namespace}-layout-content`)[0]
  unref(contentEl) &&
    (unref(contentEl) as Element).addEventListener('transitionend', contentResizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  unref(contentEl) &&
    (unref(contentEl) as Element).removeEventListener('transitionend', contentResizeHandler)
})

onActivated(() => {
  if (echartRef) {
    echartRef.resize()
  }
})

defineExpose({
  initChart,
  resizeChart: resizeHandler
})
</script>

<template>
  <div ref="elRef" :class="[$attrs.class, prefixCls]" :style="styles"></div>
</template>
