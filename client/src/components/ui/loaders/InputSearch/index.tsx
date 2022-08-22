import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import Container from './InputSearchLoader.styles'
import ITheme from 'themes/theme.model'

const InputSearchLoader = () => (
  <Container>
    <ClipLoader
      size={14}
      speedMultiplier={0.7}
      color={(useTheme() as ITheme).colors['bg-app-loader']}
    />
  </Container>
)

export default InputSearchLoader
