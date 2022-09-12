import React, { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import FormValidator from 'utils/formValidation/FormValidator'
import { useSendResetPasswordVerifyCodeMutation } from 'services/user.api'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import * as Form from 'assets/styles/AuthForm.styles'

const ForgotPasswordForm: FC<{ handleSendCode: () => void }> = ({
  handleSendCode,
}) => {
  const [sendResetPasswordVerifyCode, { isSuccess, error }] = useSendResetPasswordVerifyCodeMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '' },
    ...DEFAULT_FORM_OPTIONS,
  })

  const reg = register('email', FormValidator.validateEmail())

  const handleSubmitEmail = (email: { email: string }) => {
    sendResetPasswordVerifyCode(email)
  }

  const handleSubmitErrors = () => {
    if (errors.email?.message) {
      return <DefaultRedError title={errors.email.message} />
    }

    if (error && 'data' in error) {
      return (
        <DefaultRedError title={(error.data as IErrorResponseData).message} />
      )
    }
  }

  useEffect(() => {
    isSuccess && handleSendCode()
  }, [isSuccess, handleSendCode])

  return (
    <Form.Container onSubmit={handleSubmit(handleSubmitEmail)}>
      <Form.InputContainer>
        <Form.Label>Email</Form.Label>
        <OutlineInput
          type='email'
          placeholder='Enter your email.'
          register={reg}
        />
      </Form.InputContainer>
      {handleSubmitErrors()}
      <OutlineButton
        title='Send verification code'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleSubmit(handleSubmitEmail)}
      />
      <input type='submit' />
    </Form.Container>
  )
}

export default ForgotPasswordForm
