import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import TasksList from './TasksList - Checked'
import CreateTasksListBar from './CreateTasksList - Checked'
import HiddenTasksListsLoader from 'components/ui/loaders/HiddenTasksListsLoader'
import NoStatusTasksList from './TasksList - Checked/NoStatus - Checked'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useLazyGetTasksListsQuery } from 'services/tasksLists.api'
import {
  selectHiddenTasksLists,
  selectTasksLists,
} from 'store/slices/tasksLists/tasksLists.selectors'
import View from './BoardView.styles'

const HiddenTasksLists = lazy(() => import('./Hidden - Checked'))

const BoardView = () => {
  const [getTasksLists, { data, isSuccess }] = useLazyGetTasksListsQuery()
  const [hoveredList, setHoveredList] = useState<string>('')
  const { page } = useTypedSelector(s => s.pages)
  const { setTasksLists } = useActions()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const hiddenTasksLists = useSelector(selectHiddenTasksLists)
  const taskLists = useSelector(selectTasksLists)

  const handleListHovering = (_id: string) => setHoveredList(_id)

  useEffect(() => {
    if (page) getTasksLists(page._id)
  }, [page, getTasksLists])

  useEffect(() => {
    if (isSuccess && data) setTasksLists(data)
  }, [isSuccess, data, setTasksLists])

  useEffect(() => {
    !isHovering && setHoveredList('')
  }, [isHovering])

  return (
    <View ref={ref}>
      {isSuccess && (
        <>
          {taskLists.map(list => (
            <TasksList
              key={list._id}
              list={list}
              isHovering={hoveredList === list._id}
              handleListHovering={handleListHovering}
            />
          ))}
          <NoStatusTasksList
            isHovering={hoveredList === 'NO_STATUS'}
            handleListHovering={handleListHovering}
          />
          {!page?.locked && <CreateTasksListBar />}
          {hiddenTasksLists.length > 0 && (
            <Suspense fallback={<HiddenTasksListsLoader />}>
              <HiddenTasksLists lists={hiddenTasksLists} />
            </Suspense>
          )}
        </>
      )}
    </View>
  )
}

export default BoardView
