import React, { useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import AppSettings from './App'
import AccountSettings from './Account'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import * as Modal from './AppSettingsModal.styles'

const AppSettingsModal = () => {
  const { closeAppSettingsModal } = useActions()
  const {
    quickSearch: { isOpen: isQuickSearchModalOpen },
    dropdown: {
      theme: { isOpen: isOpenThemeDropdownOpen },
      startOpen: { isOpen: isStartOpenDropdownOpen },
    },
  } = useTypedSelector(s => s.modals)
  const [isOnTop, setOnTop] = useState<boolean>(false)
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(
    ref,
    !isOpenThemeDropdownOpen && !isStartOpenDropdownOpen
      ? // &&isQuickSearchModalOpen
        closeAppSettingsModal
      : null
  )

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnTop, setOnBottom }),
    ref
  )

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref} isOnTop={isOnTop} isOnBottom={isOnBottom}>
        <Modal.Content>
          <AccountSettings />
          <AppSettings />
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default AppSettingsModal
