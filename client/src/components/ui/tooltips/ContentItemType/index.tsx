import React, { FC, useMemo } from 'react'
import { createPortal } from 'react-dom'

import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import handleContentItemTooltip from 'utils/helpers/handleContentItemTooltip'
import PropTypes from './ContentItemTypeTooltip.types'
import * as Tooltip from './ContentItemTypeTooltip.styles'

// Image loader
const ContentItemTypeTooltip: FC<PropTypes> = ({ type, invokerRef }) => {
  const { title, imgUrl } = useMemo(
    () => handleContentItemTooltip(type),
    [type]
  )

  const { setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.RIGHT_CENTER,
    invokerRect: invokerRef.current?.getBoundingClientRect().toJSON(),
  })

  return createPortal(
    <Tooltip.Wrapper
      ref={node => nodeRefHandler(node, rect, setRef)}
      {...coords}
    >
      <Tooltip.Container>
        <Tooltip.Image src={imgUrl} alt='tooltip' />
        <Tooltip.TitleContainer>
          <Tooltip.Title>{title}</Tooltip.Title>
        </Tooltip.TitleContainer>
      </Tooltip.Container>
    </Tooltip.Wrapper>,
    document.getElementById('root') as HTMLElement
  )
}

export default ContentItemTypeTooltip
