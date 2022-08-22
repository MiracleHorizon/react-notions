import React, { useEffect, useState } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import NotionContentItemDecorModalContent from './NotionContentItemDecorModalContent'
import useActions from 'hooks/useActions'
import useSetModalPosition from 'hooks/useSetModalPosition'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as Modal from './NotionContentItemDecorModal.styles'

const NotionContentItemDecorModal = () => {
  const { closeNotionContentItemDecorModal } = useActions()
  const [isOnTop, setOnTop] = useState<boolean>(true)
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const { itemId, invokerRect } = useTypedSelector(
    s => s.modals.notionItemDecor
  )

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'rightCenter',
    invokerRect,
  })

  useEffect(() => {
    const handleScroll = () => {
      handleScrollTop({ node: ref, setOnTop, setOnBottom })
    }

    ref?.addEventListener('scroll', handleScroll)

    return () => ref?.removeEventListener('scroll', handleScroll)
  }, [ref])

  useOnCloseModal(ref, closeNotionContentItemDecorModal)

  return (
    <ModalWrapper>
      <Modal.Container
        {...coords}
        ref={node => nodeRefHandler(node, rect, setRef)}
        isOnTop={isOnTop}
        isOnBottom={isOnBottom}
      >
        <NotionContentItemDecorModalContent itemId={itemId} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default NotionContentItemDecorModal
