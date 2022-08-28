import React, { FC, DragEvent, useRef, useState, memo } from 'react'

import TasksListTopBar from './TopBar'
import TasksListContent from './Content'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/notions.api'
import { useUpdateTasksListMutation } from 'services/tasksLists.api'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import PropTypes from './TasksList.types'
import Wrapper from './TasksList.styles'

const TasksList: FC<PropTypes> = memo(
  ({ list, isHovering, handleListHovering }) => {
    const { setStartList } = useActions()
    const { page: currentPage } = useTypedSelector(s => s.notions)
    const { startItem, startList } = useTypedSelector(s => s.tasksLists)
    const tasks = useTypedSelector(s => NotionsSelector.selectListTasks(s, list._id))

    const ref = useRef<HTMLDivElement>(null)
    const [taskCreating, setTaskCreating] = useState<boolean>(false)

    const [dragging, setDragging] = useState<boolean>(false)
    const [dragOver, setDragOver] = useState<boolean>(false)

    const [updateTasksList] = useUpdateTasksListMutation()
    const [updatePage] = useUpdatePageMutation()

    const handleStartTaskCreating = () => setTaskCreating(true)

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
      // e.preventDefault()

      setDragging(true)
      setStartList(list)
    }

    const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()

      setDragOver(false)
      // if (!target.closest('[data-el="tasks-list"]')) {
      //   setDragOver(false)
      // }
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (startList?._id !== list._id && !dragOver) {
        setDragOver(true)
      }
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()

      if (!startItem || startItem.parentListId === list._id) return
      setDragOver(false)

      const body = { parentListId: list._id, taskOrder: tasks.length }
      updatePage({ _id: startItem._id, body })
    }

    return (
      <Wrapper
        ref={ref}
        data-el='tasks-list'
        dragging={dragging}
        onMouseEnter={() => handleListHovering(list._id)}
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
        <TasksListContent
          _id={list._id}
          tasks={tasks}
          taskCreating={taskCreating}
          setTaskCreating={setTaskCreating}
          handleStartTaskCreating={handleStartTaskCreating}
          dragOver={dragOver}
        />
      </Wrapper>
    )
  }
)

export default TasksList
