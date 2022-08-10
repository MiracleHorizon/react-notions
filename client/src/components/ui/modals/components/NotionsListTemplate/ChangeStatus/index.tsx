import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import CurrentTaskStatus from './CurrentStatus'
import StatusesList from './StatusesList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './ChangeStatusModal.styles'

const ChangeStatusModal = () => {
  const {
    changeStatus: { list, task, coords },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const { closeChangeStatusModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useOnCloseModal(
    ref.current,
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
