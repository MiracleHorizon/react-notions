import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import useTypedSelector from 'hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from 'router'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'

const AppRouter = () => {
  const { isAuth } = useTypedSelector(s => s.user)
  const redirectPageId = useSelector(selectRedirectPageId)
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.get('p') || !isAuth) return
    // navigate(`/workspace/${redirectPageId}`)
    navigate(`/workspace/${redirectPageId}`)

    // if (pathname === `/`) {
    //   navigate(`/workspace/${redirectPageId}`)
    // }
    // eslint-disable-next-line
  }, [isAuth, redirectPageId])

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
          {/*<Route*/}
          {/*  path='*'*/}
          {/*  element={<Navigate to={`/workspace/${redirectPageId}`} />}*/}
          {/*/>*/}
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
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      )}
    </>
  )
}

export default AppRouter
