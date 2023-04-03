import { Table, TableExpose } from '@/components/Table'
import { ElTable, ElMessageBox, ElMessage } from 'element-plus'
import { ref, reactive, watch, computed, unref, nextTick } from 'vue'
import { get } from 'lodash-es'
import type { TableProps } from '@/components/Table/src/types'

interface TableResponse<T = any> {
  total: number
  records: T[]
  pageNumber: number
  size: number
}

interface UseTableConfig<T = any> {
  getListApi: (option: any) => Promise<IResponse<TableResponse<T>>>
  delListApi?: (option: any) => Promise<IResponse>
  getListCallback?: (tableObject: TableObject, response: any) => any
  // 返回数据格式配置
  response?: {
    list: string
    total?: string
  }
  getListExtraParam?: object
  props?: TableProps
}

interface TableObject<T = any> {
  size: number
  current: number
  total: number
  tableList: T[]
  params: any
  loading: boolean
  currentRow: Nullable<T>
}

export const useTable = <T = any>(config?: UseTableConfig<T>) => {
  const tableObject = reactive<TableObject<T>>({
    // 页数
    size: 10,
    // 当前页
    current: 1,
    // 总条数
    total: 10,
    // 表格数据
    tableList: [],
    // AxiosConfig 配置
    params: {},
    // 加载中
    loading: true,
    // 当前行的数据
    currentRow: null
  })

  const paramsObj = computed(() => {
    return {
      ...tableObject.params,
      size: tableObject.size,
      current: tableObject.current
    }
  })

  watch(
    () => tableObject.current,
    () => {
      methods.getList()
    }
  )

  watch(
    () => tableObject.size,
    () => {
      // 当前页不为1时，修改页数后会导致多次调用getList方法
      if (tableObject.current === 1) {
        methods.getList()
      } else {
        tableObject.current = 1
        methods.getList()
      }
    }
  )

  // Table实例
  const tableRef = ref<typeof Table & TableExpose>()

  // ElTable实例
  const elTableRef = ref<ComponentRef<typeof ElTable>>()

  const register = (ref: typeof Table & TableExpose, elRef: ComponentRef<typeof ElTable>) => {
    tableRef.value = ref
    elTableRef.value = unref(elRef)
  }

  const getTable = async () => {
    await nextTick()
    const table = unref(tableRef)
    if (!table) {
      console.error('The table is not registered. Please use the register method to register')
    }
    return table
  }

  const delData = async (ids: string[] | number[]) => {
    const res = await (config?.delListApi && config?.delListApi(ids))
    if (res) {
      ElMessage.success('删除成功')

      // 计算出临界点
      const currentPage =
        tableObject.total % tableObject.size === ids.length || tableObject.size === 1
          ? tableObject.current > 1
            ? tableObject.current - 1
            : tableObject.current
          : tableObject.current

      tableObject.current = currentPage
      methods.getList()
    }
  }

  const methods = {
    getList: async () => {
      tableObject.loading = true
      const requestParamsObj = {
        ...unref(paramsObj),
        ...config?.getListExtraParam
      }
      const res = await config?.getListApi(requestParamsObj).finally(() => {
        tableObject.loading = false
      })
      if (res) {
        if (config?.getListCallback) {
          try {
            config?.getListCallback(tableObject, res)
          } catch (error) {
            throw error
          }
        } else {
          tableObject.tableList = get(res.data || {}, config?.response?.list as string)
          tableObject.total = get(res.data || {}, config?.response?.total as string) || 0
        }
      }
    },
    setProps: async (props: TableProps = {}) => {
      const table = await getTable()
      table?.setProps(props)
    },
    setColumn: async (columnProps: TableSetPropsType[]) => {
      const table = await getTable()
      table?.setColumn(columnProps)
    },
    getSelections: async () => {
      const table = await getTable()
      return (table?.selections || []) as T[]
    },
    // 与Search组件结合
    setSearchParams: (data: Recordable, resetPage = true) => {
      if (resetPage) tableObject.current = 1
      tableObject.params = Object.assign(tableObject.params, {
        size: tableObject.size,
        current: tableObject.current,
        ...data
      })
      methods.getList()
    },
    // 删除数据
    delList: async (ids: string[] | number[], multiple: boolean, message = true) => {
      const tableRef = await getTable()
      if (multiple) {
        if (!tableRef?.selections.length) {
          ElMessage.warning('请选择需要删除的数据')
          return
        }
      } else {
        if (!tableObject.currentRow) {
          ElMessage.warning('请选择需要删除的数据')
          return
        }
      }
      if (message) {
        ElMessageBox.confirm('是否删除所选中数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await delData(ids)
        })
      } else {
        await delData(ids)
      }
    }
  }

  config?.props && methods.setProps(config.props)

  return {
    register,
    elTableRef,
    tableObject,
    methods
  }
}
