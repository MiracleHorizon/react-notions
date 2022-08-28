import React, { FC, lazy, memo, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import CreateTasksListBar from './CreateTasksList'
import TasksListLoader from 'components/ui/loaders/TasksList'
import HiddenTasksListsLoader from 'components/ui/loaders/HiddenTasksListsLoader'
import { TasksListsSelector } from 'store/slices/tasksLists/tasksLists.selectors'

const TasksList = lazy(() => import('./TasksList'))
const HiddenTasksLists = lazy(() => import('./Hidden'))
const NoStatusTasksList = lazy(() => import('./TasksList/NoStatus'))

const BoardViewContent: FC<{
  locked: boolean
  hoveredList: string
  handleListHovering: (_id: string) => void
}> = memo(({ locked, hoveredList, handleListHovering }) => {
  const taskLists = useSelector(TasksListsSelector.selectLists)
  const hiddenTasksLists = useSelector(TasksListsSelector.selectHiddenLists)

  return (
    <>
      <TransitionGroup component={null}>
        {taskLists.map(list => (
          <CSSTransition key={list._id} timeout={100} classNames='default'>
            <Suspense fallback={<TasksListLoader />}>
              <TasksList
                list={list}
                isHovering={hoveredList === list._id}
                handleListHovering={handleListHovering}
              />
            </Suspense>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Suspense fallback={<TasksListLoader />}>
        <NoStatusTasksList
          isHovering={hoveredList === 'NO_STATUS'}
          handleListHovering={handleListHovering}
        />
      </Suspense>
      {!locked && <CreateTasksListBar />}
      {hiddenTasksLists.length > 0 && (
        <Suspense fallback={<HiddenTasksListsLoader />}>
          <HiddenTasksLists lists={hiddenTasksLists} />
        </Suspense>
      )}
    </>
  )
})

export default BoardViewContent
