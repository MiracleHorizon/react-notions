import React from 'react'
import { useLocation } from 'react-router'

import { NotionSvg } from 'components/ui/svg'
import handleAuthPathname from 'utils/helpers/handleAuthPathname'
import * as Title from './AppTitle.styles'

const AppTitle = () => (
  <Title.Wrapper>
    <NotionSvg />
    <Title.Text>Welcome to React Notion</Title.Text>
    <Title.Description>
      {handleAuthPathname(useLocation().pathname)}
    </Title.Description>
  </Title.Wrapper>
)

export default AppTitle
