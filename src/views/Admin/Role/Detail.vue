<script setup lang="ts">
import { getMemberListApi } from '@/api/member'
import { deleteUserByRoleId, getRoleApi, getRoleListApi } from '@/api/role'
import { useDesign } from '@/utils/useDesign'
import { stringFormatter } from '@/utils/useFormatter'
import { useTable } from '@/utils/useTable'
import { ElMessage } from 'element-plus'
import { computed, onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import AddMember from './components/AddMember.vue'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('role-detail')

const route = useRoute()

const roleId = computed(() => route.query.id)

const formData = ref({})

function getRoleDetail() {
  getRoleApi({ roleId }).then((res) => {
    if (res.code !== 0) {
      formData.value = res.data
    }
  })
}

function getFirstFontOfRoleName(roleName: string) {
  if (!roleName) return '-'

  return roleName.slice(0, 1)
}

onMounted(() => {
  getRoleDetail()
  getOperationList()
})

const addMemberVisible = ref(false)

const addMemberData = ref({})

provide('addMemberVisible', addMemberVisible)

function addMember() {
  addMemberData.value = formData
  addMemberVisible.value = true
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

function getUserTableCallBack(tableObject, res: IResponse) {
  if (res.code !== 0) {
    tableObject.tableList = []
    tableObject.total = 0
  } else {
    tableObject.tableList = res.data.records
    tableObject.total = res.data.total
  }
}

const {
  methods: userTableMethods,
  register: userTableRegister,
  tableObject: userTableObject
} = useTable({
  getListApi: getMemberListApi,
  getListCallback: getUserTableCallBack
})

const { getList: getUserTableList } = userTableMethods

const userTableColumns: TableColumn[] = [
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
  },
  {
    field: 'action',
    label: '操作',
    width: 240,
    fixed: 'right'
  }
]

function handleDelete(row) {
  deleteUserByRoleId({
    userId: row.userId,
    roleId: row.roleId
  }).then((res) => {
    if (res.code === 0) {
      ElMessage.success('删除成功')
      getUserTableList()
    } else {
      ElMessage.error(res.msg)
    }
  })
}

function getOperationTableCallBack(tableObject, res: IResponse) {
  if (res.code !== 0) {
    tableObject.tableList = []
    tableObject.total = 0
  } else {
    tableObject.tableList = res.data.records
    tableObject.total = res.data.total
  }
}

const { register: operationTableRegister, tableObject: operationTableObject } = useTable({
  getListApi: getMemberListApi,
  getListCallback: getOperationTableCallBack
})

const operationTableColumns: TableColumn[] = [
  {
    field: 'time',
    label: '操作时间',
    align: 'left',
    'min-width': 250
  },
  {
    field: 'member',
    label: '操作人员',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'operationMember'),
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
</script>

<template>
  <div :class="`${prefixCls}`">
    <div :class="`${prefixCls}-header bg-white`">
      <div :class="`${prefixCls}-header-left`">
        <div :class="`${prefixCls}-header-left-avatar`">
          {{ getFirstFontOfRoleName(formData.roleName) }}
        </div>
        <div :class="`${prefixCls}-header-left-name`">
          <div class="font-bold text-20px mt-2 mb-4">{{ formData.roleName }}</div>
          <div class="text-14px">{{ formData.describe || '暂无更多描述' }}</div>
        </div>
      </div>
      <div :class="`${prefixCls}-header-right`">
        <el-button type="primary" plain @click="addMember">
          <template #icon>
            <Icon icon="ep:plus" :size="16" />
          </template>
          添加用户
        </el-button>
        <el-button type="default" plain>
          <template #icon>
            <Icon icon="ep:edit-pen" :size="16" />
          </template>
          编辑角色
        </el-button>
        <el-button type="default" plain>
          <template #icon>
            <Icon icon="ep:setting" :size="16" />
          </template>
          设置状态
        </el-button>
        <el-button type="default" plain>
          <template #icon>
            <Icon icon="ep:delete" :size="16" />
          </template>
          删除角色
        </el-button>
      </div>
    </div>

    <el-tabs v-model="activeName" class="mt-5">
      <el-tab-pane label="操作权限" name="1">
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
      <el-tab-pane label="成员列表" name="2">
        <Table
          v-model:pageSize="userTableObject.size"
          v-model:currentPage="userTableObject.current"
          :class="`${prefixCls}-table`"
          :columns="userTableColumns"
          :data="userTableObject.tableList"
          :loading="userTableObject.loading"
          :border="true"
          :stripe="true"
          selection
          :pagination="{
            total: userTableObject.total
          }"
          @register="userTableRegister"
        >
          <template #action="data">
            <el-button
              :class="`${prefixCls}-table-button`"
              type="danger"
              plain
              @click="handleDelete(data.row)"
            >
              <template #icon>
                <Icon icon="ep:delete" :size="16" />
              </template>
              删除
            </el-button>
          </template>
          <template #empty>
            <div :class="`${prefixCls}-table-empty`">暂无数据</div>
          </template>
        </Table>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name="3">
        <Table
          v-model:pageSize="operationTableObject.size"
          v-model:currentPage="operationTableObject.current"
          :class="`${prefixCls}-table`"
          :columns="operationTableColumns"
          :data="operationTableObject.tableList"
          :loading="operationTableObject.loading"
          :border="true"
          :stripe="true"
          selection
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
    </el-tabs>

    <AddMember :data="addMemberData" />
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

      &-avatar {
        margin-right: 15px;
        width: 60px;
        line-height: 60px;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        background-color: crimson;
        border-radius: 50%;
      }
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
}
</style>
