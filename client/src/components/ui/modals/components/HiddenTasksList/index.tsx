import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import HiddenTasksListModalTopBar from './TopBar'
import BoardItem from 'components/PageTemplates/NotionsDatabase/Views/components/Board/TasksList/Item'
import NewCreatedBoardItem from 'components/PageTemplates/NotionsDatabase/Views/components/Board/TasksList/Item/NewCreatedItem'
import DefaultNoResultsExposition from 'components/ui/expositions/NoResults/Default'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import { useLazySearchPagesByListQuery } from 'services/notions.api'
import { selectHiddenTasksListModalClosable } from 'store/slices/modals/modals.selectors'
import { selectUser } from 'store/slices/user/auth.selectors'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import IPage from 'models/page/IPage'
import * as Modal from './HiddenTasksListModal.styles'

const HiddenTasksListModal = () => {
  const { closeHiddenTasksListModal } = useActions()
  const [taskCreating, setTaskCreating] = useState<boolean>(false)
  const isClosable = useSelector(selectHiddenTasksListModalClosable)
  const { list, invokerRect } = useTypedSelector(s => s.modals.hiddenTasksList)
  const user = useSelector(selectUser)

  const inputState = useInput('')
  const debouncedValue = useDebounce(inputState.value, 250)
  const [searchPages, { data, isLoading, isSuccess, isError }] = useLazySearchPagesByListQuery()
  const [pages, setPages] = useState<IPage[]>([])

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  })

  const handleStartTaskCreating = () => setTaskCreating(true)

  useEffect(() => {
    searchPages({ query: debouncedValue, listId: list._id, author: user._id })
  }, [debouncedValue, list._id, user._id, searchPages])

  useEffect(() => {
    if (isSuccess && data) setPages(data)
  }, [isSuccess, data])

  useOnCloseModal(
    ref,
    isClosable && !taskCreating ? closeHiddenTasksListModal : null
  )

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <HiddenTasksListModalTopBar
          isLoading={isLoading}
          list={list}
          totalTasks={pages.length}
          handleStartTaskCreating={handleStartTaskCreating}
          {...inputState}
        />
        <Modal.List>
          {pages.length > 0 ? (
            pages.map(page => <BoardItem key={page._id} {...page} />)
          ) : (
            <DefaultNoResultsExposition />
          )}
          <NewCreatedBoardItem
            listId={list._id}
            taskCreating={taskCreating}
            setTaskCreating={setTaskCreating}
          />
        </Modal.List>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default HiddenTasksListModal
