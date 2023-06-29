<script setup lang="ts">
import PieCard from './PieCard.vue'

const data: IPieData[] = [
  {
    name: '采集仪表（台）',
    value: 20
  },
  {
    name: '网关设备（台）',
    value: 10
  },
  {
    name: '用能设备（台）',
    value: 10
  }
]

let devices = data.reduce((devices, datum) => (devices += datum.value), 0)
</script>

<template>
  <div class="box-header w-full px-20px">
    <div class="title truncate">设备接入（10/{{ devices }}）</div>
  </div>

  <div class="box-content overflow-hidden pr-20px">
    <PieCard :data="data" />
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
