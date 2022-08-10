import React, { FC } from 'react'
import Title from './ModalTitle.styles'

const ModalTitle: FC<{ title: string; upCase?: boolean }> = ({
  title,
  upCase,
}) => {
  // console.log('render')

  return (
    <Title data-el='modal-title' upCase={upCase}>
      {title}
    </Title>
  )
}

export default ModalTitle
