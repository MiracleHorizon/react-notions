import React, { FC, memo } from 'react'

import * as Button from './CountButton.styles'

const CountButton: FC<{ count: number }> = memo(({ count }) => (
  <Button.Container role='button' data-btn='count'>
    <Button.Title>{count}</Button.Title>
  </Button.Container>
))

export default CountButton
