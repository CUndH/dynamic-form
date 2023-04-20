<script lang="ts" setup>
import { getUserListApi } from '@/api/member'
import { useDesign } from '@/utils/useDesign'
import { stringFormatter } from '@/utils/useFormatter'
import { useTable } from '@/utils/useTable'
import { computed, onMounted, provide, ref, unref } from 'vue'
import { statusOpts } from './User.data'
import UserDetail from './components/UserDetail.vue'
import { useRouter } from 'vue-router'

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
    keyword: undefined,
    status: undefined,
    lastLoginTime: undefined
  })
}

const userDetailVisible = ref(false)

provide('userDetailVisible', userDetailVisible)

const userDetailForm = ref({})

provide('userForm', userDetailForm)

function addUser() {
  userDetailVisible.value = true
  userDetailForm.value = {}
}

function setDetailForModal(row) {
  userDetailForm.value = row
  userDetailVisible.value = true
}

const userStatusVisible = ref(false)

provide('userStatusVisible', userStatusVisible)

function setStatusForModal(row) {
  userDetailForm.value = row
  userStatusVisible.value = true
}

const router = useRouter()

function goDetailPage(row) {
  router.push({ path: '/admin/user/detail', query: { id: row.id } })
}
</script>

<template>
  <div :class="`${prefixCls}-list-header`">
    <div :class="`${prefixCls}-list-header-left`">
      <el-input
        v-model:modelValue="searchKey.keyword"
        placeholder="姓名/账号/手机"
        class="mr-10px w-120"
      />
      <el-select
        v-model:modelValue="searchKey.status"
        placeholder="状态选项"
        class="mr-10px w-120px"
      >
        <el-option
          v-for="(item, key) in statusOpts"
          :key="`search-module-${key}`"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        v-model:modelValue="searchKey.lastLoginTime"
        class="mr-10px w-120px"
        type="daterange"
        start-placeholder="最后登录起始"
        end-placeholder="最后登录结束"
      />
      <el-button type="primary" @click="searchList">
        <template #icon>
          <Icon icon="ep:search" :size="16" />
        </template>
        查询
      </el-button>
      <el-button class="mr-10px" type="default" @click="resetSearchParams">
        <template #icon>
          <Icon icon="ep:refresh-left" :size="16" />
        </template>
        重置
      </el-button>
    </div>
    <div class="mt-5">
      <el-button type="primary" @click="addUser">
        <template #icon>
          <Icon icon="ep:plus" :size="16" />
        </template>
        新增用户
      </el-button>
    </div>
  </div>
  <Table
    v-model:pageSize="tableObject.size"
    v-model:currentPage="tableObject.current"
    :class="`${prefixCls}-table mt-10px`"
    :columns="columns"
    :data="tableObject.tableList"
    :loading="tableObject.loading"
    :selection="false"
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
      <el-button type="primary" size="small" plain @click="setDetailForModal(row)">
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

  <UserDetail />
</template>
