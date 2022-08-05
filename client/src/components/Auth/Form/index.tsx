import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'

import FirebaseAuth from './FirebaseAuth'
import Divider from 'components/ui/Divider'
import OutlineInput from 'components/ui/inputs/Outline'
import OutlineButton from 'components/ui/buttons/Outline'
import PropTypes from './AuthForm.types'
import * as Auth from './AuthForm.styles'

const AuthForm: FC<PropTypes> = ({ onSubmit }) => {
  const { pathname } = useLocation()

  const { register, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  })

  const regEmail = register('email', {
    required: 'Please, enter your email.',
  })

  const regPassword = register('password', {
    required: `${
      pathname === '/login'
        ? 'Please, enter your password.'
        : 'Come up with some password.'
    }`,
  })

  return (
    <Auth.Wrapper>
      <FirebaseAuth />
      <Divider />
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Auth.InputContainer>
          <Auth.Label>Email</Auth.Label>
          <OutlineInput
            inputMode='email'
            placeholder='Enter your email.'
            register={regEmail}
          />
        </Auth.InputContainer>
        <Auth.InputContainer>
          <Auth.Label>Password</Auth.Label>
          <OutlineInput
            inputMode='text'
            placeholder={
              pathname === '/login'
                ? 'Enter your password.'
                : 'Come up with some password.'
            }
            register={regPassword}
          />
        </Auth.InputContainer>
        <OutlineButton
          title='Continue'
          color='red'
          onClickAction={handleSubmit(onSubmit)}
        />
      </Auth.Form>
    </Auth.Wrapper>
  )
}

export default AuthForm
