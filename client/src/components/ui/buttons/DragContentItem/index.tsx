import React, { FC, memo } from 'react'

import { NotionContentItemOptionsTooltip } from 'components/ui/tooltips'
import { DragContentSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import Button from './DragNotionContentItemButton.styles'

const DragNotionContentItemButton: FC<{
  item: INotionContentItem
  page: IPage
}> = memo(({ item, page }) => {
  const { openNotionContentItemOptionsModal } = useActions()
  const { ref, isHovering } = useDebounceHovering()

  const handleOpenNotionContentItemOptionsModal = () => {
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openNotionContentItemOptionsModal({ invokerRect, page, item })
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
})

export default DragNotionContentItemButton
