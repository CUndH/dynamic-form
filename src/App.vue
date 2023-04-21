<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
// import { ConfigGlobal } from '@/components/ConfigGlobal'
import eventBus, { EventTypeName } from '@/utils/eventBus'
// import { Layout } from './components/Layout'
// import { useRouter } from 'vue-router'
eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})

const isRouterLoading = ref(true)

// const { currentRoute } = useRouter()

onUnmounted(() => {
  Object.keys(EventTypeName).forEach((key) => {
    eventBus.cancel(EventTypeName[key])
  })
})
</script>

<template>
  <ConfigGlobal>
    <router-view />
  </ConfigGlobal>
</template>
