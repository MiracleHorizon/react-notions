import React from 'react'
import { useTheme } from 'styled-components'
import { ITheme } from 'themes/theme.model'

const NotionsDescriptionSvg = () => {
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
        d='M7 4.667C6.69049 4.667 6.39366 4.54405 6.17481 4.32519C5.95595 4.10634 5.833 3.80951 5.833 3.5C5.833 3.19049 5.95595 2.89366 6.17481 2.67481C6.39366 2.45595 6.69049 2.333 7 2.333C7.30951 2.333 7.60634 2.45595 7.82519 2.67481C8.04405 2.89366 8.167 3.19049 8.167 3.5C8.167 3.80951 8.04405 4.10634 7.82519 4.32519C7.60634 4.54405 7.30951 4.667 7 4.667V4.667ZM8 11C8 11.2652 7.89464 11.5196 7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12C6.73478 12 6.48043 11.8946 6.29289 11.7071C6.10536 11.5196 6 11.2652 6 11V7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6C7.26522 6 7.51957 6.10536 7.70711 6.29289C7.89464 6.48043 8 6.73478 8 7V11ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0V0Z'
      />
    </svg>
  )
}

export default NotionsDescriptionSvg
