import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { ElementCoords, TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const SidebarResizerTooltip: FC<{
  reference: TDivRef
  pointerCoords: ElementCoords
}> = ({ reference, pointerCoords }) => {
  const { setRef, rect, coords } = useSetModalPosition({
    invokerRect: reference.current?.getBoundingClientRect().toJSON(),
    pointerCoords,
    pos: ModalPosition.RESIZER_SIDEBAR,
  })

  return (
    <TooltipWrapper>
      <Tooltip.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        coords={coords}
        itemsCenter
      >
        <Tooltip.TextContainer>
          <Tooltip.Title>Drag</Tooltip.Title>
          <Tooltip.Description>to resize</Tooltip.Description>
        </Tooltip.TextContainer>
        <Tooltip.TextContainer>
          <Tooltip.Title>Ctrl+Click</Tooltip.Title>
          <Tooltip.Description>to close</Tooltip.Description>
        </Tooltip.TextContainer>
      </Tooltip.Container>
    </TooltipWrapper>
  )
}

export default SidebarResizerTooltip
