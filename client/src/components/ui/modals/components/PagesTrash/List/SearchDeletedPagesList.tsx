import React, { FC, memo, useMemo } from 'react'
import { useEventListener } from 'usehooks-ts'

import DeletedPageItem from '../Item'
import EmptyPagesTrash from '../Empty'
import PaginationLoader from 'components/ui/loaders/Pagination'
import useSelectItem from 'hooks/useSelectItem'
import useFetchPagination from 'hooks/useFetchPagination'
import { FetchKind } from 'hooks/useFetchPagination/types'
import PropTypes from './DeletedPagesList.types'

const SearchDeletedPagesList: FC<PropTypes> = memo(
  ({ debouncedValue, node, handleScrollOffset }) => {
    const paginationParams = useMemo(() => ({
      kind: FetchKind.SEARCH_DELETED_PAGES,
      handleScrollOffset,
      debouncedValue,
      offsetValue: 20,
      node,
    }), [handleScrollOffset, debouncedValue, node])
    const { pages, isLoading, isSuccess, isError } = useFetchPagination(paginationParams)
    const pagesIds = useMemo(() => pages?.map(page => page._id), [pages])

    const {
        selectedItem,
        handleSelectItem,
        handleKeydownSelect
    } = useSelectItem('', pagesIds)

    useEventListener('keydown', e => handleKeydownSelect(e))

    return (
      <>
        {isSuccess && pages && (
          <>
            {pages.map(page => (
              <DeletedPageItem
                key={page._id}
                {...page}
                isSelected={selectedItem === page._id}
                handleSelectItem={handleSelectItem}
              />
            ))}
            {pages.length === 0 && <EmptyPagesTrash />}
          </>
        )}
        {isLoading && <PaginationLoader />}
      </>
    )
  }
)

export default SearchDeletedPagesList
