import React from 'react'
import { useTheme } from 'styled-components'
import ITheme from 'themes/theme.model'

const FavoriteStarSvg = () => {
  const { svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 20 20'
      style={{
        width: 20,
        height: 20,
        display: 'block',
        fill: svgFills['fav-star'],
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path d='M4.77321 18.0645C5.14821 18.3457 5.60915 18.252 6.1404 17.8691L10.2029 14.8848L14.2576 17.8691C14.7888 18.252 15.2498 18.3457 15.6248 18.0645C15.992 17.7832 16.0701 17.3223 15.8591 16.7051L14.2576 11.9395L18.3513 9.00195C18.8826 8.62695 19.1013 8.20508 18.9529 7.76758C18.8045 7.33008 18.3904 7.11133 17.7341 7.11914L12.7185 7.1582L11.1873 2.36133C10.9841 1.73633 10.6638 1.40039 10.2029 1.40039C9.73415 1.40039 9.41383 1.73633 9.21071 2.36133L7.68727 7.1582L2.66383 7.11914C2.00758 7.11133 1.59352 7.33008 1.44508 7.75977C1.29665 8.20508 1.52321 8.62695 2.04665 9.00195L6.1404 11.9395L4.53883 16.7051C4.3279 17.3223 4.40602 17.7832 4.77321 18.0645Z' />
    </svg>
  )
}

export default FavoriteStarSvg
