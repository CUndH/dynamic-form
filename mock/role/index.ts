import { config } from '@/utils/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

export default [
  {
    url: '/api/role/list',
    method: 'get',
    response: ({ query }) => {
      return {
        code: result_code,
        data: [{
          id: 1,
          name: '项目运维',
          list: [{
            id: 11,
            name: '查看订单'
          }, {
            id: 12,
            name: '新增订单'
          }, {
            id: 13,
            name: '编辑订单'
          }],
        }, {
          id: 2,
          name: '节能分析',
          list: [{
            id: 21,
            name: '查看订单'
          }, {
            id: 22,
            name: '新增订单'
          }, {
            id: 23,
            name: '编辑订单'
          }],
        }, {
          id: 3,
          name: '运维工单',
          list: [{
            id: 31,
            name: '查看订单'
          }, {
            id: 32,
            name: '新增订单'
          }, {
            id: 33,
            name: '编辑订单'
          }],
        }],
        msg: ''
      }
    }
  },
] as MockMethod[]
