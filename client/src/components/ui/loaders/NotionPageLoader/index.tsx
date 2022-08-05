import React from 'react'
import { MoonLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './NotionPageLoader.styles'

const NotionPageLoader = () => {
  const { theme } = useTypedSelector(state => state.app)

  return (
    <Container>
      <MoonLoader
        size={25}
        speedMultiplier={0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default NotionPageLoader
