import React from 'react'
import { MoonLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './NotionTaskContentLoader.styles'

const NotionTaskContentLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Container>
      <MoonLoader
        size={35}
        speedMultiplier={0.55}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default NotionTaskContentLoader
