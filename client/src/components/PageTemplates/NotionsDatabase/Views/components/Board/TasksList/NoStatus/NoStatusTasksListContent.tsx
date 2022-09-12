import React, { FC } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import BoardItem from '../Item'
import NewCreatedBoardItem from '../Item/NewCreatedItem'
import CreateNoStatusTaskBar from './CreateNoStatusTaskBar'
import PropTypes from '../Content/TasksListContent.types'
import Content from '../Content/TasksListContent.styles'
import { appearDuration } from '../Item/BoardItem.styles'

const NoStatusTasksListContent: FC<PropTypes> = ({
  _id,
  tasks,
  setTaskCreating,
  taskCreating,
  handleStartTaskCreating,
}) => {
  return (
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
      <CreateNoStatusTaskBar onClickAction={handleStartTaskCreating} />
    </Content>
  )
}

export default NoStatusTasksListContent
