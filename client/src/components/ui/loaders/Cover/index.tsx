import React from 'react'
import { MoonLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageCoverLoader.styles'

const PageCoverLoader = () => {
  const { theme } = useTypedSelector(s => s.app.themeState)
  const { page } = useTypedSelector(s => s.pages)

  return (
    <Container appTheme={theme} template={page.template}>
      <MoonLoader
        size={35}
        speedMultiplier={0.6}
        color={theme.colors['bg-app-loader']}
      />
    </Container>
  )
}

export default PageCoverLoader
