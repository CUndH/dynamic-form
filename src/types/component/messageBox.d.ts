import { ElMessageBoxOptions } from "element-plus"
import { AppContext, VNodeProps } from "vue"

declare interface MessageBoxProps<T> {
  componentProps?: Subtract<T, VNodeProps>;
  title: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  opts?: Omit<ElMessageBoxOptions, 'onCancel' | 'onConfirm'>;
  appCtx?: AppContext;
}
