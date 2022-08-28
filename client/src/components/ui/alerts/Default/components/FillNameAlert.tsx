import React from 'react'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const FillNameAlert = () => {
  const { hideFillNameAlert } = useActions()

  const handleHideAlert = () => hideFillNameAlert()

  return (
    <DefaultAlert textCenter title='Please fill in name.' closeAction={handleHideAlert}>
      <OutlineButton
        title='Okay'
        color={OutlineButtonColorsEnum.GRAY}
        onClickAction={handleHideAlert}
      />
    </DefaultAlert>
  )
}

export default FillNameAlert
