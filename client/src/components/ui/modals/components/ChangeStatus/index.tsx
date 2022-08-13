import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import CurrentTaskStatus from './CurrentStatus'
import TaskStatusesLists from './TaskStatusesLists'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './ChangeStatusModal.styles'

const ChangeStatusModal = () => {
  const {
    changeStatus: { list, task, invokerRect },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const { value, handleChangeValue } = useInput('')
  const { closeChangeStatusModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'changeStatus',
    invokerRect,
  })

  useOnCloseModal(
    ref,
    !isTasksListOptionsModalOpen ? closeChangeStatusModal : null
  )

  if (!list || !task) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <CurrentTaskStatus
          list={list}
          task={task}
          value={value}
          handleChangeValue={handleChangeValue}
        />
        <TaskStatusesLists value={value} {...task} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default ChangeStatusModal
