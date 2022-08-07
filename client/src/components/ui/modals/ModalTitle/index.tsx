import React, { FC } from 'react'
import Title from './ModalTitle.styles'

const ModalTitle: FC<{ title: string; upCase?: boolean }> = ({
  title,
  upCase,
}) => {
  // console.log('render')

  return <Title upCase={upCase}>{title}</Title>
}

export default ModalTitle
