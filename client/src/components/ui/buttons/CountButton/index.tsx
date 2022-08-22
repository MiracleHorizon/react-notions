import React, { memo } from 'react'
import * as Button from './CountButton.styles'

const CountButton = memo(({ count }: { count: number }) => (
  <Button.Container role='button' data-btn='count'>
    <Button.Title>{count}</Button.Title>
  </Button.Container>
))

export default CountButton
