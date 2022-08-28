import React, { FC, memo, useCallback, useMemo, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

import AllDeletedPagesList from './AllDeletedPagesList'
import SearchDeletedPagesList from './SearchDeletedPagesList'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as List from './DeletedPagesList.styles'

const DeletedPagesList: FC<{ value: string }> = memo(({ value }) => {
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const [node, setNode] = useState<HTMLDivElement | null>(null)
  const debouncedValue = useDebounce(value, 250)

  const handleScrollOffset = useCallback(() => {
    if (node) handleScrollTop({ node, setScrollBottom })
  }, [node])

  const paginationParams = useMemo(() => ({
    handleScrollOffset,
    debouncedValue,
    offsetValue: 20,
    node,
  }), [handleScrollOffset, debouncedValue, node])


  return (
    <List.Wrapper
      ref={node => node && setNode(node)}
      isScrollOnBottom={isScrollOnBottom}
    >
      <List.Container>
        {debouncedValue === '' ? (
          <AllDeletedPagesList paginationParams={paginationParams} />
        ) : (
          <SearchDeletedPagesList paginationParams={paginationParams} />
        )}
      </List.Container>
    </List.Wrapper>
  )
})

export default DeletedPagesList
