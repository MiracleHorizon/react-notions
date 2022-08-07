import React from 'react'
import { useTheme } from 'styled-components'
import ITheme from 'themes/theme.model'

const PageSvg = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 30 30'
      style={{
        width: 18,
        height: 18,
        display: 'block',
        fill: svgFills.page,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <g>
        <path d='M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z' />
      </g>
    </svg>
  )
}

export default PageSvg
