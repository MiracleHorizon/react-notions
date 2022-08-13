import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { AddBlockBelowTooltip } from 'components/ui/tooltips'
import { PlusSvg } from 'components/ui/svg'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreateItemMutation } from 'store/slices/pages/pages.api'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import Button from './AddBlockBelowButton.styles'

const AddBlockBelowButton: FC<{ order: number; parentItemId?: string }> = ({
  order,
  parentItemId,
}) => {
  const { page } = useTypedSelector(state => state.pages)
  const [createContentItem] = useCreateItemMutation()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCreateItem = () => {
    if (!page) return

    const item = NotionContentItem.createText(page._id, parentItemId, order)
    createContentItem(item)
  }

  return (
    <Button role='button' ref={ref} onClick={handleCreateItem}>
      <PlusSvg />
      {isHovering && <AddBlockBelowTooltip reference={ref} />}
    </Button>
  )
}

export default AddBlockBelowButton
