import React, { FC } from 'react'
import { createPortal } from 'react-dom'
import Container from './Tooltip.styles'

const Tooltip: FC<{ children: JSX.Element }> = ({ children }) =>
  createPortal(
    <Container>{children}</Container>,
    document.getElementById('root') as HTMLElement
  )

export default Tooltip
