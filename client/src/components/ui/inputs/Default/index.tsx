import React, { FC } from 'react'

import PropTypes from '../types'
import Input from './DefaultInput.styles'

const DefaultInput: FC<PropTypes> = ({
  type,
  placeholder,
  value,
  reference,
  onChange,
}) => (
  <Input
    ref={reference}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)

export default DefaultInput
