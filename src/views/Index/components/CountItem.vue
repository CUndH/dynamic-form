<script setup lang="ts">
import { useDesign } from '@/utils/useDesign'
import { PropType, defineProps, ref, toRefs } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'var(--color-primary)'
  },
  count: {
    type: Object as PropType<ICount>,
    required: true
  }
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('homepage-count-item')

const count = toRefs(props).count.value
const categoryValueColor = ref('normal')
if (count.categoryValue || count.categoryValue === 0) {
  if (count.categoryValue >= 0) {
    categoryValueColor.value = 'success'
  } else {
    categoryValueColor.value = 'danger'
  }
}
</script>

<template>
  <div
    :class="`${prefixCls}`"
    class="flex items-center w-[calc(50%-40px)] max-w-[calc(50%-40px)] py-[2%] h-[calc(33.34%)] max-h-80px"
  >
    <div
      :class="`${prefixCls}-icon`"
      :style="{ backgroundColor: color }"
      class="flex items-center justify-center"
    >
      <img v-if="count.icon" :src="`src/assets/images/homepage/${count.icon}`" />
      <img v-else src="src/assets/images/homepage/folder.png" />
    </div>

    <div :class="`${prefixCls}-data`" class="w-[calc(100%-120px)] px-17px truncate">
      <div :class="`${prefixCls}-data-label`">{{ count.label }}</div>
      <div :class="`${prefixCls}-data-value`">{{ count.value ? count.value : '-' }}</div>
    </div>

    <div :class="`${prefixCls}-category`" class="w-80px px-20px truncate">
      <div :class="`${prefixCls}-category-label`">
        {{ count.category ? count.category : '月同比' }}
      </div>
      <div
        :class="[
          `${prefixCls}-category-value`,
          `${prefixCls}-category-value-${categoryValueColor}`
        ]"
      >
        {{
          count.categoryValue || count.categoryValue === 0
            ? (count.categoryValue >= 0 ? '+' : '') + count.categoryValue + '%'
            : '-'
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
$prefix-chart: '#{$vNamespace}-homepage-count-item';

.#{$prefix-chart} {
  &.has-shadow {
    box-shadow: inset 0px -1px 0px 0px rgba(220, 223, 230, 0.61);
  }
  &-icon {
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 100%;
    box-shadow: 4px 6px 12px 0px rgba(0, 0, 0, 0.3);

    > img {
      width: 14px;
      height: 12px;
    }
  }

  &-data {
    font-size: small;
    line-height: 1.5;

    &-value {
      font-weight: bold;
    }
  }

  &-category {
    font-size: x-small;
    font-weight: lighter;
    line-height: 1.5;

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
