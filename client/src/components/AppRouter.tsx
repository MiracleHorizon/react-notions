import React, { useEffect } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import NotFoundPage from 'pages/NotFound'
import useTypedSelector from 'hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from 'router'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'

const AppRouter = () => {
  const { isAuth, user } = useTypedSelector(s => s.user)
  const redirectPageId = useSelector(selectRedirectPageId)
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.get('p')) return

    const isPathToNotionPage = pathname.split('/').length > 2

    if (!isPathToNotionPage) {
      if (isAuth && redirectPageId) navigate(`/workspace/${redirectPageId}`)
      if (!isAuth) navigate('/login')
    }

    // eslint-disable-next-line
  }, [isAuth, redirectPageId])

  useEffect(() => {
    if (isAuth && !user.isActivated) navigate('/activate')
  }, [isAuth, user.isActivated, navigate])

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      )}
    </>
  )
}

export default AppRouter
