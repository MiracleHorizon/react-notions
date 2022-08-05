import React, { FC, memo } from 'react'
import PropTypes from '../input.types'
import Input from './CommonInput.styles'

const CommonInput: FC<PropTypes> = memo(
  ({ inputMode, placeholder, value, reference, onChange }) => (
    <Input
      ref={reference}
      type={inputMode}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
)

export default CommonInput
