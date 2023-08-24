<script setup lang="ts">
import PieCard from './PieCard.vue'

const data: IPieData[] = [
  {
    name: '用电',
    value: 163.52
  },
  {
    name: '用水',
    value: 163.52
  },
  {
    name: '用热',
    value: 163.52
  },
  {
    name: '用气',
    value: 163.52
  }
]
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">能耗使用占比（38）</div>
  </div>

  <div class="box-content overflow-hidden pr-20px">
    <PieCard :data="data" />
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
