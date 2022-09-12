import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import { useSelector } from 'react-redux'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import ChangeEmailConfirmPasswordForm from './ConfirmPasswordForm'
import SendChangeEmailVerifyCodeForm from './SendVerifyCodeForm'
import ConfirmChangeEmailVerifyCodeForm from './ConfirmVerifyCodeForm'
import useCloseModal from 'hooks/useCloseModal'
import useActions from 'hooks/useActions'
import { selectUser } from 'store/slices/user/auth.selectors'
import changeEmailReducer from './changeEmailReducer'
import Container from './ChangeEmailModal.styles'

const ChangeEmailModal = () => {
  const { closeChangeEmailModal } = useActions()
  const { _id } = useSelector(selectUser)
  const ref = useRef<HTMLDivElement>(null)

  const initialState = useMemo(() => ({
    isCodeSent: false,
    isConfirmed: false,
    email: '',
  }), [])

  const [{ isConfirmed, isCodeSent, email }, dispatch] = useReducer(
    changeEmailReducer,
    initialState
  )

  const handleCloseModal = useCallback(() => {
    closeChangeEmailModal()
  }, [closeChangeEmailModal])

  useCloseModal(ref, handleCloseModal)

  return (
    <ModalWrapper inset>
      <Container ref={ref}>
        <ChangeEmailConfirmPasswordForm
          isConfirmed={isConfirmed}
          dispatch={dispatch}
        />
        {isConfirmed && (
          <SendChangeEmailVerifyCodeForm
            isCodeSent={isCodeSent}
            dispatch={dispatch}
          />
        )}
        {isCodeSent && (
          <ConfirmChangeEmailVerifyCodeForm
            email={email}
            handleCloseModal={handleCloseModal}
          />
        )}
      </Container>
    </ModalWrapper>
  )
}

export default ChangeEmailModal
