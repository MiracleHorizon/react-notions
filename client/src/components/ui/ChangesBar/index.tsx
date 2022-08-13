import React, { FC } from 'react'
import PropTypes from './ChangesBar.types'
import Container from './ChangesBar.styles'

//TODO Проверить перерисовки.

const ChangesBar: FC<PropTypes> = ({ createdAt, updatedAt }) => (
  <Container>
    <p>Created at: {createdAt}</p>
    <p>Last update: {updatedAt}</p>
  </Container>
)

export default ChangesBar
