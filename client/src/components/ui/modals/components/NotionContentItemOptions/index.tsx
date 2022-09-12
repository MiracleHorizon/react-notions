import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import NotionContentItemOptionsList from './NotionContentItemOptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import Container from './NotionContentItemOptionsModal.styles'

const NotionContentItemOptionsModal = () => {
  const {
    notionItemOptions: { invokerRect, page, item },
    notionItemDecor: { isOpen: isContentItemDecorModalOpen },
  } = useTypedSelector(s => s.modals)
  const { closeNotionContentItemOptionsModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.LEFT_CENTER,
    invokerRect,
  })

  useOnCloseModal(
    isContentItemDecorModalOpen ? null : ref,
    isContentItemDecorModalOpen ? null : closeNotionContentItemOptionsModal
  )

  return (
    <ModalWrapper>
      <Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        locked={page?.locked}
        {...coords}
      >
        <NotionContentItemOptionsList
          item={item}
          rect={rect}
          locked={page?.locked}
        />
      </Container>
    </ModalWrapper>
  )
}

export default NotionContentItemOptionsModal
