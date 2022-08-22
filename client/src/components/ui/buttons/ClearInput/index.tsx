import React, { FC, memo } from 'react'

import { ClearInputSvg } from 'components/ui/svg'
import { IVoidClick } from 'types'
import Button from './ClearInputButton.styles'

const ClearInputButton: FC<IVoidClick> = memo(({ onClickAction }) => (
  <Button role='button' data-btn='clear-input' onClick={onClickAction}>
    <ClearInputSvg />
  </Button>
))

export default ClearInputButton
