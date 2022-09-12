import React from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const ChangePasswordAlert = () => {
  const { hideChangePasswordAlert } = useActions()

  const handleHideAlert = () => hideChangePasswordAlert()

  return (
    <DefaultAlert
      textCenter
      title='Your new password has been saved.'
      closeAction={handleHideAlert}
    >
      <OutlineButton
        title='Okay'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleHideAlert}
      />
    </DefaultAlert>
  )
}

export default ChangePasswordAlert
