import React from 'react'
import { MoonLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import ITheme from 'themes/theme.model'
import Container from './SidebarPagesListLoader.styles'

const SidebarPagesListLoader = () => (
  <Container>
    <MoonLoader
      size={25}
      speedMultiplier={0.65}
      color={(useTheme() as ITheme).colors['bg-app-loader']}
    />
  </Container>
)

export default SidebarPagesListLoader
