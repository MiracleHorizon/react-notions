import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import useTypedSelector from 'hooks/useTypedSelector'
import { useCreateItemMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import NotionContentItem from 'models/pageContent/NotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import * as Block from './EmptyToggleBlock.styles'

const EmptyToggleBlock: FC<{ _id: string }> = memo(({ _id }) => {
  const { page } = useTypedSelector(s => s.notions)
  const [createContentItem] = useCreateItemMutation()
  const user = useSelector(selectUser)

  const handleCreateTextItem = () => {
    const body = {
      type: NotionContentItemTypes.TEXT,
      parentPageId: page._id,
      parentItemId: _id,
      author: user._id,
      order: 0,
    }

    createContentItem(NotionContentItem.createItem(body))
  }

  return (
    <Block.Container onClick={handleCreateTextItem}>
      <Block.Title>Empty toggle block. Click to create...</Block.Title>
    </Block.Container>
  )
})

export default EmptyToggleBlock
