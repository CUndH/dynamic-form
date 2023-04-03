<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { ConfigGlobal } from '@/components/ConfigGlobal'
import eventBus, { EventTypeName } from '@/utils/eventBus'

eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})

const isRouterLoading = ref(true)

onUnmounted(() => {
  Object.keys(EventTypeName).forEach((key) => {
    eventBus.cancel(EventTypeName[key])
  })
})
</script>

<template>
  <ConfigGlobal>
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </router-view>
  </ConfigGlobal>
</template>
