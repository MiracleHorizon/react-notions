import React from 'react'
import { useTheme } from 'styled-components'
import { ITheme } from 'themes/theme.model'

const CheckSvg = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        fill: svgFills.check,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' />
    </svg>
  )
}

export default CheckSvg
