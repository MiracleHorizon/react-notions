import React from 'react'

import OutlineButton from 'components/ui/buttons/Outline'
import AppTitle from 'components/Auth/AppTitle'
import { AppleLogoSvg, GoogleLogoSvg } from 'components/ui/svg'
import { OutlineButtonColorsEnum } from 'models/decor/outlineButton'
import * as Auth from './FirebaseAuth.styles'

const FirebaseAuth = () => {
  const handleGoogleAuth = () => {}

  const handleAppleAuth = () => {}

  return (
    <Auth.Wrapper>
      <AppTitle />
      <Auth.Container>
        <OutlineButton
          color={OutlineButtonColorsEnum.GRAY}
          title='Continue with Google'
          StartSvg={GoogleLogoSvg}
          onClickAction={handleGoogleAuth}
        />
        <OutlineButton
          disabled
          color={OutlineButtonColorsEnum.RED}
          title='Continue with Apple'
          StartSvg={AppleLogoSvg}
          onClickAction={handleAppleAuth}
        />
      </Auth.Container>
    </Auth.Wrapper>
  )
}

export default FirebaseAuth
