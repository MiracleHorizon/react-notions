import React from 'react'

import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import Container from './ChangePasswordButton.styles'

const ChangePasswordButton = () => {
  const { openChangePasswordModal } = useActions()

  const handleOpenChangePasswordModal = () => openChangePasswordModal()

  return (
    <Container>
      <OutlineButton
        title='Change password'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleOpenChangePasswordModal}
      />
    </Container>
  )
}

export default ChangePasswordButton
