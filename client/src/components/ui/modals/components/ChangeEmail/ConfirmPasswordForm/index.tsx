import React, { Dispatch, FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import { useCheckPasswordMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import FormValidator from 'utils/formValidation/FormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { ChangeEmailAction, ChangeEmailKind } from '../changeEmailReducer/types'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import Form from './ChangeEmailConfirmPasswordBar.styles'

const ChangeEmailConfirmPasswordForm: FC<{
  isConfirmed: boolean
  dispatch: Dispatch<ChangeEmailAction>
}> = ({ isConfirmed, dispatch }) => {
  const [checkPassword, { isSuccess, error }] = useCheckPasswordMutation()
  const { _id, email } = useSelector(selectUser)

  const {
    reset,
    watch,
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { password: '' }, ...DEFAULT_FORM_OPTIONS })

  const reg = register('password', FormValidator.validatePassword())

  const handleSubmitForm = ({ password }: { password: string }) => {
    // const salt = bcrypt.genSaltSync(10)
    // const passwordHash = bcrypt.hashSync(password, salt)
    checkPassword({ author: _id, password })
  }

  const handleConfirmPassword = useCallback(() => {
    dispatch({ type: ChangeEmailKind.CONFIRM_PASSWORD })
  }, [dispatch])

  const handleClearPassword = () => {
    dispatch({ type: ChangeEmailKind.CLEAR_PASSWORD })
    reset()
  }

  const handleSubmitErrors = () => {
    if (errors.password?.message) {
      return <DefaultRedError title={errors.password.message} />
    }

    if (error && 'data' in error) {
      return (
        <DefaultRedError title={(error.data as IErrorResponseData).message} />
      )
    }
  }

  useEffect(() => {
    if (isSuccess) handleConfirmPassword()
  }, [isSuccess, handleConfirmPassword])

  useEffect(() => {
    setFocus('password', { shouldSelect: true })
  }, [setFocus])

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <p>
        Your current email is <b>{email}.</b>
      </p>
      <p>Please enter your password.</p>
      <OutlineInput
        type='password'
        placeholder='Password'
        register={reg}
        disabled={isConfirmed}
        isEmpty={watch('password') === ''}
        onClear={handleClearPassword}
      />
      {handleSubmitErrors()}
      {!isConfirmed && (
        <FilledButton
          title='Continue'
          onClickAction={handleSubmit(handleSubmitForm)}
        />
      )}
    </Form>
  )
}

export default ChangeEmailConfirmPasswordForm
