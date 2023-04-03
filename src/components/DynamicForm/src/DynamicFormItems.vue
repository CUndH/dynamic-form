<script setup lang="ts">
/*
 * 动态表单组件
 * 可以通过formConfig快速完成Form的动态渲染和操作
 * 目前type类型只有input和transfer，其他类型后期可以增加
 * 如果进一步有自定义要求，可以通过slot解决
 */
import { defineProps, onMounted, PropType, reactive, ref } from 'vue'
import { DynamicFormConfigItem } from '@/components/DynamicForm/src/types'
import { WangEditor } from '@/components/WangEditor'

const classPrefix = 'dynamic'

const props = defineProps({
  config: {
    type: Object as PropType<DynamicFormConfigItem>,
    default: () => {
      return {
        label: '',
        dynamicFormProp: '',
        rules: [],
        type: '',
        placeholder: ''
      }
    }
  },
  // 表單内容數據，对应el-form的model
  model: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const context = reactive(props.model)

const selectOptions = ref([])

onMounted(async () => {
  if (['select', 'radio', 'treeSelect'].includes(props.config.type)) {
    if (props.config.async) {
      const res = await props.config.fetchFunc()
      if (res && res.code === 0) {
        selectOptions.value = res.data
      }
    } else {
      selectOptions.value = props.config.fetchFunc ? props.config.fetchFunc() : []
    }
  }
})
</script>

<template>
  <el-form-item
    :class="`${classPrefix}-form-item`"
    :rules="config.rules || []"
    :label="config.label"
    :label-width="config.labelWidth"
    :prop="config.dynamicFormProp"
  >
    <slot :name="config.dynamicFormProp" :config="config">
      <el-input
        v-if="config.type === 'input'"
        v-model.trim="context[config.dynamicFormProp]"
        :placeholder="config.placeholder || `请输入${config.label}`"
        :class="`${classPrefix}-form-input`"
        :show-word-limit="config.showWordLimit || false"
        :show-password="config.showPassword || false"
        :autocomplete="config.autocomplete"
        :maxlength="config.maxlength || ''"
        :disabled="config.disabled || false"
        :type="config?.componentProps?.type"
      />
      <el-transfer
        v-else-if="config.type === 'transfer'"
        v-model="context[config.dynamicFormProp]"
        :titles="config.titles"
        :class="`${classPrefix}-form-transfer`"
        filterable
        :filter-placeholder="config['filter-placeholder']"
        :button-texts="['解绑', '绑定']"
        :data="config.data"
        :props="config.props"
      />
      <el-input-number
        v-else-if="config.type === 'inputNumber'"
        v-model.trim="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-input input-number`"
        :placeholder="config.placeholder || `请输入${config.label}`"
        :min="config.min"
        :max="config.max"
        :disabled="config.disabled || false"
        :controls="config.controls"
        :precision="config.precision"
        :controls-position="config.controlsPosition"
      />
      <el-select
        v-else-if="config.type === 'select'"
        v-model.trim="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-select`"
        :placeholder="config.placeholder || `请选择${config.label}`"
        :multiple="config?.componentProps?.multiple"
      >
        <el-option
          v-for="item in selectOptions"
          :key="`select-${config.dynamicFormProp}-${item[config.props?.key]}`"
          :label="item[config.props?.label]"
          :value="item[config.props?.value]"
        />
      </el-select>
      <el-tree-select
        v-else-if="config.type === 'treeSelect'"
        v-model="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-treeselect`"
        :placeholder="config.placeholder || `请选择${config.label}`"
        :data="selectOptions"
        :render-after-expand="config.renderAfterExpand || true"
        :props="config.props"
        :check-strictly="config?.componentProps?.checkStrictly || false"
        :node-key="config?.componentProps?.nodeKey"
        :show-checkbox="config?.componentProps?.showCheckbox || false"
        :multiple="config?.componentProps?.multiple || false"
      />
      <el-date-picker
        v-else-if="config.type === 'dateTimePicker'"
        v-model="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-datepicker`"
        type="datetime"
        :value-format="config.valueFormat"
        :placeholder="config.placeholder || `请选择${config.label}`"
        :disabled="config.disabled || false"
      />
      <el-radio-group
        v-else-if="config.type === 'radio'"
        v-model="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-radio`"
      >
        <el-radio
          v-for="(item, itemIndex) in selectOptions"
          :key="`radio-${config.dynamicFormProp}-${itemIndex}`"
          :label="item.label"
          :border="config.border"
        >
          {{ item.text }}
        </el-radio>
      </el-radio-group>
      <wang-editor
        v-else-if="config.type === 'editor'"
        v-model="context[config.dynamicFormProp]"
        :class="`${classPrefix}-form-editor`"
        :editor-custom-config="{
          readOnly: config.disabled || false
        }"
      />
      <div v-else :class="`${classPrefix}-form-${config.type}`">
        {{ config.type }}
      </div>
    </slot>
  </el-form-item>
</template>

<style lang="less">
@prefix-cls: ~'dynamic';
.@{prefix-cls} {
  &-form {
    &-item {
      display: inline-flex;
      box-sizing: border-box;
      padding-left: 2rem;
      text-align: left;
      width: 100%;
      .@{prefix-cls}-form-datepicker {
        width: 100%;
        max-width: 25rem;
      }
    }
    &-input,
    &-select {
      width: 100%;
      max-width: 25rem;
      &.el-textarea {
        max-width: none;
      }
    }
    &-transfer {
      width: 100%;
    }
    &-tree {
      width: 100%;
    }
    &-treeselect {
      width: 100%;
      max-width: 25rem;
    }
  }
}
</style>
