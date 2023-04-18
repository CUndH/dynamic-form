import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getRoleListApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/role/page',
    params
  })
}

export const addRoleApi = (params): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/role/add',
    params
  })
}