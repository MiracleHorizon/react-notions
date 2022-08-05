import React, { FC, useEffect, useRef } from 'react'

import ClearInputButton from 'components/ui/buttons/ClearInput'
import PropTypes from '../input.types'
import { Wrapper, Input } from './OutlineInput.styles'

const OutlineInput: FC<PropTypes> = ({
  inputMode,
  placeholder,
  renderFocusable,
  value,
  onChange,
  onClear,
}) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderFocusable && ref.current?.focus()
  }, [renderFocusable])

  return (
    <Wrapper>
      <Input
        data-input='outline'
        ref={ref}
        type={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value !== '' && onClear && (
        <ClearInputButton
          onClickAction={onClear}
          coords={{ right: 8, top: 8 }}
        />
      )}
    </Wrapper>
  )
}

export default OutlineInput
