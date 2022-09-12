import React, { FC, useCallback, useMemo, useState } from 'react'

import EmojiList from './List'
import PaginationLoader from 'components/ui/loaders/Pagination'
import useFetchPagination from 'hooks/useFetchPagination'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { FetchKind } from 'hooks/useFetchPagination/types'
import Wrapper from './EmojiLists.styles'

const EmojiLists: FC<{ _id: string }> = ({ _id }) => {
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const [node, setNode] = useState<HTMLDivElement | null>(null)

  const handleScrollOffset = useCallback(() => {
    if (node) handleScrollTop({ node, setScrollBottom })
  }, [node])

  const paginationParams = useMemo(() => ({
    kind: FetchKind.EMOJI_LISTS,
    handleScrollOffset,
    offsetValue: 2,
    node,
  }), [handleScrollOffset, node])

  const { emojiLists, isLoading } = useFetchPagination(paginationParams)

  return (
    <Wrapper ref={node => node && setNode(node)} isScrollOnBottom={isScrollOnBottom}>
      {emojiLists?.map(list => (
        <EmojiList key={list.title} _id={_id} list={list} />
      ))}
      {isLoading && <PaginationLoader />}
    </Wrapper>
  )
}

export default EmojiLists
