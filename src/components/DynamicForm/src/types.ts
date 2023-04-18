export type DynamicFormConfig = {
  label: string
  colsNumber: number
  config: DynamicFormConfigItem[]
} & Recordable

export type DynamicFormConfigItem = {
  label: string
  dynamicFormProp: string
  rules?: any[]
  type?: FormItemType
  placeholder?: string
  componentProps?: any
  required?: boolean
} & Recordable

export type FormItemType = 'input' | 'transfer' | 'inputNumber' | 'select' | 'treeSelect' | 'dateTimePicker' | 'radio' | 'textarea';