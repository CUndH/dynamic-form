<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { ref } from 'vue'
import OperationLog from './components/OperationLog.vue'
import LoginLog from './components/LoginLog.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('log')

const tabPosition = ref(1)
</script>

<template>
  <ContentWrap :class="`${prefixCls}`" class="h-full">
    <template #header>
      <el-radio-group v-model:modelValue="tabPosition" class="">
        <el-radio-button :label="1">操作日志</el-radio-button>
        <el-radio-button :label="2">登录日志</el-radio-button>
      </el-radio-group>
    </template>
    <template #content>
      <div :class="`${prefixCls}-content`" class="h-full p-20px">
        <operation-log v-if="tabPosition === 1" />
        <login-log v-else />
      </div>
    </template>
  </ContentWrap>
</template>

<style lang="scss">
$prefix-chart: '#{$vNamespace}-log';

.#{$prefix-chart} {
  &-content {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
}
</style>
