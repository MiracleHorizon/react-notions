import React from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton/outlineButton.models'

const AlreadyExistAlert = () => {
  const { hideAlreadyExistAlert } = useActions()

  const handleHideAlert = () => hideAlreadyExistAlert()

  return (
    <DefaultAlert
      textAlignCenter
      title='Group already exists.'
      closeAction={hideAlreadyExistAlert}
    >
      <OutlineButton
        title='Okay'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleHideAlert}
      />
    </DefaultAlert>
  )
}

export default AlreadyExistAlert
