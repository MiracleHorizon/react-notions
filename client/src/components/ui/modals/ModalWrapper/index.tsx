import React, { FC } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from './ModalWrapper.types'
import { Wrapper, Inset } from './ModalWrapper.styles'

const ModalWrapper: FC<PropTypes> = ({ children, inset }) =>
  createPortal(
    <Wrapper>
      {children}
      {inset && <Inset />}
    </Wrapper>,
    document.getElementById('root') as HTMLElement
  )

export default ModalWrapper
