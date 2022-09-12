import React, { useEffect } from 'react'

import AuthLayout from 'layouts/Auth'
import Auth from './index'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import useActions from 'hooks/useActions'
import { useLoginMutation } from 'services/auth.api'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import { SubmitAuthParams } from './AuthForm/AuthForm.types'

const Login = () => {
  const { login } = useActions()
  const [authLogin, { data, isSuccess, error }] = useLoginMutation()

  const handleSubmitLogin = (params: SubmitAuthParams) => authLogin(params)

  useEffect(() => {
    if (isSuccess && data) login(data)
  }, [isSuccess, data, login])

  return (
    <AuthLayout>
      <>
        <Auth onSubmit={handleSubmitLogin} />
        {error && 'data' in error && (
          <DefaultRedError title={(error.data as IErrorResponseData).message} />
        )}
      </>
    </AuthLayout>
  )
}

export default Login
