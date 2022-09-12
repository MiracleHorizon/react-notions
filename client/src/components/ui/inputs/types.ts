import React, { RefObject } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { InputEvent } from 'types'

export default interface InputPropTypes
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (e: InputEvent) => void
  onClear?: () => void
  onBlur?: () => void
  reference?: RefObject<HTMLInputElement>
  renderFocusable?: boolean
  renderSelectable?: boolean
  type: 'text' | 'email' | 'password' | 'url'
  register?: UseFormRegisterReturn<any>
  isEmpty?: boolean
  disabled?: boolean
}

export interface IInputParams {
  value: string
  handleChangeValue: (e: InputEvent) => void
}
