import React, { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { StatusSelectSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useGetTasksListsQuery } from 'store/slices/tasksLists/tasksLists.api'
import {
  selectListById,
  selectNoStatusList,
} from 'store/slices/tasksLists/tasksLists.selectors'
import IPage from 'models/page/IPage'
import * as Status from './StatusItem.styles'

const TaskMainStatus: FC<IPage> = task => {
  const { data, isSuccess } = useGetTasksListsQuery(task.parentPageId!)
  const { tasksLists } = useTypedSelector(state => state.tasksLists)
  const { openChangeStatusModal, setTasksLists } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const parentList = useTypedSelector(state => selectListById(state, task.parentListId!))
  const noStatusList = useSelector(selectNoStatusList)

  const handleOpenChangeStatusModal = () => {
    const list = parentList ? parentList : noStatusList
    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openChangeStatusModal({ invokerRect, list, task })
  }

  useEffect(() => {
    if (isSuccess && tasksLists.length !== 1) setTasksLists(data)
  }, [data, isSuccess, tasksLists.length])

  return (
    <Status.Wrapper>
      <Status.Container>
        <Status.TitleContainer>
          <StatusSelectSvg />
          <Status.Title>Status</Status.Title>
        </Status.TitleContainer>
        <Status.ValueContainer
          styleEvents
          ref={ref}
          onClick={handleOpenChangeStatusModal}
        >
          {parentList && parentList.color !== 'empty' ? (
            <Status.StatusContainer bgColor={parentList.color}>
              <Status.Value>{parentList.title}</Status.Value>
            </Status.StatusContainer>
          ) : (
            <Status.EmptyStatus>Empty</Status.EmptyStatus>
          )}
        </Status.ValueContainer>
      </Status.Container>
    </Status.Wrapper>
  )
}

export default TaskMainStatus
