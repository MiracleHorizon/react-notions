import React, { FC, memo, useCallback, useEffect, useState } from 'react'

import FilledButton from 'components/ui/buttons/Filled'
import OutlineInput from 'components/ui/inputs - Checked/Outline'
import FileUploader from 'components/ui/FileUploader - Checked'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useDndUpload from 'hooks/useDndUpload'
import {
  useUpdatePageMutation,
  useUploadIconMutation,
} from 'services/pages.api'
import { ICON_UPLOAD_RESTRICTION } from 'utils/constants/app'
import * as Category from './CustomIcon.styles'

const CustomIcon: FC<{ _id: string }> = memo(({ _id }) => {
  const { closeChangeIconModal } = useActions()
  const [updatePage] = useUpdatePageMutation()
  const [uploadIcon] = useUploadIconMutation()
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const [drag, setDrag] = useState<boolean>(false)
  const [iconUrl, setIconUrl] = useState<FileList | null>(null)
  const [isValidSize, setValidSize] = useState<boolean>(true)

  const handleSubmitLink = useCallback(() => {
    if (value !== '') {
      updatePage({ _id, body: { iconUrl: value } })
      closeChangeIconModal()
    }
  }, [_id, value, updatePage, closeChangeIconModal])

  useEffect(() => {
    if (iconUrl && iconUrl[0]) {
      if (iconUrl[0].size >= ICON_UPLOAD_RESTRICTION) {
        setValidSize(false)
      } else {
        const formData = new FormData()
        formData.append('iconUrl', iconUrl[0])

        uploadIcon({ _id, file: formData })
        closeChangeIconModal()
      }
    }
  }, [_id, iconUrl, uploadIcon, closeChangeIconModal])

  return (
    <Category.Container drag={drag} {...useDndUpload(setDrag, setIconUrl)}>
      <Category.LinkContainer>
        <OutlineInput
          inputMode='text'
          placeholder='Paste link to an image...'
          renderFocusable
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        <FilledButton title='Submit' onClickAction={handleSubmitLink} />
      </Category.LinkContainer>
      <Category.UploaderWrapper>
        <Category.UploaderContainer>
          Upload file
          <FileUploader accept='image' setFile={setIconUrl} />
        </Category.UploaderContainer>
      </Category.UploaderWrapper>
      <p>Recommended size is 280 × 280 pixels.</p>
      <p>The maximum size per file is 1 MB.</p>
      {!isValidSize && <>INVALID</>}
    </Category.Container>
  )
})

export default CustomIcon
