<script setup lang="ts">
import { PropType, ref} from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { useVModel } from '@vueuse/core'
import { ElMessageBox } from 'element-plus'
import { DynamicFormInstance } from '@/types/component/dynamicForm'
import { debounce } from 'lodash-es'


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
        fetchFunc: () => [
          { text: '启用', label: 1 },
          { text: '禁用', label: 0 }
        ]
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

interface UserData {
  account: string
  department: string
  roleId: string
  phone: string
  pwd: string
  sex: number
}

const props = defineProps({
  userData: {
    type: Object as PropType<UserData | {}>
  },
  onConfirm: {
    type: Function,
    required: true
  }
})

const data = useVModel(props, 'userData')

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
  <DynamicForm ref="statusFormRef" :form-config="statusFormConfig" :model="data" />
  <ModalFooter @on-cancel="onCancel" @on-confirm="submitData" />
</template>
