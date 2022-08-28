import React from 'react'

import OutlineButton from 'components/ui/buttons/Outline'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import Container from './ChangePasswordButton.styles'

const ChangePasswordButton = () => {
  const handleOpenChangePasswordModal = () => {
    console.log()
  }

  return (
    <Container>
      <OutlineButton
        title='Set a password'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleOpenChangePasswordModal}
      />
    </Container>
  )
}

export default ChangePasswordButton
