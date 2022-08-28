import React, { FC, memo } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import BoardItem from '../Item'
import NewCreatedBoardItem from '../Item/NewCreatedItem'
import BoardCreateTaskBar from '../Item/CreateTaskBar'
import PropTypes from './TasksListContent.types'
import Content from './TasksListContent.styles'
import { appearDuration } from '../Item/BoardItem.styles'

const TasksListContent: FC<PropTypes> = memo(
  ({
    _id,
    tasks,
    taskCreating,
    setTaskCreating,
    handleStartTaskCreating,
    dragOver,
  }) => (
    <Content>
      <TransitionGroup component={null}>
        {tasks.map(task => (
          <CSSTransition
            key={task._id}
            timeout={appearDuration}
            classNames='default'
          >
            <BoardItem {...task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <NewCreatedBoardItem
        listId={_id}
        taskCreating={taskCreating}
        setTaskCreating={setTaskCreating}
      />
      <BoardCreateTaskBar
        dragOver={dragOver}
        onClickAction={handleStartTaskCreating}
      />
    </Content>
  )
)

export default TasksListContent
