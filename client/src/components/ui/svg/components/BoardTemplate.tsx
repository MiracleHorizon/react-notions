import React from 'react'
import { useTheme } from 'styled-components'
import ITheme from 'themes/theme.model'

const BoardTemplateSvg = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: 16,
        height: '100%',
        display: 'block',
        fill: svgFills.primary,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path d='M12,1.5 L2,1.5 C1.72386,1.5 1.5,1.72386 1.5,2 L1.5,12 C1.5,12.2761 1.72386,12.5 2,12.5 L12,12.5 C12.2761,12.5 12.5,12.2761 12.5,12 L12.5,2 C12.5,1.72386 12.2761,1.5 12,1.5 Z M2,0 L12,0 C13.1046,0 14,0.895431 14,2 L14,12 C14,13.1046 13.1046,14 12,14 L2,14 C0.89543,14 0,13.1046 0,12 L0,2 C0,0.89543 0.895431,0 2,0 Z M3,3 L5,3 L5,9 L3,9 L3,3 Z M6,3 L8,3 L8,11 L6,11 L6,3 Z M9,3 L11,3 L11,7 L9,7 L9,3 Z' />
    </svg>
  )
}

export default BoardTemplateSvg
