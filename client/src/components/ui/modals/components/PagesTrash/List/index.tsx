import React, { FC, memo } from 'react'

import DeletedPage from '../Item'
import IPage from 'models/page/IPage'
import * as List from './DeletedPagesList.styles'

const DeletedPagesList: FC<{ pages: IPage[] }> = memo(({ pages }) => (
  <List.Wrapper>
    <List.Container>
      {pages.map(page => (
        <DeletedPage key={page._id} {...page} />
      ))}
    </List.Container>
  </List.Wrapper>
))

export default DeletedPagesList
