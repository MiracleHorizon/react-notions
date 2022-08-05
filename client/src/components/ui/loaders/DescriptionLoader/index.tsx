import React from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './PageDescriptionLoader.styles'

const PageDescriptionLoader = () => {
  const { theme } = useTypedSelector(state => state.app)
  const { page } = useTypedSelector(state => state.pages)

  if (!page) return null

  return (
    <Container>
      <ClipLoader
        size={25}
        speedMultiplier={0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default PageDescriptionLoader
