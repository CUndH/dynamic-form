<script setup lang="ts">
import { createForm } from "@formily/core";
import { createSchemaField, FormProvider } from "@formily/vue";
import {
  Submit,
  Input,
  FormItem,
  Cascader,
  Select,
} from "@formily/element-plus";
import InputPrepend from "./components/InputPrepend.vue";

interface IForm {
  name: string;
  describe: string;
}

const form = createForm<IForm>();

const { SchemaField, SchemaStringField } = createSchemaField({
  components: { FormItem, Input, Cascader, InputPrepend, Select },
  scope: {
    fetchDepartment: (filed: any) => {
      filed.dataSource = [
        {
          label: "开发部",
          value: 1,
        },
      ];
    },
  },
});

const schema = {
  type: "object",
  properties: {
    phone: {
      type: "string",
      title: "手机号",
      required: true,
      "x-validator": [{ required: true }, "phone"],
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-index": 1,
    },
    department: {
      type: "string",
      title: "部门",
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-reactions": "{{fetchDepartment}}",
      "x-index": 2,
      "x-decorator-props": {
        labelWrap: true,
        tooltip: "提示提示",
      },
    },
    departmentSec: {
      type: "string",
      title: "二级部门",
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-index": 3,
      enum: [
        { label: "前端", value: 1 },
        { label: "后端", value: 2 },
        { label: "测试", value: 3 },
      ],
      "x-reactions": {
        dependencies: ["department"],
        fulfill: {
          state: {
            display: '{{$deps[0] === 1 ? "visible" : "hidden"}}',
          },
        },
      },
    },
    describe: {
      type: "string",
      title: "描述",
      "x-decorator": "FormItem",
      "x-component": "Input.TextArea",
      "x-component-props": {
        rows: 5,
      },
      "x-index": 5,
    },
  },
};

function onSave(formValue: IForm) {
  console.log(formValue);
}
</script>

<template>
  <div class="container">
    <FormProvider :form="form">
      <SchemaField :schema="schema">
        <SchemaStringField
          title="姓名"
          name="name"
          :x-index="0"
          x-decorator="FormItem"
          x-component="InputPrepend"
        >
        </SchemaStringField>
      </SchemaField>
      <Submit @submit="onSave">保存</Submit>
    </FormProvider>
  </div>
</template>

<style scoped></style>
