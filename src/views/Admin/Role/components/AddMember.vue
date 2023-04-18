<script setup lang="ts">
import { propTypes } from '@/utils/propTypes';
import { computed } from 'vue';

const COMPONENT_PREFIX = 'add-member-dialog'

const props = defineProps({
  visible: propTypes.bool.def(false)
})

const emits = defineEmits(['update:visible'])

const dialogOpen = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  }
})

</script>

<template>
  <Modal
    v-model:visible="dialogOpen"
    title="新建角色"
    :class="`${COMPONENT_PREFIX}`"
    :close-on-click-modal="false"
    align-center
    :width="'25%'"
    @cancel="modalCancel"
    @ok="submitData"
  >
    <template #content>
      <DynamicForm ref="roleFormRef" :form-config="roleFormConfig" :model="roleData" />
    </template>
  </Modal>
</template>
