import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getMemberListApi = (params?): Promise<IResponse> => {
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
