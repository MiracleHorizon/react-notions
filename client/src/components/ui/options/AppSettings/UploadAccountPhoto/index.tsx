import React from 'react'
import { useSelector } from 'react-redux'

import AvatarFileUploaderButton from 'components/ui/buttons/AvatarFileUploader'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Option from './UploadAccountPhotoOption.styles'

const UploadAccountPhotoOption = () => {
  const user = useSelector(selectUser)

  return (
    <Option.Wrapper>
      <Option.Container>
        <Option.Title>Photo</Option.Title>
        {user.avatarUrl ? (
          <Option.Avatar src={handleImageUrl(user.avatarUrl)} alt='avatar' />
        ) : (
          <Option.EmptyAvatar>
            <Option.EmptyAvatarTitle>
              {user.fullName ? user.fullName[0] : user.email[0]}
            </Option.EmptyAvatarTitle>
          </Option.EmptyAvatar>
        )}
        <AvatarFileUploaderButton />
      </Option.Container>
    </Option.Wrapper>
  )
}

export default UploadAccountPhotoOption
