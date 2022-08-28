import React from 'react'

import * as Button from './ChangeEmailButton.styles'

const ChangeEmailButton = () => {
  const handleOpenChangeEmailModal = () => {
    console.log()
  }

  return (
    <Button.Container onClick={handleOpenChangeEmailModal}>
      <Button.Title>Change email</Button.Title>
    </Button.Container>
  )
}

export default ChangeEmailButton
