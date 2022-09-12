import { ValidationMode } from 'react-hook-form'

type TRevalidationMode = 'onSubmit' | 'onBlur' | 'onChange'

export default interface IDefaultFormOptions {
  shouldFocusError: boolean
  reValidateMode: TRevalidationMode
  mode: keyof ValidationMode
}
