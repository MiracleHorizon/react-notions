import React from 'react'
import { MoonLoader } from 'react-spinners'
import { useReadLocalStorage } from 'usehooks-ts'

import ITheme from 'themes/theme.model'
import Wrapper from './AppLoader.styles'

const AppLoader = () => {
  const theme = useReadLocalStorage('theme') as ITheme | undefined

  return (
    <Wrapper appTheme={theme}>
      <MoonLoader
        size={40}
        speedMultiplier={0.6}
        color={theme ? theme.colors['bg-app-loader'] : 'rgb(55, 53, 47)'}
      />
    </Wrapper>
  )
}
export default AppLoader
