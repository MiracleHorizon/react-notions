import React from 'react'

import MainLayout from 'layouts/Main'
import * as Page from './Workspace.styles'

const Workspace = () => (
  <MainLayout>
    <Page.Container>
      <Page.Title>Добро пожаловать в React-Notions!</Page.Title>
      <Page.Description>
        Технологии:
      </Page.Description>
      <Page.List>
        <li><span>React</span></li>
        <li><span>RTK</span></li>
        <li><span>TypeScript</span></li>
        <li><span>NestJS</span></li>
      </Page.List>
    </Page.Container>
  </MainLayout>
)

export default Workspace
