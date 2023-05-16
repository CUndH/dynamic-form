import { ElMessageBox, ElMessageBoxOptions } from "element-plus"
import { AppContext, VNodeProps, h } from "vue"
import UserDetailVue from "./components/UserDetail.vue";
import SetUserStatusVue from "./components/SetUserStatus.vue";

export const statusOpts = [{
  label: '启用状态',
  value: 1,
}, {
  label: '禁用状态',
  value: 2,
}, {
  label: '在线状态',
  value: 3,
}, {
  label: '离线状态',
  value: 4,
}]

type UserDetailComp = InstanceType<typeof UserDetailVue>

interface MessageBoxProps<T> {
  componentProps?: Subtract<T, VNodeProps>;
  title: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  opts?: Omit<ElMessageBoxOptions, 'onCancel' | 'onConfirm'>;
  appCtx?: AppContext;
}

export function useModal(component, props) {
  ElMessageBox.confirm(
    h(component, props.componentProps || {}),
    props.title,
    {
      ...props.opts,
      callback: (action) => {
        if (action === 'cancel' && props.onCancel) props.onCancel()
        if (action === 'confirm' && props.onConfirm) props.onConfirm()
      }
    },
    props.appCtx
  )
}

export function useUserDetailModal(props: MessageBoxProps<UserDetailComp['$props']>) {
  useModal(UserDetailVue, props)
}

type UserStatusComp = InstanceType<typeof SetUserStatusVue>

export function useUserStatusModal(props: MessageBoxProps<UserStatusComp['$props']>) {
  useModal(SetUserStatusVue, props)
}