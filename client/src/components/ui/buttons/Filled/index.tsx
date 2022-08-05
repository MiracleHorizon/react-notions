import React, { FC, memo } from 'react'

import PropTypes from './FilledButton.types'
import * as Button from './FilledButton.styles'

const FilledButton: FC<PropTypes> = memo(({ title, onClickAction, EndSvg }) => (
  <Button.Container data-btn='filled' onClick={onClickAction}>
    <Button.Title>{title}</Button.Title>
    {EndSvg && <EndSvg />}
  </Button.Container>
))

export default FilledButton
