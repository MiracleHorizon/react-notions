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
import { selectAppSettingsModalClosable } from 'store/slices/modals/modals.selectors'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as Modal from './AppSettingsModal.styles'

const AppSettingsModal = () => {
  const { closeAppSettingsModal, showFillNameAlert, showNotSavedChangesAlert } = useActions()
  const isClosable = useSelector(selectAppSettingsModalClosable)
  const { fullName: userFullName } = useSelector(selectUser)
  const [fullName, setFullName] = useState<string | null>(userFullName)
  const [isScrollOnTop, setScrollTop] = useState<boolean>(true)
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleChangeName = (value: string) => setFullName(value)

  const handleCloseModal = () => {
    if (userFullName === '') {
      return showFillNameAlert()
    }

    if (fullName && fullName !== userFullName) {
      return showNotSavedChangesAlert(fullName)
    }

    closeAppSettingsModal()
  }

  useCloseModal(ref, isClosable ? handleCloseModal : null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: contentRef.current, setScrollTop }),
    contentRef
  )

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <AppSettingsContext.Provider value={{ fullName, handleChangeName }}>
        <Modal.Content ref={contentRef} isScrollOnTop={isScrollOnTop}>
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
