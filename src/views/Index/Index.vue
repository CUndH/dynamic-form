<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import Count from './components/Count.vue'
import DeviceAccess from './components/DeviceAccess.vue'
import UserTrend from './components/UserTrend.vue'
import UsageRatio from './components/UsageRatio.vue'
import DataStorage from './components/DataStorage.vue'
import AreaAlarm from './components/AreaAlarm.vue'
import Last from './components/Last.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage')
</script>

<template>
  <contentWrap :showTitle="false" :needPadding="false">
    <template #content>
      <div :class="`${prefixCls}-wrap`" class="flex h-full">
        <div :class="`${prefixCls}-wrap`" class="flex flex-col flex-1 h-full overflow-hidden pr-6px">

          <!-- 左上 -->
          <UserTrend :class="`${prefixCls}-wrap-top`" />

          <!-- 左中 -->
          <div :class="`${prefixCls}-wrap-middle`" class="flex justify-between mb-12px">

            <!-- 左中左 -->
            <div class="box w-[calc(50%-8px)] max-w-[calc(50%-8px)] pt-10px">
              <!-- 这里用的div，DataStorageItem宽度设置的51%，展示一列，减小宽度即可展示两列 -->
              <DataStorage />
            </div>

            <!-- 左中右 -->
            <div class="box w-[calc(50%-8px)] max-w-[calc(50%-8px)] pt-10px">
              <UsageRatio />
            </div>
          </div>

          <!-- 左下 -->
          <div :class="`${prefixCls}-wrap-bottom`" class="box flex pt-20px pb-19px">
            <AreaAlarm />
          </div>
        </div>

        <div :class="`${prefixCls}-wrap ${prefixCls}-wrap-right`" class="flex flex-col h-full overflow-hidden pl-6px">

          <!-- 右上 -->
          <div :class="`${prefixCls}-wrap-top`" class="box mb-12px !mr-0 py-20px">
            <Count />
          </div>

          <!-- 右中 -->
          <div :class="`${prefixCls}-wrap-middle`" class="box mb-12px !mr-0 pt-10px">
            <DeviceAccess />
          </div>

          <!-- 右下 -->
          <div :class="`${prefixCls}-wrap-bottom`" class="box flex pt-20px pb-19px">
            <Last />
          </div>
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
    &-right {
      width: 40%;
    }
    &-top {
      height: 38%;
    }
    &-middle {
      height: 28%;
    }
    &-bottom {
      height: 34%;
    }
  }
}
</style>
