import React from 'react'
import { MoonLoader } from 'react-spinners'
import { useReadLocalStorage } from 'usehooks-ts'

import Wrapper from './AppLoader.styles'
import { ThemeState } from 'store/slices/app/app.types'

const AppLoader = () => {
  const themeState = useReadLocalStorage('themeState') as ThemeState | undefined

  return (
    <Wrapper appTheme={themeState?.theme}>
      <MoonLoader
        size={40}
        speedMultiplier={0.6}
        color={
          themeState?.theme
            ? themeState?.theme.colors['bg-app-loader']
            : 'rgb(55, 53, 47)'
        }
      />
    </Wrapper>
  )
}
export default AppLoader
