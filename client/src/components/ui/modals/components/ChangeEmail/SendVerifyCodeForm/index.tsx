import React, { Dispatch, FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import FilledButton from 'components/ui/buttons/Filled'
import OutlineInput from 'components/ui/inputs/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import { useSendChangeEmailVerifyCodeMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import FormValidator from 'utils/formValidation/FormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { ChangeEmailAction, ChangeEmailKind } from '../changeEmailReducer/types'
import Form from './SendChangeEmailVerifyCodeForm'

const SendChangeEmailVerifyCodeForm: FC<{
  isCodeSent: boolean
  dispatch: Dispatch<ChangeEmailAction>
}> = ({ isCodeSent, dispatch }) => {
  const [sendChangeEmailVerifyCode] = useSendChangeEmailVerifyCodeMutation()
  const { _id } = useSelector(selectUser)

  const {
    reset,
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '' }, ...DEFAULT_FORM_OPTIONS })

  const reg = register('email', FormValidator.validateEmail())

  const handleSendVerifyCode = (payload: { email: string }) => {
    dispatch({ type: ChangeEmailKind.SEND_VERIFY_CODE, payload })
    sendChangeEmailVerifyCode({ author: _id, email: payload.email })
  }

  const handleClearEmail = () => {
    dispatch({ type: ChangeEmailKind.CLEAR_EMAIL })
    reset()
  }

  useEffect(() => {
    setFocus('email', { shouldSelect: true })
  }, [setFocus])

  return (
    <Form onSubmit={handleSubmit(handleSendVerifyCode)}>
      <p>Please enter a new email and we will send you a verification code.</p>
      <OutlineInput
        type='email'
        disabled={isCodeSent}
        placeholder='Enter new email'
        register={reg}
        onClear={handleClearEmail}
      />
      {errors.email?.message && (
        <DefaultRedError title={errors.email.message} />
      )}
      {!isCodeSent && (
        <FilledButton
          title='Send verification code'
          onClickAction={handleSubmit(handleSendVerifyCode)}
        />
      )}
    </Form>
  )
}

export default SendChangeEmailVerifyCodeForm
