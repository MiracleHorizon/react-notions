import React from 'react'

import AuthLayout from 'layouts/Auth'
import AuthForm from './Form'
import { useRegisterMutation } from 'store/slices/auth/auth.api'
import { SubmitAuthParams } from './Form/AuthForm.types'

const Register = () => {
  const [register] = useRegisterMutation()

  const handleSubmitRegister = (values: SubmitAuthParams) => register(values)

  return (
    <AuthLayout>
      <AuthForm onSubmit={handleSubmitRegister} />
    </AuthLayout>
  )
}

export default Register
