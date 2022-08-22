import React from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageIconLoader.styles'

const PageIconLoader = () => {
  const { page } = useTypedSelector(s => s.pages)
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Container template={page.template} coverUrl={page.coverUrl}>
      <ClipLoader
        size={page.template === 'Notion' ? 45 : 18}
        speedMultiplier={0.6}
        color={theme.colors['bg-app-loader']}
      />
    </Container>
  )
}

export default PageIconLoader
