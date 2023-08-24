<script setup lang="ts">
import { PropType, inject, ref, toRefs } from 'vue'
import { getCountsPieOption } from '../echartOption'

const noDataFlag = ref(false)

const props = defineProps({
  data: {
    required: true,
    type: Object as PropType<IPieData[]>
  }
})

const prop = toRefs(props)

const option = ref(getCountsPieOption(props.data))

const themeKey = inject('echartTheme')
</script>

<template>
  <VChart
    v-if="!noDataFlag"
    :autoresize="true"
    ref="lineChart"
    :option="option"
    :theme="themeKey.mainBgColor"
  />
</template>
