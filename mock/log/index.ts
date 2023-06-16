import { config } from '@/utils/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import dayjs from 'dayjs'

const { result_code } = config

export default [
  // 列表接口
  {
    url: '/api/log/page',
    method: 'get',
    response: ({ query }) => {
      const pageStartIndex = query.size * (query.current - 1)
      return {
        code: result_code,
        data: {
          total: 34,
          records: new Array(Number(query.size || 10)).fill({}).map((_, index) => {
            return {
              id: `device_${pageStartIndex + index + 1}`,
              date: dayjs().format('YYYY-MM-DD HH:mm'),
              person: 'sunyue',
              module: '项目运维',
              target: '风华科技京山_节能项目A',
              type: 1
            }
          })
        },
        msg: ''
      }
    }
  }
] as MockMethod[]
