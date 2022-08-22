import React, { FC, memo } from 'react'

import TasksListTitle from './Title - Checked'
import TasksListActionButtons from './ActionButtons - Checked'
import PropTypes from './TasksListTopBar.types'
import Bar from './TasksListTopBar.styles'

const TasksListTopBar: FC<PropTypes> = memo(props => (
  <Bar>
    <TasksListTitle {...props} />
    <TasksListActionButtons {...props} />
  </Bar>
))

export default TasksListTopBar
