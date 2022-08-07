import React, { FC } from 'react'

import TaskCreatedStatus from './Item/TaskCreatedStatus'
import TaskMainStatus from './Item/TaskMainStatus'
import IPage from 'models/page/IPage'
import * as Panel from './TaskStatusPanel.styles'

const TaskStatusPanel: FC<IPage> = page => (
  <Panel.Wrapper fullWidth={page.fullWidth}>
    <Panel.Container>
      <TaskCreatedStatus value={page.createdAt} />
      <TaskMainStatus {...page} />
    </Panel.Container>
  </Panel.Wrapper>
)

export default TaskStatusPanel
