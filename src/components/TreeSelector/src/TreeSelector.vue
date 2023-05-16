<script setup lang="ts">
import { ref, watch, PropType, onMounted } from 'vue'
import { useDesign } from '@/utils/useDesign'
import { ElMessage, ElTree } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { MAX_LEVEL, RES_CODE_SUEECSS } from '@/constants'

interface PropsType {
  children: string
  label: string
  value: string
}

interface Tree {
  id: string
  label: string
  children?: DictItemRes[]
}

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('tree-selector')

const props = defineProps({
  // 组件头部标题
  title: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 220
  },
  // 渲染字段
  defaultProps: {
    type: Object as PropType<PropsType>,
    default: () => {
      return {
        children: 'children',
        label: 'label',
        value: 'value'
      }
    }
  },
  placeholder: {
    type: String,
    default: '请输入关键字'
  },
  // 树形结构数据源
  data: {
    type: Array as PropType<Tree[]>,
    required: true
  },
  showEditBtns: {
    type: Boolean,
    default: true
  },
  remote: {
    type: Boolean,
    default: false
  },
  fetchFunc: {
    type: Function as PropType<() => Promise<IResponse>>
  },
  showFirstGroup: {
    type: Boolean,
    default: true
  }
})

const filterText = ref('')

const treeRef = ref<InstanceType<typeof ElTree>>()

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data[props.defaultProps.label] && data[props.defaultProps.label].includes(value)
}

const emit = defineEmits(['click', 'add', 'edit', 'delete'])

const handleAddItem = (node: Node, data: Tree) => {
  emit('add', node, data)
}

const handleNodeClick = (node: Node, data: Tree) => {
  emit('click', node, data)
}

const handleEdit = (node: Node, data: Tree) => {
  emit('edit', node, data)
}

const handleDelete = (node: Node, data: Tree) => {
  emit('delete', node, data)
}

const treeData = ref()

function getTreeData() {
  if (!props.remote) {
    treeData.value = props.data
    return
  }

  (props?.fetchFunc as () => Promise<IResponse>)().then((res) => {
    if (res.code === RES_CODE_SUEECSS) {
      let data: { [x: string]: any }[] = []

      // 在一级填入一个全部
      if (props.showFirstGroup) {
        data = [
          {
            [props.defaultProps.label]: '全部',
            [props.defaultProps.value]: '',
            [props.defaultProps.children]: res.data
          }
        ]
      }

      treeData.value = data
    } else {
      ElMessage.error(res.msg)
    }
  })
}

onMounted(() => {
  getTreeData()
})
</script>

<template>
  <div
    :class="`${prefixCls}-wrap`"
    class="p-10px h-full overflow-hidden flex flex-col"
    :style="{ width: width + 'px' }"
  >
    <div
      class="flex justify-between border-b-1px border-solid border-[var(--border-color)] pb-5px text-[var(--color-normal)]"
      v-if="title"
    >
      <h1>{{ title }}</h1>
    </div>
    <div class="flex flex-col mt-12px flex-1 overflow-hidden">
      <el-input v-model="filterText" :placeholder="placeholder" :suffix-icon="Search" />
      <el-tree
        ref="treeRef"
        class="flex-1 mt-6px overflow-auto filter-tree"
        :data="treeData"
        :props="defaultProps"
        default-expand-all
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
        :filter-node-method="filterNode"
      >
        <template #default="{ node, data }">
          <div class="flex align-middle">
            <span>{{ node.label }}</span>
            <span class="flex items-center edit-area relative ml-8px hidden">
              <Icon
                v-show="node.level < MAX_LEVEL && showEditBtns"
                class="ml-6px"
                icon="ep:plus"
                :size="16"
                @click="handleAddItem(node, data)"
              />
              <Icon
                v-if="node.label !== '全部' && showEditBtns"
                class="ml-6px"
                icon="ep:edit-pen"
                :size="16"
                @click="handleEdit(node, data)"
              />
              <el-popconfirm
                v-if="node.label !== '全部' && showEditBtns"
                title="确定要删除该分组吗？"
                confirm-button-type="danger"
                @confirm="handleDelete(node, data)"
              >
                <template #reference>
                  <Icon class="ml-6px" icon="ep:delete" :size="16" />
                </template>
              </el-popconfirm>
            </span>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<style lang="scss">
$prefix-chart: '#{$vNamespace}-tree-selector';
.#{$prefix-chart} {
  &-wrap {
    .el-tree-node {
      min-width: 0;
      .el-tree-node__children {
        overflow: initial;
      }
      margin-bottom: 3px;
      &:last-child {
        margin-bottom: 0;
      }
      &:focus > .el-tree-node__content {
        background: var(--el-color-primary);
      }
      &.is-current > .el-tree-node__content {
        background: var(--el-color-primary);
        .el-tree-node__expand-icon {
          &.is-leaf {
            // background: 0 none;
            &::after {
              content: '';
              // height: 100%;
              // border-left: 4px solid #fff;
            }
          }
        }
        .edit-area {
          display: flex !important;
        }
      }
    }
    .el-tree {
      .el-tree-node__content {
        // padding: 0 15px !important;
        padding-right: 20px;
        height: 26px;
        line-height: 26px;
        border-radius: 6px;
        margin-bottom: 3px;
        white-space: nowrap;
        min-width: 100%;
        width: max-content;
        position: relative;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover,
        &:active {
          background: var(--el-color-primary) !important;
        }
      }
    }
  }
}
</style>
