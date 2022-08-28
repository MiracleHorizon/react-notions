import React from 'react'

import CreateTaskBar from 'components/PageTemplates/NotionsDatabase/Views/CreateTaskBar'
import { IVoidClick } from 'types'
import Container from '../Item/CreateTaskBar/BoardCreateTaskBar.styles'

const CreateNoStatusTaskBar = ({ onClickAction }: IVoidClick) => (
  <Container onClick={onClickAction}>
    <CreateTaskBar />
  </Container>
)

export default CreateNoStatusTaskBar
