import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

// 获取设备列表
export const getLogListApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/log/page',
    params
  })
}
