import * as React from 'react'
import { useTheme } from 'styled-components'
import { ITheme } from 'themes/theme.model'

const HamburgerMenu = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: 16,
        height: 16,
        display: 'block',
        fill: svgFills['hamburger-menu'],
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path d='M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z' />
    </svg>
  )
}

export default HamburgerMenu
