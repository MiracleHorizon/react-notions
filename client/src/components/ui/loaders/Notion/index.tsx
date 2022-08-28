import React from 'react'
import { MoonLoader } from 'react-spinners'
import useTypedSelector from 'hooks/useTypedSelector'
import Container from './NotionLoader.styles'

const NotionLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)
  const { page } = useTypedSelector(s => s.notions)

  return (
    <Container fullWidth={page.fullWidth} template={page.template}>
      <MoonLoader
        size={35}
        speedMultiplier={0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default NotionLoader
