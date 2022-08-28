import React from 'react'
import { useSelector } from 'react-redux'

import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { useDeleteUserMutation, useLogoutMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import * as Option from './DeleteAccountOption.styles'

const DeleteAccountOption = () => {
  const { closeAppSettingsModal, logout } = useActions()
  const [deleteUser] = useDeleteUserMutation()
  const [authLogout] = useLogoutMutation()
  const user = useSelector(selectUser)

  const handleDeleteAccount = () => {
    // deleteUser(user._id)
    // authLogout()
    // logout()
    // closeAppSettingsModal()
  }

  return (
    <Option.Container>
      <Option.Title>Danger zone</Option.Title>
      <OutlineButton
        title='Delete my account'
        color={OutlineButtonColorsEnum.RED}
        onClickAction={handleDeleteAccount}
      />
    </Option.Container>
  )
}

export default DeleteAccountOption
