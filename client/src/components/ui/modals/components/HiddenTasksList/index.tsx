import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import HiddenTasksListContent from './Content'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import { selectHiddenTasksListModalClosable } from 'store/slices/modals/modals.selectors'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import Container from './HiddenTasksListModal.styles'

const HiddenTasksListModal = () => {
  const { closeHiddenTasksListModal } = useActions()
  const isClosable = useSelector(selectHiddenTasksListModalClosable)
  const [taskCreating, setTaskCreating] = useState<boolean>(false)
  const { list, invokerRect } = useTypedSelector(s => s.modals.hiddenTasksList)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.CENTER_BOTTOM,
    invokerRect,
  })

  useOnCloseModal(ref, isClosable && !taskCreating ? closeHiddenTasksListModal : null)

  return (
    <ModalWrapper>
      <Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <HiddenTasksListContent
          list={list}
          taskCreating={taskCreating}
          setTaskCreating={setTaskCreating}
        />
      </Container>
    </ModalWrapper>
  )
}

export default HiddenTasksListModal
