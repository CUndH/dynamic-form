<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { ConfigGlobal } from '@/components/ConfigGlobal'
import eventBus, { EventTypeName } from '@/utils/eventBus'
import { Layout } from './components/Layout'
import { useRouter } from 'vue-router'
import { useTagsViewStore } from './store/modules/tagsView'

eventBus.listen(EventTypeName.PAGE_START_LOAD, () => {
  isRouterLoading.value = true
})

eventBus.listen(EventTypeName.PAGE_LOADED, () => {
  isRouterLoading.value = false
})

const isRouterLoading = ref(true)

const { currentRoute } = useRouter()

onUnmounted(() => {
  Object.keys(EventTypeName).forEach((key) => {
    eventBus.cancel(EventTypeName[key])
  })
})

const tagsViewStore = useTagsViewStore()

const getCaches = computed((): string[] => {
  return tagsViewStore.getCachedViews
})
</script>

<template>
  <ConfigGlobal>
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive :include="getCaches">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
    </router-view>
  </ConfigGlobal>
</template>
