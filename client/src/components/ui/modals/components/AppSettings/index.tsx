import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import AppSettings from './App'
import AccountSettings from './Account'
import AppSettingsActionsBar from './ActionsBar'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import { AppSettingsContext } from 'context/AppSettings'
import { selectUser } from 'store/slices/user/auth.selectors'
import { selectIsDropdownsClose } from 'store/slices/modals/modals.selectors'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as Modal from './AppSettingsModal.styles'

const AppSettingsModal = () => {
  const { closeAppSettingsModal, showFillNameAlert, showNotSavedChangesAlert } = useActions()
  const isDropdownsClose = useSelector(selectIsDropdownsClose)
  const { fullName: userFullName } = useSelector(selectUser)
  const [fullName, setFullName] = useState<string | null>(userFullName)
  const [isScrollOnTop, setScrollTop] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleChangeName = (value: string) => setFullName(value)

  const handleCloseModal = () => {
    if (fullName === '') {
      return showFillNameAlert()
    }

    if (fullName && fullName !== userFullName) {
      return showNotSavedChangesAlert(fullName)
    }

    closeAppSettingsModal()
  }

  useCloseModal(ref, isDropdownsClose ? handleCloseModal : null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setScrollTop }),
    ref
  )

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref} isScrollOnTop={isScrollOnTop}>
        <AppSettingsContext.Provider value={{ fullName, handleChangeName }}>
          <Modal.Content>
            <AppSettings />
            <AccountSettings />
          </Modal.Content>
          <AppSettingsActionsBar />
        </AppSettingsContext.Provider>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default AppSettingsModal
