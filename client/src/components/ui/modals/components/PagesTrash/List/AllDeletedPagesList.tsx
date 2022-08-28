import React, { FC, memo, useMemo } from 'react'
import { useEventListener } from 'usehooks-ts'

import DeletedPageItem from '../Item'
import EmptyPagesTrash from '../Empty'
import PaginationLoader from 'components/ui/loaders/Pagination'
import useSelectItem from 'hooks/useSelectItem'
import useFetchPagination, { FetchKind } from 'hooks/useFetchPagination'
import ProTypes from './DeletedPagesList.types'

const AllDeletedPagesList: FC<ProTypes> = memo(({ paginationParams }) => {
  const { pages, isLoading } = useFetchPagination({
    kind: FetchKind.DELETED_PAGES,
    ...paginationParams,
  })
  const pagesIds = useMemo(() => pages?.map(page => page._id), [pages])
  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem('', pagesIds)

  useEventListener('keydown', e => handleKeydownSelect(e))

  if (pages?.length === 0) {
    return <EmptyPagesTrash />
  }

  return (
    <>
      {pages?.map(page => (
        <DeletedPageItem
          key={page._id}
          {...page}
          isSelected={selectedItem === page._id}
          handleSelectItem={handleSelectItem}
        />
      ))}
      {isLoading && <PaginationLoader/>}
    </>
  )
})

export default AllDeletedPagesList
