import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import useSetModalPosition from 'hooks/useSetModalPosition'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const SidebarResizerTooltip: FC<{ reference: TDivRef }> = ({ reference }) => {
  const { setRef, rect, coords } = useSetModalPosition({
    invokerRect: reference?.current?.getBoundingClientRect().toJSON(),
    pos: 'rightCenter',
  })

  return (
    <TooltipWrapper>
      <Tooltip.Container coords={{}}>
        <Tooltip.TextContainer>
          <Tooltip.Title>Drag</Tooltip.Title>
          <Tooltip.Description>to resize</Tooltip.Description>
        </Tooltip.TextContainer>
        <Tooltip.TextContainer>
          <Tooltip.Title>Click</Tooltip.Title>
          <Tooltip.Description>to resize</Tooltip.Description>
        </Tooltip.TextContainer>
      </Tooltip.Container>
    </TooltipWrapper>
  )
}

export default SidebarResizerTooltip
