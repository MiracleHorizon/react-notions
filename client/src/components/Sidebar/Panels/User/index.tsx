import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar - Checked'
import CloseSidebarButton from 'components/ui/buttons/ToggleSidebar/Close'
import { selectUser } from 'store/slices/auth/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Panel from './UserPanel.styles'

const UserPanel: FC<{ isHovering: boolean }> = memo(({ isHovering }) => {
  const user = useSelector(selectUser)

  return (
    <Panel.Wrapper>
      {user && (
        <>
          {user.avatarUrl ? (
            <Panel.Avatar src={handleImageUrl(user.avatarUrl)} alt='avatar' />
          ) : (
            <EmptyUserAvatar
              firstChar={user.fullName ? user.fullName[0] : 'A'}
            />
          )}
          <Panel.Title>
            {user.fullName ? user.fullName : user.email.split('@')[0]}&apos;s
            Notion
          </Panel.Title>
          <CloseSidebarButton isSidebarHovering={isHovering} />
        </>
      )}
    </Panel.Wrapper>
  )
})

export default UserPanel
