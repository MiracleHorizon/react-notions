import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useEventListener } from 'usehooks-ts'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar - Checked'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import { ISelectItemParams } from 'hooks/useSelectItem'
import * as Option from './MoveToCommonPagesOption.styles'

const MoveToCommonPagesOption: FC<{ _id: string } & ISelectItemParams<string>> =
  memo(({ _id, isSelected, handleSelectItem, handleKeydownSelect }) => {
    const { closeMovePageModal } = useActions()
    const [updatePage] = useUpdatePageMutation()
    const user = useSelector(selectUser)

    const handleMovePageToCommonsList = async () => {
      const body = {
        parentPageId: null,
        parentListId: null,
        status: null,
        favorite: false,
        taskOrder: null,
        // sbOrder...
      }

      await updatePage({ _id, body })
      closeMovePageModal()
    }

    useEventListener('keydown', e => {
      handleKeydownSelect(e, handleMovePageToCommonsList)
    })

    return (
      <Option.Container
        isSelected={isSelected}
        onClick={handleMovePageToCommonsList}
        onMouseEnter={() => handleSelectItem('common')}
      >
        {user.avatarUrl ? (
          <Option.Icon src={handleImageUrl(user.avatarUrl)} alt='icon' />
        ) : (
          <EmptyUserAvatar
            firstChar={user.fullName ? user.fullName[0] : user.email[0]}
          />
        )}
        <Option.Title>
          Move to
          <Option.Subtitle>Common pages</Option.Subtitle>
        </Option.Title>
      </Option.Container>
    )
  })

export default MoveToCommonPagesOption
