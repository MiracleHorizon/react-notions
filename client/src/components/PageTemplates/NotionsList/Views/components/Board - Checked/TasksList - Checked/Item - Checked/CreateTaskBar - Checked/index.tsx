import React, { FC } from 'react'

import CreateTaskBar from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/CreateTaskBar - Checked'
import { IVoidClick } from 'types'
import Container from './BoardCreateTaskBar.styles'

const BoardCreateTaskBar: FC<IVoidClick> = ({ onClickAction }) => (
  <Container onClick={onClickAction}>
    <CreateTaskBar />
  </Container>
)

export default BoardCreateTaskBar
