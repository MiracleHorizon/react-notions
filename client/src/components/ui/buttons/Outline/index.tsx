import React, { FC } from 'react'
import { useTheme } from 'styled-components'

import stylesHandler from 'utils/stylesHandlers/outlineButton'
import ITheme from 'themes/theme.model'
import PropTypes from './OutlineButton.types'
import Button from './OutlineButton.styles'

const OutlineButton: FC<PropTypes> = ({
  title,
  onClickAction,
  StartSvg,
  color,
  disabled,
  children,
}) => (
  <Button
    role='button'
    data-btn='outline'
    disabled={disabled}
    onClick={onClickAction}
    {...stylesHandler(color, useTheme() as ITheme)}
  >
    {StartSvg && <StartSvg />}
    <p>{title}</p>
    {children}
  </Button>
)

export default OutlineButton
