import React from 'react'
import { useTheme } from 'styled-components'
import { ITheme, Theme } from 'themes/theme.model'

const TrashSvg = () => {
  const { identifier, svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: 14,
        height: 14,
        display: 'block',
        fill: identifier === Theme.DARK ? svgFills.secondary : svgFills.primary,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path d='M13.5000308,3.23952 C13.5000308,4.55848168 11.9230308,12.0493 11.9230308,12.0782 C11.9230308,12.6571 9.73825083,14 7.04165083,14 C4.34504083,14 2.16025083,12.6571 2.16025083,12.0782 C2.16025083,12.0541 0.5,4.55799105 0.5,3.23952 C0.5,1.91780104 3.02713083,0 7.03525083,0 C11.0433308,0 13.5000308,1.9178004 13.5000308,3.23952 Z M7,2 C3.625,2 2.5,3.25 2.5,4 C2.5,4.75 3.625,6 7,6 C10.375,6 11.5,4.75 11.5,4 C11.5,3.25 10.375,2 7,2 Z' />
    </svg>
  )
}

export default TrashSvg
