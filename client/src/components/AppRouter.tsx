import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import useTypedSelector from 'hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from 'router'
import { selectRedirectPageId } from 'store/slices/app/app.selectors'
import {
  selectCommonPages,
  selectFavoritePages,
} from 'store/slices/pages/pages.selectors'
import { StartOpenOptionEnum } from 'store/slices/app/app.types'

const AppRouter = () => {
  const { isAuth } = useTypedSelector(s => s.auth)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const commonPages = useSelector(selectCommonPages)
  const favoritePages = useSelector(selectFavoritePages)
  const redirectPageId = useSelector(selectRedirectPageId)
  const { startOpen, lastPageId } = useTypedSelector(s => s.app)

  useEffect(() => {
    if (pathname !== '/workspace') return

    switch (startOpen) {
      case StartOpenOptionEnum.LAST_PAGE:
        if (lastPageId) {
          navigate(`/workspace/${lastPageId}`)
        }
        break
      case StartOpenOptionEnum.TOP_SIDEBAR_PAGE:
        if (favoritePages.length > 0) {
          navigate(`/workspace/${favoritePages[0]._id}`)
        } else if (commonPages.length > 0) {
          navigate(`/workspace/${commonPages[0]._id}`)
        }
        break
    }
  }, [pathname, lastPageId, startOpen, commonPages, favoritePages, navigate])

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
          <Route
            path='*'
            element={<Navigate to={`/workspace/${redirectPageId}`} />}
          />
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
