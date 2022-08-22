import React from 'react'
import { DotLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import ITheme from 'themes/theme.model'
import * as Exposition from './Exposition.styles'

const SearchErrorExposition = () => (
  <Exposition.Container>
    <Exposition.Title>Search error... Please try again.</Exposition.Title>
    <Exposition.Subtitle>
      If the error is not resolved, then reload the page.
    </Exposition.Subtitle>
    <DotLoader
      size={35}
      color={(useTheme() as ITheme).colors['text-primary']}
    />
  </Exposition.Container>
)

export default SearchErrorExposition
