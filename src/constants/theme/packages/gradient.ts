import * as echarts from 'echarts'

export default {
  label: 'linear-gradient(0, #8C83F7 0%, #F589CF 100%)',
  value: {
    mainBgColor: 'linear-gradient(0, #8C83F7 0%, #F589CF 100%)',
    className: 'gradient',
    layoutLogoBg: '#f28bd2',
    layoutLogoColor: '#ffffff',
    layoutMenuActiveBg: 'linear-gradient(90deg, #D16DCD 0%, #9A68E0 100%)',
    layoutMenuHoverBg: 'rgba(142, 131, 246, 0.3)',
    layoutMenuColor: '#ffffff',
    layoutMenuHoverColor: '#ffffff',
    layoutMenuActiveColor: '#ffffff',
    layoutMenuWidth: '22rem',
    layoutMenuCollapseWidth: '72px',
    elMenuItemHeight: '6rem',
    toolHeaderHeight: '6.4rem',
    toolHeaderBg: '#ffffff',
    contentBg: '#f2f1ff',
    tagsViewHeight: '32px',
    tagsViewBg: '#ffffff',
    tagsViewActiveBg: '#ffffff',
    tagsViewColor: '#04113F',
    tagsViewActiveColor: '#8b4bf3',
    colorNormal: '#04113F',
    colorPrimary: '#8C83F7',
    colorDanger: '#FF2A2A',
    colorSuccess: '#2CCA75'
  },
  echartTheme: {
    color: ['#8C82F7', '#a97ce4', '#537afa', '#ea8ec8', '#75aee8', '#69b3e2', '#e58b6b' , '#e2a731'],
    line: {
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(140,131,247,0.50)'
          },
          {
            offset: 1,
            color: 'rgba(252,252,252,0.50)'
          }
        ]),
      },
    }
  },
};
