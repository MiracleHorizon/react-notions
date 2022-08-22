import React, { RefObject } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { InputEvent } from 'types'

export default interface InputPropTypes
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (e: InputEvent) => void
  onClear?: () => void
  reference?: RefObject<HTMLInputElement>
  renderFocusable?: boolean
  renderSelectable?: boolean
  register?: UseFormRegisterReturn<any>
}

export interface IInputParams {
  value: string
  handleChangeValue: (e: InputEvent) => void
}
