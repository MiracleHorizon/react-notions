import React, { FC } from 'react'

import { useAppDispatch } from 'store'
import Container from './EmojiItem.styles'

const EmojiItem: FC<{ _id: string; emoji: string }> = ({ _id, emoji }) => {
  const appDispatch = useAppDispatch()

  const handleSelectIcon = () => {
    // appDispatch(updatePage({_id, {iconUrl: emoji}}))
  }

  return <Container onClick={handleSelectIcon}>{emoji}</Container>
}

export default EmojiItem
