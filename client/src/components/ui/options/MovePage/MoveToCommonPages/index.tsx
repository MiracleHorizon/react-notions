import React, { FC, memo } from 'react'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar'
import useAuth from 'hooks/useAuth'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Option from './MoveToCommonPages.styles'

// Проверить мемоизацию.

const MoveToCommonPagesOption: FC<{ _id: string }> = memo(({ _id }) => {
  const { user } = useAuth()
  const [updatePage] = useUpdatePageMutation()
  const { closeMovePageModal } = useActions()

  const handleMovePageToCommonsList = async () => {
    const body = {
      parentPageId: null,
      parentListId: null,
      status: null,
      taskOrder: null,
      favorite: false,
      // sbOrder...
    }

    await updatePage({ _id, body })
    closeMovePageModal()
  }

  if (!user) return null

  return (
    <Option.Container onClick={handleMovePageToCommonsList}>
      {user.photoURL ? (
        <Option.Icon src={user.photoURL} />
      ) : (
        <EmptyUserAvatar firstChar={user?.displayName![0]} />
      )}
      <Option.Title>
        Move to
        <Option.Subtitle>Common pages</Option.Subtitle>
      </Option.Title>
    </Option.Container>
  )
})

export default MoveToCommonPagesOption
