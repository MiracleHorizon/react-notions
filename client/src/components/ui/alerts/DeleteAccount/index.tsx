import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import DeleteAccountForm from './Form'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import { selectDeleteAccountAlertClosable } from 'store/slices/alerts'
import { selectUser } from 'store/slices/user/auth.selectors'
import * as Alert from './DeleteAccountAlert.styles'

const DeleteAccountAlert = () => {
  const { hideDeleteAccountAlert } = useActions()
  const isClosable = useSelector(selectDeleteAccountAlertClosable)
  const ref = useRef<HTMLDivElement>(null)

  const handleCloseAlert = () => {
    if (isClosable) hideDeleteAccountAlert()
  }

  useCloseModal(ref, handleCloseAlert)

  return (
    <ModalWrapper inset>
      <Alert.Container ref={ref}>
        <Alert.Content>
          <h4>
            This action cannot be undone. This will permanently delete your
            entire account. All private workspaces will be deleted, and you will
            be removed from all shared workspaces.
          </h4>
          <Alert.AccountName>
            {useSelector(selectUser).fullName}&apos;s Notion
          </Alert.AccountName>
          <p>Please type in your email to confirm.</p>
        </Alert.Content>
        <DeleteAccountForm handleCloseAlert={handleCloseAlert} />
      </Alert.Container>
    </ModalWrapper>
  )
}

export default DeleteAccountAlert
