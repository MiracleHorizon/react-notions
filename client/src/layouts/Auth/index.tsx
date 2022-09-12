import React, { FC } from 'react'
import Favicon from 'react-favicon'

import { NOTION_LOGO_URL } from 'utils/constants/app'
import Layout from './AuthLayout.styles'

const AuthLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <Layout>
    <Favicon url={NOTION_LOGO_URL} />
    {children}
  </Layout>
)

export default AuthLayout
