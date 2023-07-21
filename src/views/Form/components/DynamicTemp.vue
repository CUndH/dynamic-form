<script setup lang="ts">
import { createForm } from '@formily/core'
import { FormItem, Input, Submit, Radio } from '@formily/element-plus'
import { FormProvider, Field } from '@formily/vue'
import InputWithAddition from './InputWithAddition.vue'

const form = createForm()

const props = defineProps({
  configs: {
    type: Array as any,
    required: true
  }
})

const emits = defineEmits(['save'])
function save(values) {
  emits('save', values)
}
</script>

<template>
  <FormProvider :form="form">
    <template v-for="item in props.configs" :key="item.name">
      <Field
        v-if="item.type === 'input'"
        :name="item.name"
        :title="item.title"
        :decorator="[FormItem]"
        :component="[Input]"
      />
      <Field
        v-if="item.type === 'inputAddition'"
        :name="item.name"
        :title="item.title"
        :decorator="[FormItem]"
        :component="[InputWithAddition]"
      />
      <Field
        v-if="item.type === 'radio'"
        :name="item.name"
        :title="item.title"
        :decorator="[FormItem]"
        :component="[
          Radio.Group,
          {
            options: item.options
          }
        ]"
        :data-source="item.dataSource"
        border
      />
    </template>
    <Submit @submit="save">保存</Submit>
  </FormProvider>
</template>
