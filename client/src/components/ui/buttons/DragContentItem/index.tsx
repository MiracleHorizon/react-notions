import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { NotionContentItemOptionsTooltip } from 'components/ui/tooltips'
import { DragContentSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import Button from './DragNotionContentItemButton.styles'

const DragNotionContentItemButton: FC<{ _id: string }> = ({ _id }) => {
  const { openNotionContentItemOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenNotionContentItemModal = () => {
    openNotionContentItemOptionsModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
      itemId: _id,
    })
  }

  return (
    <Button role='button' ref={ref} onClick={handleOpenNotionContentItemModal}>
      <DragContentSvg />
      {isHovering && <NotionContentItemOptionsTooltip reference={ref} />}
    </Button>
  )
}

export default DragNotionContentItemButton
