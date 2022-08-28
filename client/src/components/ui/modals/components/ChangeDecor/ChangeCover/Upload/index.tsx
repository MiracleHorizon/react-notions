import React, { FC, useEffect, useState } from 'react'

import FileUploader from 'components/ui/FileUploader'
import useActions from 'hooks/useActions'
import useDndUpload from 'hooks/useDndUpload'
import { useUploadCoverMutation } from 'services/notions.api'
import { COVER_UPLOAD_RESTRICTION } from 'utils/constants/app'
import * as Uploader from './CoverUploader.styles'

const CoverUploader: FC<{ _id: string }> = ({ _id }) => {
  const { closeChangeCoverModal, showOverLimitFileSizeAlert } = useActions()
  const [uploadCover] = useUploadCoverMutation()
  const [drag, setDrag] = useState<boolean>(false)
  const [coverUrl, setCoverUrl] = useState<FileList | null>(null)

  useEffect(() => {
    if (coverUrl && coverUrl[0]) {
      if (coverUrl[0].size >= COVER_UPLOAD_RESTRICTION) {
        showOverLimitFileSizeAlert({ dest: 'cover' })
      } else {
        const formData = new FormData()
        formData.append('coverUrl', coverUrl[0])
        uploadCover({ _id, file: formData })
        closeChangeCoverModal()
      }
    }
  }, [
    _id,
    coverUrl,
    uploadCover,
    closeChangeCoverModal,
    showOverLimitFileSizeAlert,
  ])

  return (
    <Uploader.Wrapper drag={drag} {...useDndUpload(setDrag, setCoverUrl)}>
      <Uploader.Button>
        <FileUploader accept='image' setFile={setCoverUrl} />
        Upload file
      </Uploader.Button>
      <p>Images wider than 1500 pixels work best.</p>
      <p>The maximum size per file is 2 MB.</p>
    </Uploader.Wrapper>
  )
}

export default CoverUploader
