import React from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageIconLoader.styles'

const PageIconLoader = () => {
  const { theme } = useTypedSelector(state => state.app)
  const { page } = useTypedSelector(state => state.pages)

  if (!page) return null

  return (
    <Container template={page.template} coverUrl={page.coverUrl}>
      <ClipLoader
        size={page.template === 'Notion' ? 45 : 18}
        speedMultiplier={page.template === 'Notion' ? 0.7 : 0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default PageIconLoader
