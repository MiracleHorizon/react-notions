import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './CustomDecorLoader.styles'

const CustomDecorLoader: FC<{ size: 'lg' | 'md' }> = ({ size }) => {
  const { theme } = useTypedSelector(s => s.app.themeState)

  return (
    <Container size={size}>
      <ClipLoader
        size={35}
        speedMultiplier={0.55}
        color={theme.colors['bg-app-loader']}
      />
    </Container>
  )
}

export default CustomDecorLoader
