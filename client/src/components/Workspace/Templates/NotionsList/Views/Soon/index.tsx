import React from 'react'
import { useTheme } from 'styled-components'
import { ClockLoader } from 'react-spinners'
import { ITheme } from 'themes/theme.model'
import * as Soon from './SoonTitle.styles'

const SoonTitle = () => {
  const { colors } = useTheme() as ITheme

  return (
    <Soon.Wrapper>
      <Soon.Container>
        <ClockLoader
          color={colors['text-primary']}
          speedMultiplier={0.7}
          size={35}
        />
        <Soon.Title>Soon...</Soon.Title>
      </Soon.Container>
    </Soon.Wrapper>
  )
}

export default SoonTitle
