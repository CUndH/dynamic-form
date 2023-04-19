<script setup lang="ts">
import { getMemberOfDepartment } from '@/api/member'
import { addMemberApi } from '@/api/role'
import { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { ElMessage } from 'element-plus'
import { Modal } from '@/components/Modal'
import { inject, onMounted, ref, Ref } from 'vue'

const COMPONENT_PREFIX = 'add-member-dialog'

const addMemberVisible = inject<Ref<boolean>>('addMemberVisible')

interface IProps<T = Record<string, any>> {
  data: T
}

const props = defineProps<IProps>()

const memberId = ref('');

const memberFormConfig: DynamicFormConfig[] = [
  {
    label: '',
    colsNumber: 1,
    config: [
      {
        label: '角色名称',
        labelWidth: '10rem',
        dynamicFormProp: 'roleName',
        type: 'input',
        disabled: true
      },
      {
        label: '角色描述',
        labelWidth: '10rem',
        dynamicFormProp: 'memberId'
      }
    ]
  }
]

function modalCancel() {
  addMemberVisible!.value = false
}

function submitData() {
  let params = {
    ...props.data,
    memberId: memberId.value
  };

  addMemberApi(params).then((res) => {
    if (res.code !== 0) {
      ElMessage.success('保存成功')
      modalCancel()
    }
  })
}

const memberOpts = ref([])

function getMemberOfDepartmentList() {
  getMemberOfDepartment().then((res) => {
    memberOpts.value = res.data
  })
}

onMounted(() => {
  getMemberOfDepartmentList()
})
</script>

<template>
  <Modal
    title="添加人员"
    :class="`${COMPONENT_PREFIX}`"
    v-model:visible="addMemberVisible"
    :close-on-click-modal="false"
    align-center
    :width="'25%'"
    @cancel="modalCancel"
    @ok="submitData"
  >
    <template #content>
      <DynamicForm ref="memberFormRef" :form-config="memberFormConfig" :model="props.data">
        <template #memberId>
          <el-select v-model="memberId" placeholder="Select">
            <el-option-group
              v-for="department in memberOpts"
              :key="department.id"
              :label="department.name"
            >
              <el-option
                v-for="member in department.memberList"
                :key="member.id"
                :label="member.name"
                :value="member.id"
              />
            </el-option-group>
          </el-select>
        </template>
      </DynamicForm>
      <p class="mt-3 pl-40">如果该员工已被分配其它职务，添加后员工将被修改职务</p>
    </template>
  </Modal>
</template>
