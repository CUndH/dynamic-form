<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { computed, onMounted, ref, unref } from 'vue'
import { useTable } from '@/utils/useTable'
import { getLogListApi } from '@/api/log'
import { stringFormatter } from '@/utils/useFormatter'
import { moduleOpts, typeOpts } from '../Log.data'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('operation-log')


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

function getTypeEnumVal(list, key, val) {
  let res = list.filter((item) => item.value === val)

  if (res.length === 0) return '-'

  return res[0].label
}

const columns: TableColumn[] = [
  {
    field: 'id',
    label: '操作编号',
    formatter: (row) => stringFormatter(row, 'id'),
    width: 160
  },
  {
    field: 'date',
    label: '操作时间',
    align: 'left',
    'min-width': 240
  },
  {
    field: 'person',
    label: '操作人员',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'person'),
    'min-width': 160
  },
  {
    field: 'module',
    label: '所属模块',
    align: 'left',
    formatter: (row) => stringFormatter(row, 'module'),
    'min-width': 160
  },
  {
    field: 'target',
    label: '操作对象',
    formatter: (row) => stringFormatter(row, 'target'),
    'min-width': 200
  },
  {
    field: 'type',
    label: '操作类型',
    formatter: (row) => getTypeEnumVal(typeOpts, 'value', row.type),
    'min-width': 160
  }
]

const searchKey = ref({
  keyword: undefined,
  module: undefined,
  type: undefined,
  date: undefined,
  person: undefined
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
    module: undefined,
    type: undefined,
    date: undefined,
    person: undefined
  })
}
</script>

<template>
  <div :class="`${prefixCls}-list-header`">
    <div :class="`${prefixCls}-list-header-left`">
      <el-input
        v-model:modelValue="searchKey.keyword"
        placeholder="输入搜索关键词"
        class="mr-10px w-200px flex-1"
      />
      <el-select v-model:modelValue="searchKey.module" placeholder="所属模块" class="mr-10px w-120px flex-shrink-0">
        <el-option
          v-for="(item, key) in moduleOpts"
          :key="`search-module-${key}`"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model:modelValue="searchKey.type" placeholder="操作类型" class="mr-10px w-120px flex-shrink-0">
        <el-option
          v-for="(item, key) in typeOpts"
          :key="`search-type-${key}`"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        v-model:modelValue="searchKey.date"
        class="mr-10px w-120px flex-1"
        type="daterange"
        start-placeholder="操作时间起始"
        end-placeholder="操作时间结束"
      />
      <el-input class="mr-10px w-200px flex-1" v-model:modelValue="searchKey.person" placeholder="操作人员" />
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
  <Table
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
  </Table>
</template>

<style lang="scss" scoped>
$prefix-chart: '#{$vNamespace}-operation-log';

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
