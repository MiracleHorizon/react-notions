import React, { FC } from 'react'

import EmojiList from './List'
import { EMOJI_LISTS } from 'utils/constants/decor'
import Wrapper from './EmojiLists.styles'

const EmojiLists: FC<{ _id: string }> = ({ _id }) => (
  <Wrapper>
    {EMOJI_LISTS.map(list => (
      <EmojiList key={list.title} _id={_id} list={list} />
    ))}
  </Wrapper>
)

export default EmojiLists
