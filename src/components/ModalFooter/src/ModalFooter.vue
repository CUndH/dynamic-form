<script setup lang="ts">
  const emits = defineEmits(['onCancel', 'onConfirm'])

  function onCancel() {
    emits('onCancel')
  }
  
  function onConfirm() {
    emits('onConfirm')
  }
</script>
<template>
  <div class="text-right">
    <el-button @click="onCancel">取消</el-button>
    <el-button type="primary" @click="onConfirm">确定</el-button>
  </div>
</template>