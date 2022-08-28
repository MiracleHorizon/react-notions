import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import OutlineButton from 'components/ui/buttons/Outline'
import FileUploader from 'components/ui/FileUploader'
import useActions from 'hooks/useActions'
import { useUploadAvatarMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import { AVATAR_UPLOAD_RESTRICTION } from 'utils/constants/app'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import Container from './AvatarFileUploaderButton.styles'

const AvatarFileUploaderButton = () => {
  const { updateUser, showOverLimitFileSizeAlert } = useActions()
  const [uploadAvatar, { data, isSuccess }] = useUploadAvatarMutation()
  const [avatarUrl, setAvatarUrl] = useState<FileList | null>(null)
  const { _id } = useSelector(selectUser)

  useEffect(() => {
    if (avatarUrl && avatarUrl[0]) {
      if (avatarUrl[0].size >= AVATAR_UPLOAD_RESTRICTION) {
        // showOverLimitFileSizeAlert({ dest: 'cover' })
      } else {
        console.log(avatarUrl[0])
        const formData = new FormData()
        formData.append('avatarUrl', avatarUrl[0])
        uploadAvatar({ _id, file: formData })
      }
    }
  }, [avatarUrl, _id, uploadAvatar])

  useEffect(() => {
    if (isSuccess && data) updateUser(data)
  }, [isSuccess, data, updateUser])

  return (
    <Container role='button' data-btn='upload-avatar'>
      <OutlineButton title='Upload photo' color={OutlineButtonColorsEnum.GRAY}>
        <FileUploader accept='image' setFile={setAvatarUrl} />
      </OutlineButton>
    </Container>
  )
}

export default AvatarFileUploaderButton
