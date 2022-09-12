import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'

import FilledButton from 'components/ui/buttons/Filled'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { useUpdateUserMutation } from 'services/user.api'
import { AppSettingsContext } from 'context/AppSettings'
import { selectUser } from 'store/slices/user/auth.selectors'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import * as Bar from './AppSettingsActionsBar.styles'

const AppSettingsActionsBar = () => {
  const { closeAppSettingsModal, updateUser } = useActions()
  const [handleUpdateUser, { isSuccess }] = useUpdateUserMutation()
  const { fullName, handleChangeName } = useContext(AppSettingsContext)
  const user = useSelector(selectUser)

  const handleCancelChanges = () => closeAppSettingsModal()

  const handleSaveChanges = () => {
    if (fullName && fullName !== user.fullName) {
      handleUpdateUser({ _id: user._id, body: { fullName } })
    } else {
      closeAppSettingsModal()
    }
  }

  useEffect(() => {
    if (isSuccess && fullName) {
      updateUser({ fullName })
      closeAppSettingsModal()
    }
  }, [isSuccess, fullName, updateUser, handleChangeName, closeAppSettingsModal])

  return (
    <Bar.Wrapper>
      <Bar.Container>
        <FilledButton title='Update' onClickAction={handleSaveChanges} />
        <OutlineButton
          title='Cancel'
          color={OutlineButtonColorsEnum.GRAY}
          onClickAction={handleCancelChanges}
        />
      </Bar.Container>
    </Bar.Wrapper>
  )
}

export default AppSettingsActionsBar
