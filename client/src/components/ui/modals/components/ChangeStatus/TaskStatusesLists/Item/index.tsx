import React, { FC, useRef, MouseEvent, useCallback } from 'react'
import { useHover } from 'usehooks-ts'

import TasksListStatusContainer from 'components/ui/StatusContainer'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { ISelectItemParams } from 'types'
import PropTypes from '../../ChangeStatusModal.types'
import * as Item from './StatusListItem.styles'

const StatusListItem: FC<PropTypes & ISelectItemParams<string>> = ({
  list,
  task,
  isSelected,
  handleSelectItem,
}) => {
  const {
    closeChangeStatusModal,
    openTasksListsOptionsModal,
    updateNotionTaskModalState,
  } = useActions()
  const [updatePage] = useUpdatePageMutation()
  const ref = useRef<HTMLDivElement>(null)
  const inHovering = useHover(ref)
  const optionsBtnRef = useRef<HTMLDivElement>(null)

  const handleChangeTaskStatus = useCallback(async () => {
    if (task.parentListId !== list._id) {
      const updatedTask = { ...task }
      updatedTask.parentListId = list._id
      updatedTask.status = list._id

      await updatePage({ _id: task._id, body: updatedTask })
      updateNotionTaskModalState(updatedTask) //! Костыль.
    }

    closeChangeStatusModal()
  }, [task, list._id])

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
    [list]
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
}

export default StatusListItem
