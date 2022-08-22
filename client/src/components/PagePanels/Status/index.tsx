import React, { FC, memo } from 'react'

import TaskCreatedStatus from './Item/TaskCreatedStatus'
import TaskMainStatus from './Item/TaskMainStatus'
import IPage from 'models/page/IPage'
import Wrapper from './TaskStatusPanel.styles'

const TaskStatusPanel: FC<IPage> = memo(task => (
  <Wrapper>
    <TaskCreatedStatus createdAt={task.createdAt} />
    <TaskMainStatus {...task} />
  </Wrapper>
))

export default TaskStatusPanel
