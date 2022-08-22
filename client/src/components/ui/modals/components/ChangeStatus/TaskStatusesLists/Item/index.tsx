import React, { FC, useRef, MouseEvent, useCallback, memo } from 'react'

import TasksListStatusContainer from 'components/ui/StatusContainer - Checked'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/pages.api'
import IPage from 'models/page/IPage'
import ITasksList from 'models/tasksList/ITasksList'
import { ISelectItemParams } from 'types'
import * as Item from './StatusListItem.styles'

const StatusListItem: FC<
  {
    task: IPage
    list: ITasksList
  } & ISelectItemParams<string>
> = memo(({ list, task, isSelected, handleSelectItem }) => {
  const { closeChangeStatusModal, openTasksListsOptionsModal } = useActions()
  const [updatePage] = useUpdatePageMutation()
  const optionsBtnRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const handleChangeTaskStatus = useCallback(async () => {
    if (task.parentListId !== list._id) {
      const updatedTask = { ...task }
      updatedTask.parentListId = list._id
      updatedTask.status = list._id

      await updatePage({ _id: task._id, body: updatedTask })
    }

    closeChangeStatusModal()
  }, [task, list._id, updatePage, closeChangeStatusModal])

  const handleOpenTasksListOptionsModal = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()

      openTasksListsOptionsModal({
        invokerRect: optionsBtnRef.current?.getBoundingClientRect().toJSON(),
        template: 'taskModal',
        hidden: list.hidden,
        listId: list._id,
        color: list.color,
      })
    },
    [list, openTasksListsOptionsModal]
  )

  return (
    <Item.Wrapper
      ref={ref}
      isSelected={isSelected}
      onClick={handleChangeTaskStatus}
      onMouseEnter={() => handleSelectItem(list._id)}
    >
      <Item.Container>
        <TasksListStatusContainer {...list} />
        <Item.ButtonContainer ref={optionsBtnRef} isSelected={isSelected}>
          <OptionsButton
            size='medium'
            type='primary'
            onClickAction={handleOpenTasksListOptionsModal}
          />
        </Item.ButtonContainer>
      </Item.Container>
    </Item.Wrapper>
  )
})

export default StatusListItem
