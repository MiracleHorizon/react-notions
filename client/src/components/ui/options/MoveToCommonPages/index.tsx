import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './MoveToCommonPagesOption.types'
import * as Option from './MoveToCommonPagesOption.styles'

const MoveToCommonPagesOption: FC<PropTypes> = memo(
  ({ isSelected, handleSelectItem, handleMovePage }) => {
    const user = useSelector(selectUser)

    return (
      <Option.Container
        isSelected={isSelected}
        onClick={handleMovePage}
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
  }
)

export default MoveToCommonPagesOption
