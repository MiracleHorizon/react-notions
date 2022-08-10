import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const NotionContentItemOptionsTooltip: FC<{ reference: TDivRef }> = ({
  reference,
}) => (
  <TooltipWrapper>
    <Tooltip.Container
      coords={tooltipsCoordsHandler.createPageBoard(reference)}
      itemsCenter
      transX
    >
      <Tooltip.TextContainer>
        <Tooltip.Title>Drag</Tooltip.Title>
        <Tooltip.Description>to move</Tooltip.Description>
      </Tooltip.TextContainer>
      <Tooltip.TextContainer>
        <Tooltip.Title>Click</Tooltip.Title>
        <Tooltip.Description>to open menu</Tooltip.Description>
      </Tooltip.TextContainer>
    </Tooltip.Container>
  </TooltipWrapper>
)

export default NotionContentItemOptionsTooltip
