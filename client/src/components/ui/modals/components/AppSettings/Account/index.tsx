import React from 'react'

import {
  UploadAccountPhotoOption,
  ChangeEmailOption,
} from 'components/ui/options/AppSettings'
import Divider from 'components/ui/Divider - Checked'
import useActions from 'hooks/useActions'
import { useLogoutMutation } from 'services/auth.api'
import * as Settings from './AccountSettings.styles'

const AccountSettings = () => {
  const { closeAppSettingsModal, logout } = useActions()
  const [authLogout] = useLogoutMutation()

  const handleSignOut = () => {
    authLogout()
    logout()
    closeAppSettingsModal()
  }

  return (
    <Settings.Wrapper>
      <Settings.Container>
        <UploadAccountPhotoOption />
        <Divider />
        <Settings.PersonalInfoContainer>
          <Settings.PersonalInfoTitle>Personal info</Settings.PersonalInfoTitle>
          <div>
            <span>Смена имени</span>
          </div>
          <ChangeEmailOption />
        </Settings.PersonalInfoContainer>
        <Divider />
        <div>
          <span>Смена пароль</span>
        </div>
        <div onClick={handleSignOut}>
          <span>LogOut</span>
        </div>
      </Settings.Container>
    </Settings.Wrapper>
  )
}

export default AccountSettings
