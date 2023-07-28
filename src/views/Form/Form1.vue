<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { DeviceDetail } from './form.type'
import { Submit } from '@formily/element-plus'
import { ref } from 'vue'
import { schemaConfig1, schemaConfig2, schemaConfig3, schema1, schema2, schema3 } from './form.data'

const form1 = createForm<DeviceDetail>()
const form2 = createForm<DeviceDetail>()
const form3 = createForm<DeviceDetail>()

const { SchemaField: SchemaField1 } = createSchemaField(schemaConfig1)
const { SchemaField: SchemaField2 } = createSchemaField(schemaConfig2)
const { SchemaField: SchemaField3 } = createSchemaField(schemaConfig3)

const deviceSchema = schema1
const dotSchema = schema2
const eventSettingSchema = schema3

function onSave(formValue: DeviceDetail) {
  console.log(formValue)
  visible1.value = false
  visible2.value = false
  visible3.value = false
}

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

function openDeviceModal() {
  visible1.value = true
}

function openDotModal() {
  visible2.value = true
}

function openEventSettingModal() {
  visible3.value = true
}
</script>

<template>
  <el-button type="primary" @click="openDeviceModal"> 连接器弹窗 </el-button>
  <el-button type="primary" @click="openDotModal"> 点位弹窗 </el-button>
  <el-button type="primary" @click="openEventSettingModal"> 事件规则配置弹窗 </el-button>

  <el-dialog v-model="visible1" title="连接器配置">
    <div class="mb-5">
      <span class="font-bold">循环水系统2号机组 / 直连连接器 / S7 ISO TCP</span>
    </div>
    <FormProvider :form="form1">
      <SchemaField1 :schema="deviceSchema" />
      <div class="text-right">
        <Submit @submit="onSave">保存</Submit>
      </div>
    </FormProvider>
  </el-dialog>

  <el-dialog v-model="visible2" title="新增点位">
    <FormProvider :form="form2">
      <SchemaField2 :schema="dotSchema" />
      <div class="text-right">
        <Submit @submit="onSave">保存</Submit>
      </div>
    </FormProvider>
  </el-dialog>
  
  <el-dialog v-model="visible3" title="事件规则配置">
    <FormProvider :form="form3">
      <SchemaField3 :schema="eventSettingSchema" />
      <div class="text-right">
        <Submit @submit="onSave">保存</Submit>
      </div>
    </FormProvider>
  </el-dialog>
</template>

<style lang="scss">
.el-input-number .el-input__inner {
  text-align: left;
}
</style>
