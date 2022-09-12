import React, { FC } from 'react'

import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { TDivRef } from 'types'
import * as Tooltip from '../FilledTooltip.styles'

const CoverItemTooltip: FC<{
  reference: TDivRef
  title: string
  description?: string
}> = ({ reference, title, description }) => {
  const { rect, coords, setRef } = useSetModalPosition({
    invokerRect: reference.current?.getBoundingClientRect().toJSON(),
    pos: ModalPosition.CENTER_BOTTOM,
  })

  return (
    <Tooltip.Container
      fixed
      data-el='cover-item-tooltip'
      ref={node => nodeRefHandler(node, rect, setRef)}
      coords={coords}
    >
      <Tooltip.Title>{title}</Tooltip.Title>
      {description && <Tooltip.Description>{description}</Tooltip.Description>}
    </Tooltip.Container>
  )
}

export default CoverItemTooltip
