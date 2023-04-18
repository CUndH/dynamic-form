<script setup lang="ts">
import { propTypes } from '@/utils/propTypes'
import { inject, Ref } from 'vue'

const props = defineProps({
  title: propTypes.string.def('编辑'),
  alignCenter: propTypes.bool.def(true)
})

const emits = defineEmits(['update:visible', 'cancel', 'ok'])

const dialogOpen = inject<Ref<boolean>>('dialogOpen')

function modalCancel() {
  emits('cancel')
}

function modalOk() {
  emits('ok')
}
</script>

<template>
  <el-dialog
    v-model="dialogOpen"
    :title="props.title"
    :align-center="props.alignCenter"
    v-bind="$attrs"
  >
    <slot name="content"></slot>

    <template #footer>
      <span>
        <el-button @click="modalCancel">取消</el-button>
        <el-button type="primary" @click="modalOk">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>
