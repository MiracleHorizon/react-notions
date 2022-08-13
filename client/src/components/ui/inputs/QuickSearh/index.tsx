import React, { FC, useEffect, useRef } from 'react'

import InputPropTypes from '../input.types'
import Input from './QuickSearchInput.styles'

const QuickSearchInput: FC<InputPropTypes> = params => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => ref.current?.focus(), [])

  return <Input ref={ref} inputMode='text' {...params} />
}

export default QuickSearchInput
