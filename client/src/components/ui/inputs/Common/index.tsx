import React, { FC } from 'react'

import PropTypes from '../types'
import Input from './CommonInput.styles'

const CommonInput: FC<PropTypes> = ({
  inputMode,
  placeholder,
  value,
  reference,
  onChange,
}) => (
  <Input
    ref={reference}
    type={inputMode}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)

export default CommonInput
