import React, { ChangeEvent, FC, useRef } from 'react'
import PropTypes from './FileUploader.types'
import Container from './FileUploader.styles'

const FileUploader: FC<PropTypes> = ({ accept, setFile }) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files)

  const handleClick = () => ref.current?.click()

  return (
    <Container onClick={handleClick}>
      <input
        type='file'
        ref={ref}
        accept={`${accept}/*`}
        onChange={handleChange}
      />
    </Container>
  )
}

export default FileUploader
