import React, { FC } from 'react'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar'
import CloseSidebarButton from 'components/ui/buttons/ToggleSidebar/Close'
import useAuth from 'hooks/useAuth'
import * as Panel from './UserPanel.styles'

const UserPanel: FC<{ isHovering: boolean }> = ({ isHovering }) => {
  const { user } = useAuth()

  return (
    <Panel.Wrapper>
      {user && (
        <>
          {user.photoURL ? (
            <Panel.Avatar src={user.photoURL} />
          ) : (
            <EmptyUserAvatar firstChar={user?.displayName![0]} />
          )}
          <Panel.Title>{user.displayName}'s Notion</Panel.Title>
          <CloseSidebarButton isSidebarHovering={isHovering} />
        </>
      )}
    </Panel.Wrapper>
  )
}

export default UserPanel
