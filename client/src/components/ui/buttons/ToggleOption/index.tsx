import React, { FC } from 'react'
import * as Button from './ToggleOptionButton.styles'

const ToggleOptionButton: FC<{ isActive: boolean }> = props => (
  <Button.Container role='button' {...props}>
    <Button.Checkbox role='checkbox' />
  </Button.Container>
)

export default ToggleOptionButton
