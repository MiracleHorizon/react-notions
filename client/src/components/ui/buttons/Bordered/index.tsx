import React, { FC, memo } from 'react'
import PropTypes from './BorderedButton.types'
import * as Button from './BorderedButton.styles'

const BorderedButton: FC<PropTypes> = memo(({ isActive, title, action }) => (
  <Button.Wrapper>
    <Button.Container role='button' onClick={() => action(title)}>
      <Button.Title>{title}</Button.Title>
    </Button.Container>
    {isActive && <Button.Border />}
  </Button.Wrapper>
))

export default BorderedButton
