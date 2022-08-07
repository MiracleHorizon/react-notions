import React, { FC } from 'react'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals'
import PropTypes from './ClassicAlert.types'
import handleCloseAlert from 'utils/helpers/handleCloseAlert'
import * as Alert from './ClassicAlert.styles'

const ClassicAlert: FC<PropTypes> = ({
  children,
  title,
  closeAction,
  textAlignCenter,
}) => {
  useEventListener('keydown', e => handleCloseAlert(e, closeAction))

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

export default ClassicAlert
