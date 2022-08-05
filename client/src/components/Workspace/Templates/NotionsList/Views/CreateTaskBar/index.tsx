import React from 'react'
import { PlusSvg } from 'components/ui/svg'
import Container from './CreateTaskBar.styles'

const CreateTaskBar = () => (
  <Container>
    <PlusSvg />
    <span>New</span>
  </Container>
)

export default CreateTaskBar
