import React, { lazy, Suspense, useEffect } from 'react'

import AuthLayout from 'layouts/Auth'
import AuthFormLoader from 'components/ui/loaders/AuthForm'
import useActions from 'hooks/useActions'
import { useRegisterMutation } from 'services/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const AuthForm = lazy(() => import('./Form'))

const Register = () => {
  const { register } = useActions()
  const [authRegister, { data, isLoading, isSuccess, isError }] =
    useRegisterMutation()

  const handleSubmitRegister = (values: SubmitAuthParams) => {
    authRegister(values)
  }

  useEffect(() => {
    if (isSuccess && data) register(data)
  }, [isSuccess, data, register])

  return (
    <AuthLayout>
      <Suspense fallback={<AuthFormLoader />}>
        <AuthForm onSubmit={handleSubmitRegister} />
        {isError && <span>Ошибка регистрации</span>}
      </Suspense>
    </AuthLayout>
  )
}

export default Register
