<script setup lang="ts">
import { useField } from "@formily/vue";

const field = useField();
console.log(field.value);
</script>

<template>
  <el-input v-model:model-value="field.value">
    <template #prepend>陈</template>
  </el-input>
</template>
