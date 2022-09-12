import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const NotionContentItemOptionsTooltip: FC<{ reference: TDivRef }> = ({
  reference,
}) => {
  const { rect, coords, setRef } = useSetModalPosition({
    invokerRect: reference.current?.getBoundingClientRect().toJSON(),
    pos: ModalPosition.CENTER_BOTTOM,
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
          <Tooltip.Description>to move</Tooltip.Description>
        </Tooltip.TextContainer>
        <Tooltip.TextContainer>
          <Tooltip.Title>Click</Tooltip.Title>
          <Tooltip.Description>to open menu</Tooltip.Description>
        </Tooltip.TextContainer>
      </Tooltip.Container>
    </TooltipWrapper>
  )
}

export default NotionContentItemOptionsTooltip
