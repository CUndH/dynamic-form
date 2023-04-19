<script setup lang="ts">
import { inject, Ref, ref, unref } from 'vue'
import { DynamicForm } from '@/components/DynamicForm'
import type { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { addRoleApi } from '@/api/role'
import { ElMessage } from 'element-plus'

const COMPONENT_PREFIX = 'add-role-dialog'

const roleData = ref({
  name: '',
  describe: ''
})

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
        required: true,
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

function resetRoleData() {
  roleData.value = {
    name: '',
    describe: ''
  }
}

const addRoleVisible = inject<Ref<boolean>>('addRoleVisible')

function modalCancel() {
  resetRoleData()
  addRoleVisible!.value = false
}

function submitData() {
  addRoleApi(unref(roleData)).then(res => {
    if (res.code !== 0) {
      ElMessage.success('保存成功');
      modalCancel();
    }
  })
}
</script>

<template>
  <Modal
    title="新建角色"
    :class="`${COMPONENT_PREFIX}`"
    :close-on-click-modal="false"
    v-model:visible="addRoleVisible"
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
