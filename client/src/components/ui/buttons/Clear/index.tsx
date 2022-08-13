import React, { FC } from 'react'
import { IVoidClick } from 'types'
import * as Button from './ClearButton.styles'

const ClearButton: FC<IVoidClick> = ({ onClickAction }) => (
  <Button.Container onClick={onClickAction}>
    <Button.Title>Clear</Button.Title>
  </Button.Container>
)

export default ClearButton
