import React from 'react'
import { useNavigate } from 'react-router'

import Divider from 'components/ui/Divider'
import OutlineButton from 'components/ui/buttons/Outline'
import useActions from 'hooks/useActions'
import { useLogoutMutation } from 'services/auth.api'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import * as Option from './LogoutOption.styles'

const LogoutOption = () => {
  const { closeAppSettingsModal, logout } = useActions()
  const [authLogout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = () => {
    closeAppSettingsModal()
    authLogout()
    logout()
    navigate('/login')
  }

  return (
    <>
      <Divider />
      <Option.Wrapper>
        <Option.Container>
          <Option.Title>Log out of all devices</Option.Title>
          <Option.Description>
            You will be logged out of all other active sessions besides this one
            and will have to log back in.
          </Option.Description>
        </Option.Container>
        <OutlineButton
          title='Logout'
          color={OutlineButtonColorsEnum.RED}
          onClickAction={handleLogout}
        />
      </Option.Wrapper>
      <Divider />
    </>
  )
}

export default LogoutOption
