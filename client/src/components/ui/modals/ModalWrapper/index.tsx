import React from 'react'
import { createPortal } from 'react-dom'
import { Wrapper, Inset } from './ModalWrapper.styles'

const ModalWrapper = ({
  children,
  inset,
}: {
  children: JSX.Element
  inset?: boolean
}) =>
  createPortal(
    <Wrapper>
      {children}
      {inset && <Inset />}
    </Wrapper>,
    document.getElementById('modal') as HTMLElement
  )

export default ModalWrapper
