import React, { FC, memo } from 'react'

import FilledButton from 'components/ui/buttons/Filled'
import OutlineInput from 'components/ui/inputs/Outline'
import FileUploader from 'components/ui/FileUploader'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Category from './CustomIcon.styles'

const CustomIcon: FC<{ _id: string }> = memo(({ _id }) => {
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closeChangeIconModal } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const handleSubmitLink = () => {
    updatePage({ _id, body: { iconUrl: value } })
    closeChangeIconModal()
  }

  const handleSubmitUpload = () => {
    // updatePage({_id, {iconUrl: ...}})
    closeChangeIconModal()
  }

  return (
    <Category.Container>
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
          <FileUploader accept='image' action={handleSubmitUpload} />
        </Category.UploaderContainer>
      </Category.UploaderWrapper>
      <p>Recommended size is 280 × 280 pixels.</p>
      <p>The maximum size per file is 2 MB.</p>
    </Category.Container>
  )
})

export default CustomIcon
