import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import NotionContentItemDecorModalContent from './NotionContentItemDecorModalContent'
import useActions from 'hooks/useActions'
import useSetModalPosition from 'hooks/useSetModalPosition'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import nodeRefHandler from 'utils/nodeRefHandler'
import * as Modal from './NotionContentItemDecorModal.styles'

const NotionContentItemDecorModal = () => {
  const { itemId, invokerRect } = useTypedSelector(
    state => state.modals.notionItemDecor
  )
  const { closeNotionContentItemDecorModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'rightCenter',
    invokerRect,
  }) // useMemo ?

  useOnCloseModal(ref, closeNotionContentItemDecorModal)

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <NotionContentItemDecorModalContent itemId={itemId} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default NotionContentItemDecorModal
