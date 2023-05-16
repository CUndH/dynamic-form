<script lang="ts" setup>
import { getUserListApi } from '@/api/member'
import { createUserApi, getDepartmentTreeDataApi, updateUserApi } from '@/api/user'
import { useDesign } from '@/utils/useDesign'
import { stringFormatter } from '@/utils/useFormatter'
import { useTable } from '@/utils/useTable'
import { computed, onMounted, provide, ref, unref } from 'vue'
import { statusOpts, useUserDetailModal, useUserStatusModal } from './User.data'
import { useRouter } from 'vue-router'
import { TableInstance } from '@/types/component/table'
import UserDetail from './components/UserDetail.vue'
import { RES_CODE_SUEECSS } from '@/constants'
import { ElMessage } from 'element-plus'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('user')

const { methods, register, tableObject } = useTable({
  getListApi: getUserListApi,
  getListCallback: getListCb
})

function getListCb(tableObject, res: IResponse) {
  if (res.code !== 0) {
    tableObject.tableList = []
    tableObject.total = 0
  } else {
    tableObject.tableList = res.data.records
    tableObject.total = res.data.total
  }
}

const { getList, setSearchParams } = methods

const columns: TableColumn[] = [
  {
    field: 'realName',
    label: '姓名',
    formatter: (row) => stringFormatter(row, 'realName'),
    width: 160
  },
  {
    field: 'department',
    label: '部门',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'department'),
    'min-width': 150
  },
  {
    field: 'roleName',
    label: '角色',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'roleName'),
    'min-width': 150
  },
  {
    field: 'status',
    label: '账号状态',
    formatter: (row) => stringFormatter(row, 'status'),
    'min-width': 120
  },
  {
    field: 'phone',
    label: '手机',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'phone'),
    'min-width': 240
  },
  {
    field: 'status',
    label: '在线状态',
    formatter: (row) => stringFormatter(row, 'status'),
    'min-width': 120
  },
  {
    field: 'lastLoginTime',
    label: '最后登录',
    formatter: (row) => stringFormatter(row, 'lastLoginTime'),
    'min-width': 200
  },
  {
    field: 'action',
    label: '操作',
    width: 350,
    fixed: 'right'
  }
]

const searchKey = ref({
  deptId: '',
  keyword: undefined,
  status: undefined,
  lastLoginTime: undefined
})

const isSearch = computed(() => {
  return searchKey.value.keyword
})

onMounted(() => {
  getList()
})

function searchList() {
  setSearchParams(unref(searchKey))
}

function resetSearchParams() {
  setSearchParams({
    deptId: '',
    keyword: undefined,
    status: undefined,
    lastLoginTime: undefined
  })
}

const userDetailForm = ref({})

function addUser() {
  userDetailForm.value = {}

  useUserDetailModal({
    title: '新增用户',
    componentProps: { userData: userDetailForm.value },
    onCancel: () => {},
    onConfirm: () => {
      createUserApi(userDetailForm.value).then((res) => {
        if (res.code === RES_CODE_SUEECSS) {
          ElMessage.success('保存成功')
        }
      })
    }
  })
}

function editRow(row) {
  userDetailForm.value = row

  useUserDetailModal({
    title: '编辑用户',
    componentProps: { userData: userDetailForm.value },
    onCancel: () => {},
    onConfirm: () => {
      updateUserApi(userDetailForm.value).then((res) => {
        if (res.code === RES_CODE_SUEECSS) {
          ElMessage.success('保存成功')
        }
      })
    }
  })
}

function setStatusForModal(row) {
  userDetailForm.value = row

  useUserStatusModal({
    title: '修改用户状态',
    componentProps: { userData: userDetailForm.value },
    onCancel: () => {},
    onConfirm: () => {
      updateUserApi(userDetailForm.value).then((res) => {
        if (res.code === RES_CODE_SUEECSS) {
          ElMessage.success('保存成功')
        }
      })
    }
  })
}

const router = useRouter()

function goDetailPage(row) {
  router.push({ path: '/admin/user/detail', query: { id: row.id } })
}

const tableRef = ref<TableInstance>()

function editDepartment() {
  let ref = tableRef.value?.elTableRef
  console.log(ref?.getSelectionRows())
}

function handleSelectDept(node) {
  setSearchParams({
    deptId: node.id
  })
}
</script>

