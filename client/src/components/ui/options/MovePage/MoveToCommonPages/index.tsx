import React, { FC, memo } from 'react'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Option from './MoveToCommonPages.styles'

const user = {
  fullName: 'Денис Алексеенко',
  iconUrl: null,
}

// Проверить мемоизацию.

const MoveToCommonPagesOption: FC<{ _id: string }> = memo(({ _id }) => {
  const { closeMovePageModal } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const handleMovePageToCommonsList = () => {
    const body = { parentPageId: null, parentListId: null, favorite: false }

    updatePage({ _id, body })
    closeMovePageModal()
  }

  return (
    <Option.Container onClick={handleMovePageToCommonsList}>
      {user.iconUrl ? (
        <Option.Icon src={user.iconUrl} />
      ) : (
        <EmptyUserAvatar firstChar={user.fullName.slice(0, 1)} />
      )}
      <Option.Title>
        Move to
        <Option.Subtitle>Common pages</Option.Subtitle>
      </Option.Title>
    </Option.Container>
  )
})

export default MoveToCommonPagesOption
