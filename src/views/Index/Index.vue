<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import CountBlock from './components/CountBlock.vue'
import UserTrend from './components/UserTrend.vue'
import BusinessSituation from './components/BusinessSituation.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage')
</script>
<template>
  <contentWrap :showTitle="false" :needPadding="false" class="bg-[#fff]">
    <template #content>
      <div :class="`${prefixCls}-wrap`" class="flex h-full">
        <div class="flex flex-col flex-1 h-full overflow-hidden p-6px">
          <div class="flex justify-between">
            <CountBlock title="移动用户数量" value="200" unit="个" />
            <CountBlock title="近30天访问用户数" value="300" unit="个" />
            <CountBlock
              title="近30天意见反馈数"
              value="400"
              unit="条"
              extraTitle="已读占比"
              extraValue="60%"
            />
          </div>
          <UserTrend />
        </div>
        <div class="w-440px h-full p-6px">
          <BusinessSituation />
        </div>
      </div>
    </template>
  </contentWrap>
</template>
<style lang="scss" scoped>
@import './style.scss';
$prefix-chart: '#{$vNamespace}-homepage';

.#{$prefix-chart} {
  &-wrap {
  }
}
</style>
