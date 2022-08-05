import React, { FC } from 'react'

import { useAppDispatch } from 'store'
import PropTypes from './SwitchFontButton.types'
import * as Button from './SwitchFontButton.styles'

const SwitchFontButton: FC<PropTypes> = ({ _id, ...font }) => {
  const appDispatch = useAppDispatch()

  const handleSwitchFont = () => {
    // appDispatch(updatePage({_id, {font}}))
  }

  return (
    <Button.Wrapper role='button' onClick={handleSwitchFont}>
      <Button.Container>
        <Button.Abbreviation {...font}>Ag</Button.Abbreviation>
        <Button.Title>{font.fontFamily}</Button.Title>
      </Button.Container>
    </Button.Wrapper>
  )
}

export default SwitchFontButton
