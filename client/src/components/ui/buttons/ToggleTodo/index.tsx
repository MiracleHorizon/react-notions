import React, { FC } from 'react'

import { CheckboxSquareSvg, CheckSvg } from 'components/ui/svg'
import PropTypes from './ToggleTodoButton.types'
import Container from './ToggleTodoButton.styles'

const ToggleTodoButton: FC<PropTypes> = ({
  isActive,
  toggleActive,
  squareColor,
}) => (
  <Container
    role='button'
    data-btn='toggle-todo'
    isActive={isActive}
    onClick={toggleActive}
    squareColor={squareColor}
  >
    {isActive ? <CheckSvg /> : <CheckboxSquareSvg />}
  </Container>
)

export default ToggleTodoButton
