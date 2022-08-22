import React from 'react'

import DefaultAlert from 'components/ui/alerts - Checked/Default/index'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const AlreadyExistAlert = () => {
  const { hideAlreadyExistAlert } = useActions()

  const handleHideAlert = () => hideAlreadyExistAlert()

  return (
    <DefaultAlert
      textCenter
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
