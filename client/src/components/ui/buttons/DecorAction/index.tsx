import React, { FC } from 'react'
import PropTypes from './DecorActionButton.types'
import * as Button from './DecorActionButton.styles'

const DecorActionButton: FC<PropTypes> = ({
  title,
  onClickAction,
  StartSvg,
}) => (
  <Button.Container onClick={onClickAction}>
    {StartSvg && <StartSvg />}
    <Button.Title>{title}</Button.Title>
  </Button.Container>
)

export default DecorActionButton
