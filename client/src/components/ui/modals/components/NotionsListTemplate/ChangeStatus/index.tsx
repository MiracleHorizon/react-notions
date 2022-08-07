import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import CurrentTaskStatus from './CurrentStatus'
import StatusesList from './StatusesList'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './ChangeStatusModal.styles'

const ChangeStatusModal = () => {
  const {
    changeStatus: { list, task, coords },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const { closeChangeStatusModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(
    ref,
    !isTasksListOptionsModalOpen ? closeChangeStatusModal : null
  )

  if (!list || !task) return null

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <CurrentTaskStatus list={list} task={task} />
        <StatusesList {...task} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default ChangeStatusModal
