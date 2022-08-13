import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import ChangesBar from 'components/ui/ChangesBar'
import PageOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './PageOptionsModal.styles'

const PageOptionsModal = () => {
  const { page, coords: pointerCoords } = useTypedSelector(
    state => state.modals.pageOptions
  )
  const { closePageOptionsModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'pointer',
    pointerCoords,
  }) // useMemo ?

  useOnCloseModal(ref, closePageOptionsModal)

  if (!page) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <PageOptionsList page={page} coords={pointerCoords} />
        <ChangesBar createdAt={page.createdAt} updatedAt={page.updatedAt} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageOptionsModal
