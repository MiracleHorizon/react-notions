import React, { FC, DragEvent } from 'react'

import TasksListTopBar from './TopBar'
import BoardCreateTaskBar from './Item/CreateTaskBar'
import BoardItem from './Item'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectListTasks } from 'store/slices/pages/pages.selectors'
import PropTypes from './TasksList.types'
import * as List from './TasksList.styles'

import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { useUpdateTasksListMutation } from 'store/slices/tasksLists/tasksLists.api'

const TasksList: FC<PropTypes> = ({ list, isHovering, handleListHovering }) => {
  const tasks = useTypedSelector(state => selectListTasks(state, list._id))
  const { startItem } = useTypedSelector(state => state.tasksLists)

  const [updateTasksList] = useUpdateTasksListMutation()
  const [updatePage] = useUpdatePageMutation()

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {}

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {}

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = async () => {
    if (!startItem || startItem.parentListId === list._id) return

    const dependencies = list.dependencies.filter(id => id !== startItem._id)
    const body = { parentListId: list._id, taskOrder: list.dependencies.length }

    await updatePage({ _id: startItem._id, body })
    await updateTasksList({ _id: list._id, body: { dependencies } })
  }

  return (
    <List.Wrapper
      onMouseEnter={() => handleListHovering(list._id)}
      onDragStart={handleDragStart}
      onDragLeave={handleDragEnd}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <TasksListTopBar
        isHovering={isHovering}
        totalTasks={tasks.length}
        {...list}
      />
      <List.Content>
        {tasks.map(task => (
          <BoardItem key={task._id} {...task} />
        ))}
        <BoardCreateTaskBar listId={list._id} />
      </List.Content>
    </List.Wrapper>
  )
}

export default TasksList
