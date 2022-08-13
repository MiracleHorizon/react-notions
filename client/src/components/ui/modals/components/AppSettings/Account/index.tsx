import React, { useContext } from 'react'

import useActions from 'hooks/useActions'
import { AuthContext } from 'context/Auth'

const AccountSettings = () => {
  const authCtx = useContext(AuthContext)
  const { closeAppSettingsModal } = useActions()

  const handleSignOut = () => {
    authCtx.fbAuth.signOut().then(() => closeAppSettingsModal())
  }

  return (
    <div>
      <div>
        <span>Смена имени</span>
      </div>
      <div>
        <span>Смена аватарки</span>
      </div>
      <div>
        <span>Смена пароль</span>
      </div>
      <div>
        <span>Смена почты</span>
      </div>
      <div onClick={handleSignOut}>
        <span>LogOut</span>
      </div>
    </div>
  )
}

export default AccountSettings
