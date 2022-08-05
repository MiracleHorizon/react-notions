import React, { FC } from 'react'

import PropTypes from './PageDecorButton.types'
import * as Button from './PageDecorButton.styles'

const PageDecorButton: FC<PropTypes> = ({ title, StartSvg, onClickAction }) => (
  <Button.Container role='button' onClick={onClickAction}>
    <StartSvg />
    <Button.Title>{title}</Button.Title>
  </Button.Container>
)

export default PageDecorButton
