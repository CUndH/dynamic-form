import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import qs from 'qs'

import { config } from './config'

import cookie from '@/utils/cookie'

import { ElMessage } from 'element-plus'

import eventBus, { EventTypeName } from '@/utils/eventBus'
// import { formatFormData } from "@/utils/ajax";
import { useCache } from '@/utils/useCache'

const { base_url } = config

const { wsCache } = useCache()

// @ts-ignore
export const PATH_URL =
  base_url[import.meta.env.NODE_ENV] || import.meta.env.VITE_API_BASEPATH || ''
// @ts-ignore

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: PATH_URL, // api 的 base_url
  timeout: config.request_timeout, // 请求超时时间
  maxBodyLength: 10000,
  maxContentLength: 10000
})

const parse = function (str: string) {
  const data = {}
  const p = str.split('&')
  p.forEach((item: string) => {
    const session = item.split('=')
    // @ts-ignore
    data[session[0]] = decodeURIComponent(session[1])
  })
  return data
}

const CSRF_KEY = 'access_token'

const whiteList = []
// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (
      config.method === 'post' &&
      (config.headers as any)['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(config.data)
    }
    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url as string
      url += '?'
      const keys = Object.keys(config.params)
      for (const key of keys) {
        if (config.params[key] !== void 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
      }
      url = url.substring(0, url.length - 1)
      config.params = {}
      config.url = url
    }
    const csrf = cookie.get(CSRF_KEY)
    const sessionCsrf = sessionStorage.getItem(CSRF_KEY)
    const isWhiteList = whiteList.some((item) => {
      return config.url === item
    })
    const inlineFlag = false && !isWhiteList
    ;(config.headers as any)['TENANT-ID'] = wsCache.get('tenantId')
    if (!isWhiteList) {
      (config.headers as any)['Authorization'] = `Bearer ${csrf || sessionCsrf || ''}`
    }
    switch (config.method) {
      case 'get':
      case 'delete':
      case 'head':
      case 'options':
        if (inlineFlag) {
          config.params = Object.assign(config.params || {}, {
            [CSRF_KEY]: csrf || sessionCsrf || ''
          })
        }
        break
      case 'post':
      case 'put':
      case 'patch':
        if (typeof config.data === 'string') {
          const str = config.data
          try {
            config.data = JSON.parse(str)
          } catch (e) {
            // data数据在服务那边处理后变成了 name=val&...形式
            config.data = parse(str)
          }
        }
        if (inlineFlag) {
          config.data = Object.assign(config.data || {}, {
            [CSRF_KEY]: csrf || sessionCsrf || ''
          })
        }
        // config.data = formatFormData(config.data || {});
        break
      default:
        break
    }
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // if (response.config.responseType === 'blob') {
    //   // 如果是文件流，直接过
    //   return response
    // } else if (response.data.code === result_code) {
    //   return response.data
    // } else {
    //   ElMessage.error(response.data.message)
    // }
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response
    } else if (response.status === 200) {
      return response.data
    } else if (response.status === 401) {
      eventBus.notify(EventTypeName.LOGOUT)
    } else if (response.status === 403) {
      eventBus.notify(EventTypeName.FORBIDDEN)
    } else {
      return response.data
    }
  },
  (error: AxiosError) => {
    const { response } = error
    if (response?.status === 401 || response?.status === 424) {
      eventBus.notify(EventTypeName.LOGOUT)
      ElMessage.error(response.data?.msg || '未能读取到有效token')
    } else {
      return Promise.reject(error.response?.data)
    }
  }
)

export { service }
