import UserDetailVue from "./components/UserDetail.vue";
import SetUserStatusVue from "./components/SetUserStatus.vue";
import { useModal } from "@/hook/useModal";

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

export function useUserDetailModal(props: MessageBoxProps<UserDetailComp['$props']>) {
  useModal(UserDetailVue, props)
}

type UserStatusComp = InstanceType<typeof SetUserStatusVue>

export function useUserStatusModal(props: MessageBoxProps<UserStatusComp['$props']>) {
  useModal(SetUserStatusVue, props)
}