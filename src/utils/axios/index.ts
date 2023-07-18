import { service } from './service'

import { config } from './config'

const { default_headers } = config

interface HeadersType {
  headers?: {
    isToken: boolean
    'TENANT-ID': string
    Authorization: string
  }
}

const request = <T>(option: AxiosConfig & HeadersType): IResPromise<T> => {
  const { url, method, params, data, headersType, responseType, headers } = option
  return service({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: Object.assign(
      {
        'Content-Type': headersType || default_headers
      },
      headers
    )
  }) as unknown as IResPromise<T>
}
export default {
  get: <T>(option: AxiosConfig & HeadersType) => {
    return request<T>({ method: 'get', ...option })
  },
  post: <T>(option: AxiosConfig & HeadersType) => {
    return request<T>({ method: 'post', ...option })
  },
  patch: <T>(option: AxiosConfig & HeadersType) => {
    return request<T>({ method: 'patch', ...option })
  },
  delete: <T>(option: AxiosConfig & HeadersType) => {
    return request<T>({ method: 'delete', ...option })
  },
  put: <T>(option: AxiosConfig & HeadersType) => {
    return request<T>({ method: 'put', ...option })
  }
}
