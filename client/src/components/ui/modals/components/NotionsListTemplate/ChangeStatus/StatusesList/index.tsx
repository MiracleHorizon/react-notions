import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import StatusListItem from './Item'
import { selectListsWithStatus } from 'store/slices/tasksLists/tasksLists.selectors'
import IPage from 'models/page/IPage'
import * as List from './TaskStatusesList.styles'

const TaskStatusesList: FC<IPage> = task => (
  <List.Container>
    <List.Title>Select an list status</List.Title>
    {useSelector(selectListsWithStatus).map(list => (
      <StatusListItem key={list._id} list={list} task={task} />
    ))}
  </List.Container>
)

export default TaskStatusesList
