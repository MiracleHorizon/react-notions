import React, { FC } from 'react'

import TasksListTitle from './Title'
import TasksListActionButtons from './ActionButtons'
import PropTypes from './TasksListTopBar.types'
import Container from './TasksListTopBar.styles'

const TasksListTopBar: FC<PropTypes> = props => (
  <Container>
    <TasksListTitle {...props} />
    <TasksListActionButtons {...props} />
  </Container>
)

export default TasksListTopBar
