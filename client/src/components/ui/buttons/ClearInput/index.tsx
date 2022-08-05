import React, { FC } from 'react'

import { ClearInputSvg } from 'components/ui/svg'
import PropTypes from './ClearInputButton.types'
import Button from './ClearInputButton.styles'

const ClearInputButton: FC<PropTypes> = ({ onClickAction, coords }) => (
  <Button
    role='button'
    data-btn='clear-input'
    onClick={onClickAction}
    {...coords}
  >
    <ClearInputSvg />
  </Button>
)

export default ClearInputButton
