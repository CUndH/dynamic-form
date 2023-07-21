<script setup lang="ts">
import { useField } from '@formily/vue'

const field = useField()

console.log(field.value, '单选')

const props = field.value.props

const componentProps = props.component![1] || {}
</script>

<template>
  <el-radio-group v-model="field.value">
    <el-radio
      v-for="item in props.dataSource"
      :key="item.value"
      :label="item.value"
      :size="componentProps.size || 'large'"
      :border="componentProps.border"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>
