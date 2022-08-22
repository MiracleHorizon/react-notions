import React, { FC, memo } from 'react'

import useTypedSelector from 'hooks/useTypedSelector'
import { useCreateItemMutation } from 'services/pages.api'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import * as Block from './EmptyToggleBlock.styles'

const EmptyToggleBlock: FC<{ _id: string }> = memo(({ _id }) => {
  const { page } = useTypedSelector(s => s.pages)
  const [createContentItem] = useCreateItemMutation()

  const handleCreateTextItem = () => {
    createContentItem(NotionContentItem.createText(page._id, _id))
  }

  return (
    <Block.Container onClick={handleCreateTextItem}>
      <Block.Title>Empty toggle block. Click to create...</Block.Title>
    </Block.Container>
  )
})

export default EmptyToggleBlock
