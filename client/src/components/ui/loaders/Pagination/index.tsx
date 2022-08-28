import React from 'react'
import { MoonLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import ITheme from 'themes/theme.model'
import Container from './PaginationLoader.styles'

const PaginationLoader = () => (
  <Container>
    <MoonLoader
      size={16}
      speedMultiplier={0.65}
      color={(useTheme() as ITheme).colors['bg-app-loader']}
    />
  </Container>
)

export default PaginationLoader
