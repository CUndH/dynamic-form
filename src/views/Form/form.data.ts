import { FormItem, Input, InputNumber, Select, Radio, ArrayItems, Space } from '@formily/element-plus'
import { h } from 'vue'

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

export const schemaConfig3 = {
  components: { FormItem, Input, Select, ArrayItems, Space, Radio },
  scope: {
    genSortIndex: (filed) => {
      return h(FormItem, { label: `规则${ArrayItems.useIndex().value + 1}` })
    },
  }
}

export const schema3 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: '事件名称',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    level: {
      type: 'number',
      title: '地址类型',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: '一般事件',
          value: 1
        },
        {
          label: '较大事件',
          value: 2
        },
        {
          label: '重大事件',
          value: 3
        }
      ]
    },
    describe: {
      type: 'string',
      title: '描述',
      'x-decorator': 'FormItem',
      'x-component': 'Input'
    },
    type: {
      type: 'number',
      title: '类型',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: '设备',
          value: 1
        },
        {
          label: '业务指标',
          value: 2
        },
      ]
    },
    triggerCondition: {
      type: 'void',
      title: '触发条件',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
      },
      'x-component': 'Space',
      properties: {
        aa: {
          type: 'void',
          'x-component': h('span', {}, '满足下列')
        },
        triggerType: {
          type: 'number',
          required: true,
          'x-validator': [{ required: true }],
          'x-component': 'Select',
          enum: [
            {
              label: '所有',
              value: 1
            },
            {
              label: '任意',
              value: 2
            },
          ]
        },
        bb: {
          type: 'void',
          'x-component': h('span', {}, '条件时,触发场景联动')
        },
      }
    },
    rule: {
      type: 'array',
      required: true,
      'x-component': 'ArrayItems',
      items: {
        type: 'object',
        'x-componet': 'ArrayItems.Item',
        properties: {
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              feedbackLayout: 'none',
            },
            title: '{{genSortIndex}}',
            'x-component': 'ArrayItems.Remove',
            'x-component-props': {
              size: 20,
              style: {
                float: 'right',
              },
            },
          },
          ruleDetail: {
            type: 'void',
            'x-component': 'Space',
            'x-component-props': {
              style: {
                'margin-bottom': '10px'
              }
            },
            properties: {
              device: {
                type: 'number',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Select',
                enum: [
                  {
                    label: '所有',
                    value: 1
                  },
                  {
                    label: '任意',
                    value: 2
                  },
                ]
              },
              type: {
                type: 'number',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Select',
                enum: [
                  {
                    label: '所有',
                    value: 1
                  },
                  {
                    label: '任意',
                    value: 2
                  },
                ]
              },
              attr: {
                type: 'number',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Select',
                enum: [
                  {
                    label: '所有',
                    value: 1
                  },
                  {
                    label: '任意',
                    value: 2
                  },
                ]
              },
              valueType: {
                type: 'number',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Select',
                enum: [
                  {
                    label: '所有',
                    value: 1
                  },
                  {
                    label: '任意',
                    value: 2
                  },
                ]
              },
              condition: {
                type: 'number',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Select',
                enum: [
                  {
                    label: '所有',
                    value: 1
                  },
                  {
                    label: '任意',
                    value: 2
                  },
                ]
              },
              value: {
                type: 'string',
                required: true,
                'x-validator': [{ required: true }],
                'x-component': 'Input'
              },
            },
          }
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: '+ 增加触发条件',
          'x-component': 'ArrayItems.Addition',
          'x-component-props': {
            style: {
              'margin': '20px 0'
            }
          }
        },
      },
    },
    eventType: {
      type: 'number',
      title: '事件类型',
      required: true,
      'x-validator': [{ required: true }],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: '设备',
          value: 1
        },
        {
          label: '业务指标',
          value: 2
        },
      ]
    },
    pushScope: {
      type: 'number',
      title: '推送范围',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      enum: [
        {
          label: '设备',
          value: 1
        },
        {
          label: '业务指标',
          value: 2
        },
      ]
    },
    model: {
      type: 'string',
      title: '状态',
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      default: '1',
      enum: [
        { label: '启用', value: '1' },
        { label: '停用', value: '2' }
      ]
    },
  }
}