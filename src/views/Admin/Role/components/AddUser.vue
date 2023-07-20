<script setup lang="ts">
import { getMemberOfDepartment } from '@/api/member'
import { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import { DynamicFormInstance } from '@/types/component/dynamicForm';
import { ElMessageBox } from 'element-plus';
import { debounce } from 'lodash-es';
import { PropType, onMounted, ref } from 'vue'

interface addUserData2 {
  roleId: string;
  roleName: string;
  userId: string;
}

const props = defineProps({
  addUserData: {
    type: Object as PropType<addUserData2 | {}>
  },
  onConfirm: {
    type: Function,
    required: true
  }
})
const userId = ref('')

const userFormConfig: DynamicFormConfig[] = [
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
        label: '选择成员',
        labelWidth: '10rem',
        dynamicFormProp: 'userId',
        required: true,
        rules: [
          {
            required: true,
            message: '成员不可为空',
            trigger: 'blur'
          }
        ]
      }
    ]
  }
]

const userOpts = ref([])

function getUserOfDepartmentList() {
  getMemberOfDepartment().then((res) => {
    userOpts.value = res.data
  })
}

onMounted(() => {
  getUserOfDepartmentList()
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
  <div>
    <DynamicForm ref="userFormRef" :form-config="userFormConfig" :model="props.addUserData">
      <template #userId>
        <el-select v-model="userId" placeholder="Select">
          <el-option-group
            v-for="department in userOpts"
            :key="department.id"
            :label="department.name"
          >
            <el-option
              v-for="member in department.userList"
              :key="member.id"
              :label="member.name"
              :value="member.id"
            />
          </el-option-group>
        </el-select>
      </template>
    </DynamicForm>
    <p class="mt-3 pl-40">如果该员工已被分配其它职务，添加后员工将被修改职务</p>
    <ModalFooter @on-cancel="onCancel" @on-confirm="submitData" />
  </div>
</template>
