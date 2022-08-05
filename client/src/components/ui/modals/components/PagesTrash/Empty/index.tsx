import React, { memo } from 'react'
import * as Empty from './EmptyPagesTrash.styles'

const EmptyPagesTrash = memo(() => (
  <Empty.Container>
    <Empty.Title>No matches found.</Empty.Title>
  </Empty.Container>
))

export default EmptyPagesTrash
