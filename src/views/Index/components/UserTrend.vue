<script setup lang="ts">
import { ref } from 'vue'
import { UserTrendOption } from '../echartOption'

const loading = ref(false)

const noDataFlag = ref(false)

const option = ref(UserTrendOption())

const defaultDate = ref(new Date())

const defaultDateType = ref('day')

const handleDateChange = (_type: string, _val: string) => {}
</script>

<template>
  <div class="box h-full !mb-0">
    <div class="box-header">
      <div class="title truncate">访问用户数走势</div>
      <div class="tool-wrap">
        <ComplexDatePick
          ref="ComplexDatePickRef"
          :defaultType="defaultDateType"
          :defaultValue="defaultDate"
          @change="handleDateChange"
        />
      </div>
    </div>
    <el-skeleton :loading="loading" animated class="box-content overflow-hidden">
      <template #template>
        <el-skeleton-item variant="image" style="height: 100%" />
      </template>
      <template #default>
        <div class="box-content overflow-hidden">
          <VChart v-if="!noDataFlag" :autoresize="true" ref="lineChart" :option="option" />
          <NoData :visible="noDataFlag" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
