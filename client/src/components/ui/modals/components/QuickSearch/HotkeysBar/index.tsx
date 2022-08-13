import React, { memo } from 'react'
import * as Bar from './QuickSearchHotkeysBar.styles'

const QuickSearchHotkeysBar = memo(() => (
  <Bar.Wrapper>
    <Bar.Container>
      <Bar.Hotkey>
        <span>↑↓</span>
        <Bar.Title>Select</Bar.Title>
      </Bar.Hotkey>
      <Bar.Hotkey>
        <span>↵</span>
        <Bar.Title>Open</Bar.Title>
      </Bar.Hotkey>
    </Bar.Container>
  </Bar.Wrapper>
))

export default QuickSearchHotkeysBar
