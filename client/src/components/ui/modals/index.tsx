import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import PropTypes from './Modal.types'
import { Wrapper, Inset } from './Modal.styles'

const Modal: FC<PropTypes> = ({ children, inset }) =>
  createPortal(
    <Wrapper>
      {children}
      {inset && <Inset />}
    </Wrapper>,
    document.getElementById('root') as HTMLElement
  )

export default Modal
