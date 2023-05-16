import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getDepartmentTreeDataApi = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/department/tree',
    params
  })
}
