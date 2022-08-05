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
  register?: UseFormRegisterReturn<any>
}
