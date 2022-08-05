import React, { FC } from 'react'
import Wrapper from './AuthLayout.styles'

const AuthLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export default AuthLayout
