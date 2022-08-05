import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import AppSettings from './App'
import AccountSettings from './Account'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './AppSettingsModal.styles'

const AppSettingsModal = () => {
  const { isOpen } = useTypedSelector(state => state.modals.dropdown['theme'])
  const { closeAppSettingsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, !isOpen ? closeAppSettingsModal : null)

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <Modal.Content>
          <AccountSettings />
          <AppSettings />
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default AppSettingsModal
