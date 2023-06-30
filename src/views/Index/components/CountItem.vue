<script setup lang="ts">
import { useDesign } from '@/utils/useDesign';
import { defineProps, ref, toRefs } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: '-'
  },
  icon: {
    type: String,
    default: 'folder.png'
  },
  category: {
    type: String,
    default: '月同比'
  },
  categoryValue:{
    type: String,
    default: '-'
  },
  color: {
    type: String,
    default: 'var(--color-primary)'
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-count-item')

const categoryValueColor = ref('normal')
const prop = toRefs(props)
let data = prop.categoryValue.value
if (props.categoryValue.length > 1) {
  if (Boolean(Number(data.slice(0, -1)))) {
    if (Number(data.slice(0, -1)) > 0) {
      categoryValueColor.value = 'success'
      if (data.slice(0, 1) !== '+') {
        data = '+' + data
      }
    } else if (Number(data.slice(0, -1)) < 0) {
      categoryValueColor.value = 'danger'
    }
  }
}
</script>

<template>
  <div :class="`${prefixCls}`" class="flex items-center w-[calc(50%-40px)] max-w-[calc(50%-40px)] py-[calc(2%)] h-[calc(33.34%)] max-h-80px">
    <div :class="`${prefixCls}-icon`" :style="{ backgroundColor: color }" class="flex items-center justify-center">
      <img :src="`src/assets/images/homepage/${icon}`" />
    </div>

    <div :class="`${prefixCls}-data`" class="w-[calc(100%-120px)] px-17px truncate">
      <div :class="`${prefixCls}-data-label`">{{ label }}</div>
      <div :class="`${prefixCls}-data-value`">{{ value }}</div>
    </div>

    <div :class="`${prefixCls}-category`" class="w-80px px-20px truncate">
      <div :class="`${prefixCls}-category-label`">{{ category }}</div>
      <div :class="[`${prefixCls}-category-value`, `${prefixCls}-category-value-${categoryValueColor}`]">{{ data }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-count-item';

.#{$prefix-chart} {
  &-icon {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: 4px 6px 12px 0px rgba(0, 0, 0, 0.3);

    & > img {
      width: 14px;
      height: 12px;
    }
  }

  &-data {
    * {
      font-size: small;
      line-height: 20px;
    }
    
    &-value {
      font-weight: bold;
    }
  }

  &-category {
    * {
        font-size: x-small;
        font-weight: lighter;
        line-height: 20px;
    }

    &-value-normal {
      color: var(--color-normal);
    }
    &-value-success {
      color: var(--color-success);
    }
    &-value-danger {
      color: var(--color-danger);
    }
  }
}
</style>
