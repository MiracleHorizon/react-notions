import React, { FC } from 'react'
import PageItem from './Item'
import PropTypes from './PagesList.types'
import * as List from './PagesList.styles'

const PagesList: FC<PropTypes> = ({ pages, pLeft }) => (
  <List.Container>
    {pages.map(page => (
      <PageItem key={page._id} page={page} pLeft={pLeft} />
    ))}
  </List.Container>
)

export default PagesList
