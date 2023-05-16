<script setup lang="ts">
import { PropType } from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { useVModel } from '@vueuse/core'

const roleFormConfig: DynamicFormConfig[] = [
  {
    label: '',
    colsNumber: 1,
    config: [
      {
        label: '登录账号',
        labelWidth: '10rem',
        dynamicFormProp: 'account',
        placeholder: '不设置默认手机号',
        type: 'input'
      },
      {
        label: '所属部门',
        labelWidth: '10rem',
        dynamicFormProp: 'department',
        type: 'select',
        required: true
      },
      {
        label: '用户角色',
        labelWidth: '10rem',
        dynamicFormProp: 'roleId',
        type: 'select',
        required: true
      },
      {
        label: '手机号码',
        labelWidth: '10rem',
        dynamicFormProp: 'phone',
        type: 'input',
        required: true
      },
      {
        label: '初始密码',
        labelWidth: '10rem',
        dynamicFormProp: 'phone',
        placeholder: '如不设置默认初始密码 000000',
        type: 'input'
      },
      {
        label: '性别',
        labelWidth: '10rem',
        dynamicFormProp: 'sex',
        type: 'radio',
        border: true,
        fetchFunc: () => [
          { text: '男性', label: 1 },
          { text: '女性', label: 2 }
        ]
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
  }
})

const data = useVModel(props, 'userData')
</script>

<template>
  <DynamicForm ref="roleFormRef" :form-config="roleFormConfig" :model="data" />
</template>
