import React, {
  FC,
  useState,
  useMemo,
  lazy,
  Suspense,
  useCallback,
} from 'react'
import { useNavigate } from 'react-router'
import { useEventListener } from 'usehooks-ts'

import QuickSearchPageItem from './Item'
import DefaultLoader from 'components/ui/loaders/Default'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useFetchPagination from 'hooks/useFetchPagination'
import { FetchKind } from 'hooks/useFetchPagination/types'
import Container from './QuickSearchPagesList.styles'

const NoResultExposition = lazy(
  () => import('components/ui/expositions/NoResultsExposition')
)
const SearchErrorExposition = lazy(
  () => import('components/ui/expositions/SearchErrorExposition')
)

const QuickSearchPagesList: FC<{ debouncedValue: string }> = ({
  debouncedValue,
}) => {
  const { closeQuickSearchModal } = useActions()
  const [node, setNode] = useState<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const paginationParams = useMemo(() => ({
    kind: FetchKind.QUICK_SEARCH,
    offsetValue: 15,
    debouncedValue,
    node,
  }), [debouncedValue, node])
  const { pages, isLoading, isSuccess, isError } = useFetchPagination(paginationParams)
  const pagesIds = useMemo(() => pages ?  pages.map(page => page._id) : [], [pages])

  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem('', pagesIds)

  const handleSelectPage = useCallback(() => {
    navigate(`/workspace/${selectedItem}`)
    closeQuickSearchModal()
  }, [navigate, selectedItem, closeQuickSearchModal])

  useEventListener('keydown', e => handleKeydownSelect(e, handleSelectPage))

  return (
    <Container ref={node => node && setNode(node)}>
      <Suspense fallback={<DefaultLoader isLarge={false} />}>
        {isLoading && <DefaultLoader isLarge={false} />}
        {isError && <SearchErrorExposition />}
        {isSuccess && pages && (
          <>
            {pages.map(page => (
              <QuickSearchPageItem
                key={page._id}
                page={page}
                isSelected={page._id === selectedItem}
                handleSelectItem={handleSelectItem}
                handleSelectPage={handleSelectPage}
                parentNode={node}
              />
            ))}
            {pages.length === 0 && <NoResultExposition />}
          </>
        )}
      </Suspense>
    </Container>
  )
}

export default QuickSearchPagesList
