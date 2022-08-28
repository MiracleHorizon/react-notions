import React, { FC, memo } from 'react'
import { CSSTransition } from 'react-transition-group'

import { DotsSvg } from 'components/ui/svg'
import PropTypes from './OptionsButton.types'
import Button, { appearDuration } from './OptionsButton.styles'

const OptionsButton: FC<PropTypes> = memo(
  ({ onClickAction, reference, isHovering, ...styles }) => (
    <CSSTransition
      in={isHovering}
      timeout={appearDuration}
      classNames='default'
      unmountOnExit
    >
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
    </CSSTransition>
  )
)

export default OptionsButton
