import React, { FC, memo, useEffect, useState } from 'react'

import StatusListItem from './Item'
import useSelectItem from 'hooks/useSelectItem'
import { useLazyGetTasksListsQuery } from 'services/tasksLists.api'
import getFilteredLists from 'utils/helpers/getFilteredLists'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import * as List from './TaskStatusesList.styles'

const TaskStatusesLists: FC<IPage & { value: string }> = memo(
  ({ value, ...task }) => {
    const [getTasksLists, { data: lists, isSuccess }] = useLazyGetTasksListsQuery()
    const [filteredLists, setFilteredLists] = useState<ITasksList[]>([])
    const { selectedItem, handleSelectItem } = useSelectItem('')

    useEffect(() => {
      if (task.parentPageId) getTasksLists(task.parentPageId)
    }, [task.parentPageId, getTasksLists])

    useEffect(() => {
      lists && setFilteredLists(getFilteredLists(lists, value))
    }, [lists, value])

    return (
      <List.Container>
        <List.Title>Select an list status</List.Title>
        {isSuccess && filteredLists.map(list => (
          <StatusListItem
            key={list._id}
            list={list}
            task={task}
            isSelected={selectedItem === list._id}
            handleSelectItem={handleSelectItem}
          />
        ))}
      </List.Container>
    )
  }
)

export default TaskStatusesLists
