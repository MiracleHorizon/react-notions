import React, { memo } from 'react'
import CommentsFilter from '../CommentsFilter'
import * as Header from './RightSidebarHeader.styles'

const RightSidebarHeader = memo(() => (
  <Header.Wrapper>
    <Header.Container>
      <Header.Title>Comments</Header.Title>
      <CommentsFilter />
    </Header.Container>
  </Header.Wrapper>
))

export default RightSidebarHeader
