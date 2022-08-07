import React, { lazy, Suspense } from 'react'

const Register = lazy(() => import('components/Auth/Register'))

const RegisterPage = () => (
  <Suspense fallback={<>Loading...</>}>
    <Register />
  </Suspense>
)

export default RegisterPage
