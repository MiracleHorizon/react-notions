import React, { FC, memo } from 'react'

import TasksListTitle from './Title'
import TasksListActionButtons from './ActionButtons'
import PropTypes from './TasksListTopBar.types'
import Bar from './TasksListTopBar.styles'

const TasksListTopBar: FC<PropTypes> = memo(props => (
  <Bar>
    <TasksListTitle {...props} />
    <TasksListActionButtons {...props} />
  </Bar>
))

export default TasksListTopBar
