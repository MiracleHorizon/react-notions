import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import BoardViewContent from './BoardViewContent'
import TasksListLoader from 'components/ui/loaders/TasksList'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useGetTasksListsQuery } from 'services/tasksLists.api'
import View from './BoardView.styles'

const BoardView = () => {
  const { setTasksLists } = useActions()
  const [hoveredList, setHoveredList] = useState<string>('')
  const { page } = useTypedSelector(s => s.notions)
  const { data: lists, isLoading, isSuccess } = useGetTasksListsQuery(page._id)
  const { isOpen: isSbOpen } = useTypedSelector(s => s.app.sidebar)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleListHovering = useCallback((_id: string) => {
    setHoveredList(_id)
  }, [])

  useEffect(() => {
    if (isSuccess && lists) setTasksLists(lists)
  }, [isSuccess, lists, setTasksLists])

  useEffect(() => {
    !isHovering && setHoveredList('')
  }, [isHovering])

  return (
    <View ref={ref}>
      {isSuccess && (
        <BoardViewContent
          locked={page.locked}
          hoveredList={hoveredList}
          handleListHovering={handleListHovering}
        />
      )}
      {isLoading && [...new Array(isSbOpen ? 6 : 7)].map((_, i) => (
        <TasksListLoader key={i} />
      ))}
    </View>
  )
}

export default BoardView
