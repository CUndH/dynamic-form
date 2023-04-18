<script setup lang="ts">
/*
 * 动态表单组件
 * 可以通过formConfig快速完成Form的动态渲染和操作
 * 目前type类型只有input和transfer，其他类型后期可以增加
 * 如果进一步有自定义要求，可以通过slot解决
 */
import { defineExpose, defineProps, PropType, reactive, ref, watch } from 'vue'
import type { FormInstance } from 'element-plus'
import { DynamicFormConfig } from '@/components/DynamicForm/src/types'
import DynamicFormItems from './DynamicFormItems.vue'
import random from '@/utils/random'

const dynamicFormRef = ref<FormInstance>()

const classPrefix = 'dynamic'

const props = defineProps({
  // 动态表单配置
  formConfig: {
    type: Array as PropType<DynamicFormConfig[]>,
    default: () => []
  },
  // 表單内容數據，对应el-form的model
  model: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 是否是tab类型
  tabModel: {
    type: Boolean,
    default: false
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  }
})

let context = reactive(props.model)

const currentTab = ref(props.formConfig[0] ? props.formConfig[0].label : '')

const getFormRef = () => {
  return dynamicFormRef.value
}

const resetCurrentTab = () => {
  currentTab.value = props.formConfig[0] ? props.formConfig[0].label : ''
}

const resetFields = () => {
  if (!dynamicFormRef.value) return false
  dynamicFormRef.value.resetFields && dynamicFormRef.value.resetFields()
}

watch(
  () => props.model,
  (val) => {
    if (val) {
      context = val
    }
  }
)

defineExpose({
  getFormRef,
  resetCurrentTab,
  resetFields
})
</script>

<template>
  <el-form
    ref="dynamicFormRef"
    :class="`${classPrefix}-form`"
    :model="context"
    label-position="right"
    :disabled="disabled"
  >
    <div v-if="tabModel" :class="`${classPrefix}-form-tabs`">
      <el-tabs v-model="currentTab">
        <el-tab-pane
          v-for="(formItem, index) in formConfig"
          :key="`${formItem.label}_${index}`"
          :label="formItem.label"
          :name="formItem.label"
        >
          <el-row
            v-for="row in Math.round(formItem.config.length / (formItem.colsNumber || 1))"
            :key="`form-row-${row}`"
          >
            <el-col
              v-for="config in formItem.config.slice(
                (formItem.colsNumber || 1) * (row - 1),
                (formItem.colsNumber || 1) * row
              )"
              :key="`${config.dynamicFormProp}_${config.type}`"
              :span="24 / (formItem.colsNumber || 1)"
            >
              <dynamic-form-items :config="config" :model="context">
                <template #[config.dynamicFormProp]>
                  <slot :name="config.dynamicFormProp" :config="config"></slot>
                </template>
              </dynamic-form-items>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else :class="`${classPrefix}-form-line`">
      <div
        v-for="(formItem, index) in formConfig"
        :key="`${formItem.label}_${index}_${random.randomString()}`"
      >
        <div v-if="formItem.label" :class="`${classPrefix}-form-title block-before`">
          {{ formItem.label }}
        </div>
        <el-row
          v-for="row in Math.round(formItem.config.length / (formItem.colsNumber || 1))"
          :key="`form-row-${row}`"
        >
          <el-col
            v-for="config in formItem.config.slice(
              (formItem.colsNumber || 1) * (row - 1),
              (formItem.colsNumber || 1) * row
            )"
            :key="`${config.dynamicFormProp}_${config.type}`"
            :span="24 / (formItem.colsNumber || 1)"
          >
            <dynamic-form-items :config="config" :model="context">
              <template #[config.dynamicFormProp]>
                <slot :name="config.dynamicFormProp" :config="config"></slot>
              </template>
            </dynamic-form-items>
          </el-col>
        </el-row>
        <!--        <el-divider v-if="index < formConfig.length - 1" class="mt5 mb5" />-->
      </div>
    </div>
  </el-form>
</template>

<style lang="scss">
$prefix-cls: 'dynamic';
.#{$prefix-cls} {
  &-form {
    &-title {
      display: flex;
      font-size: 1.8rem;
      text-align: left;
      font-weight: bold;
      margin-bottom: 1.6rem;
      line-height: 2.4rem;
      &::before {
        width: 0.4rem;
        height: 2.4rem;
      }
    }
  }
}
</style>
