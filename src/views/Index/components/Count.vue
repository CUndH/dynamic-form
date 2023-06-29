<script setup lang="ts">
import CountItem from '../components/CountItem.vue'

interface ICounts {
  label: string
  value?: string
  icon?: string
  category?: string
  categoryValue?: string
}

const counts: ICounts[] = [
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    categoryValue: '+12%'
  },
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    category: '月环比',
    categoryValue: '-12%'
  },
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    categoryValue: '+12%'
  },
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    categoryValue: '+12%'
  },
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    category: '月环比',
    categoryValue: '-12%'
  },
  {
    label: '本月用电（kw·h）',
    value: '4985.36',
    categoryValue: '+12%'
  }
]
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">用能概况统计</div>
  </div>

  <div class="h-[calc(100%-45px)] overflow-hidden">
    <div class="flex pl-28px pr-20px justify-between flex-wrap h-full">
      <CountItem
        v-for="(count, index) in counts"
        :key="index"
        :index="index"
        :label="count.label"
        :value="count.value"
        :icon="count.icon"
        :category="count.category"
        :categoryValue="count.categoryValue"
        :style="{ boxShadow: index > counts.length - 3 ? 'none' : 'inset 0px -1px 0px 0px rgba(220, 223, 230, 0.61)' }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage';

.#{$prefix-chart} {
  &-wrap {
    &-right {
      width: 40%;
    }
    &-top {
      height: 40%;
    }
    &-middle {
      height: 27%;
    }
    &-bottom {
      height: 33%;
    }
  }
}
</style>
