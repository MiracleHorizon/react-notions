import React from 'react'

import {
  UploadAccountPhotoOption,
  ChangeEmailOption,
  ChangeNameOption,
  DeleteAccountOption,
  LogoutOption,
  ChangePasswordOption,
} from 'components/ui/options/AppSettings'
import Divider from 'components/ui/Divider'
import * as Settings from './AccountSettings.styles'

const AccountSettings = () => (
  <Settings.Wrapper>
    <Settings.Container>
      <Settings.Title>Account</Settings.Title>
      <Divider />
      <UploadAccountPhotoOption />
      <Divider />
      <Settings.PersonalInfoContainer>
        <Settings.PersonalInfoTitle>Personal info</Settings.PersonalInfoTitle>
        <ChangeEmailOption />
        <ChangeNameOption />
      </Settings.PersonalInfoContainer>
      <ChangePasswordOption />
      <LogoutOption />
      <DeleteAccountOption />
    </Settings.Container>
  </Settings.Wrapper>
)

export default AccountSettings
