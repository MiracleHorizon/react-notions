import { UseFormRegister, UseFormResetField, UseFormSetFocus, UseFormWatch } from 'react-hook-form'

export default interface ChangePasswordFormProps {
  onSubmit: () => void
  register: UseFormRegister<SubmitChangePasswordFormParams>
  watch: UseFormWatch<SubmitChangePasswordFormParams>
  resetField: UseFormResetField<SubmitChangePasswordFormParams>
  setFocus: UseFormSetFocus<SubmitChangePasswordFormParams>
}

export interface SubmitChangePasswordFormParams {
  oldPass: string
  newPass: string
  newPassRepeat: string
}
