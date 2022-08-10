import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import NotionContentItemOptionsList from './NotionContentItemOptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/nodeRefHandler'
import Container from './NotionContentItemOptionsModal.styles'

const NotionContentItemOptionsModal = () => {
  const {
    notionItemOptions: { itemId, invokerRect },
    notionItemDecor: { isOpen: isContentItemDecorModalOpen },
  } = useTypedSelector(state => state.modals)
  const { closeNotionContentItemOptionsModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'leftCenter',
    invokerRect,
  }) // useMemo ?

  useOnCloseModal(
    isContentItemDecorModalOpen ? null : ref,
    isContentItemDecorModalOpen ? null : closeNotionContentItemOptionsModal
  )

  return (
    <ModalWrapper>
      <Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <NotionContentItemOptionsList itemId={itemId} rect={rect} />
      </Container>
    </ModalWrapper>
  )
}

export default NotionContentItemOptionsModal
