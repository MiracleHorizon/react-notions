import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { NotionContentItemOptionsTooltip } from 'components/ui/tooltips'
import { DragContentSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import IPage from 'models/page/IPage'
import Button from './DragNotionContentItemButton.styles'

const DragNotionContentItemButton: FC<{
  _id: string
  type: NotionContentItemTypes
  page: IPage
}> = ({ _id, type, page }) => {
  const { openNotionContentItemOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenNotionContentItemOptionsModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openNotionContentItemOptionsModal({ invokerRect, page, _id, type })
  }

  return (
    <Button
      ref={ref}
      role='button'
      data-el='drag-content-item'
      onClick={handleOpenNotionContentItemOptionsModal}
    >
      <DragContentSvg />
      {isHovering && <NotionContentItemOptionsTooltip reference={ref} />}
    </Button>
  )
}

export default DragNotionContentItemButton
