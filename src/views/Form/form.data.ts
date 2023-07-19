import { FormItem, Input, InputNumber, Select, Radio } from '@formily/element-plus'

export const schemaConfig1 = {
  components: { FormItem, Input, Select, Radio, InputNumber },
  scope: {}
}

export const schema1 = {
  type: 'object',
  properties: {
    ip: {
      type: 'string',
      title: '连接器IP',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    port: {
      type: 'number',
      title: '端口号',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    model: {
      type: 'string',
      title: '模式',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      default: '1',
      enum: [
        { label: 'Rack/Slot', value: '1' },
        { label: 'TSAP', value: '2' }
      ]
    },
    rackNumber: {
      type: 'string',
      title: '机架号',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['model'],
        fulfill: {
          state: {
            display: '{{$deps[0] === "1" ? "visible" : "hidden"}}'
          }
        }
      }
    },
    slotNumber: {
      type: 'string',
      title: '槽号',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['model'],
        fulfill: {
          state: {
            display: '{{$deps[0] === "1" ? "visible" : "hidden"}}'
          }
        }
      }
    },
    TSAPClient: {
      type: 'string',
      title: '客户端TSAP',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['model'],
        fulfill: {
          state: {
            display: '{{$deps[0] === "2" ? "visible" : "hidden"}}'
          }
        }
      }
    },
    TSAPServer: {
      type: 'string',
      title: '客户端TSAP',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['model'],
        fulfill: {
          state: {
            display: '{{$deps[0] === "2" ? "visible" : "hidden"}}'
          }
        }
      }
    },
    pollingPeriod: {
      type: 'number',
      title: '轮询周期',
      required: true,
      'x-validator': [{ required: true }, { minimum: 1, maximum: 3600, triggerType: 'onInput' }],
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-decorator-props': {
        addonAfter: '秒（1-3600）'
      }
    }
  }
}

export const schemaConfig2 = {
  components: { FormItem, Input, Select },
  scope: {
    fetchAddressTypeList: (field) => {
      field.dataSource = [{
        label: "DB",
        value: "1"
      }, {
        label: "I",
        value: "2"
      }, {
        label: "Q",
        value: "3"
      }, {
        label: "M",
        value: "4"
      }]
    },
    fetchDataTypeList: (field) => {
      field.dataSource = [{
        label: "BIT（位：0/1）",
        value: "1"
      }, {
        label: "BYTE（8位无符号整数）",
        value: "2"
      }, {
        label: "SINT（8位有符号整数）",
        value: "3"
      }]
    }
  }
}


export const schema2 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: '点位名称',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    addressType: {
      type: 'string',
      title: '地址类型',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-reactions': '{{fetchAddressTypeList}}'
    },
    dbIndex: {
      type: 'string',
      title: 'DB索引',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    address: {
      type: 'string',
      title: '地址',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    dataType: {
      type: 'string',
      title: '数据类型',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-reactions': '{{fetchDataTypeList}}'
    },
    readWriteAccess: {
      type: 'string',
      title: '读写权限',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: '1',
      enum: [
        { label: '只读', value: '1' },
        { label: '读写', value: '2' }
      ],
      /** 字符串表达式形式，前后端传输这个比较简单 */
      'x-reactions': {
        dependencies: ['dataType'],
        fulfill: {
          state: {
            dataSource: "{{$deps[0] === '1' ? [{ label: '只读', value: '1' }] : [{ label: '只读', value: '1' }, { label: '读写', value: '2' }]}}",
          }
        }
      },
      /** 打开以下注释可使用前端定义复杂联动逻辑 */
      // 'x-reactions': (field) => {
      //   if (field.form.values.dataType === '1') {
      //     field.dataSource = [{ label: '只读', value: '1' }]
      //     field.value = '1';
      //   } else {
      //     field.dataSource = [
      //       { label: '只读', value: '1' },
      //       { label: '读写', value: '2' }
      //     ]
      //   }
      // }
    },
    describe: {
      type: 'string',
      title: '描述',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea'
    },
  }
}