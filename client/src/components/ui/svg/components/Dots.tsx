import React from 'react'

const DotsSvg = () => (
  <svg
    viewBox='0 0 13 3'
    style={{
      width: 14,
      height: '100%',
      display: 'block',
      fill: 'rgb(155, 155, 155)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <g>
      <path d='M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z' />
      <path d='M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z' />
      <path d='M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z' />
    </g>
  </svg>
)

export default DotsSvg
