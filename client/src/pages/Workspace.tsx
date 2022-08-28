import React from 'react'
import { useSelector } from 'react-redux'

import MainLayout from 'layouts/Main'
import useActions from 'hooks/useActions'
import { useLogoutMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'

const WorkspacePage = () => {
  const { closeAppSettingsModal, logout } = useActions()
  const { email } = useSelector(selectUser)
  const [authLogout] = useLogoutMutation()

  const handleLogout = () => {
    authLogout()
    logout()
    closeAppSettingsModal()
  }

  return (
    <MainLayout>
      <div>
        <span>{email}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </MainLayout>
  )
}

export default WorkspacePage
