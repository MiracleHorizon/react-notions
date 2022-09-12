import React from 'react'

import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import * as Option from './DeleteAccountOption.styles'

const DeleteAccountOption = () => {
  const { showDeleteAccountAlert } = useActions()

  const handleOpenDeleteAccountAlert = () => showDeleteAccountAlert()

  return (
    <Option.Container>
      <Option.Title>Danger zone</Option.Title>
      <OutlineButton
        title='Delete my account'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleOpenDeleteAccountAlert}
      />
    </Option.Container>
  )
}

export default DeleteAccountOption
