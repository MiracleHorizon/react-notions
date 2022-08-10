import React, { FC } from 'react'
import PropTypes from './FileUploader.types'
import * as Uploader from './FileUploader.styles'

const FileUploader: FC<PropTypes> = ({ accept, action }) => (
  <Uploader.Label>
    <Uploader.Input type='file' accept={`${accept}/*`} onChange={action} />
  </Uploader.Label>
)

export default FileUploader
