import React, { FC } from 'react'

import CreateTaskBar from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/CreateTaskBar - Checked'
import { IVoidClick } from 'types'
import Container from '../Item - Checked/CreateTaskBar - Checked/BoardCreateTaskBar.styles'

const CreateNoStatusTaskBar: FC<IVoidClick> = ({ onClickAction }) => (
  <Container onClick={onClickAction}>
    <CreateTaskBar />
  </Container>
)

export default CreateNoStatusTaskBar
