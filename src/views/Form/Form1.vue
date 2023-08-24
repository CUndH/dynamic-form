<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { DeviceDetail } from './form.type'
import { Submit } from '@formily/element-plus'
import { ref, computed } from 'vue'
import { schemaConfig1, schemaConfig2, schema1, schema2 } from './form.data'
import PocTable from "@/components/Table/src/Table.vue";

const form1 = createForm<DeviceDetail>()
const form2 = createForm<DeviceDetail>()

const { SchemaField: SchemaField1 } = createSchemaField(schemaConfig1)
const { SchemaField: SchemaField2 } = createSchemaField(schemaConfig2)

const deviceSchema = schema1
const dotSchema = schema2

function onSave(formValue: DeviceDetail) {
  currentFormValue.value = formValue;
  visible1.value = false
  visible2.value = false
}

const visible1 = ref(false)
const visible2 = ref(false)
const currentSchema = ref<Object>({});
const currentFormValue = ref({});

function openDeviceModal() {
  visible1.value = true
  currentSchema.value = schema1;
}

function openDotModal() {
  visible2.value = true
  currentSchema.value = schema2;
}
</script>

<template>
  <div class="form1-container">
    <div class="form1-header">
      <el-button type="primary" @click="openDeviceModal"> 连接器弹窗 </el-button>
      <el-button type="primary" @click="openDotModal"> 点位弹窗 </el-button>
    </div>
    <div class="form1-content">
      <highlightjs
          :class="`form1-schema`"
          language="json"
          :code="JSON.stringify(currentSchema, null, '&nbsp')"
      />
      <highlightjs
          :class="`form1-schema`"
          language="json"
          :code="JSON.stringify(currentFormValue, null, '&nbsp')"
      />
    </div>
  </div>

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
</template>

<style lang="scss">
.el-input-number .el-input__inner {
  text-align: left;
}
.form1 {
  pre code.hljs {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.form1 {
  &-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &-header {
    flex: 0;
  }
  &-content {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  &-schema {
    width: 50%;
    height: 100%;
    text-align: left;
    margin: 0;
    box-sizing: border-box;
    &:first-child {
      margin-right: 2rem;
    }
  }
}
</style>
