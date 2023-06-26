import { use, ComposeOption } from 'echarts/core'
import * as echarts from 'echarts/core'
import ECharts from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { themeConfigs } from '@/config/app'
import {
  LineChart,
  BarChart,
  PieChart,
  MapChart,
  GaugeChart,
  SankeyChart,
  TreeChart,
  BarSeriesOption,
  LineSeriesOption
} from 'echarts/charts'
import type { App } from 'vue'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
  PolarComponent,
  MarkPointComponent,
  MarkLineComponent,

  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components'

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  PieChart,
  MapChart,
  GaugeChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
  PolarComponent,
  MarkPointComponent,
  MarkLineComponent,
  SankeyChart,
  TreeChart
])

type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

export function setupPluginVueEchart(app: App<Element>) {
  app.component('VChart', ECharts)
}

// 为echart注册几种颜色主题
themeConfigs.forEach((item) => {
  echarts.registerTheme(item.label, item.echartTheme)
})

export { ECOption }

// 这导出是暂保留之前echarts封装模式
export default echarts
