import React, { FC } from 'react'

import AppHotkeysWrapper from 'components/AppHotkeysWrapper'
import LayoutHeader from 'components/Workspace - Checked/Header - Checked'
import PagesSidebar from 'components/Sidebar - Checked'
import WorkspaceScrollContext, { defaultValue } from 'context/WorkspaceScroll'
import * as Layout from './MainLayout.styles'

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => (
  <AppHotkeysWrapper>
    <Layout.Wrapper>
      <Layout.Container>
        <PagesSidebar />
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
