<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: '3'
  },
  unit: {
    type: String,
    default: ''
  },
  extraTitle: {
    type: String,
    default: ''
  },
  extraValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="box h-240px p-20px w-[calc(33.3%-8px)] max-w-[calc(33.3%-8px)] bg-white rounded-6px">
    <div class="box-header">
      <div class="title truncate">{{ title }}</div>
    </div>
    <div class="w-full flex flex-1 items-center overflow-hidden">
      <div class="mr-12px truncate">
        <span class="text-36px">{{ value }}</span>
        <span class="text-16px ml-4px text-[var(--color-lighter)]">{{ unit }}</span>
      </div>
    </div>
    <div
      class="extra flex py-10px border-[var(--border-color)]"
      :class="{ 'border-t-1': extraTitle }"
    >
      <span class="mr-6px">{{ extraTitle }}:</span>
      <span>{{ extraValue }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
