<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useDesign } from '@/utils/useDesign'
import { ref } from 'vue'
import OperationLog from './components/OperationLog.vue'
import LoginLog from './components/LoginLog.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('log-page')

const tabPosition = ref(1)
</script>

<template>
  <el-radio-group v-model:modelValue="tabPosition" class="mb-10px">
    <el-radio-button :label="1">操作日志</el-radio-button>
    <el-radio-button :label="2">登录日志</el-radio-button>
  </el-radio-group>
  <ContentWrap :show-title="false" :class="`${prefixCls}-content`">
    <operation-log v-if="tabPosition === 1" />
    <login-log v-else />
  </ContentWrap>
</template>

<style lang="scss" scoped>
$prefix-chart: '#{$namespace}-log-page';

.#{$prefix-chart} {
}
</style>
