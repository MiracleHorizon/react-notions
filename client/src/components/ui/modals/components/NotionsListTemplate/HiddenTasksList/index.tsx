import React, { memo, useRef } from 'react'

import ModalWrapper from 'components/ui/modals/index'
import TasksListTopBar from 'components/Workspace/Templates/NotionsList/Views/components/Board/TasksList/TopBar'
import BoardItem from 'components/Workspace/Templates/NotionsList/Views/components/Board/TasksList/Item'
import OutlineInput from 'components/ui/inputs/Outline'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './HiddenTasksListModal.styles'

const HiddenTasksListModal = memo(() => {
  const {
    hiddenTasksList: { list, coords },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
    tasksListsOptions: { isOpen: isTasksListOptionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const {
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = useTypedSelector(state => state.alerts)
  const pages = useTypedSelector(state =>
    state.pages.pages.filter(page => page.parentListId === list?._id)
  )
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closeHiddenTasksListModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(
    ref,
    !isTasksListOptionsModalOpen &&
      !isHandleTasksListTitleModalOpen &&
      !isPageOptionsModalOpen &&
      !isDeleteTasksListAlertOpen
      ? closeHiddenTasksListModal
      : null
  )

  if (!list) return null

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <Modal.TopBarContainer>
          <TasksListTopBar
            totalTasks={pages.length}
            isHovering={true}
            {...list}
          />
          <OutlineInput
            renderFocusable
            inputMode='text'
            value={value}
            placeholder='Search for a page...'
            onChange={handleChangeValue}
            onClear={handleClearValue}
          />
        </Modal.TopBarContainer>
        <Modal.List>
          {pages.map(item => (
            <BoardItem key={item._id} {...item} />
          ))}
        </Modal.List>
      </Modal.Container>
    </ModalWrapper>
  )
})

export default HiddenTasksListModal
