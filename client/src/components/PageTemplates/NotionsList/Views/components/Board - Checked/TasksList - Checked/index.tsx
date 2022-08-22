import React, { FC, DragEvent, useRef, useState, memo } from 'react'

import BoardItem from './Item - Checked'
import TasksListTopBar from './TopBar - Checked'
import NewCreatedBoardItem from './Item - Checked/NewCreatedItem - Checked'
import BoardCreateTaskBar from './Item - Checked/CreateTaskBar - Checked'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectListTasks } from 'store/slices/pages/pages.selectors'
import PropTypes from './TasksList.types'
import * as List from './TasksList.styles'

import { useUpdatePageMutation } from 'services/pages.api'
import { useUpdateTasksListMutation } from 'services/tasksLists.api'

const TasksList: FC<PropTypes> = memo(
  ({ list, isHovering, handleListHovering }) => {
    const { _id,  } = list
    const { page: currentPage } = useTypedSelector(s => s.pages)
    const { startItem } = useTypedSelector(s => s.tasksLists)
    const tasks = useTypedSelector(s => selectListTasks(s, _id))
    const [taskCreating, setTaskCreating] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const [updateTasksList] = useUpdateTasksListMutation()
    const [updatePage] = useUpdatePageMutation()

    const handleStartTaskCreating = () => setTaskCreating(true)

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
      console.log('drag start')
    }

    const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
      console.log('drag end')
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
    }

    const handleDrop = async () => {
      if (!startItem || startItem.parentListId === _id) return

      //! const deps = dependencies.filter(id => id !== startItem._id)
      //! const body = { parentListId: _id, taskOrder: dependencies.length }

      //! await updatePage({ _id: startItem._id, body })
      //! await updateTasksList({ _id, body: { dependencies: deps } })
    }

    if (!currentPage) return null

    return (
      <List.Wrapper
        onMouseEnter={() => handleListHovering(_id)}
        onDragStart={handleDragStart}
        onDragLeave={handleDragEnd}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <TasksListTopBar
          {...list}
          isHovering={isHovering}
          totalTasks={tasks.length}
          pageLocked={currentPage.locked}
          onClickAction={handleStartTaskCreating}
        />
        <List.Content ref={ref}>
          {tasks.map(task => (
            <BoardItem key={task._id} {...task} />
          ))}
          {taskCreating && (
            <NewCreatedBoardItem
              listId={_id}
              setTaskCreating={setTaskCreating}
            />
          )}
          <BoardCreateTaskBar onClickAction={handleStartTaskCreating} />
        </List.Content>
      </List.Wrapper>
    )
  }
)

export default TasksList
