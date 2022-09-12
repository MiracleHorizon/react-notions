import { UseFormRegister, UseFormReset, UseFormSetFocus, UseFormWatch } from 'react-hook-form'
import { SubmitChangePasswordFormParams } from '../ChangePasswordForm.types'

export default interface ChangePasswordFormLabelProps {
  title: string
  name: string
  placeholder: string
  resetField: UseFormReset<any>
  register: UseFormRegister<any>
  watch: UseFormWatch<any>
  isEmpty: boolean
  setFocus: UseFormSetFocus<SubmitChangePasswordFormParams>
}
