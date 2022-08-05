import React, { FC } from 'react'

import EmojiList from './List'
import { emojiLists } from 'store/slices/decor'
import Wrapper from './EmojiLists.styles'

const EmojiLists: FC<{ _id: string }> = ({ _id }) => (
  <Wrapper>
    {emojiLists.map(list => (
      <EmojiList key={list.title} _id={_id} list={list} />
    ))}
  </Wrapper>
)

export default EmojiLists
