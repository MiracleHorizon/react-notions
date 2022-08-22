import React from 'react'
import { MoonLoader } from 'react-spinners'

import useTypedSelector from 'hooks/useTypedSelector'
import * as Loading from './SavePageLoading.styles'

const SavePageLoading = () => (
  <Loading.Container>
    <MoonLoader
      size={14}
      speedMultiplier={0.5}
      color={
        useTypedSelector(s => s.app.themeState).theme.colors['bg-app-loader']
      }
    />
    <Loading.Title>Saving...</Loading.Title>
  </Loading.Container>
)

export default SavePageLoading
