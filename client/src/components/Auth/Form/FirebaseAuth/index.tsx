import React, { useContext } from 'react'
import firebase from 'firebase/compat/app'

import OutlineButton from 'components/ui/buttons/Outline'
import AppTitle from 'components/Auth/AppTitle'
import { GoogleLogoSvg, AppleLogoSvg } from 'components/ui/svg'
import { AuthContext } from 'context/AuthContext'
import * as Auth from './FirebaseAuth.styles'

const FirebaseAuth = () => {
  const authCtx = useContext(AuthContext)

  const handleGoogleAuth = async () => {
    if (!authCtx) return

    const provider = new firebase.auth.GoogleAuthProvider()
    await authCtx.fbAuth.signInWithPopup(provider)
  }

  const handleAppleAuth = async () => {
    if (!authCtx) return
  }

  return (
    <Auth.Wrapper>
      <AppTitle />
      <Auth.Container>
        <OutlineButton
          color='gray'
          title='Continue with Google'
          StartSvg={GoogleLogoSvg}
          onClickAction={handleGoogleAuth}
        />
        <OutlineButton
          disabled
          color='gray'
          title='Continue with Apple'
          StartSvg={AppleLogoSvg}
          onClickAction={handleAppleAuth}
        />
      </Auth.Container>
    </Auth.Wrapper>
  )
}

export default FirebaseAuth
