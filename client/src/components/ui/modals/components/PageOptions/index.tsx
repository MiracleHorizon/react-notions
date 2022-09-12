import React, { lazy, Suspense } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import ChangesBarLoader from 'components/ui/loaders/ChangesBar'
import PageOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './PageOptionsModal.styles'

const ChangesBar = lazy(() => import('components/ui/ChangesBar'))

const PageOptionsModal = () => {
  const { closePageOptionsModal } = useActions()
  const { page, coords: pointerCoords } = useTypedSelector(s => s.modals.pageOptions)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.POINTER,
    pointerCoords,
  })

  useOnCloseModal(ref, closePageOptionsModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <PageOptionsList page={page} coords={pointerCoords} />
        <Suspense fallback={<ChangesBarLoader />}>
          <ChangesBar createdAt={page.createdAt} updatedAt={page.updatedAt} />
        </Suspense>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageOptionsModal
