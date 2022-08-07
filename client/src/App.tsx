import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppLoader from 'components/ui/loaders/AppLoader'
import AppRouter from 'components/AppRouter'
import useAuth from 'hooks/useAuth'
import useTypedSelector from 'hooks/useTypedSelector'
import Global from 'styles/Global'
import AppWrapper from 'styles/App.styles'

const App = () => {
  const { loading } = useAuth()

  return (
    <ThemeProvider theme={useTypedSelector(state => state.app.theme)}>
      <Global />
      <AppWrapper>{loading ? <AppLoader /> : <AppRouter />}</AppWrapper>
    </ThemeProvider>
  )
}

export default App
