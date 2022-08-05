import React, { FC } from 'react'
import Loadable from 'react-loadable'

import HotkeysWrapper from 'components/HotkeysWrapper'
import LayoutHeader from 'components/Header'
import LeftSidebar from 'components/Sidebar/Left'
import ModalsOverlay from 'components/ui/modals/ModalsOverlay'
import AlertsOverlay from 'components/ui/alerts/AlertsOverlay'
import * as Layout from './MainLayout.styles'

const RightSidebar = Loadable({
  loader: () => import('components/Sidebar/Right'),
  loading: () => <span>Загрузка правого сайдбара</span>,
})

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <HotkeysWrapper>
    <Layout.Wrapper>
      <Layout.Container>
        <LeftSidebar />
        <Layout.Main>
          <LayoutHeader />
          <Layout.Content>{children}</Layout.Content>
        </Layout.Main>
        <RightSidebar />
      </Layout.Container>
      <ModalsOverlay />
      <AlertsOverlay />
    </Layout.Wrapper>
  </HotkeysWrapper>
)

export default MainLayout
