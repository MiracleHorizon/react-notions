import React from 'react'
import { useTheme } from 'styled-components'
import { ITheme } from 'themes/theme.model'

const CoverSvg = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: 14,
        height: 14,
        display: 'block',
        fill: svgFills.secondary,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z'
      />
    </svg>
  )
}
export default CoverSvg
