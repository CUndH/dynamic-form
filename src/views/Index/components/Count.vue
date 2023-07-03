<script setup lang="ts">
import CountItem from './CountItem.vue'
import { computed, inject } from 'vue'
import { themeConfigs } from '@/config/app'

const counts: ICount[] = [
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    categoryValue: 12
  },
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    category: '月环比',
    categoryValue: -12
  },
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    categoryValue: 12
  },
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    categoryValue: 12
  },
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    category: '月环比',
    categoryValue: -12
  },
  {
    label: '本月用电（kw·h）',
    value: 4985.36,
    categoryValue: 12
  }
]

const echartTheme = inject('echartTheme') as ThemeTypes
const colors = computed(() => {
  const theme = echartTheme.mainBgColor
  const target = themeConfigs.find((item) => item.label === theme)
  if (target) {
    return target.echartTheme.color
  } else {
    return []
  }
})
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">用能概况统计</div>
  </div>

  <div class="h-[calc(100%-45px)] overflow-hidden">
    <div :class="counts.length > 4 ? 'h-full' : ''" class="flex pl-28px pr-20px justify-between flex-wrap">
      <CountItem
        v-for="(count, index) in counts"
        :key="index"
        :index="index"
        :count="count"
        :color="colors.length > 0 ? colors[index % colors.length] : ''"
        :class="index > counts.length - 3 ? '' : 'has-shadow'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
