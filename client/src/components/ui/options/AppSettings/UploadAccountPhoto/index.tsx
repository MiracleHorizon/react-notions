import React from 'react'
import { useSelector } from 'react-redux'

import AvatarFileUploaderButton from 'components/ui/buttons/AvatarFileUploader'
import { selectUser } from 'store/slices/user/auth.selectors'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Option from './UploadAccountPhotoOption.styles'

const UploadAccountPhotoOption = () => {
  const { fullName, avatarUrl } = useSelector(selectUser)

  return (
    <Option.Wrapper>
      <Option.Container>
        <Option.Title>Photo</Option.Title>
        {avatarUrl ? (
          <Option.Avatar src={handleImageUrl(avatarUrl)} alt='avatar' />
        ) : (
          <Option.EmptyAvatar>
            <Option.EmptyAvatarTitle>{fullName[0]}</Option.EmptyAvatarTitle>
          </Option.EmptyAvatar>
        )}
        <AvatarFileUploaderButton />
      </Option.Container>
    </Option.Wrapper>
  )
}

export default UploadAccountPhotoOption
