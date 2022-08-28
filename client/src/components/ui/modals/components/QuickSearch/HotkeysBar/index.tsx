import React from 'react'

import { EnterSvg } from 'components/ui/svg'
import * as Bar from './QuickSearchHotkeysBar.styles'

const QuickSearchHotkeysBar = () => (
  <Bar.Wrapper>
    <Bar.Container>
      <Bar.Hotkey>
        <span>↑↓</span>
        <Bar.Title>Select</Bar.Title>
      </Bar.Hotkey>
      <Bar.Hotkey>
        <EnterSvg />
        <Bar.Title>Open</Bar.Title>
      </Bar.Hotkey>
    </Bar.Container>
  </Bar.Wrapper>
)

export default QuickSearchHotkeysBar
