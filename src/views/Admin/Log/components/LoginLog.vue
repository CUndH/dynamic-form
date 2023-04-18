<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { computed, onMounted, ref, unref } from 'vue'
import { PocTable } from '@/components/Table'
import { useTable } from '@/utils/useTable'
import { getLogListApi } from '@/api/log'
import { stringFormatter } from '@/utils/useFormatter'
import dayjs from 'dayjs'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('login-log')

const { methods, register, tableObject } = useTable({
  getListApi: getLogListApi,
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
    field: 'loginTime',
    label: '登录时间',
    formatter: (row) => dayjs(row.loginTime).format('YYYY-MM-DD HH:mm'),
    width: 160
  },
  {
    field: 'account',
    label: '登录账号',
    align: 'left',
    formatter: (row) => `${row.username}(row.account)`,
    'min-width': 240
  },
  {
    field: 'browser',
    label: '浏览器/终端版本',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'browser'),
    'min-width': 160
  },
  {
    field: 'mac',
    label: 'MAC地址',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'mac'),
    'min-width': 160
  },
  {
    field: 'ip',
    label: '登录IP',
    formatter: (row) => stringFormatter(row, 'ip'),
    'min-width': 200
  },
  {
    field: 'area',
    label: '所在地区',
    formatter: (row) => stringFormatter(row, 'area'),
    'min-width': 160
  }
]

const searchKey = ref({
  keyword: undefined,
  loginTime: undefined,
  users: undefined,
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
    users: undefined,
  })
}
</script>

<template>
  <div :class="`${prefixCls}-list-header`">
    <div :class="`${prefixCls}-list-header-left`">
      <el-input
        v-model:modelValue="searchKey.keyword"
        placeholder="输入搜索关键词"
        class="mr-10px w-200px"
      />
      <el-date-picker
        v-model:modelValue="searchKey.loginTime"
        class="mr-10px w-120px"
        type="daterange"
        start-placeholder="登录时间起始"
        end-placeholder="登录时间结束"
      />
      <el-select v-model:modelValue="searchKey.users" placeholder="所属模块" class="mr-10px w-120px">
        <el-option
          v-for="(item, key) in []"
          :key="`search-module-${key}`"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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
    <div :class="`${prefixCls}-list-header-right`">
      <el-button type="default">
        <template #icon>
          <Icon icon="ep:download" :size="16" />
        </template>
        导出数据
      </el-button>
    </div>
  </div>
  <poc-table
    v-model:pageSize="tableObject.size"
    v-model:currentPage="tableObject.current"
    id="deviceTable"
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
    <template #empty>
      <div :class="`${prefixCls}-table-empty`">
        {{ isSearch ? '无搜索结果' : '暂无数据' }}
      </div>
    </template>
  </poc-table>
</template>

<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-login-log';

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
      &-right {
        padding: 0 16px;
      }
    }
  }
}
</style>
