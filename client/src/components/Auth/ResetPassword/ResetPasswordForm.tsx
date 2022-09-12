import React, { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import useActions from 'hooks/useActions'
import { useLoginMutation } from 'services/auth.api'
import { useResetPasswordMutation } from 'services/user.api'
import FormValidator from 'utils/formValidation/FormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import * as Form from 'assets/styles/AuthForm.styles'

const ResetPasswordForm: FC<{ code: string }> = ({ code }) => {
  const { login } = useActions()
  const [resetPassword, { isSuccess, data, error, originalArgs }] =
    useResetPasswordMutation()
  const [authLogin, { isSuccess: isLoginSuccess, data: loginData }] =
    useLoginMutation()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { newPass: '', newPassRepeat: '' },
    ...DEFAULT_FORM_OPTIONS,
  })

  const regNewPass = register('newPass', {
    validate: value =>
      value === watch('newPassRepeat') || 'Your passwords do not match',
    ...FormValidator.validatePassword(),
  })

  const regNewPassRepeat = register(
    'newPassRepeat',
    FormValidator.validatePassword()
  )

  const handleSubmitReset = ({ newPass }: { newPass: string }) => {
    resetPassword({ code, password: newPass })
  }

  const handleSubmitErrors = () => {
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
  }

  useEffect(() => {
    if (isSuccess && data && originalArgs) {
      authLogin({ email: data.email, password: originalArgs.password })
    }
  }, [isSuccess, data, originalArgs, authLogin])

  useEffect(() => {
    if (isLoginSuccess && loginData) login(loginData)
  }, [isLoginSuccess, loginData, login])

  return (
    <Form.Container onSubmit={handleSubmit(handleSubmitReset)}>
      <Form.InputContainer>
        <Form.Label>New password</Form.Label>
        <OutlineInput
          type='password'
          placeholder='Enter new password.'
          register={regNewPass}
        />
      </Form.InputContainer>
      <Form.InputContainer>
        <Form.Label>Repeat new password</Form.Label>
        <OutlineInput
          type='password'
          placeholder='Repeat password.'
          register={regNewPassRepeat}
        />
      </Form.InputContainer>
      {handleSubmitErrors()}
      <OutlineButton
        title='Continue'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleSubmit(handleSubmitReset)}
      />
      <input type='submit' />
    </Form.Container>
  )
}

export default ResetPasswordForm
