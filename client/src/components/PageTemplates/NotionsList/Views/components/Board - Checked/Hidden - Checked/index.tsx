import React, { FC, memo } from 'react'

import HiddenTasksListItem from './Item - Checked'
import ITasksList from 'models/tasksList/ITasksList'
import * as Lists from './HiddenTasksLists.styles'

const HiddenTasksLists: FC<{ lists: ITasksList[] }> = memo(({ lists }) => (
  <Lists.Container>
    <Lists.Title>Hidden groups</Lists.Title>
    {lists.map(list => (
      <HiddenTasksListItem key={list._id} {...list} />
    ))}
  </Lists.Container>
))

export default HiddenTasksLists
