import React, { FC } from 'react'

import TooltipWrapper from 'components/ui/tooltips/Tooltip'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import PropTypes from './FilledTooltip.types'
import * as Tooltip from './FilledTooltip.styles'

const FilledTooltip: FC<PropTypes> = ({
  title,
  desc,
  pos,
  invokerRef,
  itemsCenter,
}) => {
  const { setRef, rect, coords } = useSetModalPosition({
    invokerRect: invokerRef?.current?.getBoundingClientRect().toJSON(),
    pos,
  })

  return (
    <TooltipWrapper>
      <Tooltip.Container
        coords={coords}
        ref={node => nodeRefHandler(node, rect, setRef)}
        itemsCenter={itemsCenter}
      >
        {title && <Tooltip.Title>{title}</Tooltip.Title>}
        {desc && <Tooltip.Description>{desc}</Tooltip.Description>}
      </Tooltip.Container>
    </TooltipWrapper>
  )
}

export default FilledTooltip
