import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const AddBlockBelowTooltip: FC<{ reference: TDivRef }> = ({ reference }) => {
  const { setRef, rect, coords } = useSetModalPosition({
    invokerRect: reference.current?.getBoundingClientRect().toJSON(),
    pos: ModalPosition.CENTER_BOTTOM,
  })

  return (
    <TooltipWrapper>
      <Tooltip.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        coords={coords}
      >
        <Tooltip.TextContainer>
          <Tooltip.Title>Click</Tooltip.Title>
          <Tooltip.Description>to add block below</Tooltip.Description>
        </Tooltip.TextContainer>
      </Tooltip.Container>
    </TooltipWrapper>
  )
}

export default AddBlockBelowTooltip
