import React, { FC } from 'react'
import PropTypes from './ChangesBar.types'
import Container from './ChangesBar.styles'

//TODO Проверить перерисовки.

const ChangesBar: FC<PropTypes> = ({ author, updatedAt }) => (
  <Container>
    <p>Last edited by {author}</p>
    <p>{updatedAt}</p>
  </Container>
)

export default ChangesBar

