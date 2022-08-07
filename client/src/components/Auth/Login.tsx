import React, { lazy, Suspense } from 'react'

import AuthLayout from 'layouts/Auth'
import AuthFormLoader from 'components/ui/loaders/AuthFormLoader'
import { useLoginMutation } from 'store/slices/auth/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const AuthForm = lazy(() => import('./Form'))

const Login = () => {
  const [login] = useLoginMutation()

  const handleSubmitLogin = (values: SubmitAuthParams) => login(values)

  return (
    <AuthLayout>
      <Suspense fallback={<AuthFormLoader />}>
        <AuthForm onSubmit={handleSubmitLogin} />
      </Suspense>
    </AuthLayout>
  )
}

export default Login
