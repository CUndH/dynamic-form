import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getDepartmentTreeDataApi = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/department/tree',
    params
  })
}

export const createUserApi = (data): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/user',
    data
  })
}

export const updateUserApi = (data): Promise<IResponse> => {
  return request.put({
    url: REQUEST_ORIGIN + '/user',
    data
  })
}
