import React from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageDescriptionLoader.styles'

const PageDescriptionLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Container>
      <ClipLoader
        size={25}
        speedMultiplier={0.6}
        color={theme.colors['bg-app-loader']}
      />
    </Container>
  )
}

export default PageDescriptionLoader
