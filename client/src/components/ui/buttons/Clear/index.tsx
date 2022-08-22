import React, { FC, memo } from 'react'
import { IVoidClick } from 'types'
import * as Button from './ClearButton.styles'

const ClearButton: FC<IVoidClick> = memo(({ onClickAction }) => (
  <Button.Container role='button' data-btn='clear' onClick={onClickAction}>
    <Button.Title>Clear</Button.Title>
  </Button.Container>
))

export default ClearButton
