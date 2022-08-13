import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { useCreateItemMutation } from 'store/slices/pages/pages.api'
import { selectCurrentPage } from 'store/slices/pages/pages.selectors'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import * as Block from './EmptyToggleBlock.styles'

const EmptyToggleBlock: FC<{ _id: string }> = ({ _id }) => {
  const parentPage = useSelector(selectCurrentPage)
  const [createContentItem] = useCreateItemMutation()

  const handleCreateTextItem = () => {
    if (!parentPage) return
    createContentItem(NotionContentItem.createText(parentPage._id, _id))
  }

  return (
    <Block.Container onClick={handleCreateTextItem}>
      <Block.Title>Empty toggle block. Click to create...</Block.Title>
    </Block.Container>
  )
}

export default EmptyToggleBlock
