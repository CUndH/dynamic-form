import { config } from '@/utils/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

export default [
  {
    url: '/api/department/tree',
    method: 'get',
    response: ({ query }) => {
      return { "code": 0, "msg": null, "data": [{ "id": "1", "parentId": "0", "weight": 0, "name": "山东1", "isLock": false, "createTime": "2018-01-22 19:00:23", "children": [{ "id": "3", "parentId": "1", "weight": 0, "name": "潍坊", "isLock": false, "createTime": "2018-01-22 19:00:44", "children": [{ "id": "4", "parentId": "3", "weight": 4, "name": "高新", "isLock": false, "createTime": "2018-01-22 19:00:52", "children": [{ "id": "5", "parentId": "4", "weight": 5, "name": "院校", "isLock": false, "createTime": "2018-01-22 19:00:57" }] }] }] }, { "id": "1656185131791761410", "parentId": "0", "weight": 0, "name": "北京航空", "isLock": false, "createTime": "2023-05-10 14:31:21" }, { "id": "1656184388695310337", "parentId": "0", "weight": 0, "name": "红都国际", "isLock": false, "createTime": "2023-05-10 14:28:23" }, { "id": "2", "parentId": "0", "weight": 2, "name": "沙县国际", "isLock": false, "createTime": "2018-01-22 19:00:38", "children": [{ "id": "7", "parentId": "2", "weight": 7, "name": "山东沙县", "isLock": false, "createTime": "2018-01-22 19:01:57", "children": [{ "id": "8", "parentId": "7", "weight": 8, "name": "潍坊沙县", "isLock": false, "createTime": "2018-01-22 19:02:03" }] }] }] }
    }
  },
] as MockMethod[]
