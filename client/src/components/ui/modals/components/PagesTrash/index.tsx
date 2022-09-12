import React, { useRef, lazy, Suspense } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import EmptyPagesTrash from './Empty'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './PagesTrashModal.styles'

const DeletedPagesList = lazy(() => import('./List'))

const PagesTrashModal = () => {
  const { closePagesTrashModal } = useActions()
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const isAlertOpen = useTypedSelector(s => s.alerts.deletePage.isOpen)
  const sbWidth = useTypedSelector(s => s.app.sidebar.width)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    if (!isAlertOpen) closePagesTrashModal()
  }

  useCloseModal(ref, handleClickOutside)

  return (
    <ModalWrapper>
      <Modal.Container sbWidth={sbWidth} ref={ref}>
        <Modal.InputContainer>
          <OutlineInput
            renderFocusable
            type='text'
            placeholder='Filter by page title...'
            value={value}
            onChange={handleChangeValue}
            onClear={handleClearValue}
          />
        </Modal.InputContainer>
        <Suspense fallback={<EmptyPagesTrash />}>
          <DeletedPagesList value={value} />
        </Suspense>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PagesTrashModal
