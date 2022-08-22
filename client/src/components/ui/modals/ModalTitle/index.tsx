import React, { FC, memo } from 'react'
import Title from './ModalTitle.styles'

const ModalTitle: FC<{ title: string; upCase?: boolean }> = memo(
  ({ title, upCase }) => (
    <Title data-el='modal-title' upCase={upCase}>
      {title}
    </Title>
  )
)

export default ModalTitle
