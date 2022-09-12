import React, { useEffect } from 'react'

import AuthLayout from 'layouts/Auth'
import Auth from './index'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import useActions from 'hooks/useActions'
import { useRegisterMutation } from 'services/auth.api'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import { SubmitAuthParams } from './AuthForm/AuthForm.types'

const Register = () => {
  const { register } = useActions()
  const [authRegister, { data, isLoading, isSuccess, error }] = useRegisterMutation()

  const handleSubmitRegister = (values: SubmitAuthParams) => authRegister(values)

  useEffect(() => {
    if (isSuccess && data) register(data)
  }, [isSuccess, data, register])

  return (
    <AuthLayout>
      <>
        <Auth onSubmit={handleSubmitRegister} />
        {error && 'data' in error && (
          <DefaultRedError title={(error.data as IErrorResponseData).message} />
        )}
      </>
    </AuthLayout>
  )
}

export default Register
