import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import Container from './CustomDecorLoader.styles'

const CustomDecorLoader: FC<{ size: 'lg' | 'md' }> = ({ size }) => {
  const { theme } = useTypedSelector(state => state.app)

  return (
    <Container size={size}>
      <ClipLoader
        size={35}
        speedMultiplier={0.55}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Container>
  )
}

export default CustomDecorLoader
