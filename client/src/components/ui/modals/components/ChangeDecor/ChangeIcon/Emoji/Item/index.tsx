import React, { FC, memo } from 'react'

import { useUpdatePageMutation } from 'services/pages.api'
import Container from './EmojiItem.styles'

const EmojiItem: FC<{ _id: string; emoji: string }> = memo(({ _id, emoji }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleSelectIcon = () => {
    // updatePage({_id, {iconUrl: emoji}})
  }

  return <Container onClick={handleSelectIcon}>{emoji}</Container>
})

export default EmojiItem
