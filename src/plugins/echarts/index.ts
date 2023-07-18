import { use, ComposeOption } from 'echarts/core'
import ECharts, { THEME_KEY } from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
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

export function setupPluginVueEchart(app: App<Element>, theme = 'light') {
  app.provide(THEME_KEY, theme)
  app.component('VChart', ECharts)
}

export { ECOption }
