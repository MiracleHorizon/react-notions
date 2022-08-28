import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import StatusListItem from './Item'
import useActions from 'hooks/useActions'
import useSelectItem from 'hooks/useSelectItem'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'services/notions.api'
import { useLazyGetTasksListsQuery } from 'services/tasksLists.api'
import getFilteredLists from 'utils/helpers/getFilteredLists'
import PropTypes from './TaskStatusesLists.types'
import ITasksList from 'models/tasksList/ITasksList'
import * as List from './TaskStatusesLists.styles'

const TaskStatusesLists: FC<PropTypes> = memo(({ value, task }) => {
  const { closeChangeStatusModal } = useActions()
  const { _id, parentPageId, parentListId } = task
  const [updatePage] = useUpdatePageMutation()
  const [getTasksLists, { data: lists, isSuccess }] = useLazyGetTasksListsQuery()
  const [filteredLists, setFilteredLists] = useState<ITasksList[]>([])
  const isTasksListOptionsModalOpen = useTypedSelector(s => s.modals.tasksListOptions.isOpen)
  const {
    selectedItem,
    handleSelectItem,
    handleKeydownSelect
  } = useSelectItem('', filteredLists.map(list => list._id))

  const handleChangeTaskStatus = useCallback(() => {
    if (parentListId !== selectedItem) {
      const updatedTask = { ...task }
      updatedTask.parentListId = selectedItem
      updatedTask.status = selectedItem

      updatePage({ _id, body: updatedTask })
    }

    closeChangeStatusModal()
  }, [_id, parentListId, task, selectedItem, updatePage, closeChangeStatusModal])

  useEffect(() => {
    if (parentPageId) getTasksLists(parentPageId)
  }, [parentPageId, getTasksLists])

  useEffect(() => {
    lists && setFilteredLists(getFilteredLists(lists, value))
  }, [lists, value])

  useEventListener('keydown', e => {
    if (!isTasksListOptionsModalOpen) {
      handleKeydownSelect(e, handleChangeTaskStatus)
    }
  })

  return (
    <List.Container>
      <List.Title>Select an list status</List.Title>
      {isSuccess && filteredLists.map(list => (
        <StatusListItem
          key={list._id}
          list={list}
          isSelected={selectedItem === list._id}
          handleSelectItem={handleSelectItem}
          handleChangeTaskStatus={handleChangeTaskStatus}
        />
      ))}
    </List.Container>
  )
})

export default TaskStatusesLists
