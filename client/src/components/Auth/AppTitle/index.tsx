import React from 'react'
import { useLocation } from 'react-router'
import { NotionSvg } from 'components/ui/svg'
import * as Title from './AppTitle.styles'

const AppTitle = () => (
  <Title.Wrapper>
    <NotionSvg />
    <Title.Text>Welcome to React Notion</Title.Text>
    <Title.Description>
      {useLocation().pathname === '/login'
        ? 'Log in to sync your content.'
        : 'Create an account to use the service.'}
    </Title.Description>
  </Title.Wrapper>
)

export default AppTitle
