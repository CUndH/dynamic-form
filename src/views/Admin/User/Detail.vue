<script setup lang="ts">
import { getUserApi, getUserListApi } from '@/api/member'
import { getRoleListApi } from '@/api/role'
import { useDesign } from '@/utils/useDesign'
import { stringFormatter } from '@/utils/useFormatter'
import { useTable } from '@/utils/useTable'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import defaultAvatar from '@/assets/images/avatar.jpg'
import { updateUserApi } from '@/api/user'
import { useUserDetailModal } from './User.data'
import { RES_CODE_SUEECSS } from '@/constants'
import { ElMessage } from 'element-plus'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('role-detail')

const route = useRoute()

const userId = computed(() => route.query.id)

const formData = ref({})

function getUserDetail() {
  getUserApi({ userId }).then((res) => {
    if (res.code !== 0) {
      formData.value = res.data
    }
  })
}

onMounted(() => {
  getUserDetail()
  getOperationList()
  getLoginTableList()
  getOperationTableList()
})

const userDetailForm = ref({})

function setDetailForModal() {
  userDetailForm.value = formData

  useUserDetailModal({
    title: '编辑用户',
    componentProps: {
      userData: userDetailForm.value,
      onConfirm: () => {
        return updateUserApi(userDetailForm.value).then((res) => {
          if (res.code === RES_CODE_SUEECSS) {
            ElMessage.success('保存成功')
          }
        })
      }
    },
    opts: {
      showConfirmButton: false
    }
  })
}
const activeName = ref('1')

const operationList = ref([])

const checkedOperationList = ref([])

function getOperationList() {
  getRoleListApi().then((res) => {
    if (res.code === 0) {
      operationList.value = res.data
    }
  })
}

function getLoginTableCallBack(tableObject, res: IResponse) {
  if (res.code !== 0) {
    tableObject.tableList = []
    tableObject.total = 0
  } else {
    tableObject.tableList = res.data.records
    tableObject.total = res.data.total
  }
}

const {
  methods: loginTableMethods,
  register: loginTableRegister,
  tableObject: loginTableObject
} = useTable({
  getListApi: getUserListApi,
  getListCallback: getLoginTableCallBack
})

const { getList: getLoginTableList } = loginTableMethods

const loginTableColumns: TableColumn[] = [
  {
    field: 'name',
    label: '姓名',
    align: 'left',
    'min-width': 160
  },
  {
    field: 'department',
    label: '部门',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'department'),
    'min-width': 300
  },
  {
    field: 'time',
    label: '添加时间',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'time'),
    'min-width': 300
  }
]

function getOperationTableCallBack(tableObject, res: IResponse) {
  if (res.code !== 0) {
    tableObject.tableList = []
    tableObject.total = 0
  } else {
    tableObject.tableList = res.data.records
    tableObject.total = res.data.total
  }
}

const {
  methods: operationTableMethods,
  register: operationTableRegister,
  tableObject: operationTableObject
} = useTable({
  getListApi: getUserListApi,
  getListCallback: getOperationTableCallBack
})

const { getList: getOperationTableList } = operationTableMethods

const operationTableColumns: TableColumn[] = [
  {
    field: 'time',
    label: '操作时间',
    align: 'left',
    'min-width': 250
  },
  {
    field: 'realName',
    label: '操作人员',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'realName'),
    'min-width': 150
  },
  {
    field: 'type',
    label: '操作类型',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'type'),
    'min-width': 150
  },
  {
    field: 'remark',
    label: '操作详情',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'remark'),
    'min-width': 300
  }
]

const authOfPrjList = ref([])
</script>

