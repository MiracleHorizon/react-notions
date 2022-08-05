import React from 'react'
import Loadable from 'react-loadable'

const RegisterForm = Loadable({
  loader: () => import('components/Auth/Register'),
  loading: () => <>Загрузка регистрации</>,
})

const RegisterPage = () => <RegisterForm />

export default RegisterPage
