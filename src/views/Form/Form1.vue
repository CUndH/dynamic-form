<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { DeviceDetail } from './form.type'
import { Submit } from '@formily/element-plus'
import { ref, computed } from 'vue'
import { schemaConfig1, schemaConfig2, schemaConfig3, schema1, schema2, schema3 } from './form.data'
import PieCard from "@/views/Index/components/PieCard.vue";

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
  currentFormValue.value = formValue;
  visible1.value = false
  visible2.value = false
  visible3.value = false
}

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const currentSchema = ref<Object>({});
const currentFormValue = ref({});

function openDeviceModal() {
  visible1.value = true
  currentSchema.value = schema1;
  form1.reset();
}

function openDotModal() {
  visible2.value = true
  currentSchema.value = schema2;
  form2.reset();
}

function openEventSettingModal() {
  visible3.value = true
  currentSchema.value = schema3;
  form3.reset();
}
</script>

<template>
  <div class="form1-container">
    <div class="form1-header">
      <el-button type="primary" @click="openDeviceModal"> 连接器弹窗 </el-button>
      <el-button type="primary" @click="openDotModal"> 点位弹窗 </el-button>
      <el-button type="primary" @click="openEventSettingModal"> 事件规则配置弹窗 </el-button>
    </div>
    <div class="form1-content">
<!--      <highlightjs-->
<!--          :class="`form1-schema`"-->
<!--          language="json"-->
<!--          :code="JSON.stringify(currentSchema, null, '&nbsp')"-->
<!--      />-->
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
    <div class="form-dialog-container">
      <div class="form1-dialog-content">
        <FormProvider :form="form1">
          <SchemaField1 :schema="deviceSchema" />
          <div class="text-right">
            <Submit @submit="onSave">保存</Submit>
          </div>
        </FormProvider>
      </div>
      <highlightjs
          class="form1-dialog-schema"
          language="json"
          :code="JSON.stringify(schema1, null, '&nbsp')"
      />
    </div>
  </el-dialog>

  <el-dialog v-model="visible2" title="新增点位">
    <div class="form-dialog-container">
      <div class="form1-dialog-content">
        <FormProvider :form="form2">
          <SchemaField2 :schema="dotSchema" />
          <div class="text-right">
            <Submit @submit="onSave">保存</Submit>
          </div>
        </FormProvider>
      </div>
      <highlightjs
          class="form1-dialog-schema"
          language="json"
          :code="JSON.stringify(schema2, null, '&nbsp')"
      />
    </div>
  </el-dialog>

  <el-dialog v-model="visible3" title="事件规则配置">
    <div class="form-dialog-container">
      <div class="form1-dialog-content">
        <FormProvider :form="form3">
          <SchemaField3 :schema="eventSettingSchema" />
          <div class="text-right">
            <Submit @submit="onSave">保存</Submit>
          </div>
        </FormProvider>
      </div>
      <highlightjs
          class="form1-dialog-schema"
          language="json"
          :code="JSON.stringify(schema3, null, '&nbsp')"
      />
    </div>
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
.form-dialog-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  .form1-dialog-content {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 10px;
  }
  .form1-dialog-schema {
    width: 40%;
    margin: 0;
    height: 50rem;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
