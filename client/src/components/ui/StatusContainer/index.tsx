import React, { FC } from 'react'
import ITasksList from 'models/tasksList/ITasksList'
import * as Status from './TasksListStatusContainer.styles'

const TasksListStatusContainer: FC<ITasksList> = ({ title, color }) => (
  <Status.Container bgColor={color}>
    <Status.Title>{title}</Status.Title>
  </Status.Container>
)

export default TasksListStatusContainer
