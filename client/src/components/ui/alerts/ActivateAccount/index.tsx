import React from 'react'
import { useNavigate } from 'react-router'

import AuthLayout from 'layouts/Auth'
import AppTitle from 'components/Auth/AppTitle'
import useActions from 'hooks/useActions'
import { useLogoutMutation } from 'services/auth.api'
import * as Alert from './ActivateAccountAlert.styles'

const ActivateAccountAlert = () => {
  const { logout } = useActions()
  const [authLogout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login')
    authLogout()
    logout()
  }

  return (
    <AuthLayout>
      <Alert.Wrapper>
        <AppTitle />
        <Alert.Container>
          <Alert.Title>Please check your email.</Alert.Title>
          <Alert.LoginLink onClick={handleNavigateToLogin}>
            Sign in to another account.
          </Alert.LoginLink>
        </Alert.Container>
      </Alert.Wrapper>
    </AuthLayout>
  )
}

export default ActivateAccountAlert
