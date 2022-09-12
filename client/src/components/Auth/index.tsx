import React, { FC, lazy, Suspense } from 'react'

import AuthFormLoader from 'components/ui/loaders/AuthForm'
import PropTypes from './AuthForm/AuthForm.types'
import Wrapper from './Auth.styles'

const AppTitle = lazy(() => import('./AppTitle'))
const AuthForm = lazy(() => import('./AuthForm'))

const Auth: FC<PropTypes> = ({ onSubmit }) => (
  <Wrapper>
    <Suspense fallback={<AuthFormLoader />}>
      <AppTitle />
      <AuthForm onSubmit={onSubmit} />
    </Suspense>
  </Wrapper>
)

export default Auth