<template>
  <div :class="`${prefixCls}-list-header relative h-full`">
    <TreeSelector
      title="部门"
      class="absolute left-0 top-0 bottom-0 bg-[#fff] rounded-4px"
      remote
      :fetch-func="getDepartmentTreeDataApi"
      :default-props="{
        children: 'children',
        label: 'name',
        value: 'id'
      }"
      @click="handleSelectDept"
    />
    <ContentWrap class="ml-232px bg-[#fff]">
      <template #content>
        <div class="search-tool-wrap">
          <div class="tool-item">
            <el-input v-model:modelValue="searchKey.keyword" placeholder="姓名/账号/手机" />
          </div>
          <div class="tool-item">
            <el-select v-model:modelValue="searchKey.status" placeholder="状态选项">
              <el-option
                v-for="(item, key) in statusOpts"
                :key="`search-module-${key}`"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="tool-item">
            <el-date-picker
              v-model:modelValue="searchKey.lastLoginTime"
              type="daterange"
              start-placeholder="最后登录起始"
              end-placeholder="最后登录结束"
            />
          </div>
          <div class="tool-item !min-w-0">
            <el-button type="primary" @click="searchList">
              <template #icon>
                <Icon icon="ep:search" :size="16" />
              </template>
              查询
            </el-button>
          </div>
          <div class="tool-item !min-w-0">
            <el-button class="mr-10px" type="default" @click="resetSearchParams">
              <template #icon>
                <Icon icon="ep:refresh-left" :size="16" />
              </template>
              重置
            </el-button>
          </div>
        </div>
        <div class="mt-5">
          <div class="search-tool-wrap">
            <div class="tool-item !min-w-0">
              <el-button type="primary" @click="addUser">
                <template #icon>
                  <Icon icon="ep:plus" :size="16" />
                </template>
                新增用户
              </el-button>
            </div>
            <div class="tool-item !min-w-0">
              <el-button @click="editDepartment">
                <template #icon>
                  <Icon icon="mdi:user-group" :size="16" />
                </template>
                修改部门
              </el-button>
            </div>
            <div class="tool-item !min-w-0">
              <el-button>
                <template #icon>
                  <Icon icon="ic:baseline-supervised-user-circle" :size="16" />
                </template>
                修改角色
              </el-button>
            </div>
            <div class="tool-item !min-w-0">
              <el-button>
                <template #icon>
                  <Icon icon="uiw:setting" :size="16" />
                </template>
                设置状态
              </el-button>
            </div>
            <div class="tool-item !min-w-0">
              <el-button>
                <template #icon>
                  <Icon icon="ion:finger-print" :size="16" />
                </template>
                重置密码
              </el-button>
            </div>
            <div class="tool-item !min-w-0">
              <el-button>
                <template #icon>
                  <Icon icon="material-symbols:upload-rounded" :size="16" />
                </template>
                导入数据
              </el-button>
            </div>
          </div>
        </div>
        <Table
          v-model:pageSize="tableObject.size"
          v-model:currentPage="tableObject.current"
          ref="tableRef"
          :class="`${prefixCls}-table mt-10px`"
          :columns="columns"
          :data="tableObject.tableList"
          :loading="tableObject.loading"
          selection
          :border="true"
          :stripe="true"
          :pagination="{
            total: tableObject.total,
            background: true
          }"
          @register="register"
        >
          <template #action="{ row }">
            <el-button type="primary" size="small" plain @click="goDetailPage(row)">
              <template #icon>
                <Icon icon="ep:tickets" :size="16" />
              </template>
              详情
            </el-button>
            <el-button type="primary" size="small" plain @click="editRow(row)">
              <template #icon>
                <Icon icon="ep:edit-pen" :size="16" />
              </template>
              编辑
            </el-button>
            <el-button type="primary" size="small" plain @click="setStatusForModal(row)">
              <template #icon>
                <Icon icon="ep:setting" :size="16" />
              </template>
              设置
            </el-button>
            <el-button type="danger" size="small" plain>
              <template #icon>
                <Icon icon="ep:delete" :size="16" />
              </template>
              删除
            </el-button>
          </template>
          <template #empty>
            <div :class="`${prefixCls}-table-empty`">
              {{ isSearch ? '无搜索结果' : '暂无数据' }}
            </div>
          </template>
        </Table>
      </template>
    </ContentWrap>
  </div>
</template>
