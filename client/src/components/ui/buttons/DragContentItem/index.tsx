import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { NotionContentItemOptionsTooltip } from 'components/ui/tooltips'
import { DragContentSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import Button from './DragNotionContentItemButton.styles'

const DragNotionContentItemButton: FC<{
  _id: string
  type: NotionContentItemTypes
}> = ({ _id, type }) => {
  const { openNotionContentItemOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenNotionContentItemModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openNotionContentItemOptionsModal({ invokerRect, _id, type })
  }

  return (
    <Button role='button' ref={ref} onClick={handleOpenNotionContentItemModal}>
      <DragContentSvg />
      {isHovering && <NotionContentItemOptionsTooltip reference={ref} />}
    </Button>
  )
}

export default DragNotionContentItemButton
