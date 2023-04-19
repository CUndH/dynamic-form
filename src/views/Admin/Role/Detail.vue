<script setup lang="ts">
import { getRoleApi } from '@/api/role'
import { useDesign } from '@/utils/useDesign'
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
})

const addMemberVisible = ref(false)

const addMemberData = ref({})

provide('addMemberVisible', addMemberVisible)

function addMember() {
  addMemberData.value = formData
  addMemberVisible.value = true
}

const activeName = ref('1');
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
      <el-tab-pane label="操作权限" name="1">操作权限</el-tab-pane>
      <el-tab-pane label="成员列表" name="2">成员列表</el-tab-pane>
      <el-tab-pane label="操作记录" name="3">操作记录</el-tab-pane>
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
}
</style>
