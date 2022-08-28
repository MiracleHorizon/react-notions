import React, { FC, useRef } from 'react'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import PropTypes from './DefaultAlert.types'
import * as Alert from './DefaultAlert.styles'

const DefaultAlert: FC<PropTypes> = ({
  children,
  title,
  closeAction,
  textCenter,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, closeAction)

  useEventListener('keydown', e => {
    if (e.code === 'Enter') closeAction()
  })

  return (
    <ModalWrapper inset>
      <Alert.Container ref={ref}>
        <Alert.TitleContainer textCenter={textCenter}>
          <Alert.Title>{title}</Alert.Title>
        </Alert.TitleContainer>
        <Alert.Buttons>{children}</Alert.Buttons>
      </Alert.Container>
    </ModalWrapper>
  )
}

export default DefaultAlert
