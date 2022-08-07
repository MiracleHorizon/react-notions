import React, { useEffect, useMemo, useRef, useState } from 'react'

import ModalWrapper from 'components/ui/modals/index'
import TasksListTopBar from 'components/Workspace/Templates/NotionsList/Views/components/Board/TasksList/TopBar'
import BoardItem from 'components/Workspace/Templates/NotionsList/Views/components/Board/TasksList/Item'
import OutlineInput from 'components/ui/inputs/Outline'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import modalCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'
import getFilteredPages from 'utils/helpers/getFilteredPages'
import * as Modal from './HiddenTasksListModal.styles'

import {
  selectCommonPages,
  selectPagesByListId,
} from 'store/slices/pages/pages.selectors'
import { useSelector } from 'react-redux'
import IPage from 'models/page/IPage'

const HiddenTasksListModal = () => {
  const {
    hiddenTasksList: { list, invokerRect },
    pageOptions: { isOpen: isPageOptionsModalOpen },
    handleTasksList: { isOpen: isHandleTasksListTitleModalOpen },
    tasksListOptions: { isOpen: isTasksListOptionsModalOpen },
  } = useTypedSelector(state => state.modals)
  const {
    deleteTasksList: { isOpen: isDeleteTasksListAlertOpen },
  } = useTypedSelector(state => state.alerts)

  const pages = useSelector(selectCommonPages) //! MOCK
  const [filteredPage, setFilteredPages] = useState<IPage[]>(pages)

  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closeHiddenTasksListModal } = useActions()

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return modalCoordsHandler(rect.current, invokerRect).centerBottom
  }, [rect.current, invokerRect])

  useOnCloseModal(
    ref,
    !isTasksListOptionsModalOpen &&
      !isHandleTasksListTitleModalOpen &&
      !isPageOptionsModalOpen &&
      !isDeleteTasksListAlertOpen
      ? closeHiddenTasksListModal
      : null
  )

  useEffect(() => setFilteredPages(getFilteredPages(pages, value)), [value])

  if (!list) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => {
          setRef(node)
          if (node !== null) rect.current = node.getBoundingClientRect()
        }}
        {...coords}
      >
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
          {filteredPage.map(item => (
            <BoardItem key={item._id} {...item} />
          ))}
        </Modal.List>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default HiddenTasksListModal
