import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import * as Routing from './AccountExistenceRouting.styles'

const AccountExistenceRouting = () => {
  const { pathname } = useLocation()

  const handlePath = () => {
    if (pathname === '/login') {
      return (
        <>
          <Routing.Container>
            <p>Don&apos;t have an account?</p>
            <Link to='/register'>Create React Notion account.</Link>
          </Routing.Container>
          <Routing.Container>
            <p>Forgot your password?</p>
            <Link to='/reset'>Reset in.</Link>
          </Routing.Container>
        </>
      )
    }

    if (pathname === '/register') {
      return (
        <Routing.Container>
          <p>Already have an account?</p>
          <Link to='/login'>Sign in.</Link>
        </Routing.Container>
      )
    }
  }

  return (
    <Routing.Wrapper>
      {handlePath()}
    </Routing.Wrapper>
  )
}

export default AccountExistenceRouting
