import React, { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'

import Divider from 'components/ui/Divider - Checked'
import OutlineInput from 'components/ui/inputs - Checked/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import authFormValidator from 'utils/authFormValidator'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import PropTypes, { SubmitAuthParams } from './AuthForm.types'
import * as Auth from './AuthForm.styles'

const AuthForm: FC<PropTypes> = ({ onSubmit }) => {
  const { pathname } = useLocation()
  const validationOptions = useMemo(() => authFormValidator(pathname), [pathname])

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  })

  const regEmail = register('email', validationOptions.email)
  const regPassword = register('password', validationOptions.password)

  const handleSubmitForm = (params: SubmitAuthParams) => {
    onSubmit(params)
    reset()
  }

  return (
    <Auth.Wrapper>
      <Divider />
      <Auth.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Auth.InputContainer>
          <Auth.Label>
            Email
            <OutlineInput
              inputMode='email'
              placeholder='Enter your email.'
              register={regEmail}
            />
          </Auth.Label>
          <Auth.ErrorTitle isActive={Boolean(errors.email)}>
            {errors.email?.message}
          </Auth.ErrorTitle>
        </Auth.InputContainer>
        <Auth.InputContainer>
          <Auth.Label>
            Password
            <OutlineInput
              inputMode='text'
              placeholder={
                pathname === '/login'
                  ? 'Enter your password.'
                  : 'Come up with some password.'
              }
              register={regPassword}
            />
          </Auth.Label>
          <Auth.ErrorTitle isActive={Boolean(errors.password)}>
            {errors.password?.message}
          </Auth.ErrorTitle>
        </Auth.InputContainer>
        <OutlineButton
          title='Continue'
          disabled={!isValid}
          color={OutlineButtonColorsEnum.RED}
          onClickAction={handleSubmit(onSubmit)}
        />
      </Auth.Form>
    </Auth.Wrapper>
  )
}

export default AuthForm
