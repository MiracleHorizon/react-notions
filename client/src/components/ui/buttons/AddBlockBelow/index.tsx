import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { AddBlockBelowTooltip } from 'components/ui/tooltips'
import { PlusSvg } from 'components/ui/svg'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useCreateItemMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import NotionContentItem from 'models/pageContent/NotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import Button from './AddBlockBelowButton.styles'

const AddBlockBelowButton: FC<{
  order: number
  pageId: string
  pageLocked: boolean
  parentItemId?: string
}> = ({ order, parentItemId, pageId, pageLocked }) => {
  const [createContentItem] = useCreateItemMutation()
  const { ref, isHovering } = useDebounceHovering()
  const user = useSelector(selectUser)

  const handleCreateItem = () => {
    if (!pageLocked) {
      const body = {
        type: NotionContentItemTypes.TEXT,
        parentPageId: pageId,
        parentItemId,
        author: user._id,
        order,
      }

      createContentItem(NotionContentItem.createItem(body))
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
