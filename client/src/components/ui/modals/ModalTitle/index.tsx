import React, { FC } from 'react'
import Title from './ModalTitle.styles'

const ModalTitle: FC<{ title: string }> = ({ title }) => {
  // console.log('render')

  return <Title>{title}</Title>
}

export default ModalTitle
