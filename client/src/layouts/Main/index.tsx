import React, { FC } from 'react'

import AppHotkeysWrapper from 'components/AppHotkeysWrapper'
import LayoutHeader from 'components/Header'
import Sidebar from 'components/Sidebar'
import WorkspaceScrollContext, { defaultValue } from 'context/WorkspaceScroll'
import * as Layout from './MainLayout.styles'

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <AppHotkeysWrapper>
    <Layout.Wrapper>
      <Layout.Container>
        <Sidebar />
        <Layout.Main>
          <WorkspaceScrollContext.Provider value={defaultValue}>
            <LayoutHeader />
            {children}
          </WorkspaceScrollContext.Provider>
        </Layout.Main>
      </Layout.Container>
    </Layout.Wrapper>
  </AppHotkeysWrapper>
)

export default MainLayout
