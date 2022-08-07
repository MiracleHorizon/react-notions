import React, { FC } from 'react'
import { createPortal } from 'react-dom'
import Wrapper from './Tooltip.styles'

const TooltipWrapper: FC<{ children: JSX.Element }> = ({ children }) =>
  createPortal(
    <Wrapper>{children}</Wrapper>,
    document.getElementById('root') as HTMLElement
  )

export default TooltipWrapper
