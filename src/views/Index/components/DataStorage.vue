<script setup lang="ts">
import { computed } from 'vue'
import DataStorageItem from '../components/DataStorageItem.vue'
import { useAppStore } from '@/store/modules/app'

interface IDataStorages {
  left: string
  right: string
}

const dataStorages: IDataStorages[] = [
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

const appStore = useAppStore()
const themeName = computed(() => {
  return appStore.getTheme.mainBgColor
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
    <div class="flex px-20px justify-between flex-wrap h-full">
      <DataStorageItem
        v-for="(dataStorage, index) in dataStorages"
        :key="index"
        :left="dataStorage.left"
        :right="dataStorage.right"
        :style="{ borderBottom: index > dataStorages.length - 2 ? '1px solid #DCDFE6' : 'none' }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
