import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import PropTypes from './FilledTooltip.types'
import * as Tooltip from './FilledTooltip.styles'

const FilledTooltip: FC<PropTypes> = ({ title, desc, ...styles }) => (
  <TooltipWrapper>
    <Tooltip.Container {...styles}>
      {title && <Tooltip.Title>{title}</Tooltip.Title>}
      {desc && <Tooltip.Description>{desc}</Tooltip.Description>}
    </Tooltip.Container>
  </TooltipWrapper>
)

export default FilledTooltip
