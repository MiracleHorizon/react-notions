import React, { FC, memo, useCallback, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

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

  return (
    <List.Wrapper
      ref={node => node && setNode(node)}
      isScrollOnBottom={isScrollOnBottom}
    >
      <List.Container>
        <SearchDeletedPagesList
          node={node}
          debouncedValue={debouncedValue}
          handleScrollOffset={handleScrollOffset}
        />
      </List.Container>
    </List.Wrapper>
  )
})

export default DeletedPagesList
