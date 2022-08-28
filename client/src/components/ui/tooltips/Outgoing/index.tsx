import React, { FC } from 'react'

import PropTypes from './OutgoingTooltip.types'
import * as Tooltip from './OutgoingTooltip.styles'

const OutgoingTooltip: FC<PropTypes> = ({ title, isActive, EndButton }) => (
  <Tooltip.Wrapper isActive={isActive}>
    <Tooltip.Title>{title}</Tooltip.Title>
    {EndButton && <EndButton />}
  </Tooltip.Wrapper>
)

export default OutgoingTooltip
