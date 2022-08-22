import React, { FC, memo } from 'react'

import { DotsSvg } from 'components/ui/svg'
import PropTypes from './OptionsButton.types'
import Button from './OptionsButton.styles'

const OptionsButton: FC<PropTypes> = memo(
  ({ onClickAction, reference, ...styles }) => (
    <Button
      {...styles}
      role='button'
      data-btn='options'
      ref={reference}
      onClick={onClickAction}
      onContextMenu={onClickAction}
    >
      <DotsSvg />
    </Button>
  )
)

export default OptionsButton
