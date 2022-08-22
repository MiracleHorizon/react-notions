import React, { FC, memo, useState } from 'react'
import { useSelector } from 'react-redux'

import BoardItem from '../Item - Checked'
import TasksListTopBar from '../TopBar - Checked'
import NewCreatedBoardItem from '../Item - Checked/NewCreatedItem - Checked'
import CreateNoStatusTaskBar from './CreateNoStatusTaskBar'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectNotHiddenNoStatusList } from 'store/slices/tasksLists/tasksLists.selectors'
import { selectNoStatusPages } from 'store/slices/pages/pages.selectors'
import * as List from '../TasksList.styles'

const NoStatusTasksList: FC<{
  isHovering: boolean
  handleListHovering: (_id: string) => void
}> = memo(({ isHovering, handleListHovering }) => {
  const { page } = useTypedSelector(s => s.pages)
  const [taskCreating, setTaskCreating] = useState<boolean>(false)
  const list = useSelector(selectNotHiddenNoStatusList)
  const tasks = useSelector(selectNoStatusPages)

  const handleStartTaskCreating = () => setTaskCreating(true)

  return (
    <>
      {list && page && (
        <List.Wrapper onMouseEnter={() => handleListHovering('NO_STATUS')}>
          <TasksListTopBar
            {...list}
            isHovering={isHovering}
            totalTasks={tasks.length}
            pageLocked={page.locked}
            onClickAction={handleStartTaskCreating}
          />
          <List.Content>
            {tasks.map(task => (
              <BoardItem key={task._id} {...task} />
            ))}
            {taskCreating && (
              <NewCreatedBoardItem
                listId={list._id}
                setTaskCreating={setTaskCreating}
              />
            )}
            <CreateNoStatusTaskBar onClickAction={handleStartTaskCreating} />
          </List.Content>
        </List.Wrapper>
      )}
    </>
  )
})

export default NoStatusTasksList
