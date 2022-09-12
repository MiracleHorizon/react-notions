import React, { FC, useCallback, useMemo, useState } from 'react'

import GalleryList from './List'
import PaginationLoader from 'components/ui/loaders/Pagination'
import DefaultErrorExposition from 'components/ui/expositions/DefaultErrorExposition'
import useFetchPagination from 'hooks/useFetchPagination'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { FetchKind } from 'hooks/useFetchPagination/types'
import Wrapper from './CoverGallery.styles'

const CoversGallery: FC<{ _id: string }> = ({ _id }) => {
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const [node, setNode] = useState<HTMLDivElement | null>(null)

  const handleScrollOffset = useCallback(() => {
    if (node) handleScrollTop({ node, setScrollBottom })
  }, [node])

  const paginationParams = useMemo(() => ({
    kind: FetchKind.GALLERY_LISTS,
    handleScrollOffset,
    offsetValue: 2,
    node,
  }), [handleScrollOffset, node])

  const { coverLists, isLoading, isSuccess, isError } = useFetchPagination(paginationParams)

  return (
    <Wrapper
      ref={node => node && setNode(node)}
      isScrollOnBottom={isScrollOnBottom}
    >
      {isSuccess && coverLists && coverLists.map(list => (
        <GalleryList key={list._id} _id={_id} list={list} />
      ))}
      {isLoading && <PaginationLoader/>}
      {isError && <DefaultErrorExposition />}
    </Wrapper>
  )
}

export default CoversGallery