<template>
  <div :class="`${prefixCls}`">
    <div :class="`${prefixCls}-header bg-white`">
      <div :class="`${prefixCls}-header-left`">
        <div class="ml-20px">
          <img
            class="w-50px h-50px mr-10 border-0 rounded-1/2"
            :src="formData.avatar || defaultAvatar"
          />
        </div>
        <div :class="`${prefixCls}-header-left-name`">
          <div>
            <span class="font-16px font-bold mr-5">{{ formData.realName }}</span>
            <el-text type="success">在线</el-text>
          </div>
          <div class="text-13px mt-5 mb-4">{{ formData.department }}/{{ formData.roleName }}</div>
        </div>
      </div>
      <div :class="`${prefixCls}-header-right`">
        <el-button type="primary" plain @click="setDetailForModal">
          <template #icon>
            <Icon icon="ep:edit-pen" :size="16" />
          </template>
          编辑用户
        </el-button>
        <el-button>
          <template #icon>
            <Icon icon="mdi:user-group" :size="16" />
          </template>
          修改部门
        </el-button>
        <el-button>
          <template #icon>
            <Icon icon="ic:baseline-supervised-user-circle" :size="16" />
          </template>
          修改角色
        </el-button>
        <el-button>
          <template #icon>
            <Icon icon="uiw:setting" :size="16" />
          </template>
          设置状态
        </el-button>
        <el-button>
          <template #icon>
            <Icon icon="ion:finger-print" :size="16" />
          </template>
          重置密码
        </el-button>
        <el-button>
          <template #icon>
            <Icon icon="material-symbols:upload-rounded" :size="16" />
          </template>
          导入数据
        </el-button>
      </div>
    </div>

    <div class="bg-white p-5 mt-5 rounded-xl">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录日志" name="1">
          <Table
            v-model:pageSize="loginTableObject.size"
            v-model:currentPage="loginTableObject.current"
            :class="`${prefixCls}-table`"
            :columns="loginTableColumns"
            :data="loginTableObject.tableList"
            :loading="loginTableObject.loading"
            :border="true"
            :stripe="true"
            :selection="false"
            :pagination="{
              total: loginTableObject.total
            }"
            @register="loginTableRegister"
          >
            <template #empty>
              <div :class="`${prefixCls}-table-empty`">暂无数据</div>
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="操作记录" name="2">
          <Table
            v-model:pageSize="operationTableObject.size"
            v-model:currentPage="operationTableObject.current"
            :class="`${prefixCls}-table`"
            :columns="operationTableColumns"
            :data="operationTableObject.tableList"
            :loading="operationTableObject.loading"
            :border="true"
            :stripe="true"
            :selection="false"
            :pagination="{
              total: operationTableObject.total
            }"
            @register="operationTableRegister"
          >
            <template #empty>
              <div :class="`${prefixCls}-table-empty`">暂无数据</div>
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="操作权限" name="3">
          <div class="bg-white py-5 px-10">
            <el-checkbox-group v-model:modelValue="checkedOperationList">
              <table v-for="item in operationList" :key="item.id" class="w-full text-left my-10">
                <thead>
                  <tr>
                    <th colspan="3" class="p-5 bg-gray-100">
                      <el-checkbox>{{ item.name }}</el-checkbox>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td v-for="subItem in item.list" :key="subItem.id" class="p-5">
                      <el-checkbox :label="subItem.id">
                        {{ subItem.name }}
                      </el-checkbox>
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-checkbox-group>
            <el-divider />
            <div class="text-center">
              <el-button type="primary" large>保存</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目权限" name="4">
          <div :class="`${prefixCls}-project-auth bg-white p-20`">
            <div>
              <span class="font-bold">数据权限</span>
              <span>（设置该角色的用户可以操作的数据的范围）</span>
            </div>
            <div class="mt-12">
              <el-checkbox-group v-model:modelValue="authOfPrjList">
                <el-row>
                  <el-col :span="3">
                    <el-checkbox label="1">个人</el-checkbox>
                  </el-col>
                  <el-col :span="20" class="pt-3px font-12px text-[#aaa]"
                    >只能操作自己和下属的数据</el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="3">
                    <el-checkbox label="2">所属部门</el-checkbox>
                  </el-col>
                  <el-col :span="20" class="pt-3px font-12px text-[#aaa]"
                    >能操作自己、下属、和自己所属部门的数据</el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="3">
                    <el-checkbox label="3">所属部门及下属部门</el-checkbox>
                  </el-col>
                  <el-col :span="20" class="pt-3px font-12px text-[#aaa]"
                    >所属部门及下属部门 能操作自己、下属和自己所属部门及其子部门的数据</el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="3">
                    <el-checkbox label="4">全公司</el-checkbox>
                  </el-col>
                  <el-col :span="20" class="pt-3px font-12px text-[#aaa]"
                    >能操作全公司的数据</el-col
                  >
                </el-row>
              </el-checkbox-group>
            </div>
            <el-divider />
            <div class="text-center">
              <el-button type="primary" large>保存</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-role-detail';

.#{$prefix-chart} {
  padding: 10px;

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px;
    border-radius: 8px;

    &-left {
      display: flex;
      align-items: center;
    }
  }

  table,
  th,
  td {
    border: 1px solid #eee;
  }

  :deep(.el-tabs__header) {
    margin-bottom: 0;
  }

  :deep(th .el-checkbox__label) {
    font-size: 15px;
    font-weight: bold;
  }

  &-project-auth {
    :deep(.el-checkbox-group) {
      font-size: 14px;
      line-height: inherit;
    }
  }
}
</style>
