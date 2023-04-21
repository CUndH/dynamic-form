<script setup lang="ts">
import { inject, Ref, unref } from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { addRoleApi } from '@/api/role'
import { ElMessage } from 'element-plus'

const COMPONENT_PREFIX = 'add-user-dialog'

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


const userDetailVisible = inject<Ref<boolean>>('userDetailVisible')
const userForm = inject<Ref<UserData | {}>>('userForm')

interface UserData {
  account: string
  department: string
  roleId: string
  phone: string
  pwd: string
  sex: number
}

function modalCancel() {
  userDetailVisible!.value = false
}

function submitData() {
  addRoleApi(unref(userForm)).then((res) => {
    if (res.code !== 0) {
      ElMessage.success('保存成功')
      modalCancel()
    }
  })
}
</script>

<template>
  <Modal
    title="新建角色"
    :class="`${COMPONENT_PREFIX}`"
    :close-on-click-modal="false"
    v-model:visible="userDetailVisible"
    align-center
    :width="'25%'"
    @cancel="modalCancel"
    @ok="submitData"
  >
    <template #content>
      <DynamicForm ref="roleFormRef" :form-config="roleFormConfig" :model="userForm" />
    </template>
  </Modal>
</template>
