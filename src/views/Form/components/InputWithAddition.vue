<script setup lang="ts">
import { useField } from '@formily/vue'

const field = useField()
</script>

<template>
  <el-input placeholder="Please input" v-model="field.value">
    <template #prepend>opc://</template>
  </el-input>
</template>
