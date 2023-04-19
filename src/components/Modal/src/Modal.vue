<script setup lang="ts">
import { propTypes } from '@/utils/propTypes'
import { computed } from 'vue';

const props = defineProps({
  visible: propTypes.bool.def(false),
  title: propTypes.string.def('编辑'),
  alignCenter: propTypes.bool.def(true)
})

const emits = defineEmits(['update:visible', 'cancel', 'ok'])

function modalCancel() {
  emits('cancel')
}

function modalOk() {
  emits('ok')
}

const dialogOpen = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emits('update:visible', value);
  }
});

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
