import React from 'react'

import AppAppearance from './Options/Appearance'
import StartOpenOption from './Options/StartOpen'
import Divider from 'components/ui/Divider - Checked'
import * as Settings from './AppSettings.styles'

const AppSettings = () => (
  <Settings.Wrapper>
    <Settings.Title>App settings</Settings.Title>
    <Divider />
    <Settings.Container>
      <AppAppearance />
      <StartOpenOption />
    </Settings.Container>
  </Settings.Wrapper>
)

export default AppSettings
