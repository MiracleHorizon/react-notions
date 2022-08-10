import React from 'react'

import ClassicAlert from 'components/ui/alerts/Classic'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton/outlineButton.models'

const AlreadyExistAlert = () => {
  const { hideAlreadyExistAlert } = useActions()

  const handleHideAlert = () => hideAlreadyExistAlert()

  return (
    <ClassicAlert
      textAlignCenter
      title='Group already exists.'
      closeAction={hideAlreadyExistAlert}
    >
      <OutlineButton
        title='Okay'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleHideAlert}
      />
    </ClassicAlert>
  )
}

export default AlreadyExistAlert
