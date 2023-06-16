<script setup lang="ts">
import { PropType, ref } from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { debounce } from 'lodash-es'
import { DynamicFormInstance } from '@/types/component/dynamicForm'
import { ElMessageBox } from 'element-plus'

const roleFormConfig: DynamicFormConfig[] = [
  {
    label: '',
    colsNumber: 1,
    config: [
      {
        label: '角色名称',
        labelWidth: '10rem',
        dynamicFormProp: 'name',
        type: 'input',
        required: true
      },
      {
        label: '角色描述',
        labelWidth: '10rem',
        dynamicFormProp: 'describe',
        type: 'textarea',
        rows: 5,
        maxlength: 100,
        resize: 'none',
        showWordLimit: true
      }
    ]
  }
]

interface RoleData {
  roleName: string;
  roleDescribe: string;
}

const props = defineProps({
  roleData: {
    type: Object as PropType<RoleData | {}>
  },
  onConfirm: {
    type: Function,
    required: true
  }
})
const formRef = ref<DynamicFormInstance>()

const submitData = debounce(() => {
  let ref = formRef.value?.getFormRef()

  ref?.validate(async (valid) => {
    if (valid) {
      await props?.onConfirm()
      onCancel()
    }
  })
}, 300)

function onCancel() {
  ElMessageBox.close()
}
</script>

<template>
  <DynamicForm ref="roleFormRef" :form-config="roleFormConfig" :model="props.roleData" />
  <ModalFooter @on-cancel="onCancel" @on-confirm="submitData" />
</template>
