import { config } from '@/utils/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

export default [
  {
    url: '/api/member/page',
    method: 'get',
    response: ({ query }) => {
      const pageStartIndex = query.size * (query.current - 1)
      return {
        code: result_code,
        data: {
          total: 34,
          records: new Array(Number(query.size || 10)).fill({}).map((_, index) => {
            return {
              id: `role_${pageStartIndex + index + 1}`,
              roleName: `技术经理${index}`
            }
          })
        },
        msg: ''
      }
    }
  },
  {
    url: '/api/member/memberOfDepartment',
    method: 'get',
    response: ({ query }) => {
      const pageStartIndex = query.size * (query.current - 1)
      return {
        code: result_code,
        data: new Array(Number(query.size || 10)).fill({}).map((_, index) => {
          return {
            id: `department_${pageStartIndex + index + 1}`,
            name: '开发部',
            memberList: new Array(5).fill({}).map((_, index2) => ({
              id: `member_${index}_${index2}`,
              name: '王老二'
            })),
          }
        }),
        msg: ''
      }
    }
  }
] as MockMethod[]
