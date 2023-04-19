<script setup lang="ts">
import { inject, Ref, ref, unref } from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { Modal } from '@/components/Modal'
import { setStatusByRoleId } from '@/api/role'
import { ElMessage } from 'element-plus'

const COMPONENT_PREFIX = 'set-status-dialog'

interface IProps {
  roleId: string
}

const props = defineProps<IProps>()

const statusData = ref({
  status: 1,
  remark: ''
})

const statusFormConfig: DynamicFormConfig[] = [
  {
    label: '',
    colsNumber: 1,
    config: [
      {
        label: '选择状态',
        labelWidth: '10rem',
        dynamicFormProp: 'status',
        type: 'radio',
        required: true,
        border: true,
        fetchFunc: () => [{ text: '启用', label: 1 }, { text: '禁用', label: 0 }]
      },
      {
        label: '备注内容',
        labelWidth: '10rem',
        dynamicFormProp: 'remark',
        type: 'textarea',
        rows: 5,
        maxlength: 100,
        resize: 'none',
        showWordLimit: true
      }
    ]
  }
]

function resetStatusData() {
  statusData.value = {
    status: 1,
    remark: ''
  }
}

const setStatusVisible = inject<Ref<boolean>>('setStatusVisible')

function modalCancel() {
  resetStatusData()
  setStatusVisible!.value = false
}

function submitData() {
  let params = {
    ...unref(statusData),
    roleId: props.roleId
  }
  setStatusByRoleId(params).then((res) => {
    if (res.code !== 0) {
      ElMessage.success('保存成功')
      modalCancel()
    }
  })
}
</script>

<template>
  <Modal
    title="设置状态"
    :class="`${COMPONENT_PREFIX}`"
    :close-on-click-modal="false"
    v-model:visible="setStatusVisible"
    align-center
    :width="'25%'"
    @cancel="modalCancel"
    @ok="submitData"
  >
    <template #content>
      <DynamicForm ref="statusFormRef" :form-config="statusFormConfig" :model="statusData" />
    </template>
  </Modal>
</template>
