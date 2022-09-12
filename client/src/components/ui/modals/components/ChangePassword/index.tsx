import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import ChangePasswordForm from './Form'
import ModalWrapper from 'components/ui/modals/ModalWrapper'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import FilledButton from 'components/ui/buttons/Filled'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import { useChangePasswordMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import * as Modal from './ChangePasswordModal.styles'

const ChangePasswordModal = () => {
  const { closeChangePasswordModal, showChangePasswordAlert } = useActions()
  const [changePassword, { isSuccess, error }] = useChangePasswordMutation()
  const { _id } = useSelector(selectUser)
  const ref = useRef<HTMLDivElement>(null)

  const defaultValues = useMemo(() => ({
    oldPass: '',
    newPass: '',
    newPassRepeat: '',
  }), [])

  const {
    handleSubmit,
    formState: { errors },
    ...params
  } = useForm({ defaultValues, ...DEFAULT_FORM_OPTIONS })

  const onSubmit = handleSubmit(params => changePassword({ _id, ...params }))

  const handleSubmitErrors = useCallback(() => {
    if (errors.oldPass?.message) {
      return <DefaultRedError title={errors.oldPass.message} />
    }

    if (errors.newPass?.message) {
      return <DefaultRedError title={errors.newPass.message} />
    }

    if (errors.newPassRepeat?.message) {
      return <DefaultRedError title={errors.newPassRepeat.message} />
    }

    if (error && 'data' in error) {
      return (
        <DefaultRedError title={(error.data as IErrorResponseData).message} />
      )
    }
  }, [errors, error])

  useEffect(() => {
    if (isSuccess) {
      closeChangePasswordModal()
      showChangePasswordAlert()
    }
  }, [isSuccess, closeChangePasswordModal, showChangePasswordAlert])

  useCloseModal(ref, closeChangePasswordModal)

  return (
    <ModalWrapper inset>
      <Modal.Container ref={ref}>
        <ChangePasswordForm onSubmit={onSubmit} {...params} />
        <Modal.Title>
          Use a password that is at least 3 characters long and no longer than
          25 characters with both letters and numbers.
        </Modal.Title>
        {handleSubmitErrors()}
        <FilledButton title='Change password' onClickAction={onSubmit} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default ChangePasswordModal
