import React, { FC, useEffect, useState } from 'react'

import StatusListItem from './Item'
import useSelectItem from 'hooks/useSelectItem'
import { useGetTasksListsQuery } from 'store/slices/tasksLists/tasksLists.api'
import getFilteredLists from 'utils/helpers/getFilteredLists'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import * as List from './TaskStatusesList.styles'

const TaskStatusesLists: FC<IPage & { value: string }> = ({
  value,
  ...task
}) => {
  const { data, isSuccess } = useGetTasksListsQuery(task.parentPageId!)
  const { selectedItem, handleSelectItem } = useSelectItem('')
  const [filteredLists, setFilteredLists] = useState<ITasksList[]>([])

  useEffect(() => {
    data && setFilteredLists(getFilteredLists(data, value))
  }, [data, value])

  return (
    <List.Container>
      <List.Title>Select an list status</List.Title>
      {isSuccess &&
        filteredLists.map(list => (
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

export default TaskStatusesLists
