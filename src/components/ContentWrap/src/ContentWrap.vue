<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/utils/useDesign'

const { getPrefixCls } = useDesign()
const { currentRoute } = useRouter()

const prefixCls = getPrefixCls('content-wrap')
const currentRouteTitle = currentRoute.value.meta ? currentRoute.value.meta.title : ''

defineProps({
  // 是否展示标题
  showTitle: propTypes.bool.def(true),
  // 标题内容
  title: propTypes.string.def(''),
  // 标题右侧问号提示内容
  message: propTypes.string.def('')
})
</script>

<template>
  <ElCard
    :class="[
      prefixCls,
      {
        'show-title': showTitle
      }
    ]"
    shadow="never"
  >
    <template v-if="showTitle" #header>
      <div :class="`${prefixCls}-header`">
        <span :class="`${prefixCls}-title`">{{ title || currentRouteTitle }}</span>
        <ElTooltip v-if="message" effect="dark" placement="right">
          <template #content>
            <div :class="`${prefixCls}-message`">{{ message }}</div>
          </template>
          <Icon class="ml5" icon="bi:question-circle-fill" :size="14" />
        </ElTooltip>
      </div>
    </template>
    <div :class="`${prefixCls}-main`">
      <slot></slot>
    </div>
  </ElCard>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-content-wrap';

.#{$prefix-cls} {
  padding: 20px;
  &-header {
    display: flex;
    align-items: center;
  }
  &-title {
    font-size: 1.6rem;
    font-weight: 700;
  }
  &-message {
    max-width: 20rem;
  }
  &-main {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss">
$prefix-cls: '#{$namespace}-content-wrap';
.#{$prefix-cls} {
  .el-card__body {
    padding: 0;
    flex-grow: 1;
    height: 100%;
  }
  &.show-title {
    .el-card__body {
      height: calc(100% - 62px);
    }
  }
}
</style>
