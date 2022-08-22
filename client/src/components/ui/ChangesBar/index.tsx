import React, { FC, memo } from 'react'
import Container from './ChangesBar.styles'

const ChangesBar: FC<{
  createdAt: string
  updatedAt: string
}> = memo(({ createdAt, updatedAt }) => (
  <Container>
    <p>Created at: {createdAt}</p>
    <p>Last update: {updatedAt}</p>
  </Container>
))

export default ChangesBar
