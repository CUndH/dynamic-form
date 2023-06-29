import * as echarts from 'echarts'
// 访问用户数趋势折现图
export function UserTrendOption() {
  const xData: number[] = []
  const yData: number[] = []
  for (let i = 0; i < 30; i++) {
    xData.push(i)
    yData.push(Math.floor(Math.random() * 100))
  }
  return {
    grid: {
      bottom: 35,
      left: 50,
      right: 20,
      top: 16
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'rgba(50,50,50,0.7)'
    },
    xAxis: {
      type: 'category',
      data: xData,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      name: '',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: yData,
        type: 'line',
        name: '',
        symbolSize: 12,
        showSymbol: false,
        lineStyle: {
          width: 4,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 12,
          shadowOffsetY: 16
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(204, 204, 204, 0.5)'
            },
            {
              offset: 1,
              color: 'rgba(252, 252, 252, 0.5)'
            }
          ])
        },
        smooth: true
      }
    ]
  }
}

// 业务数情况饼图
export function getCountsPieOption(data: IPieData[]) {
  // ${t('common.defaultUnit')}
  const legendData = data.map((item) => item.name)
  const option = {
    grid: {
      bottom: 0,
      left: 0,
      right: '10%'
    },
    legend: {
      show: true,
      orient: 'horizontal',
      top: 'middle',
      left: '180px',
      type: 'plain',
      itemGap: 40,
      width: '70%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: '#003564',
        fontSize: 14
      },
      icon: 'rect',
      data: legendData,
      formatter: function (value) {
        const target = data.find((item) => item.name === value)
        const html = `${value} ${target && target.value}`
        return html
      }
    },
    series: [
      // 主要展示层的
      {
        radius: ['40%', '72%'],
        center: ['80px', '50%'],
        type: 'pie',
        itemStyle: {
          normal: {
            borderRadius: 4,
            borderColor: '#fff',
            borderWidth: 2
          }
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '14',
            fontWeight: 'bold',
            formatter: (params) => {
              const html = `${params.percent}%\n${params.name}`
              return html
            }
          }
        },
        data: data
      },
      // 边框的设置
      {
        radius: ['65%', '75%'],
        center: ['80px', '50%'],
        type: 'pie',
        label: {
          emphasis: {
            show: false
          }
        },
        labelLine: {
          emphasis: {
            show: false
          }
        },
        animation: false,
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)'
          }
        },
        data: [
          {
            value: 1
          }
        ]
      }
    ]
  }
  if (data.length > 12) {
    option.legend.type = 'scroll'
  }
  return option
}
