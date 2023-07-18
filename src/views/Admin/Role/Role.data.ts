import { useModal } from '@/hook/useModal'
import AddUserVue from './components/AddUser.vue'
import AddRoleVue from './components/AddRole.vue'
import SetRoleStatusVue from './components/SetRoleStatus.vue'

type AddUserComp = InstanceType<typeof AddUserVue>

export function useAddUserModal(props: MessageBoxProps<AddUserComp['$props']>) {
  useModal(AddUserVue, props)
}

type AddRoleComp = InstanceType<typeof AddRoleVue>

export function useAddRoleModal(props: MessageBoxProps<AddRoleComp['$props']>) {
  useModal(AddRoleVue, props)
}

type SetRoleStatusComp = InstanceType<typeof AddRoleVue>

export function useSetRoleStatusModal(props: MessageBoxProps<SetRoleStatusComp['$props']>) {
  useModal(SetRoleStatusVue, props)
}