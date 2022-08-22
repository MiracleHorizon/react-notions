import React, { FC } from 'react'
import { createPortal } from 'react-dom'

const TooltipWrapper: FC<{ children: JSX.Element }> = ({ children }) =>
  createPortal(
    <>{children}</>,
    document.getElementById('root') as HTMLElement
  )

export default TooltipWrapper
