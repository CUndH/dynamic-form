import { ElInput } from 'element-plus'
import { transformComponent } from '../../utils/transformComponent'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '@formily/element-plus'
import { composeExport } from '../../utils/utils'

export type InputProps = typeof ElInput

const TransformElInput = transformComponent<InputProps>(ElInput, {
  change: 'update:modelValue',
})

const InnerInput = connect(
  TransformElInput,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  }),
  mapReadPretty(PreviewText.Input)
)

const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      types: 'textarea'
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export const Input = composeExport(InnerInput, {
  TextArea
})

console.log(Input, 'input')

export default Input;