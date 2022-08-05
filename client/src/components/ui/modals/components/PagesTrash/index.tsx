import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Loadable from 'react-loadable'

import ModalWrapper from 'components/ui/modals'
import OutlineInput from 'components/ui/inputs/Outline'
import EmptyPagesTrash from './Empty'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './PagesTrashModal.styles'

const DeletedPagesList = Loadable({
  loader: () => import('./List'),
  loading: () => <EmptyPagesTrash />,
})

const PagesTrashModal = () => {
  const isAlertOpen = useTypedSelector(state => state.alerts.deletePage.isOpen)
  const { width } = useTypedSelector(state => state.app.leftSidebar)
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closePagesTrashModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    if (!isAlertOpen) closePagesTrashModal()
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <ModalWrapper>
      <Modal.Container lSidebarWidth={width} ref={ref}>
        <Modal.InputContainer>
          <OutlineInput
            renderFocusable
            inputMode='text'
            placeholder='Filter by page title...'
            value={value}
            onChange={handleChangeValue}
            onClear={handleClearValue}
          />
        </Modal.InputContainer>
        {/*{pages.length > 0 ? (*/}
        {/*  <DeletedPagesList pages={pages} />*/}
        {/*) : (*/}
        {/*  <EmptyPagesTrash />*/}
        {/*)}*/}
        <EmptyPagesTrash />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PagesTrashModal
