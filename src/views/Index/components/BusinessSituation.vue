<script setup lang="ts">
import { inject, ref } from 'vue'
import { getCountsPieOption } from '../echartOption'

const loading = ref(false)

const noDataFlag = ref(false)

const option = ref(getCountsPieOption())

const themeKey = inject('echartTheme')
</script>

<template>
  <div class="box p-20px h-full">
    <div class="box-header">
      <div class="title truncate">业务数情况</div>
    </div>
    <el-skeleton :loading="loading" animated class="box-content overflow-hidden">
      <template #template>
        <el-skeleton-item variant="image" style="height: 100%" />
      </template>
      <template #default>
        <div class="box-content overflow-hidden">
          <VChart
            v-if="!noDataFlag"
            :autoresize="true"
            ref="pieChart"
            :option="option"
            :theme="themeKey.mainBgColor"
          />
          <NoData :visible="noDataFlag" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>
