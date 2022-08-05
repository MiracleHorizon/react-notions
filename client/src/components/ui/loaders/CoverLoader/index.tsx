import React from 'react'
import { MoonLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageCoverLoader.styles'

const PageCoverLoader = () => {
  const { theme } = useTypedSelector(state => state.app)
  const { page } = useTypedSelector(state => state.pages)

  if (!page) return null

  return (
    <Container appTheme={theme} template={page.template}>
      <MoonLoader
        size={35}
        speedMultiplier={0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default PageCoverLoader
