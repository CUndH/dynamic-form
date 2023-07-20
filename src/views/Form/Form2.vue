<script setup lang="ts">
import Temp from './components/DynamicTemp.vue'

const configs = [
  {
    name: 'opcAddress',
    title: 'opc地址',
    type: 'inputAddition'
  },
  { name: 'port', title: '端口', type: 'input' }
]
</script>

<template>
  <div>
    <Temp :configs="configs" />
  </div>
</template>
