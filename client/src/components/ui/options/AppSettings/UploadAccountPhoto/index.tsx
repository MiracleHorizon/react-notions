import React from 'react'
import { useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/ui/EmptyUserAvatar - Checked'
import { selectUser } from 'store/slices/auth/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Option from './UploadAccountPhotoOption.styles'

const UploadAccountPhotoOption = () => {
  const user = useSelector(selectUser)

  const handleUploadAccountPhoto = () => {
    console.log(123)
  }

  return (
    <Option.Wrapper>
      <Option.Container>
        <Option.Title>Photo</Option.Title>
        {user.avatarUrl ? (
          <Option.Avatar src={handleImageUrl(user.avatarUrl)} alt='avatar' />
        ) : (
          <EmptyUserAvatar firstChar={user.fullName ? user.fullName[0] : 'A'} />
        )}
      </Option.Container>
    </Option.Wrapper>
  )
}

export default UploadAccountPhotoOption
