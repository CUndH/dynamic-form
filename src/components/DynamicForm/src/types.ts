export type DynamicFormConfig = {
  label: string
  colsNumber: number
  config: Array<DynamicFormConfigItem[]>
} & Recordable

export type DynamicFormConfigItem = {
  label: string
  dynamicFormProp: string
  rules?: any[]
  type: string
  placeholder?: string
  componentProps?: any
} & Recordable
