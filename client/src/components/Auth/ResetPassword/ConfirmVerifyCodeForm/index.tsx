import React, { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import { useVerifyResetPasswordCodeMutation } from 'services/user.api'
import FormValidator from 'utils/formValidation/FormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import * as Form from 'assets/styles/AuthForm.styles'

const ConfirmResetPasswordVerifyCodeForm: FC<{
  handleConfirmEmail: (email: string) => void
}> = ({ handleConfirmEmail }) => {
  const [
    verifyResetPasswordCode,
    {
      originalArgs,
      isSuccess,
      error
    }
  ] = useVerifyResetPasswordCodeMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { code: '' }, ...DEFAULT_FORM_OPTIONS })

  const reg = register('code', FormValidator.validateVerifyCode())

  const handleSubmitCode = (code: { code: string }) =>
    verifyResetPasswordCode(code)

  const handleSubmitErrors = () => {
    if (errors.code?.message) {
      return <DefaultRedError title={errors.code.message} />
    }

    if (error && 'data' in error) {
      return (
        <DefaultRedError title={(error.data as IErrorResponseData).message} />
      )
    }
  }

  useEffect(() => {
    isSuccess && originalArgs && handleConfirmEmail(originalArgs.code)
  }, [isSuccess, originalArgs, handleConfirmEmail])

  return (
    <Form.Container onSubmit={handleSubmit(handleSubmitCode)}>
      <Form.InputContainer>
        <Form.Label>Email</Form.Label>
        <OutlineInput
          type='text'
          placeholder='Enter verification code'
          register={reg}
        />
      </Form.InputContainer>
      {handleSubmitErrors()}
      <OutlineButton
        title='Confirm email'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleSubmit(handleSubmitCode)}
      />
      <input type='submit' />
    </Form.Container>
  )
}

export default ConfirmResetPasswordVerifyCodeForm
