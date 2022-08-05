import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import Loadable from 'react-loadable'

import TasksList from './TasksList'
import CreateTasksListBar from './CreateTasksList'
import HiddenTasksListsLoader from 'components/ui/loaders/HiddenTasksListsLoader'
import NoStatusTasksList from './TasksList/NoStatus'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useGetTasksListsQuery } from 'store/slices/tasksLists/tasksLists.api'
import {
  selectHiddenTasksLists,
  selectTasksLists,
} from 'store/slices/tasksLists'
import Container from './BoardView.styles'

const HiddenTasksLists = Loadable({
  loader: () => import('./Hidden'),
  loading: () => <HiddenTasksListsLoader />,
})

const BoardView = () => {
  const [hoveredList, setHoveredList] = useState<string>('')
  const { page } = useTypedSelector(state => state.pages)
  const hiddenTasksLists = useSelector(selectHiddenTasksLists)
  const taskLists = useSelector(selectTasksLists)
  const { isSuccess, data } = useGetTasksListsQuery(page?._id!)
  const { setTasksLists } = useActions()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleListHovering = (_id: string) => setHoveredList(_id)

  useEffect(() => {
    if (isSuccess) setTasksLists(data)
  }, [data, isSuccess, setTasksLists])

  useEffect(() => {
    !isHovering && setHoveredList('')
  }, [isHovering])

  // const hoveredList = useRef<string>('')

  return (
    <Container ref={ref}>
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
          <CreateTasksListBar />
          {hiddenTasksLists.length > 0 && (
            <HiddenTasksLists lists={hiddenTasksLists} />
          )}
        </>
      )}
    </Container>
  )
}

export default BoardView
