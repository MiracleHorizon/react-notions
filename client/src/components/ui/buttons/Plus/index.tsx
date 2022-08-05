import React, { FC } from 'react'
import { PlusSvg } from 'components/ui/svg'
import Container from './PlusButton.styles'

const PlusButton: FC<{ onClickAction?: () => void }> = ({ onClickAction }) => (
  <Container role='button' data-btn='plus' onClick={onClickAction}>
    <PlusSvg />
  </Container>
)

export default PlusButton
