import React, { FC, memo } from 'react'
import { PlusSvg } from 'components/ui/svg'
import Button from './PlusButton.styles'

const PlusButton: FC<{ onClickAction?: () => void }> = memo(
  ({ onClickAction }) => (
    <Button role='button' data-btn='plus' onClick={onClickAction}>
      <PlusSvg />
    </Button>
  )
)

export default PlusButton
