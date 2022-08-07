import React, { FC } from 'react'
import PropTypes from './Resizer.types'
import * as Resizer from './Resizer.styles'

const SidebarResizer: FC<PropTypes> = ({
  resizerRef,
  isResizingEnabled,
  onClickAction,
  isActive,
}) => (
  <Resizer.Container onClick={!isActive ? onClickAction : () => {}}>
    <Resizer.Line ref={resizerRef} isResizingEnabled={isResizingEnabled} />
  </Resizer.Container>
)

export default SidebarResizer
