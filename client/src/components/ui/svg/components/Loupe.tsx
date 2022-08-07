import React from 'react'
import { useTheme } from 'styled-components'
import ITheme, { Theme } from 'themes/theme.model'

const LoupeSvg = () => {
  const { identifier, svgFills } = useTheme() as ITheme

  return (
    <svg
      viewBox='0 0 14 14'
      style={{
        width: 14,
        height: '100%',
        display: 'block',
        fill: identifier === Theme.DARK ? svgFills.secondary : svgFills.primary,
        flexShrink: 0,
        backfaceVisibility: 'hidden',
      }}
    >
      <path d='M5.92239093,0.540000021 C2.94055203,0.540000021 0.5,2.98052217 0.5,5.96238099 C0.5,8.9442199 2.94055203,11.384762 5.92239093,11.384762 C7.02329179,11.384762 8.05258749,11.0564678 8.91032559,10.4866744 L12.1460745,13.6802311 C12.5695899,14.1037465 13.2589477,14.1037465 13.6823635,13.6802311 C14.1058788,13.2567158 14.1058788,12.5730353 13.6823635,12.1495199 L10.4410368,8.95033558 C11.0107904,8.09259747 11.3447619,7.06329182 11.3447619,5.96238099 C11.3447619,2.98052217 8.90420992,0.540000021 5.92239093,0.540000021 Z M5.92239093,2.70895241 C7.7320027,2.70895241 9.17580956,4.15272939 9.17580956,5.96238099 C9.17580956,7.77201268 7.7320027,9.21581954 5.92239093,9.21581954 C4.11275925,9.21581954 2.66895239,7.77201268 2.66895239,5.96238099 C2.66895239,4.15272939 4.11275925,2.70895241 5.92239093,2.70895241 Z' />
    </svg>
  )
}

export default LoupeSvg
