import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import PropTypes from './DefaultAlert.types'
import * as Alert from './DefaultAlert.styles'

const DefaultAlert: FC<PropTypes> = ({
  children,
  title,
  closeAction,
  textAlignCenter,
}) => {
  useEventListener('keydown', e => {
    if (e.code === 'Enter') closeAction()
  })

  return (
    <ModalWrapper inset>
      <Alert.Container>
        <Alert.TitleContainer textAlignCenter={textAlignCenter}>
          <Alert.Title>{title}</Alert.Title>
        </Alert.TitleContainer>
        <Alert.Buttons>{children}</Alert.Buttons>
      </Alert.Container>
    </ModalWrapper>
  )
}

export default DefaultAlert