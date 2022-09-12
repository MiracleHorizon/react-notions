import React from 'react'

import useActions from 'hooks/useActions'
import * as Button from './ChangeEmailButton.styles'

const ChangeEmailButton = () => {
  const { openChangeEmailModal } = useActions()

  const handleOpenChangeEmailModal = () => openChangeEmailModal()

  return (
    <Button.Container onClick={handleOpenChangeEmailModal}>
      <Button.Title>Change email</Button.Title>
    </Button.Container>
  )
}

export default ChangeEmailButton
