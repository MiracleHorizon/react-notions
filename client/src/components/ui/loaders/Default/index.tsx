import React, { FC } from 'react'

import { MoonLoader } from 'react-spinners'
import useTypedSelector from 'hooks/useTypedSelector'
import Container from './DefaultLoader'

const DefaultLoader: FC<{ isLarge?: boolean }> = ({ isLarge = true }) => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Container>
      <MoonLoader
        size={isLarge ? 35 : 20}
        speedMultiplier={0.6}
        color={theme.colors['bg-app-loader']}
      />
    </Container>
  )
}

export default DefaultLoader
