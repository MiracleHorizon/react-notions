import React from 'react'

import AuthLayout from 'layouts/Auth'
import AuthForm from './Form'
import { useLoginMutation } from 'store/slices/auth/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const Login = () => {
  const [login] = useLoginMutation()

  const handleSubmitLogin = (values: SubmitAuthParams) => login(values)

  return (
    <AuthLayout>
      <AuthForm onSubmit={handleSubmitLogin} />
    </AuthLayout>
  )
}

export default Login
