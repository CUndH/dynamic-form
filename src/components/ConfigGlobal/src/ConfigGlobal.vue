<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const { variables } = useDesign()
</script>

<template>
  <ElConfigProvider :locale="zhCn" :namespace="variables.elNamespace" :message="{ max: 3 }">
    <slot></slot>
  </ElConfigProvider>
</template>
