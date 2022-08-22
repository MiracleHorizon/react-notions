import React from 'react'
import { useSelector } from 'react-redux'

import useActions from '../hooks/useActions'
import { useLogoutMutation } from 'services/auth.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import MainLayout from '../layouts/Main'

const WorkspacePage = () => {
  const { closeAppSettingsModal, logout } = useActions()
  const [authLogout] = useLogoutMutation()
  const user = useSelector(selectUser)

  const handleLogout = () => {
    authLogout()
    logout()
    closeAppSettingsModal()
  }

  return (
    <MainLayout>
      <div>
        <span>{user.email}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </MainLayout>
  )
}

export default WorkspacePage
