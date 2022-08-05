import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'router'
import useAuth from 'hooks/useAuth'

const AppRouter = () => {
  const { user } = useAuth()

  return (
    <>
      {user ? (
        <Routes>
          {privateRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path='*' element={<Navigate to='/workspace' />} />
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
// const lastVisitedPage = window.localStorage.getItem('lastVisitedPage')

// <Route
//   path='*'
//   element={<Navigate to={`/workspace/${lastVisitedPage}`} />}
// />

export default AppRouter
