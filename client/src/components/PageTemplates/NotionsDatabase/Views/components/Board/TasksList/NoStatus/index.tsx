import React, { FC, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import TasksListTopBar from '../TopBar'
import NoStatusTasksListContent from './NoStatusTasksListContent'
import useTypedSelector from 'hooks/useTypedSelector'
import { TasksListsSelector } from 'store/slices/tasksLists/tasksLists.selectors'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import Wrapper from '../TasksList.styles'

const NoStatusTasksList: FC<{
  isHovering: boolean
  handleListHovering: (_id: string) => void
}> = memo(({ isHovering, handleListHovering }) => {
  const { page } = useTypedSelector(s => s.notions)
  const [taskCreating, setTaskCreating] = useState<boolean>(false)
  const list = useSelector(TasksListsSelector.selectNoStatusList)
  const tasks = useSelector(NotionsSelector.selectNoStatusPages)

  const handleStartTaskCreating = () => setTaskCreating(true)

  return (
    <>
      {list && !list.hidden && (
        <CSSTransition timeout={100} classNames='default'>
          <Wrapper onMouseEnter={() => handleListHovering('NO_STATUS')}>
            <TasksListTopBar
              {...list}
              isHovering={isHovering}
              totalTasks={tasks.length}
              pageLocked={page.locked}
              onClickAction={handleStartTaskCreating}
            />
            <NoStatusTasksListContent
              _id={list._id}
              tasks={tasks}
              taskCreating={taskCreating}
              setTaskCreating={setTaskCreating}
              handleStartTaskCreating={handleStartTaskCreating}
              dragOver={false}
            />
          </Wrapper>
        </CSSTransition>
      )}
    </>
  )
})

export default NoStatusTasksList
