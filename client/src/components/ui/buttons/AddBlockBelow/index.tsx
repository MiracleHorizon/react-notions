import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { AddBlockBelowTooltip } from 'components/ui/tooltips'
import { PlusSvg } from 'components/ui/svg'
import { useCreateItemMutation } from 'services/pages.api'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import Button from './AddBlockBelowButton.styles'

const AddBlockBelowButton: FC<{
  order: number
  pageId: string
  pageLocked: boolean
  parentItemId?: string
}> = ({ order, parentItemId, pageId, pageLocked }) => {
  const [createContentItem] = useCreateItemMutation()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCreateItem = () => {
    if (!pageLocked) {
      const item = NotionContentItem.createText(pageId, parentItemId, order)
      createContentItem(item)
    }
  }

  return (
    <Button role='button' ref={ref} onClick={handleCreateItem}>
      <PlusSvg />
      {isHovering && <AddBlockBelowTooltip reference={ref} />}
    </Button>
  )
}

export default AddBlockBelowButton
