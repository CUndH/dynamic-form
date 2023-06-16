<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { computed, onMounted, ref, unref } from 'vue'
import { useTable } from '@/utils/useTable'
import { getUserListApi } from '@/api/member'
import { stringFormatter } from '@/utils/useFormatter'
import { useRouter } from 'vue-router'
import { TableColumn } from '@/types/component/table'
import { useAddRoleModal, useAddUserModal, useSetRoleStatusModal } from './Role.data'
import { addRoleApi, addUserApi, setStatusByRoleId } from '@/api/role'
import { RES_CODE_SUEECSS } from '@/constants'
import { ElMessage } from 'element-plus'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('role')

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
    field: 'roleName',
    label: '角色名称',
    formatter: (row) => stringFormatter(row, 'roleName'),
    width: 160
  },
  {
    field: 'status',
    label: '状态',
    align: 'left',
    formatter: (row) => `${row.status === 1 ? '启用' : '禁用'}`,
    'min-width': 240
  },
  {
    field: 'count',
    label: '成员数量',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'count'),
    'min-width': 160
  },
  {
    field: 'describe',
    label: '角色描述',
    align: 'left',
    formatter: (row) => `${row.describe ? row.describe : '暂无相关描述'}`,
    'min-width': 160
  },
  {
    field: 'updateTime',
    label: '更新时间',
    formatter: (row) => stringFormatter(row, 'updateTime'),
    'min-width': 200
  },
  {
    field: 'action',
    label: '操作',
    width: 500,
    fixed: 'right'
  }
]

const searchKey = ref({
  keyword: undefined,
  loginTime: undefined,
  users: undefined
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
    loginTime: undefined,
    users: undefined
  })
}

const roleData = ref({})

function addRole() {
  useAddRoleModal({
    title: '添加角色',
    componentProps: {
      roleData: {},
      onConfirm() {
        addRoleApi(roleData.value).then((res) => {
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

const addUserData = ref({})

function addUser(row) {
  addUserData.value = row

  useAddUserModal({
    title: '添加人员',
    componentProps: {
      addUserData: addUserData.value,
      onConfirm() {
        addUserApi(addUserData.value).then((res) => {
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

const curRoleId = ref('')

function setRoleStatus(row) {
  curRoleId.value = row.id
  useSetRoleStatusModal({
    title: '设置状态',
    componentProps: {
      roleData: addUserData.value,
      onConfirm() {
        setStatusByRoleId(addUserData.value).then((res) => {
          if (res.code !== 0) {
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

const { push } = useRouter()

function goDetailPage(row) {
  push({ path: '/admin/role/detail', query: { id: row.roleId } })
}
</script>

<template>
  <div :class="`${prefixCls}-list-header`">
    <ContentWrap class="bg-[#fff] w-full">
      <template #content>
        <div class="search-tool-wrap">
          <div class="tool-item">
            <el-input
              v-model:modelValue="searchKey.keyword"
              placeholder="角色名称"
              class="mr-10px w-120"
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

        <div :class="`${prefixCls}-list-header-right`">
          <el-button type="primary" @click="addRole">
            <template #icon>
              <Icon icon="ep:plus" :size="16" />
            </template>
            新建角色
          </el-button>
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
                <Icon icon="ep:setting" :size="16" />
              </template>
              设置权限
            </el-button>
            <el-button type="primary" size="small" plain>
              <template #icon>
                <Icon icon="ep:edit-pen" :size="16" />
              </template>
              编辑职务
            </el-button>
            <el-button type="primary" size="small" plain @click="addUser(row)">
              <template #icon>
                <Icon icon="ep:plus" :size="16" />
              </template>
              添加人员
            </el-button>
            <el-button type="primary" size="small" plain @click="setRoleStatus(row)">
              <template #icon>
                <Icon icon="ep:setting" :size="16" />
              </template>
              设置状态
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

<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-role';

.#{$prefix-chart} {
  &-list {
    &-header {
      display: flex;
      text-align: left;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &-left {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
