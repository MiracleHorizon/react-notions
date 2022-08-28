import React from 'react'
import { useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import { CSSTransition } from 'react-transition-group'

import useTypedSelector from 'hooks/useTypedSelector'
import { selectPageSaveLoading } from 'store/slices/app/app.selectors'
import { appearDuration } from './SavePageLoading.styles'
import * as Loading from './SavePageLoading.styles'

const SavePageLoading = () => (
  <CSSTransition
    in={useSelector(selectPageSaveLoading)}
    timeout={appearDuration}
    classNames='default'
    unmountOnExit
  >
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
  </CSSTransition>
)

export default SavePageLoading
