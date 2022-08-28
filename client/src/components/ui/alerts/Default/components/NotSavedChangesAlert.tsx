import React from 'react'
import { useSelector } from 'react-redux'

import DefaultAlert from 'components/ui/alerts/Default'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdateUserMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'

const NotSavedChangesAlert = () => {
  const { hideNotSavedChangesAlert, closeAppSettingsModal } = useActions()
  const { fullNameValue } = useTypedSelector(s => s.alerts.notSavedChanges)
  const [handleUpdateUser] = useUpdateUserMutation()
  const user = useSelector(selectUser)

  const handleHideAlert = () => hideNotSavedChangesAlert()

  const handleSaveChanges = () => {
    const body = { fullName: fullNameValue }
    handleUpdateUser({ _id: user._id, body })
    hideNotSavedChangesAlert()
    closeAppSettingsModal()
  }

  return (
    <DefaultAlert
      title='Your changes have not been saved. Save changes?'
      closeAction={handleHideAlert}
    >
      <>
        <OutlineButton
          title='Update'
          color={OutlineButtonColorsEnum.BLUE}
          onClickAction={handleSaveChanges}
        />
        <OutlineButton
          title='Cancel'
          color={OutlineButtonColorsEnum.GRAY}
          onClickAction={handleHideAlert}
        />
      </>
    </DefaultAlert>
  )
}

export default NotSavedChangesAlert
