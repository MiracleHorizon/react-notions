import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { useLogoutMutation } from 'services/auth.api'
import { useDeleteUserMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import Form from './DeleteAccountForm.styles'

const DeleteAccountForm: FC<{ handleCloseAlert: () => void }> = ({
  handleCloseAlert,
}) => {
  const { showFillEmailAlert, logout } = useActions()
  const { _id, email } = useSelector(selectUser)
  const [deleteUser, { isSuccess }] = useDeleteUserMutation()
  const [userLogout] = useLogoutMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({ defaultValues: { email: '' }, ...DEFAULT_FORM_OPTIONS })

  const reg = register('email', {
    required: 'err',
    validate: value => value === email || 'err',
  })

  const handleDeleteAccount = () => deleteUser(_id)

  useEffect(() => {
    if (isSuccess) {
      userLogout()
      logout()
      navigate('/login')
    }
  }, [isSuccess, userLogout, logout, navigate])

  useEffect(() => {
    if (errors.email?.message) {
      clearErrors()
      showFillEmailAlert()
    }
  }, [errors, clearErrors, showFillEmailAlert])

  return (
    <Form onSubmit={handleSubmit(handleDeleteAccount)}>
      <OutlineInput type='email' placeholder={email} register={reg} />
      <OutlineButton
        title='Permanently delete account'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleSubmit(handleDeleteAccount)}
      />
      <OutlineButton
        title='Cancel'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleCloseAlert}
      />
      <input type='submit' />
    </Form>
  )
}

export default DeleteAccountForm
