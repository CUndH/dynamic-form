<script setup lang="ts">
import { computed, inject } from 'vue'
import DataStorageItem from './DataStorageItem.vue'

const dataStorages: IDataStorage[] = [
  {
    left: 'HLNH2022/1',
    right: '2022/01/31'
  },
  {
    left: 'HLNH2022/1',
    right: '2022/01/31'
  },
  {
    left: 'HLNH2022/1',
    right: '2022/01/31'
  },
  {
    left: 'HLNH2022/1',
    right: '2022/01/31'
  }
]

const echartTheme = inject('echartTheme') as ThemeTypes
const themeName = computed(() => {
  return echartTheme.mainBgColor
})
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">能耗数据存储（{{ dataStorages.length }}）</div>
    <div class="tool-wrap">
      <img
        v-if="themeName?.includes('gradient')"
        src="src/assets/images/homepage/bar_gradient.png"
      />
      <img v-else src="src/assets/images/homepage/bar_normal.png" />
    </div>
  </div>

  <div class="h-[calc(100%-60px)] overflow-hidden">
    <div :class="dataStorages.length > 3 ? 'h-full' : ''" class="flex px-20px justify-between flex-wrap">
      <DataStorageItem
        v-for="(dataStorage, index) in dataStorages"
        :key="index"
        :dataStorage="dataStorage"
        :class="index > dataStorages.length - 2 ? 'has-border-bottom' : ''"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
