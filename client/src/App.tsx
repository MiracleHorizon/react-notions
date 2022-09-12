import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import AppLoader from 'components/ui/loaders/App'
import AppRouter from 'components/AppRouter'
import ModalsOverlay from 'components/ui/modals/ModalsOverlay'
import AlertsOverlay from 'components/ui/alerts/AlertsOverlay'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useLazyCheckAuthQuery } from 'services/auth.api'
import Global from 'assets/styles/Global'
import AppWrapper from 'assets/styles/App.styles'

const App = () => {
  const { setAuthCheck } = useActions()
  const [checkAuth, { data, isLoading, isSuccess }] = useLazyCheckAuthQuery()
  const { theme } = useTypedSelector(s => s.app.themeState)

  useEffect(() => {
    if (localStorage.getItem('token')) checkAuth()
  }, [checkAuth])

  useEffect(() => {
    if (isSuccess && data) setAuthCheck(data)
  }, [isSuccess, data, setAuthCheck])

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppWrapper>{isLoading ? <AppLoader /> : <AppRouter />}</AppWrapper>
      <ModalsOverlay />
      <AlertsOverlay />
    </ThemeProvider>
  )
}

export default App
