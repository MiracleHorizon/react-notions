import React, { FC } from 'react'

import PropTypes from './Resizer.types'
import * as Resizer from './Resizer.styles'

const SidebarResizer: FC<PropTypes> = ({
  resizerRef,
  location,
  isResizingEnabled,
}) => (
  <Resizer.Container ref={resizerRef} location={location}>
    <Resizer.Line isResizingEnabled={isResizingEnabled} />
  </Resizer.Container>
)

export default SidebarResizer
