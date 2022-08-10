import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import tooltipsCoordsHandler from 'utils/coordsHandlers/tooltips'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const AddBlockBelowTooltip: FC<{ reference: TDivRef }> = ({ reference }) => (
  <TooltipWrapper>
    <Tooltip.Container
      coords={tooltipsCoordsHandler.createPageBoard(reference)}
      transX
    >
      <Tooltip.TextContainer>
        <Tooltip.Title>Click</Tooltip.Title>
        <Tooltip.Description>to add block below</Tooltip.Description>
      </Tooltip.TextContainer>
    </Tooltip.Container>
  </TooltipWrapper>
)

export default AddBlockBelowTooltip
