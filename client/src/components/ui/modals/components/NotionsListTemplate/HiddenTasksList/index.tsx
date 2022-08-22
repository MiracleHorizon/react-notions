import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import BoardItem from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/components/Board - Checked/TasksList - Checked/Item - Checked'
import OutlineInput from 'components/ui/inputs - Checked/Outline'
import TasksListTopBar from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/components/Board - Checked/TasksList - Checked/TopBar - Checked'
import NewCreatedBoardItem from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/components/Board - Checked/TasksList - Checked/Item - Checked/NewCreatedItem - Checked'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import { selectHiddenTasksListModalClosable } from 'store/slices/modals/modals.selectors'
import getFilteredPages from 'utils/helpers/getFilteredPages'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import IPage from 'models/page/IPage'
import * as Modal from './HiddenTasksListModal.styles'

const HiddenTasksListModal = () => {
  const {
    hiddenTasksList: { list, invokerRect },
  } = useTypedSelector(state => state.modals)
  const { page: currentPage } = useTypedSelector(state => state.pages)
  const isClosable = useSelector(selectHiddenTasksListModalClosable)
  const [taskCreating, setTaskCreating] = useState<boolean>(false)
  const { closeHiddenTasksListModal } = useActions()

  const { value, handleChangeValue, handleClearValue } = useInput('')
  const pages = useTypedSelector(state => state.pages.pages)
  // const {
  //   data: pages,
  //   isSuccess,
  //   isError,
  // } = useGetByListQuery(list?._id ? list._id : '')
  // const [filteredPage, setFilteredPages] = useState<IPage[]>(pages ? pages : [])

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  const handleStartTaskCreating = () => setTaskCreating(true)

  // useEffect(() => {
  //   setFilteredPages(getFilteredPages(pages ? pages : [], value))
  // }, [pages, value, filteredPage])

  useOnCloseModal(ref, isClosable ? closeHiddenTasksListModal : null)

  if (!list || !pages || !currentPage) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <Modal.TopBarContainer>
          <TasksListTopBar
            {...list}
            isHovering={true}
            totalTasks={pages.length}
            pageLocked={currentPage.locked}
            onClickAction={handleStartTaskCreating}
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
          {/*{filteredPage.map(item => (*/}
          {/*  <BoardItem key={item._id} {...item} />*/}
          {/*))}*/}
          {/*{taskCreating && (*/}
          {/*  <NewCreatedBoardItem*/}
          {/*    listId={list._id}*/}
          {/*    setTaskCreating={setTaskCreating}*/}
          {/*  />*/}
          {/*)}*/}
        </Modal.List>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default HiddenTasksListModal
