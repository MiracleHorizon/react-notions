import React, { FC } from 'react'

import AppHotkeysWrapper from 'components/AppHotkeysWrapper'
import LayoutHeader from 'components/Header'
import Sidebar from 'components/Sidebar'
import ModalsOverlay from 'components/ui/modals/ModalsOverlay'
import AlertsOverlay from 'components/ui/alerts/AlertsOverlay'
import * as Layout from './MainLayout.styles'

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <AppHotkeysWrapper>
    <Layout.Wrapper>
      <Layout.Container>
        <Sidebar />
        <Layout.Main>
          <LayoutHeader />
          <Layout.Content>{children}</Layout.Content>
        </Layout.Main>
      </Layout.Container>
      <ModalsOverlay />
      <AlertsOverlay />
    </Layout.Wrapper>
  </AppHotkeysWrapper>
)

export default MainLayout
