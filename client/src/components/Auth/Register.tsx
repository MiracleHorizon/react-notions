import React, { lazy, Suspense } from 'react'

import AuthLayout from 'layouts/Auth'
import AuthFormLoader from 'components/ui/loaders/AuthFormLoader'
import { useRegisterMutation } from 'store/slices/auth/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const AuthForm = lazy(() => import('./Form'))

const Register = () => {
  const [register] = useRegisterMutation()

  const handleSubmitRegister = (values: SubmitAuthParams) => register(values)

  return (
    <AuthLayout>
      <Suspense fallback={<AuthFormLoader />}>
        <AuthForm onSubmit={handleSubmitRegister} />
      </Suspense>
    </AuthLayout>
  )
}

export default Register
