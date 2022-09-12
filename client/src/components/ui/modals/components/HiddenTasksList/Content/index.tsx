import React, { FC, useCallback, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

import HiddenTasksListModalTopBar from '../TopBar'
import NewCreatedBoardItem from 'components/PageTemplates/NotionsDatabase/Views/components/Board/TasksList/Item/NewCreatedItem'
import BoardItem from 'components/PageTemplates/NotionsDatabase/Views/components/Board/TasksList/Item'
import DefaultNoResultsExposition from 'components/ui/expositions/NoResults/Default'
import useInput from 'hooks/useInput'
import useFetchPagination from 'hooks/useFetchPagination'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { FetchKind } from 'hooks/useFetchPagination/types'
import PropTypes from './HiddenTasksListContent.types'
import Container from './HiddenTasksListContent.styles'

const HiddenTasksListContent: FC<PropTypes> = ({
  list,
  taskCreating,
  setTaskCreating,
}) => {
  const inputState = useInput('')
  const debouncedValue = useDebounce(inputState.value, 250)
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const [node, setNode] = useState<HTMLDivElement | null>(null)

  const handleScrollOffset = useCallback(() => {
    if (node) handleScrollTop({ node, setScrollBottom })
  }, [node])

  const { pages, total, isLoading } = useFetchPagination({
    kind: FetchKind.SEARCH_PAGES_BY_LIST,
    handleScrollOffset,
    debouncedValue,
    listId: list._id,
    offsetValue: 10,
    node,
  })

  const handleStartTaskCreating = () => setTaskCreating(true)

  return (
    <>
      <HiddenTasksListModalTopBar
        list={list}
        isLoading={isLoading!}
        totalTasks={total ? total : 0}
        handleStartTaskCreating={handleStartTaskCreating}
        {...inputState}
      />
      <Container
        ref={node => node && setNode(node)}
        isScrollOnBottom={isScrollOnBottom}
      >
        {pages && pages.length > 0 ? (
          pages.map(page => <BoardItem key={page._id} {...page} />)
        ) : (
          <DefaultNoResultsExposition />
        )}
        <NewCreatedBoardItem
          listId={list._id}
          taskCreating={taskCreating}
          setTaskCreating={setTaskCreating}
        />
      </Container>
    </>
  )
}

export default HiddenTasksListContent
