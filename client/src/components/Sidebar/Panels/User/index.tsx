import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar'
import CloseSidebarButton from 'components/ui/buttons/ToggleSidebar/Close'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Panel from './UserPanel.styles'

const UserPanel: FC<{ isHovering: boolean }> = memo(({ isHovering }) => {
  const { avatarUrl, fullName } = useSelector(selectUser)

  return (
    <Panel.Wrapper>
      {avatarUrl ? (
        <Panel.Avatar src={handleImageUrl(avatarUrl)} alt='avatar' />
      ) : (
        <EmptyUserAvatar firstChar={fullName[0]} />
      )}
      <Panel.Title>{fullName}&apos;s Notion</Panel.Title>
      <CloseSidebarButton isSidebarHovering={isHovering} />
    </Panel.Wrapper>
  )
})

export default UserPanel
