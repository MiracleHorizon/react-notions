import React, { FC, useEffect, useRef } from 'react'

import ClearInputButton from 'components/ui/buttons/ClearInput'
import PropTypes from '../types'
import { Wrapper, Input } from './OutlineInput.styles'

const OutlineInput: FC<PropTypes> = ({
  value,
  onChange,
  onClear,
  inputMode,
  register,
  placeholder,
  renderFocusable,
  renderSelectable,
}) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderFocusable && ref.current?.focus()
    renderSelectable && ref.current?.select()
  }, [renderFocusable, renderSelectable])

  return (
    <Wrapper>
      <Input
        data-input='outline'
        ref={ref}
        type={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
      />
      {value !== '' && onClear && <ClearInputButton onClickAction={onClear} />}
    </Wrapper>
  )
}

export default OutlineInput
