import React, { ChangeEvent, FC } from 'react'
import PropTypes from './FileUploader.types'
import Container from './FileUploader.styles'

const FileUploader: FC<PropTypes> = ({ accept, setFile }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files)

  return (
    <Container>
      <input type='file' accept={`${accept}/*`} onChange={handleChange} />
    </Container>
  )
}

export default FileUploader
