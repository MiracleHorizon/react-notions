import React from 'react'
import Loadable from 'react-loadable'

const LoginForm = Loadable({
  loader: () => import('components/Auth/Login'),
  loading: () => <>Загрузка логина</>,
})

const LoginPage = () => <LoginForm />

export default LoginPage
