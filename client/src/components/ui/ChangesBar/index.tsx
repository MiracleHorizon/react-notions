import React, { FC, memo } from 'react'

import DateFns from 'libs/date-fns'
import Container from './ChangesBar.styles'

const ChangesBar: FC<{
  createdAt: string
  updatedAt: string
}> = memo(({ createdAt, updatedAt }) => (
  <Container>
    <p>Created {DateFns.setDateByFormatRelative(createdAt)}</p>
    <p>Updated {DateFns.setDateByFormatRelative(updatedAt)}</p>
  </Container>
))

export default ChangesBar
