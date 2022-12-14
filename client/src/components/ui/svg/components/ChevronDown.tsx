import React from 'react'
import { useTheme } from 'styled-components'
import ITheme from 'themes/theme.model'

const ChevronDownSvg = () => (
  <svg
    viewBox='0 0 30 30'
    data-svg='chevron'
    style={{
      width: 10,
      height: '100%',
      display: 'block',
      fill: (useTheme() as ITheme).svgFills['chevron-down'],
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <polygon points='15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 ' />
  </svg>
)

export default ChevronDownSvg
