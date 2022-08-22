import React, { lazy, Suspense, useEffect } from 'react'

import AuthLayout from 'layouts/Auth'
import AuthFormLoader from 'components/ui/loaders/AuthForm'
import useActions from 'hooks/useActions'
import { useLoginMutation } from 'services/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const AuthForm = lazy(() => import('./Form'))

const Login = () => {
  const { login } = useActions()
  const [authLogin, { data, isLoading, isSuccess, isError }] =
    useLoginMutation()

  const handleSubmitLogin = (params: SubmitAuthParams) => {
    authLogin(params)
  }

  useEffect(() => {
    if (isSuccess && data) login(data)
  }, [isSuccess, data, login])

  return (
    <AuthLayout>
      <Suspense fallback={<AuthFormLoader />}>
        <AuthForm onSubmit={handleSubmitLogin} />
        {isError && <span>Ошибка авторизации</span>}
      </Suspense>
    </AuthLayout>
  )
}

export default Login
