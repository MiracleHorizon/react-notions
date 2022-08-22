import React, { FC, memo } from 'react'
import * as Button from './ToggleOptionButton.styles'

const ToggleOptionButton: FC<{ isActive: boolean }> = memo(props => (
  <Button.Container role='button' data-btn='toggle-option' {...props}>
    <Button.Checkbox role='checkbox' />
  </Button.Container>
))

export default ToggleOptionButton
