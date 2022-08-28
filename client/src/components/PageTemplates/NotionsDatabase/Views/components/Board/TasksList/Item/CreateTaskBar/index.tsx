import React, { FC } from 'react'

import CreateTaskBar from 'components/PageTemplates/NotionsDatabase/Views/CreateTaskBar'
import DndHighlight from 'components/ui/DndHighlight'
import { IVoidClick } from 'types'
import Container from './BoardCreateTaskBar.styles'
import { CSSTransition } from 'react-transition-group'

const BoardCreateTaskBar: FC<{ dragOver: boolean } & IVoidClick> = ({
  dragOver,
  onClickAction,
}) => (
  <Container onClick={onClickAction}>
    <CSSTransition
      in={dragOver}
      timeout={300}
      classNames='default'
      unmountOnExit
    >
      <DndHighlight />
    </CSSTransition>
    <CreateTaskBar />
  </Container>
)

export default BoardCreateTaskBar
