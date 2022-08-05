import React, { FC } from 'react'
import * as Button from './ToggleOptionButton.styles'

const ToggleOptionButton: FC<{ isActive: boolean }> = props => (
  <Button.Container {...props}>
    <Button.Checkbox />
  </Button.Container>
)

export default ToggleOptionButton
