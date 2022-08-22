import React, { FC, memo } from 'react'

import PageItem from './Item'
import IPage from 'models/page/IPage'
import * as List from './PagesList.styles'

const PagesList: FC<{ pages: IPage[]; pLeft: number }> = memo(
  ({ pages, pLeft }) => (
    <List.Container>
      {pages.map(page => (
        <PageItem key={page._id} page={page} pLeft={pLeft} />
      ))}
    </List.Container>
  )
)

export default PagesList
