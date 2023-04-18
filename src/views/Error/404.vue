<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRouterStore } from '@/store/modules/router';

const { push } = useRouter();

const routerStore = useRouterStore();

const errorClick = () => {
  push(routerStore.addRouters[0]?.path as string);
};
</script>

<template>
  <Error @error-click="errorClick" />
</template>
