<script setup lang="ts">
import Temp from './components/DynamicTemp.vue'

const configs = [
  {
    name: 'opcAddress',
    title: 'opc地址',
    type: 'inputAddition'
  },
  { name: 'port', title: '端口', type: 'input' },
  {
    name: 'bitwiseReading',
    title: '读取位',
    type: 'radio',
    options: [
      { label: '是', value: 1, border: true },
      { label: '否', value: 0, border: true }
    ]
  }
]
</script>

<template>
  <div>
    <Temp :configs="configs" />
  </div>
</template>
