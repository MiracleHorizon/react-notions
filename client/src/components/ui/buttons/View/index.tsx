import React, { FC, memo } from 'react'

import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import PropTypes from './ViewButton.types'
import { PageView } from 'store/slices/app/app.types'
import * as Button from './ViewButton.styles'

const ViewButton: FC<PropTypes> = memo(({ title, StartSvg }) => {
  const { selectedView } = useTypedSelector(state => state.app)
  const { setView } = useActions()

  const handleSelectView = () => setView(title as PageView)

  return (
    <Button.Wrapper isActive={selectedView === title}>
      <Button.Container role='button' onClick={handleSelectView}>
        <Button.IconContainer data-btn='view-btn-icon'>
          <StartSvg />
        </Button.IconContainer>
        <Button.Title>{title}</Button.Title>
      </Button.Container>
    </Button.Wrapper>
  )
})

export default ViewButton
