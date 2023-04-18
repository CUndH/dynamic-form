import request from '@/utils/axios'

const REQUEST_ORIGIN = ''

export const getLogListApi = (params): Promise<IResponse> => {
  return request.get({
    url: REQUEST_ORIGIN + '/log/page',
    params
  })
}
