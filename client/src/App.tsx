import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import AppLoader from 'components/ui/loaders/App'
import AppRouter from 'components/AppRouter'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { useLazyCheckAuthQuery } from 'services/user.api'
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
    </ThemeProvider>
  )
}

export default App
