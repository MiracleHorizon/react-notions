import React, { FC, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import EmojiList from './List'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { EMOJI_LISTS } from 'utils/constants/decor'
import Wrapper from './EmojiLists.styles'

const EmojiLists: FC<{ _id: string }> = ({ _id }) => {
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnBottom }),
    ref
  )

  return (
    <Wrapper ref={ref} isOnBottom={isOnBottom}>
      {EMOJI_LISTS.map(list => (
        <EmojiList key={list.title} _id={_id} list={list} />
      ))}
    </Wrapper>
  )
}

export default EmojiLists
