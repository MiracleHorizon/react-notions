import React, { FC, useRef } from 'react'

import { StatusSelectSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectListById } from 'store/slices/tasksLists/tasksLists.selectors'
import ModalsCoordsHandler from 'utils/coordsHandlers/modals'
import IPage from 'models/page/IPage'
import * as Status from './StatusItem.styles'

const TaskMainStatus: FC<IPage> = task => {
  const list = useTypedSelector(state =>
    selectListById(state, task.parentListId!)
  )
  const { openChangeStatusModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenChangeStatusModal = () => {
    if (!list) return

    openChangeStatusModal({
      coords: ModalsCoordsHandler.changeStatus(ref),
      list,
      task,
    })
  }

  if (!list) return null // Попробовать Error boundary

  return (
    <Status.Wrapper>
      <Status.Container>
        <Status.TitleContainer>
          <StatusSelectSvg />
          <Status.Title>Status</Status.Title>
        </Status.TitleContainer>
        <Status.ValueContainer
          ref={ref}
          styleEvents
          onClick={handleOpenChangeStatusModal}
        >
          {list.color !== 'empty' ? (
            <Status.StatusContainer bgColor={list.color}>
              <Status.Value>{list.title}</Status.Value>
            </Status.StatusContainer>
          ) : (
            <>No status</>
          )}
        </Status.ValueContainer>
      </Status.Container>
    </Status.Wrapper>
  )
}

export default TaskMainStatus
