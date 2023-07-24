<script setup lang="ts">
import { DataField, createForm, onFieldReact } from '@formily/core'
import { FormItem, Input, Submit, Radio, Select } from '@formily/element-plus'
import { FormProvider, Field } from '@formily/vue'
import { action } from '@formily/reactive'
import InputWithAddition from './InputWithAddition.vue'

const useAsyncDataSource = (pattern, service) => {
  onFieldReact(pattern, (field: DataField) => {
    field.loading = true
    service(field).then(
      action.bound((data) => {
        field.dataSource = data
        field.loading = false
      })
    )
  })
}

const form = createForm({
  effects: () => {
    useAsyncDataSource('dataType', async (field) => {
      console.log('dataType', field)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { label: '1', value: 1 },
            { label: '2', value: 2 }
          ])
        }, 1000)
      })
    })
  }
})

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
      <Field
        v-if="item.type === 'select'"
        :name="item.name"
        :title="item.title"
        :decorator="[FormItem]"
        :component="[Select]"
      />
    </template>
    <Submit @submit="save">保存</Submit>
  </FormProvider>
</template>
