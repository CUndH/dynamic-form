declare interface Fn<T = any> {
  (...arg: T[]): T
}

declare type Nullable<T> = T | null

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type ElememtPlusSize = 'default' | 'small' | 'large'

declare type ElementPlusInfoType = 'success' | 'info' | 'warning' | 'danger'

declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>

declare type ComponentRef<T> = InstanceType<T>

declare type LocaleType = 'zh-CN' | 'en'

declare type AxiosHeaders =
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put' | 'patch'

declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

declare interface AxiosConfig {
  params?: any
  data?: any
  url?: string
  method?: AxiosMethod
  headersType?: string
  responseType?: AxiosResponseType
}

declare interface IResponse<T = any> {
  code: string | number
  msg: string
  data: T extends any ? T : T & any
}

type Nullable<T> = T | null

type IResPromise<T = any> = Promise<IResponse<T>>
declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export default classes
}

declare interface DictItemRes {
  id: string
  dictId: string
  label: string
  dictType: string
  description: string
  sortOrder: number
  createTime: string
  updateTime: string
  remarks: string
  delFlag: string
  value: string
}

declare type Subtract<T, K> = Pick<T, Exclude<keyof T, keyof K>>

declare interface ICount {
  label: string
  value?: number
  icon?: string
  category?: string
  categoryValue?: number
}

declare interface IDataStorage {
  left: string
  right: string
}

declare interface IPieData {
  name: string,
  value: number
}

declare interface IAreaAlarm {
  level: string
  location: string
  content: string
  datetime: string
}

declare interface ILast {
  area: string
  usage: number
  value: string
}
