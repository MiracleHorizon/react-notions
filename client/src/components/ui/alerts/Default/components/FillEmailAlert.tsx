import React from 'react'
import { useSelector } from 'react-redux'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { selectUser } from 'store/slices/user/auth.selectors'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const FillEmailAlert = () => {
  const { hideFillEmailAlert } = useActions()
  const { email } = useSelector(selectUser)

  const handleHideAlert = () => hideFillEmailAlert()

  return (
    <DefaultAlert
      title={`Please type "${email}" to continue`}
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

export default FillEmailAlert
