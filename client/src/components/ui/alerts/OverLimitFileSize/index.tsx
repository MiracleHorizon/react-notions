import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { CloseThickSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import handleOverLimitFileSize from 'utils/helpers/handleOverLimitFileSize'
import { appearDuration, transitionName } from './OverLimitFileSizeAlert.styles'
import * as Alert from './OverLimitFileSizeAlert.styles'

const OverLimitFileSizeAlert = () => {
  const { hideOverLimitFileSizeAlert } = useActions()
  const { isOpen, dest } = useTypedSelector(s => s.alerts.overLimitFileSize)
  const { isOpen: isSbOpen, width: sbWidth } = useTypedSelector(s => s.app.sidebar)
  const [searchParams] = useSearchParams()

  const handleHideAlert = () => hideOverLimitFileSizeAlert()

  return (
    <CSSTransition
      in={isOpen}
      timeout={appearDuration}
      classNames={transitionName}
      unmountOnExit
    >
      <Alert.Wrapper
        isNotionTaskOpen={Boolean(searchParams.get('p'))}
        isSbOpen={isSbOpen}
        sbWidth={sbWidth}
      >
        <Alert.Container>
          <Alert.Title>
            Your file is over the {handleOverLimitFileSize(dest)} MB limit.
          </Alert.Title>
          <Alert.CloseButton onClick={handleHideAlert}>
            <CloseThickSvg />
          </Alert.CloseButton>
        </Alert.Container>
      </Alert.Wrapper>
    </CSSTransition>
  )
}

export default OverLimitFileSizeAlert
