import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getRolePageApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/role/page',
    params
  })
}

export const getRoleApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/role/detail',
    params
  })
}

export const addRoleApi = (params): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/role/add',
    params
  })
}

export const addUserApi = (params): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/member/add',
    params
  })
}

export const setStatusByRoleId = (params?): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/member/status/update',
    params
  })
}

export const deleteUserByRoleId = (params?): Promise<IResponse> => {
  return request.post({
    url: REQUEST_ORIGIN + '/member/delete',
    params
  })
}

export const getRoleListApi = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/role/list',
    params
  })
}
