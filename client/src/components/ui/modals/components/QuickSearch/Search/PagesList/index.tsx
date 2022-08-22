import React, { FC, useEffect, useState, lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import QuickSearchPageItem from './Item'
import DefaultLoader from 'components/ui/loaders/Default'
import useSelectItem from 'hooks/useSelectItem'
import { useLazySearchPagesQuery } from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import IPage from 'models/page/IPage'
import Container from './QuickSearchPagesList.styles'

const NoResultExposition = lazy(
  () => import('components/ui/expositions/NoResultsExposition')
)
const SearchErrorExposition = lazy(
  () => import('components/ui/expositions/SearchErrorExposition')
)

const QuickSearchPagesList: FC<{ value: string }> = ({ value }) => {
  const [searchPages, { data, isSuccess, isLoading, isError }] = useLazySearchPagesQuery()
  const [pages, setPages] = useState<IPage[]>([])
  const { selectedItem, handleSelectItem } = useSelectItem('')
  const debouncedValue = useDebounce(value, 250)
  const user = useSelector(selectUser)

  useEffect(() => {
    searchPages({ authorId: user._id, query: debouncedValue })
  }, [user._id, debouncedValue, searchPages])

  useEffect(() => {
    if (isSuccess && data) setPages(data)
  }, [data, isSuccess])

  return (
    <Container>
      <Suspense fallback={<DefaultLoader isLarge={false} />}>
        {isLoading && <DefaultLoader isLarge={false} />}
        {pages.length === 0 && <NoResultExposition />}
        {isError && <SearchErrorExposition />}
        {isSuccess &&
          pages.map(page => (
            <QuickSearchPageItem
              key={page._id}
              isSelected={page._id === selectedItem}
              handleSelectItem={handleSelectItem}
              {...page}
            />
          ))}
      </Suspense>
    </Container>
  )
}

export default QuickSearchPagesList
