import { ElMessageBox } from "element-plus"
import { h } from "vue"

export function useModal(component, props) {
  ElMessageBox({
    title: props.title,
    message: h(component, props.componentProps || {}),
    callback: (action) => {
      if (action === 'cancel' && props.onCancel) props.onCancel()
      if (action === 'confirm' && props.onConfirm) props.onConfirm()
    },
    ...props.opts
  }, props.appCtx)
}
