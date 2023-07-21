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
    dataSource: [
      { label: '是', value: 1 },
      { label: '否', value: 0 }
    ],
    
  },
]
</script>

<template>
  <div>
    <Temp :configs="configs" />
  </div>
</template>
