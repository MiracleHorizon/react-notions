import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { ITheme } from 'themes/theme.model'

const TriangleSvg: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 100 100'
      style={{
        width: '0.6em',
        height: '0.6em',
        display: 'block',
        fill: svgFills['page-item-triangle'],
        flexShrink: 0,
        backfaceVisibility: 'hidden',
        transition: 'transform 200ms ease-out',
        transform: `rotateZ(${isOpen ? 180 : 90}deg)`,
        opacity: 1,
      }}
    >
      <polygon points='5.9,88.2 50,11.8 94.1,88.2 ' />
    </svg>
  )
}

export default TriangleSvg
