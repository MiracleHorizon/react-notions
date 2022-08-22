import React from 'react'
import { ScaleLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import ITheme, { Theme } from 'themes/theme.model'
import Container from './TemplateViewLoader.styles'

const TemplateViewLoader = () => (
  <Container>
    <ScaleLoader
      height={40}
      margin={4}
      width={6}
      speedMultiplier={1.2}
      color={
        (useTheme() as ITheme).identifier === Theme.DARK
          ? 'rgba(255, 255, 255, 0.4)'
          : 'rgba(55, 53, 47, 0.6)'
      }
    />
  </Container>
)

export default TemplateViewLoader
