import React, { FC, useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'

import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import AccountExistenceRouting from 'components/ui/AccountExistenceRouting'
import authFormValidator from 'utils/formValidation/authFormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import PropTypes, { SubmitAuthParams } from './AuthForm.types'
import * as Form from 'assets/styles/AuthForm.styles'

const AuthForm: FC<PropTypes> = ({ onSubmit }) => {
  const { pathname } = useLocation()
  const validationOptions = useMemo(() => {
    return authFormValidator(pathname)
  }, [pathname])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    ...DEFAULT_FORM_OPTIONS,
  })

  const regEmail = register('email', validationOptions.email)
  const regPassword = register('password', validationOptions.password)

  const handleSubmitForm = (params: SubmitAuthParams) => onSubmit(params)

  const handleSubmitErrors = () => {
    if (errors.email?.message) {
      return <DefaultRedError title={errors.email.message} />
    }

    if (errors.password?.message) {
      return <DefaultRedError title={errors.password.message} />
    }
  }

  return (
    <Form.Container onSubmit={handleSubmit(handleSubmitForm)}>
      <Form.InputContainer>
        <Form.Label>Email</Form.Label>
        <OutlineInput
          type='email'
          placeholder='Enter your email.'
          register={regEmail}
        />
      </Form.InputContainer>
      <Form.InputContainer>
        <Form.Label>Password</Form.Label>
        <OutlineInput
          type='password'
          placeholder={
            pathname === '/login'
              ? 'Enter your password.'
              : 'Come up with some password.'
          }
          register={regPassword}
        />
      </Form.InputContainer>
      {handleSubmitErrors()}
      <OutlineButton
        title='Continue'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleSubmit(handleSubmitForm)}
      />
      <AccountExistenceRouting />
      <input type='submit' />
    </Form.Container>
  )
}

export default AuthForm
