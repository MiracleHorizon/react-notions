import React, { FC } from 'react'
import Layout from './AuthLayout.styles'

const AuthLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <Layout>{children}</Layout>
)

export default AuthLayout
