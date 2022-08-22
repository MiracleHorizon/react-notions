import React, { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { StatusSelectSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useLazyGetTasksListsQuery } from 'services/tasksLists.api'
import {
  selectListById,
  selectNoStatusList,
} from 'store/slices/tasksLists/tasksLists.selectors'
import IPage from 'models/page/IPage'
import * as Status from './StatusItem.styles'

const TaskMainStatus: FC<IPage> = task => {
  const { openChangeStatusModal, setTasksLists } = useActions()
  const [getTasksLists, { data, isSuccess }] = useLazyGetTasksListsQuery()
  const { tasksLists } = useTypedSelector(s => s.tasksLists)
  const parentList = useTypedSelector(s => selectListById(s, task.parentListId))
  const noStatusList = useSelector(selectNoStatusList)
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenChangeStatusModal = () => {
    if (!task.locked && noStatusList) {
      const list = parentList ? parentList : noStatusList
      const invokerRect = ref.current?.getBoundingClientRect().toJSON()
      openChangeStatusModal({ invokerRect, list, task })
    }
  }

  useEffect(() => {
    if (task.parentPageId && tasksLists.length === 0) {
      getTasksLists(task.parentPageId)
    }
  }, [task.parentPageId, tasksLists.length, getTasksLists])

  useEffect(() => {
    if (isSuccess && data) setTasksLists(data)
  }, [isSuccess, data, setTasksLists])

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
