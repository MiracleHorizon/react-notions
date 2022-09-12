import React, { FC, useEffect, useRef } from 'react'

import PropTypes from '../types'
import Input from './QuickSearchInput.styles'

const QuickSearchInput: FC<PropTypes> = params => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => ref.current?.focus(), [])

  return <Input ref={ref} {...params} />
}

export default QuickSearchInput
