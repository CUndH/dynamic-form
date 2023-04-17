import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  BarChart,
  PieChart,
  MapChart,
  GaugeChart,
  SankeyChart,
  TreeChart
} from 'echarts/charts'

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
  PolarComponent,
  MarkPointComponent,
  MarkLineComponent
} from 'echarts/components'

const useOptions = [
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
]

export default useOptions
