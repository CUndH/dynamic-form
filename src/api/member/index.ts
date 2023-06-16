import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getUserListApi = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/member/page',
    params
  })
}

export const getMemberOfDepartment = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/member/memberOfDepartment',
    params
  })
}

export const getUserApi = (params?): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/member/detail',
    params
  })
}
