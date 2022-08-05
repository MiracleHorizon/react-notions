import React, { FC } from 'react'

import FileUploader from 'components/ui/FileUploader'
import * as Uploader from './CoverUploader.styles'

const CoverUploader: FC<{ _id: string }> = ({ _id }) => {
  const handleUploadCover = () => {
    // updatePage({_id, body: {coverUrl: ...}})
  }

  // Сделать ограничение на загрузку файла не более двух 2мб.

  return (
    <Uploader.Wrapper>
      <Uploader.Button>
        <FileUploader accept='image' action={handleUploadCover} />
        Upload file
      </Uploader.Button>
      <p>Images wider than 1500 pixels work best.</p>
      <p>The maximum size per file is 2 MB.</p>
    </Uploader.Wrapper>
  )
}

export default CoverUploader
